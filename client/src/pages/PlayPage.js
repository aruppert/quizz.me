import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import QuestionCard from '../components/cards/QuestionCard';
import AnswerCard from '../components/cards/AnswerCard';
import GameOverPage from './GameOverPage';
import { flexColumnCenter } from '../styles/General';
import { getRandomQuestion } from '../api/questions';
import TextWrapperOutsideCard from '../components/TextWrapperOutsideCard';
import GameOverButton from '../components/buttons/GameOverButton';
import PassButton from '../components/buttons/PassButton';
import ResultCard from '../components/cards/ResultCard';

const Main = styled.main`
  ${flexColumnCenter};
  flex-grow: 1;
  width: 100vw;
`;

const GameContainer = styled.div`
  height: 450px;
  width: 350px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 360px;
  margin: 10px 0 8px;
`;

// const ResultContainer = styled.div`
//  display: flex;
//   width: 360px;
//   margin: 10px 0 8px;
// `
const ButtonBar = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-around;
`;

const StyledTextWrapperOutsideCard = styled(TextWrapperOutsideCard)`
  position: absolute;
  top: 90px;

  width: 360px;
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
  const [showResult, setShowResult] = React.useState(false);
  const [playerPoints, setPlayerPoints] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });
  const [showQuestion, setShowQuestion] = React.useState(true);
  const [answerGivenIsCorrect, setAnswerGivenIsCorrect] = React.useState(null);

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
      setShowResult(false);
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
    setShowResult(true);
    setAnswerGivenIsCorrect(value === correctAnswer);
    const isNotLastPlayer = nowPlaying < numberOfPlayers;

    if (answerGivenIsCorrect) {
      increasePointsOfCurrentPlayerByOne(nowPlaying);
      navigator.vibrate([100, 100, 100]);
    } else {
      decreasePointsOfCurrentPlayerByAmount(nowPlaying, 1);
      navigator.vibrate([500]);
    }

    if (isNotLastPlayer) {
      setTimeout(() => {
        setNowPlaying(nowPlaying + 1);
        setShowResult(false);
      }, 2400);
    } else {
      loadNextQuestionOrEndGame();
    }
  }

  function passQuestion() {
    if (showResult === true) {
      return null;
    } else {
      if (nowPlaying < numberOfPlayers) {
        setShowResult(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 0.25);
        setTimeout(() => {
          setNowPlaying(nowPlaying + 1);
          setShowResult(false);
        }, 2400);
      } else {
        setShowResult(true);
        decreasePointsOfCurrentPlayerByAmount(nowPlaying, 0.25);
        loadNextQuestionOrEndGame();
      }
    }
  }

  function loadNextQuestionOrEndGame() {
    setQuestionsPlayed(questionsPlayed + 1);
    setTimeout(() => {
      if (isQuestionLimitReached(questionsPlayed + 1)) {
        setGameOver(true);
      }
      getNextQuestion();
      setNowPlaying(1);
    }, 2400);
  }

  function isQuestionLimitReached(questionsPlayed) {
    return questionsPlayed === amountOfQuestions;
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
          {numberOfPlayers === 1 ? (
            <StyledTextWrapperOutsideCard>
              Good luck {namesOfPlayers[1]}! Your score is {playerPoints[1]}
            </StyledTextWrapperOutsideCard>
          ) : (
            <StyledTextWrapperOutsideCard>
              {namesOfPlayers[nowPlaying]} - your turn! Your score is {playerPoints[nowPlaying]}
            </StyledTextWrapperOutsideCard>
          )}
          <GameContainer>
            <QuestionCard question={question} />
            {!showResult && (
              <>
                <AnswerContainer>
                  <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
                  <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
                  <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
                  <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
                </AnswerContainer>
              </>
            )}
            {showResult && (
              <ResultCard
                correctAnswer={correctAnswer}
                answerGivenIsCorrect={answerGivenIsCorrect}
              />
            )}
          </GameContainer>
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
