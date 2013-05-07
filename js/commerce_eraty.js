(function($, Drupal) {

  Drupal.behaviors.commerce_eraty = {
    attach: function(context, settings) {
      $('.commerce-eraty-calculate-button a', context).unbind('click').bind('click', function() {
        Drupal.theme('commerce_eraty_popup', $(this).find('img').attr('title'), $(this).attr('href'));
        return false;
      });
      
      $('.commerce-eraty-how-to-buy-button a, .commerce-eraty-rules + label a', context).attr('target', '_blank');
    }
  };

  Drupal.theme.prototype.commerce_eraty_popup = function(title, url) {
    var html = '';
    html += '<div class="commerce-eraty-popup">';
    html += '  <iframe src="' + url + '" width="100%" height="99%" />';
    html += '</div>';
    $(html).dialog({
      title: title,
      modal: true,
      width: 690,
      height: 500
    });
  };

})(jQuery, Drupal);
