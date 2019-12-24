import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import HashInsertCard from '../components/HashInsertCard';

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

export default function ChooseGameModePage() {
  return (
    <Main>
      <Header />
      <CategoryCard />
      <HashInsertCard />
      <Footer />
    </Main>
  );
}
