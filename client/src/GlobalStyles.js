import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          background: grey;
          height: 100vh;
          width: 100vw;
        }
      `}
    />
  );
}

export default GlobalStyles;
