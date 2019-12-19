import React from 'react';
import styled from '@emotion/styled';
import Dice from '../icons/Dice';
import AddQuestion from '../icons/AddQuestion';

const FooterBar = styled.div`
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
  border-radius: 25px 0px 0px;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const FooterButton = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 1fr;
  height: 100%;
  flex-grow: 1;
`;

export default function Header() {
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