var $ = require('jquery');
var calculateAnchorPosition = require('./calculate-anchor-position');
var $nav = $('.js-sticky-nav');
var STICKY_CLASS_NAME = 'is-sticky-nav';

$('.js-sticky-nav').on('click', 'a', function(e) {
  var hashLocation  = $(this).attr('href').split('#')[1]; // long url splitting
  var scrollTopPos  = calculateAnchorPosition(hashLocation);

  //if anchor doesn't exist on the page, or calc fails
  //then exit gracefully
  if (scrollTopPos === 0) {
    return true;
  }
  
  e.preventDefault();

  /* Firefox needs html, others need body */
  $('body,html').animate({
    scrollTop: scrollTopPos
  }, {
    duration: 200,
    start: function () {
      var newHash = '#' + hashLocation;

      //using pushState is easiest way to prevent double jumps
      if(history && history.pushState && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      } else if (window.location.hash !== newHash) {
        window.location.hash = newHash;
      }
    },
    done: function () {
      //if keyboard was used, update keyboard focus to section
      var link    = $(e.target);
      var section = $('#' + hashLocation);

      if (link.data('keypress') === true) {
        link.removeData('keypress');
        section.attr('tabindex','0');
        section.focus();
      }
    }
  });
});


module.exports = function stickyNav (event) {

  var originalNavigationHeight = $nav.outerHeight(true);
  var bannerHeight = window.innerHeight;
  var scrollPositionY = window.scrollY + originalNavigationHeight;

  if (scrollPositionY > bannerHeight) {
    $nav.addClass(STICKY_CLASS_NAME);
    $('body').css('paddingTop', originalNavigationHeight);
  } else {
    $nav.removeClass(STICKY_CLASS_NAME);
    $('body').css('paddingTop', 0);
  }

}