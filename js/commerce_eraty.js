(function($, Drupal) {

  Drupal.behaviors.commerce_eraty = {
    attach: function(context, settings) {
//    $('.commerce-eraty-calculate-button a').click(function() {
//      var w = 640;
//      var h = 500;
//      var left = (screen.width / 2) - (w / 2);
//      var top = (screen.height / 2) - (h / 2);
//      window.open($(this).attr('href'), '', 'width='+w+',height='+h+',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no,left=' + left + ',top=' + top);
//      return false;
//    })

      // Requires jQuery 1.7+
      //$('.commerce-eraty-calculate-button a').on('click', function() {
      $('.commerce-eraty-calculate-button a', context).unbind('click').bind('click', function() {
        Drupal.theme('commerce_eraty_popup', $(this).find('img').attr('title'), $(this).attr('href'));
        return false;
      });
      
      $('.commerce-eraty-how-to-buy-button a', context).attr('target', '_blank');
//      $('.commerce-eraty-how-to-buy-button a', context).unbind('click').bind('click', function() {
//        window.open($(this).attr('href'), '', 'width=800,height=600,directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');
//        return false;
//      });
    }
  }

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

