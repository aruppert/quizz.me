import React from 'react';
import styled from '@emotion/styled';
import ColorPalette from '../icons/ColorPalette';
import Logo from '../icons/Logo';
import { Link } from 'react-router-dom';
import { linearGradientBoxShadow, noBorderOutlineBGTextDeco } from '../styles/General';

const HeaderBar = styled(Link)`
  ${linearGradientBoxShadow};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 70px;
  border-radius: 0px 0px 25px;
  border-bottom: 3px solid ${props => props.theme.colors.icon1};
  border-right: 3px solid ${props => props.theme.colors.icon1};
  text-decoration: none;
`;

const HeadText = styled.h1`
  all: unset;
  color: ${props => props.theme.colors.text1};
  font-family: 'Leckerli One', cursive;
  font-size: 35px;
  font-weight: bold;
`;

const HeadButton = styled.button`
  ${noBorderOutlineBGTextDeco};
  width: 24px;
  height: 24px;
`;

export default function Header() {
  return (
    <HeaderBar to="/">
      <Logo />
      <HeadText>quizz.Me</HeadText>
      <HeadButton>
        <ColorPalette />
      </HeadButton>
    </HeaderBar>
  );
}
