var $ = require('jquery');

var $nav = $('.js-sticky-nav');
/* README: Subtracting one pixel to prevent Firefox bug */
var originalNavigationHeight = $nav.height() - 1;

/* Calculates what scrollTop should be in order to
 * show an anchor properly under the header
 * and lined up with the nav like the H1
 */
module.exports = function calculateAnchorPosition (hash) {
  var anchor        = $('#' + hash);

  if (anchor.length === 0) {
    return 0;
  }

  //anchor should now align with first item inside nav
  return Math.ceil(anchor.offset().top - originalNavigationHeight);
};
