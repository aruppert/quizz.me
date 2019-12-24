import React from 'react';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import AddQuestion from '../icons/AddQuestion';
import Button from './Button';

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

const FooterButton = styled(Button)`
  width: 1fr;
  height: 100%;
  flex-grow: 1;
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterButton>
        <Dice />
      </FooterButton>
      <FooterButton>
        <AddQuestion />
      </FooterButton>
    </FooterBar>
  );
}
