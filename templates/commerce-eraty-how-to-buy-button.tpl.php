<?php
/**
 * Available variables:
 * - $link_url
 * - $image_src
 *
 * @see template_preprocess_commerce_eraty_how_to_buy_button()
 */
?>

<div id="commerce-eraty-how-to-buy-button" class="commerce-eraty-button">
  <a href="<?php print $link_url; ?>">
    <img src="<?php print $image_src; ?>"
         alt="<?php print t('How to buy with eRaty?'); ?>"
         title="<?php print t('How to buy with eRaty?'); ?>" />
  </a>
</div>
