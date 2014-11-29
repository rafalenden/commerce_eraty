<?php
/**
 * Available variables:
 * - $shop_number
 * - $shop_variant
 * - $total_cost
 * - $link_url
 * - $image_src
 *
 * @see template_preprocess_commerce_eraty_calculate_button()
 */
?>

<?php if ($total_cost >= 100): ?>
<div id="commerce-eraty-calculate-button" class="form-actions commerce-eraty-button">
  <a href="<?php print $link_url; ?>">
    <img src="<?php print $image_src; ?>"
         alt="<?php print t('Calculate the amount of installment loan'); ?>"
         title="<?php print t('Calculate the amount of installment loan'); ?>" />
  </a>
</div>
<?php endif; ?>
