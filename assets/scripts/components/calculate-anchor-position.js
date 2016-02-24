var $ = require('jquery');

var $nav = $('.js-sticky-nav');
var originalNavigationHeight = $nav.outerHeight(true);

/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
module.exports = function calculateAnchorPosition (hash) {
  var anchor        = $('#' + hash);
  var topOffset     = 0;
  var navPadding    = parseInt($('.js-sticky-nav').css('padding-top'), 10);
  var anchorPadding = parseInt(anchor.css('padding-top'), 10);

  if (anchor.length === 0) {
    return topOffset;
  }
  
  //start with the height of the header
  topOffset = originalNavigationHeight + parseInt(anchor.css('padding-top'), 10);
  //subtract the diffence in padding between nav top and anchor
  topOffset = topOffset - (anchorPadding - navPadding);
  
  //anchor should now align with first item inside nav
  return anchor.offset().top - topOffset;
};