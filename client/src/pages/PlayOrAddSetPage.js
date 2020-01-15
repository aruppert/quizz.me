import React from 'react';
import styled from '@emotion/styled';
import HighCard from '../components/cards/HighCard';
import WideCardWithLinearGradientBorder from '../components/cards/WideCardWithLinearGradientBorder';
import Dice from '../icons/Dice';
import { flexColumnCenter } from '../styles/General';
import AddQuestion from '../icons/AddQuestion';

const Main = styled.main`
  ${flexColumnCenter};
  height: 100%;
  margin: auto;
  width: 375px;
`;

const SelectionContainer = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: space-evenly;
  width: 375px;
`;

export default function PlayOrAddSetPage() {
  return (
    <Main>
      <WideCardWithLinearGradientBorder text={`Welcome friend! `} />
      <SelectionContainer>
        <HighCard text={`Play a single- or multiplayer game`} path="choose">
          <Dice />
        </HighCard>
        <HighCard text={`Add public or private questions`} path="privacy">
          <AddQuestion />
        </HighCard>
      </SelectionContainer>
      <WideCardWithLinearGradientBorder text={` Enjoy the game!`} />
    </Main>
  );
}
