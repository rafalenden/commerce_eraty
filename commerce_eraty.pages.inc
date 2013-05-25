<?php

/**
 * @file
 * Includes only functions used in menu pages provided by module.
 */

/**
 * Handle response (by URL query) from eRaty website.
 */
function commerce_eraty_handle_response() {
  $order_id = arg(2);
  $response_status = arg(3);
  $payment_redirect_key = arg(4);
  $order = commerce_order_load($order_id);

  if (empty($order)) {
    drupal_set_message(t('Wrong order ID in URL.'), 'error');
    watchdog('commerce_eraty', 'Wrong order ID in URL.');
    drupal_goto('<front>');
  }
  elseif ($payment_redirect_key != $order->data['payment_redirect_key']) {
    drupal_set_message(t('Payment redirect key is wrong.'), 'error');
    watchdog('commerce_eraty', 'Payment redirect key is wrong.');
    drupal_goto(commerce_checkout_order_uri($order));
  }

  $payment_method_instance_id = $order->data['payment_method'];
  $payment_method = commerce_payment_method_instance_load($payment_method_instance_id);

  $application_number = isset($_GET['id_wniosku']) ? check_plain($_GET['id_wniosku']) : 0;

  $transaction = commerce_payment_transaction_new('eraty', $order_id);
  $transaction->instance_id = $payment_method['instance_id'];
  $transaction->amount = 0;
  $transaction->currency_code = 'PL';

  if ($response_status == 'success') {
    if (!empty($application_number)) {
      $transaction->message = t('The buyer sent a request for an installment loan. Application number: @number', array('@number' => $application_number));
      $transaction->status = COMMERCE_PAYMENT_STATUS_PENDING;
      $transaction->remote_id = $application_number;
    }
    else {
      drupal_set_message(t('Application number is incorrect.'), 'error');
      watchdog('commerce_eraty', 'Application number is incorrect.');
      drupal_goto(commerce_checkout_order_uri($order));
    }
  }
  elseif ($response_status == 'cancel') {
    drupal_set_message(t('You canceled application for a loan installment.'), 'error');
    $transaction->status = COMMERCE_PAYMENT_STATUS_CANCELED;
  }

  commerce_payment_transaction_save($transaction);
  commerce_payment_redirect_pane_next_page($order);
  drupal_goto(commerce_checkout_order_uri($order));
}
