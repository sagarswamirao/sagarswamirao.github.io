/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  // Add the jQuery script to the head
  setHeadComponents([
    <script
      key="jquery-script"
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous"></script>,
    // Add the Google Tag Manager script to the head
    <script
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PBJDNFCB');`,
      }}
    />,
  ]);

  // Add the Google Tag Manager (noscript) iframe to the post body
  setPostBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PBJDNFCB"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}></iframe>
    </noscript>,
  ]);
};
