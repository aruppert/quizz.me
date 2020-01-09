import React from 'react';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import { Link } from 'react-router-dom';
import {
  linearGradientBoxShadow,
  flexColumnCenter,
  TextCenterColorOneMargin20
} from '../styles/General';

const PlayContainer = styled(Link)`
  ${linearGradientBoxShadow};
  ${flexColumnCenter};
  justify-content: space-evenly;
  width: 160px;
  height: 220px;
  border-radius: 25px 0px;
  text-decoration: none;
`;

const TextWrapper = styled.div`
  ${TextCenterColorOneMargin20};
`;

export default function PlayCard() {
  return (
    <PlayContainer to="/choose">
      <TextWrapper>Play a single- or multiplayer game</TextWrapper>
      <Dice />
    </PlayContainer>
  );
}
