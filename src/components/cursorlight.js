/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

const CursorLight = () => {
  const [originalBGplaypen, setOriginalBGplaypen] = useState('');
  const [lightColor, setLightColor] = useState('rgba(100, 255, 218, 0.2)');
  const [gradientSize, setGradientSize] = useState(100);

  useEffect(() => {
    setOriginalBGplaypen(
      window.getComputedStyle(document.getElementById('___gatsby')).backgroundColor,
    );

    const handleMouseMove = e => {
      const x = e.pageX - e.currentTarget.offsetLeft;
      const y = e.pageY - e.currentTarget.offsetTop;
      const xy = x + ' ' + y;

      const bgWebKit =
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
      const bgMoz =
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

      e.currentTarget.style.background = bgWebKit;
      e.currentTarget.style.background = bgMoz;
    };

    const handleMouseLeave = e => {
      e.currentTarget.style.background = originalBGplaypen;
    };

    const gatsbyElement = document.getElementById('___gatsby');
    if (gatsbyElement) {
      gatsbyElement.addEventListener('mousemove', handleMouseMove);
      gatsbyElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (gatsbyElement) {
        gatsbyElement.removeEventListener('mousemove', handleMouseMove);
        gatsbyElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [originalBGplaypen, lightColor, gradientSize]);
  return null;
};

export default CursorLight;
