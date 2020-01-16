import React from 'react';
import styled from '@emotion/styled';
import ColorPalette from '../../icons/ColorPalette';
import Logo from '../../icons/Logo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  linearGradientBoxShadow,
  noBorderOutlineBGTextDeco,
  flexRowWrapCenter
} from '../../styles/General';

const HeaderBar = styled.div`
  display: flex;
  ${linearGradientBoxShadow};
  /* position: absolute;
  top: 0px; */
  width: 100%;
  height: 70px;
  border-radius: 0px 0px 25px;
  border-bottom: 3px solid ${props => props.theme.colors.icon1};
  border-right: 3px solid ${props => props.theme.colors.icon1};
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  ${flexRowWrapCenter};
  margin: auto;
  justify-content: space-around;
  width: 375px;
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
  width: 50px;
  height: 50px;
`;

const HeaderLink = styled(Link)``;

export default function Header({ onThemeButtonClick }) {
  return (
    <HeaderBar>
      <HeaderContainer>
        <HeaderLink to="/">
          <Logo />
        </HeaderLink>
        <HeadText>quizz.Me</HeadText>

        <HeadButton onClick={onThemeButtonClick()}>
          <ColorPalette />
        </HeadButton>
      </HeaderContainer>
    </HeaderBar>
  );
}

Header.propTypes = {
  onThemeButtonClick: PropTypes.func
};
