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

const StyledTextWrapperOutsideCard = styled(TextWrapperOutsideCard)`
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
  namesOfPlayers
}) {
  const [_ids, set_Ids] = React.useState([]);
  const [question, setQuestion] = React.useState('');
  const [correctAnswer, setCorrectAnswer] = React.useState('');
  const [incorrectAnswer1, setIncorrectAnswer1] = React.useState('');
  const [incorrectAnswer2, setIncorrectAnswer2] = React.useState('');
  const [incorrectAnswer3, setIncorrectAnswer3] = React.useState('');
  const [questionsPlayed, setQuestionsPlayed] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [nowPlaying, setNowPlaying] = React.useState(1);
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);
  const [playerPoints, setPlayerPoints] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const allAnswers = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3];

  async function getNextQuestion() {
    const data = await getRandomQuestion(privateCode);
    if (_ids.includes(data._id)) {
      getNextQuestion();
    } else {
      set_Ids(_ids => [..._ids, data._id]);
      setQuestion(data.question);
      setCorrectAnswer(data.correctAnswer);
      setIncorrectAnswer1(data.incorrectAnswer1);
      setIncorrectAnswer2(data.incorrectAnswer2);
      setIncorrectAnswer3(data.incorrectAnswer3);
      setShowCorrectAnswer(false);
    }
  }

  function shuffle(array) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  shuffle(allAnswers);

  function increasePointsOfCurrentPlayerByOne(nowPlaying) {
    setPlayerPoints({
      ...playerPoints,
      [nowPlaying]: playerPoints[nowPlaying] + 1
    });
  }

  function decreasePointsOfCurrentPlayerByAmount(nowPlaying, amount) {
    setPlayerPoints({
      ...playerPoints,
      [nowPlaying]: playerPoints[nowPlaying] - [amount]
    });
  }

  async function verifyAnswer(value) {
    isQuestionLimitReached(questionsPlayed + 1);
    if (nowPlaying < numberOfPlayers) {
      if (value === correctAnswer) {
        setShowCorrectAnswer(true);
        increasePointsOfCurrentPlayerByOne(nowPlaying);
        navigator.vibrate([100, 100, 100]);
        setTimeout(() => {
          setNowPlaying(nowPlaying + 1);
          setShowCorrectAnswer(false);
        }, 2400);
      } else {
        setShowCorrectAnswer(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
        navigator.vibrate([500]);
        setTimeout(() => {
          setNowPlaying(nowPlaying + 1);
          setShowCorrectAnswer(false);
        }, 2400);
      }
    } else {
      if (value === correctAnswer) {
        setShowCorrectAnswer(true);
        increasePointsOfCurrentPlayerByOne(nowPlaying);
        setQuestionsPlayed(questionsPlayed + 1);
        navigator.vibrate([100, 100, 100]);
        setTimeout(() => {
          setNowPlaying(1);
          getNextQuestion();
        }, 2400);
      } else {
        setShowCorrectAnswer(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
        setQuestionsPlayed(questionsPlayed + 1);
        navigator.vibrate([500]);
        setTimeout(() => {
          setNowPlaying(1);
          getNextQuestion();
        }, 2400);
      }
    }
  }

  function passQuestion() {
    if (nowPlaying < numberOfPlayers) {
      setShowCorrectAnswer(true);
      decreasePointsOfCurrentPlayerByAmount(nowPlaying, 0.25);
      setTimeout(() => {
        setNowPlaying(nowPlaying + 1);
        setShowCorrectAnswer(false);
      }, 2400);
    } else {
      setShowCorrectAnswer(true);
      decreasePointsOfCurrentPlayerByAmount(nowPlaying, 0.25);
      setQuestionsPlayed(questionsPlayed + 1);
      setTimeout(() => {
        isQuestionLimitReached(questionsPlayed + 1);
        getNextQuestion();
        setNowPlaying(1);
      }, 2400);
    }
  }

  function isQuestionLimitReached(questionsPlayed) {
    if (questionsPlayed === amountOfQuestions) {
      setGameOver(true);
    }
  }

  function endGame() {
    setQuestionsPlayed(questionsPlayed + 1);
    setGameOver(true);
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
              <CorrectAnswerCard value={correctAnswer} />
            </CorrectAnswerContainer>
          )}
          {numberOfPlayers === 1 ? (
            <StyledTextWrapperOutsideCard>
              Good luck {namesOfPlayers[nowPlaying]}! Your score is {playerPoints[nowPlaying]}
            </StyledTextWrapperOutsideCard>
          ) : (
            <StyledTextWrapperOutsideCard>
              {namesOfPlayers[nowPlaying]} - your turn! Your score is {playerPoints[nowPlaying]}
            </StyledTextWrapperOutsideCard>
          )}
          <QuestionCard question={question} />
          <AnswerContainer>
            <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
            <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
            <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
            <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
          </AnswerContainer>

          <ButtonBar>
            <GameOverButton value="End game" onClick={() => endGame()} />
            <PassButton value="Pass question" onClick={() => passQuestion()} />
          </ButtonBar>
        </>
      )}
      {gameOver && (
        <GameOverPage
          numberOfPlayers={numberOfPlayers}
          namesOfPlayers={namesOfPlayers}
          playerPoints={playerPoints}
          questionsPlayed={questionsPlayed}
        />
      )}
    </Main>
  );
}

PlayPage.propTypes = {
  numberOfPlayers: PropTypes.number,
  amountOfQuestions: PropTypes.number,
  privateCode: PropTypes.string,
  namesOfPlayers: PropTypes.object
};
