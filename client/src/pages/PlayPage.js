import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import { pulse } from '../animations/General';
import GameOverPage from './GameOverPage';
import { flexColumnCenter } from '../styles/General';
import { getRandomQuestion } from '../api/questions';
import TextWrapperOutsideCard from '../components/TextWrapperOutsideCard';
import passQuestion from '../components/gameplay/passQuestion';
import GameOverButton from '../components/GameOverButton';
import PassButton from '../components/PassButton';

const Main = styled.main`
  ${flexColumnCenter};
  flex-grow: 1;
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
  width: 360px;
  justify-content: space-around;
`;

const StyledTextWrapperOutsideCardOne = styled(TextWrapperOutsideCard)`
  width: 360px;
`;
const StyledTextWrapperOutsideCardTwo = styled(TextWrapperOutsideCard)`
  color: ${props => props.theme.colors.card2};
  width: 360px;
`;

const CorrectAnswerText = styled.p`
  color: ${props => props.theme.colors.correct};
  font-family: 'Leckerli One', cursive;
  font-size: 1.5rem;
`;

const CorrectAnswerCard = styled(AnswerCard)`
  border: 4px solid ${props => props.theme.colors.correct};
  align-self: center;
  animation: ${pulse} 0.8s 3;
`;

const CorrectAnswerContainer = styled.div`
  ${flexColumnCenter};
  position: absolute;
  top: 310px;
  z-index: 1000;
  width: 360px;
  height: 250px;
  background: ${props => props.theme.colors.background};
`;

export default function PlayPage({
  numberOfPlayers,
  amountOfQuestions,
  privateCode,
  nameOfPlayer1,
  nameOfPlayer2
}) {
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

  const allAnswers = [correct_answer, incorrect_answer1, incorrect_answer2, incorrect_answer3];

  async function getNextQuestion() {
    const data = await getRandomQuestion(privateCode);
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
    if (numberOfPlayers === 1) {
      isQuestionLimitReached(questionsPlayed + 1);
      if (value === correct_answer) {
        setShowCorrectAnswer(true);
        setTimeout(() => {
          navigator.vibrate([100, 100, 100]);
        }, 500);
        setPointsPlayer1(pointsPlayer1 + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setTimeout(() => {
          getNextQuestion();
        }, 2400);
      } else {
        setShowCorrectAnswer(true);
        setTimeout(() => {
          navigator.vibrate([500]);
        }, 500);
        setPointsPlayer1(pointsPlayer1 - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setTimeout(() => {
          getNextQuestion();
        }, 2400);
      }
    } else {
      if (nowPlaying === 1) {
        if (value === correct_answer) {
          setTimeout(() => {
            navigator.vibrate([100, 100, 100]);
          }, 500);
          setPointsPlayer1(pointsPlayer1 + 1);
          setNowPlaying(2);
        } else {
          setTimeout(() => {
            navigator.vibrate([500]);
          }, 500);
          setPointsPlayer1(pointsPlayer1 - 1);
          setNowPlaying(2);
        }
      }
      if (nowPlaying === 2) {
        isQuestionLimitReached(questionsPlayed + 1);
        if (value === correct_answer) {
          setShowCorrectAnswer(true);
          setPointsPlayer2(pointsPlayer2 + 1);
          setQuestionsPlayed(questionsPlayed + 1);
          setTimeout(() => {
            navigator.vibrate([100, 100, 100]);
            setNowPlaying(1);
            getNextQuestion();
          }, 2400);
        } else {
          setShowCorrectAnswer(true);
          setPointsPlayer2(pointsPlayer2 - 1);
          setQuestionsPlayed(questionsPlayed + 1);
          setTimeout(() => {
            navigator.vibrate([500]);
            setNowPlaying(1);
            getNextQuestion();
          }, 2400);
        }
      }
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
      {!gameOver && (
        <>
          {showCorrectAnswer && (
            <CorrectAnswerContainer>
              <CorrectAnswerText>correct answer is:</CorrectAnswerText>
              <CorrectAnswerCard value={correct_answer} />
            </CorrectAnswerContainer>
          )}
          {numberOfPlayers === 1 ? (
            <StyledTextWrapperOutsideCardOne>
              Good luck {nameOfPlayer1}! Your score is {pointsPlayer1}/{questionsPlayed}
            </StyledTextWrapperOutsideCardOne>
          ) : nowPlaying === 1 ? (
            <StyledTextWrapperOutsideCardOne>
              {nameOfPlayer1} - your turn! Your score is {pointsPlayer1}/{questionsPlayed}
            </StyledTextWrapperOutsideCardOne>
          ) : (
            <StyledTextWrapperOutsideCardTwo>
              {nameOfPlayer2} - your turn! Your score is {pointsPlayer2}/{questionsPlayed}
            </StyledTextWrapperOutsideCardTwo>
          )}
          <QuestionCard question={question} />
          <AnswerContainer>
            <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
            <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
            <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
            <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
          </AnswerContainer>

          <ButtonBar>
            <GameOverButton value="End game" onClick={() => setGameOver(true)} />
            <PassButton
              value="Pass question"
              onClick={() =>
                passQuestion(
                  numberOfPlayers,
                  pointsPlayer1,
                  setPointsPlayer1,
                  pointsPlayer2,
                  setPointsPlayer2,
                  nowPlaying,
                  setNowPlaying,
                  questionsPlayed,
                  setQuestionsPlayed,
                  isQuestionLimitReached,
                  setShowCorrectAnswer,
                  getNextQuestion
                )
              }
            />
          </ButtonBar>
        </>
      )}
      {gameOver && (
        <GameOverPage
          numberOfPlayers={numberOfPlayers}
          nameOfPlayer1={nameOfPlayer1}
          nameOfPlayer2={nameOfPlayer2}
          pointsPlayer1={pointsPlayer1}
          pointsPlayer2={pointsPlayer2}
          questionsPlayed={questionsPlayed}
        />
      )}
    </Main>
  );
}

PlayPage.propTypes = {
  amountOfQuestions: PropTypes.number,
  nameOfPlayer1: PropTypes.string,
  nameOfPlayer2: PropTypes.string
};
