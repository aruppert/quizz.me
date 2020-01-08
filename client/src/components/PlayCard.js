import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import { Link } from 'react-router-dom';

const background = props => css`
  background: linear-gradient(to right, ${props.theme.colors.card2}, ${props.theme.colors.card1});
`;

const PlayContainer = styled(Link)`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  width: 160px;
  height: 220px;
  ${background};
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  text-decoration: none;
`;

const TextWrapper = styled.div`
  margin: 20px;
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;

export default function PlayCard() {
  return (
    <PlayContainer to="/choose">
      <TextWrapper>Play a single- or multiplayer game</TextWrapper>
      <Dice />
    </PlayContainer>
  );
}
