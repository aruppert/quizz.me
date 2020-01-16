import { css } from '@emotion/core';

export const linearGradientBoxShadow = props => css`
  background: linear-gradient(to right, ${props.theme.colors.card2}, ${props.theme.colors.card1});
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const flexColumnCenter = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const flexRowWrapCenter = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const TextCenterColorOneMargin20 = props => css`
  margin: 20px;
  text-align: center;
  align-self: center;
  color: ${props.theme.colors.text};
`;

export const noBorderOutlineBGTextDeco = css`
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
`;
