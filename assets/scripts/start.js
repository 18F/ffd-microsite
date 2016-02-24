var $ = require('jquery');
var stickyNav = require('./components/sticky-nav');

function resizeHandler (event) {
  stickyNav(event);
}

function scrollHandler (event) {
  stickyNav(event);
}

$(window).on('scroll', scrollHandler);
$(window).on('resize', resizeHandler);

stickyNav(event);
