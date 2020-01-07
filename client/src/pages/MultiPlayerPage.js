import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import Footer from '../components/Footer';
import { pulse } from '../components/Animations';
import GameOver from '../components/GameOver';

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
const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const PassButton = styled(AnswerCard)`
  height: 30px;
  width: 120px;
  border: none;
  margin: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
  background-blend-mode: multiply, multiply;
  font-family: 'Leckerli One', cursive;
  color: ${props => props.theme.colors.text1};
`;

const GameOverButton = styled(AnswerCard)`
  height: 30px;
  width: 120px;
  border: none;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  margin: 0;
  font-family: 'Leckerli One', cursive;
  color: ${props => props.theme.colors.text1};
`;

const TextWrapperOutsideCard1 = styled.div`
  text-align: center;
  height: 30px;
  width: 200px;
  margin: 0px;
  margin: 0 0 10px;
  color: ${props => props.theme.colors.card1};
`;
const TextWrapperOutsideCard2 = styled.div`
  text-align: center;
  height: 30px;
  width: 200px;
  margin: 0 0 10px;
  color: ${props => props.theme.colors.card2};
`;
const CorrectAnswerText = styled.p`
  color: ${props => props.theme.colors.correct};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
`;

const CorrectAnswerCard = styled(AnswerCard)`
  border: 4px solid ${props => props.theme.colors.correct};
  align-self: center;
  animation: ${pulse} 0.8s 2;
`;

const CorrectAnswerContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 310px;
  z-index: 1000;
  width: 360px;
  height: 250px;
  background: ${props => props.theme.colors.background};
`;

export default function MultiPlayerPage(props) {
  const [_ids, set_Ids] = React.useState([]);
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');
  const [pointsPlayer1, setPointsPlayer1] = React.useState(0);
  const [pointsPlayer2, setPointsPlayer2] = React.useState(0);
  const [questionsPlayed, setQuestionsPlayed] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [nowPlaying, setNowPlaying] = React.useState(1);
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);
  const amountOfQuestions = props.amountOfQuestions;
  const allAnswers = [correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3];

  async function getNextQuestion() {
    const response = await fetch('/api/questions/random');
    const data = await response.json();
    if (_ids.includes(data._id)) {
      getNextQuestion();
    } else {
      set_Ids(_ids => [..._ids, data._id]);
      setQuestion(data.question);
      setCorrect_answer(data.correct_answer);
      setIncorrect_answer1(data.incorrect_answer1);
      setIncorrect_answer2(data.incorrect_answer2);
      setIncorrect_answer3(data.incorrect_answer3);
      setShowCorrectAnswer(false);
    }
  }

  function shuffle(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  shuffle(allAnswers);

  async function verifyAnswer(value) {
    if (nowPlaying === 1) {
      if (value === correct_answer) {
        setPointsPlayer1(pointsPlayer1 + 1);
        setNowPlaying(2);
      } else {
        setPointsPlayer1(pointsPlayer1 - 1);
        setNowPlaying(2);
      }
    }
    if (nowPlaying === 2) {
      isQuestionLimitReached(questionsPlayed + 1);
      if (value === correct_answer) {
        setShowCorrectAnswer(true);
        setPointsPlayer2(pointsPlayer2 + 1);
        setNowPlaying(1);
        setQuestionsPlayed(questionsPlayed + 1);
        setTimeout(() => getNextQuestion(), 1800);
      } else {
        setShowCorrectAnswer(true);
        setPointsPlayer2(pointsPlayer2 - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setNowPlaying(1);
        setTimeout(() => getNextQuestion(), 1800);
      }
    }
  }

  function passQuestion() {
    if (nowPlaying === 1) {
      setPointsPlayer1(pointsPlayer1 - 0.25);
      setNowPlaying(2);
    } else {
      setPointsPlayer2(pointsPlayer2 - 0.25);
      setQuestionsPlayed(questionsPlayed + 1);
      setNowPlaying(1);
      getNextQuestion();
    }
  }

  function isQuestionLimitReached(questionsPlayed) {
    if (questionsPlayed === amountOfQuestions) {
      setGameOver(true);
    }
  }

  React.useEffect(() => {
    getNextQuestion();
  }, []);

  return (
    <Main>
      <Header />
      {!gameOver && (
        <>
          {showCorrectAnswer && (
            <CorrectAnswerContainer>
              <CorrectAnswerText>correct answer is:</CorrectAnswerText>
              <CorrectAnswerCard value={correct_answer} />
            </CorrectAnswerContainer>
          )}
          {nowPlaying === 1 ? (
            <TextWrapperOutsideCard1>
              {props.nameOfPlayer1} - it is your turn!
            </TextWrapperOutsideCard1>
          ) : (
            <TextWrapperOutsideCard2>
              {props.nameOfPlayer2} - it is your turn!
            </TextWrapperOutsideCard2>
          )}
          <QuestionCard
            score={nowPlaying === 1 ? pointsPlayer1 : pointsPlayer2}
            total={questionsPlayed}
            question={question}
          />
          <AnswerContainer>
            <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
            <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
            <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
            <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
          </AnswerContainer>

          <ButtonBar>
            <GameOverButton value="End game" onClick={() => setGameOver(true)} />
            <PassButton value="Pass question" onClick={() => passQuestion()} />
          </ButtonBar>
        </>
      )}
      {gameOver && (
        <GameOver
          nameOfPlayer1={props.nameOfPlayer1}
          nameOfPlayer2={props.nameOfPlayer2}
          pointsPlayer1={pointsPlayer1}
          pointsPlayer2={pointsPlayer2}
        />
      )}
      <Footer />
    </Main>
  );
}

MultiPlayerPage.propTypes = {
  amountOfQuestions: PropTypes.number,
  nameOfPlayer1: PropTypes.string,
  nameOfPlayer2: PropTypes.string
};
