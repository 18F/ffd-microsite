var $ = require('jquery');
var stickyNav = require('./components/sticky-nav');
var scrollSpy = require('./components/scroll-spy');

function resizeHandler (event) {
  stickyNav(event);
  scrollSpy();
}

function scrollHandler (event) {
  stickyNav(event);
  scrollSpy();
}

$(window).on('scroll', scrollHandler);
$(window).on('resize', resizeHandler);

stickyNav(event);
scrollSpy();
