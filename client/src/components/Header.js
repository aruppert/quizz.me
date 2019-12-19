import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo.png';
import paint_palette from '../assets/paint_palette.svg';

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 0px 0px 25px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const HeadLogo = styled.img`
  width: 48px;
  height: 53px;
`;

const HeadText = styled.h1`
  all: unset;
  color: ${props => props.theme.colors.text1};
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: bold;
`;

const HeadButton = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 24px;
  height: 24px;
`;

export default function Header() {
  return (
    <HeaderBar>
      <HeadLogo src={logo} />
      <HeadText>QuiZZ.me</HeadText>
      <HeadButton>
        <img src={paint_palette} />
      </HeadButton>
    </HeaderBar>
  );
}
