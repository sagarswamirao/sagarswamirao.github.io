/* eslint-disable no-var */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// gatsby-browser.js

import $ from 'jquery';

export const onClientEntry = () => {
  document.addEventListener('DOMContentLoaded', function() {
    var originalBGplaypen = $('#___gatsby').css('background-color'),
      x,
      y,
      xy,
      bgWebKit,
      bgMoz,
      lightColor = 'rgba(100, 255, 218, 0.2)',
      gradientSize = 100;

    // Basic Demo
    $('#___gatsby')
      .mousemove(function(e) {
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
        xy = x + ' ' + y;

        bgWebKit =
          '-webkit-gradient(radial, ' +
          xy +
          ', 0, ' +
          xy +
          ', ' +
          gradientSize +
          ', from(' +
          lightColor +
          '), to(rgba(255,255,255,0.0))), ' +
          originalBGplaypen;
        bgMoz =
          '-moz-radial-gradient(' +
          x +
          'px ' +
          y +
          'px 45deg, circle, ' +
          lightColor +
          ' 0%, ' +
          originalBGplaypen +
          ' ' +
          gradientSize +
          'px)';

        $(this).css({ background: bgWebKit }).css({ background: bgMoz });
      })
      .mouseleave(function() {
        $(this).css({ background: originalBGplaypen });
      });
  });
};
