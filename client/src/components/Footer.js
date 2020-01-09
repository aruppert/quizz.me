import React from 'react';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import AddQuestion from '../icons/AddQuestion';
import ButtonLink from './ButtonLink';
import Highscore from '../icons/HighScore';
import {
  linearGradientBoxShadow,
  flexRowWrapCenter,
  noBorderOutlineBGTextDeco
} from '../styles/General';

const FooterBar = styled.div`
  ${linearGradientBoxShadow};
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0px;
  position: absolute;
  width: 100vw;
  height: 70px;
  border-radius: 25px 0px 0px;
  border-top: 3px solid ${props => props.theme.colors.icon1};
  border-left: 3px solid ${props => props.theme.colors.icon1};
`;

const FooterButton = styled(ButtonLink)`
  ${flexRowWrapCenter};
  width: 1fr;
  height: 100%;
  flex-grow: 1;
`;

const DiceButton = styled(ButtonLink)`
  ${flexRowWrapCenter};
  ${noBorderOutlineBGTextDeco};
  ${linearGradientBoxShadow};
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

const DiceButtonBackground = styled.div`
  ${flexRowWrapCenter};
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.background};
  border-radius: 50%;
  margin-bottom: 20px;
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterButton to="/choose">
        <Highscore />
      </FooterButton>
      <DiceButtonBackground>
        <DiceButton to="/choose">
          <Dice />
        </DiceButton>
      </DiceButtonBackground>
      <FooterButton to="/privacy">
        <AddQuestion />
      </FooterButton>
    </FooterBar>
  );
}
