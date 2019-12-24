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
  const [category, setCategory] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');

  async function fetchTestQuestion() {
    const response = await fetch('http://localhost:8080/questions/1');
    const data = await response.json();
    setCategory(data.category);
    setQuestion(data.question);
    setCorrect_answer(data.correct_answer);
    setIncorrect_answer1(data.incorrect_answer1);
    setIncorrect_answer2(data.incorrect_answer2);
    setIncorrect_answer3(data.incorrect_answer3);
  }

  fetchTestQuestion();

  const allAnswers = [correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3];

  function shuffle(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  shuffle(allAnswers);

  function verifyAnswer(value) {
    if (value === correct_answer) {
      alert('Correct');
    } else {
      alert('Wrong');
    }
  }

  return (
    <Main>
      <Header />
      <h3>{category}</h3>
      <QuestionCard question={question} />
      <AnswerContainer>
        <AnswerCard answer={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
        <AnswerCard answer={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
        <AnswerCard answer={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
        <AnswerCard answer={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
      </AnswerContainer>
      <Footer />
    </Main>
  );
}
