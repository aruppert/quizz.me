import React from 'react';
import styled from '@emotion/styled';
import AddQuestionsCard from '../components/AddQuestionsCard';
import PlayCard from '../components/PlayCard';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

export default function PlayOrAddSetPage() {
  return (
    <Main>
      <PlayCard />
      <AddQuestionsCard />
    </Main>
  );
}
