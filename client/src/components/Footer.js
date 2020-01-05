import React from 'react';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import AddQuestion from '../icons/AddQuestion';
import ButtonLink from './ButtonLink';
import Highscore from '../icons/HighScore';

const FooterBar = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 70px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 0px;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const FooterButton = styled(ButtonLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1fr;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiceButton = styled(ButtonLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 50%;
  outline: none;
  border: none;
`;

const DiceButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      <FooterButton to="/puborprivate">
        <AddQuestion />
      </FooterButton>
    </FooterBar>
  );
}
