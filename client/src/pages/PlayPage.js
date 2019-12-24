import React from 'react';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
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

const AnswerContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 360px;
  margin: 20px;
`;

export default function PlayPage() {
  return (
    <Main>
      <Header />
      <QuestionCard />
      <AnswerContainer>
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
      </AnswerContainer>
      <Footer />
    </Main>
  );
}
