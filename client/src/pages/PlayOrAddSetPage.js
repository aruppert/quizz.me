import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddQuestionsCard from '../components/AddQuestionsCard';
import PlayCard from '../components/PlayCard';

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export default function PlayOrAddSetPage() {
  return (
    <Main>
      <Header />
      <PlayCard />
      <AddQuestionsCard />
      <Footer />
    </Main>
  );
}
