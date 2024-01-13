/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
import React, { useEffect } from 'react';

const CursorLight = () => {
  let originalBGplaypen = getComputedStyle(document.body).backgroundColor;
  let x, y, xy;

  const handleMouseMove = e => {
    x = e.pageX;
    y = e.pageY;
    xy = x + ' ' + y;

    document.body.style.backgroundImage = `
      radial-gradient(circle at ${xy}, rgba(100, 255, 218, 0.2) 0%, rgba(255, 255, 255, 0.0) 100%),
      ${originalBGplaypen}`;
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundImage = originalBGplaypen;
  };

  document.body.addEventListener('mousemove', handleMouseMove);
  document.body.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    document.body.removeEventListener('mousemove', handleMouseMove);
    document.body.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export default CursorLight;
