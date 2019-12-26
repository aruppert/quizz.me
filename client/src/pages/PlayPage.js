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

const PassButton = styled(AnswerCard)`
  height: 30px;
  margin: 0px;
`;

export default function PlayPage() {
  const [ids, setIds] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [questionsPlayed, setQuestionsPlayed] = React.useState(0);

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  async function fetchQuestion(randomNumber) {
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

  function getNextQuestion(number) {
    if (ids.includes(number)) {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      getNextQuestion(randomNumber);
    } else {
      fetchQuestion(number);
    }
  }

  const allAnswers = [correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3];

  function shuffle(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  shuffle(allAnswers);

  sessionStorage.setItem('firstAnswer', true);

  function verifyAnswer(value) {
    if (sessionStorage.getItem('firstAnswer') === 'true') {
      if (value === correct_answer) {
        setPoints(points + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion(randomNumber);
      } else {
        setPoints(points - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion(randomNumber);
      }
    } else {
      return null;
    }
    sessionStorage.setItem('firstAnswer', false);
  }

  function passQuestion() {
    getNextQuestion(randomNumber);
    setPoints(points - 0.25);
  }

  React.useEffect(() => {
    fetchQuestion(randomNumber);
  }, []);

  return (
    <Main>
      <Header />
      <QuestionCard
        total={questionsPlayed}
        score={points}
        category={category}
        question={question}
      />
      <AnswerContainer>
        <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
        <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
        <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
        <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
      </AnswerContainer>
      <PassButton value="Pass (-0.25 points)" onClick={() => passQuestion()} />
      <Footer />
    </Main>
  );
}
