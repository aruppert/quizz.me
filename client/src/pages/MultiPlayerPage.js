import React from 'react';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import Footer from '../components/Footer';
import styled from '@emotion/styled';
import Star from '../icons/Star';

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

const TurnOfPlayer = styled.p`
  text-align: center;
  height: 30px;
  width: 200px;
  margin: 0px;
`;

const PassButton = styled(AnswerCard)`
  height: 30px;
  margin: 0px;
`;

const GameOverButton = styled(AnswerCard)`
  height: 30px;
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  margin: 0px;
`;
const GameOverContainer = styled.div``;

const StarPositioned = styled(Star)`
  position: absolute;
  top: 50vh;
  left: 50vw;
  height: 375px;
`;
const TextWrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

export default function PlayPage() {
  const [ids, setIds] = React.useState([]);
  const [category, setCategory] = React.useState('');
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

  function verifyAnswer(value) {
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
      if (value === correct_answer) {
        alert(`The correct answer is "${correct_answer}"!`);
        setPointsPlayer2(pointsPlayer2 + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setNowPlaying(1);
        getNextQuestion(randomNumber);
      } else {
        alert(`The correct answer is "${correct_answer}"!`);
        setPointsPlayer2(pointsPlayer2 - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        setNowPlaying(1);
        getNextQuestion(randomNumber);
      }
    }
  }

  function determineResult(points1, points2) {
    if (points1 === points2) {
      return 'Draw!';
    } else {
      if (points1 > points2) {
        return 'Player 1 won!';
      }
      {
        return 'Player 2 won!';
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
      getNextQuestion(randomNumber);
    }
  }

  React.useEffect(() => {
    fetchQuestion(randomNumber);
  }, []);

  return (
    <Main>
      <Header />
      {!gameOver && (
        <>
          <TurnOfPlayer>Player {nowPlaying} is on!</TurnOfPlayer>
          <QuestionCard
            score={nowPlaying === 1 ? pointsPlayer1 : pointsPlayer2}
            total={questionsPlayed}
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
          <GameOverButton value="Enough!" onClick={() => setGameOver(true)} />
        </>
      )}
      {gameOver && (
        <GameOverContainer>
          <StarPositioned />
          <TextWrapper>
            <p>Player 1 has {pointsPlayer1} points, </p> <p>Player 2 has {pointsPlayer2} points:</p>
            <p>{determineResult(pointsPlayer1, pointsPlayer2)}</p>
          </TextWrapper>
        </GameOverContainer>
      )}
      <Footer />
    </Main>
  );
}
