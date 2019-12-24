import React from 'react';
import Header from '../components/Header';
import FormCard from '../components/FormCard';
import Footer from '../components/Footer';
import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

export default function FormPage() {
  return (
    <Main>
      <Header />
      <FormCard />
      <Footer />
    </Main>
  );
}
