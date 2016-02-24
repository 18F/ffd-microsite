var $ = require('jquery');
var $nav = $('.js-sticky-nav');
var STICKY_CLASS_NAME = 'is-sticky-nav';

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