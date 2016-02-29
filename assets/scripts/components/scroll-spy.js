'use strict';

var $ = require('jquery');
var $nav = $('.js-sticky-nav');
var originalNavigationHeight = $nav.outerHeight(true);

function calculateSections ( $links ) {
  // Get all links & sections and serialize them
  //
  return [].map.call( $links, function (el) {
    var $link = $(el);
    var $section = $($link.attr('href'));
    var topOffset = $section.position().top - originalNavigationHeight;
    var bottomOffset = $section.height() + topOffset;
    return {
      $link: $link,
      $el: $section,
      topOffset: topOffset,
      bottomOffset: bottomOffset,
    };
  } );
}

module.exports = function scrollSpy () {

  var $links = $('#js-scroll-spy').find('a[href^="#"]');
  var sections = calculateSections($links);

  var scrollY = $(window).scrollTop();

  var remainingHeight = $(document).height() - scrollY - window.innerHeight;

  $links.removeClass('is-active');

  sections.forEach(function (section, index) {

    if (section.topOffset <= scrollY &&
        section.bottomOffset >= scrollY) {
      section.$link.addClass('is-active');
    }

    if (remainingHeight < window.innerHeight * 0.25) {
      $links.removeClass('is-active');
      sections[ sections.length - 1 ].$link.addClass('is-active');
    }

  });

};
