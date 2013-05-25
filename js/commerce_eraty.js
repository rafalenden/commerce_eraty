(function($, Drupal) {

  Drupal.behaviors.commerce_eraty = {
    attach: function(context, settings) {
      var button = $('#commerce-eraty-calculate-button a', context).unbind('click').bind('click', function() {
        Drupal.theme(
          'commerce_eraty_popup',
          button.find('img').attr('title'),
          button.attr('href')
        );

        return false;
      });

      $('#commerce-eraty-how-to-buy-button a, #commerce-eraty-rules + label a', context).attr('target', '_blank');
    }
  };

  Drupal.theme.prototype.commerce_eraty_popup = function(title, url) {
    var popup = '';
    popup += '<div id="commerce-eraty-popup">';
    popup += '  <iframe src="' + url + '" width="100%" height="99%" />';
    popup += '</div>';
    $(popup).dialog({
      title: title,
      modal: true,
      width: 690,
      height: 500
    });
  };

})(jQuery, Drupal);
