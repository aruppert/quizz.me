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
  const [ids, setIds] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');

  let randomNumber = Math.floor(Math.random() * 5) + 1;

  async function fetchTestQuestion(randomNumber) {
    const response = await fetch('http://localhost:8080/questions/' + randomNumber);
    const data = await response.json();
    setIds(ids => [...ids, data.id]);
    setCategory(data.category);
    setQuestion(data.question);
    setCorrect_answer(data.correct_answer);
    setIncorrect_answer1(data.incorrect_answer1);
    setIncorrect_answer2(data.incorrect_answer2);
    setIncorrect_answer3(data.incorrect_answer3);
  }
  console.log(ids);
  // let playedQuestionsById = [];

  function checkNextQuestion(number) {
    if (ids.includes(number)) {
      let randomNumber = Math.floor(Math.random() * 5) + 1;
      checkNextQuestion(randomNumber);
    } else {
      fetchTestQuestion(number);
    }
  }

  // let count = id + 1;
  //   fetchTestQuestion(count);
  //   console.log(id);
  //   if (playedQuestionsById.includes(id)) {
  //     count++;
  //     setId(2);
  //     console.warn(count);
  //     console.error(id);
  //     fetchTestQuestion(count);
  //   } else {
  //     console.log('ok, play');
  //   }

  // function getNewQuestion() {}

  // getNewQuestion();

  // while (playedQuestions.includes(id)) {
  //   console.log('Allready played');
  //   count++;
  //   fetchTestQuestion(count);
  // }

  // playedQuestionsById.push(ids);

  const allAnswers = [correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3];

  function shuffle(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  shuffle(allAnswers);

  sessionStorage.setItem('firstAnswer', true);

  function verifyAnswer(value) {
    console.log(sessionStorage.getItem('firstAnswer'));
    if (sessionStorage.getItem('firstAnswer') === 'true') {
      if (value === correct_answer) {
        console.log('Correct');
      } else {
        console.warn('Wrong');
      }
    } else {
      console.log('Nanana, only one answer');
    }
    sessionStorage.setItem('firstAnswer', false);
  }

  return (
    <Main>
      <Header />
      <QuestionCard question={question} />
      <button onClick={() => fetchTestQuestion(randomNumber)}>Start</button>
      <button onClick={() => checkNextQuestion(randomNumber)}>Next Question</button>
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
