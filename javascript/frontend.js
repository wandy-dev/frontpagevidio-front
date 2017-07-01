$(document).ready(function() {
  $('#autoplay').click(function() {
    var checkbox = $('#autoplay-input');
    checkbox.trigger('click');
    if (booleanValue() == true) {
      if (player.getPlayerState() == 0) {
        setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
      };
    };
  });
  // Store what page to load next
  nextpage = 50;

  $('#load-more').click(function(event) {
    event.preventDefault();
    $('#load-more').html('<i class="fa fa-refresh fa-spin fa-lg fa-fw"></i>')
    getVideos('https://www.reddit.com/r/videos/.json?jsonp&limit=' + nextpage);
    nextpage += 25;
  });

  (function($) {
    $.fn.flash_message = function(options) {

      options = $.extend({
        text: 'Done',
        time: 1500,
        how: 'before',
        class_name: ''
      }, options);

      return $(this).each(function() {
        if( $(this).parent().find('.flash_message').get(0) )
          return;

        var message = $('<span />', {
          'class': 'flash_message ' + options.class_name,
          text: options.text
        }).hide().fadeIn('fast');

        $(this)[options.how](message);

        message.delay(options.time).fadeOut('fast', function() {
          setTimeout($(this).remove(), 80);
        });

      });
    };
  })(jQuery);

  (function($) {
    $.fn.goTo = function() {
      $('html, body').animate({
        scrollTop: $(this).offset().top + 'px'
      }, 'fast');
      return this; // for chaining...
    }
  })(jQuery);

});

var scrollToElement = function(element) {
  $(element).goTo()
}

var flashError = function(message) {
  $('#status-area').flash_message({
    text: message,
    how: 'append'
  });
};

