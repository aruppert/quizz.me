import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: 'Gilroy';
          src: url('./fonts/gilroy-extrabold.eot');
          src: url('./fonts/gilroy-extrabold.eot?#iefix') format('embedded-opentype'),
            url('./fonts/gilroy-extrabold.otf') format('opentype'),
            url('./fonts/gilroy-extrabold.svg') format('svg'),
            url('./fonts/gilroy-extrabold.ttf') format('truetype'),
            url('./fonts/gilroy-extrabold.woff') format('woff'),
            url('./fonts/gilroy-extrabold.woff2') format('woff2');
        }
        body {
          font-family: 'Gilroy';
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          height: 100vh;
          width: 100vw;
        }
      `}
    />
  );
}

export default GlobalStyles;
