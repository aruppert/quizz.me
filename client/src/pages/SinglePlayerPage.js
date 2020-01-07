import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import AnswerCard from '../components/AnswerCard';
import Footer from '../components/Footer';
import Star from '../icons/Star';
import StarBG from '../icons/StarBG';

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

const GameOverContainer = styled.div``;

const StarWrapper = styled.svg`
  position: relative;
  height: 450px;
  width: 450px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

export default function SinglePlayerPage(props) {
  const [_ids, set_Ids] = React.useState([]);
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [questionsPlayed, setQuestionsPlayed] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  // const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);

  const amountOfQuestions = props.amountOfQuestions;

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
    isQuestionLimitReached(questionsPlayed + 1);
    if (sessionStorage.getItem('firstAnswer') === 'true') {
      if (value === correct_answer) {
        alert(`Perfect! That's right!`);
        setPoints(points + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion();
      } else {
        alert(`Sorry, the correct answer is "${correct_answer}"!`);
        setPoints(points - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion();
      }
    } else {
      return null;
    }
    sessionStorage.setItem('firstAnswer', false);
  }

  // MIGHT BE USED LATER FOR NICER WAY TO SHOW THE CORRECT ANSWER

  // function findRightAnswerInArray() {
  //   switch (correct_answer) {
  //     case allAnswers[0]:
  //       console.log(`Answers[0] is right`);
  //       break;
  //     case allAnswers[1]:
  //       console.log('Answers[1] is right');
  //       break;
  //     case allAnswers[2]:
  //       console.log('Answers[2] is right');
  //       break;
  //     case allAnswers[3]:
  //       console.log('Answers[3] is right');
  //       break;
  //   }
  // }

  function passQuestion() {
    setPoints(points - 0.25);
    setQuestionsPlayed(questionsPlayed + 1);
    getNextQuestion();
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
    <>
      <Header />
      <Main>
        {!gameOver && (
          <>
            <p>Welcome {props.nameOfPlayer1} - GL & HF! </p>

            <QuestionCard total={questionsPlayed} score={points} question={question} />
            <AnswerContainer>
              <AnswerCard value={allAnswers[0]} onClick={() => verifyAnswer(allAnswers[0])} />
              <AnswerCard value={allAnswers[1]} onClick={() => verifyAnswer(allAnswers[1])} />
              <AnswerCard value={allAnswers[2]} onClick={() => verifyAnswer(allAnswers[2])} />
              <AnswerCard value={allAnswers[3]} onClick={() => verifyAnswer(allAnswers[3])} />
            </AnswerContainer>
            <ButtonBar>
              <GameOverButton value="End game" onClick={() => setGameOver(true)} />{' '}
              <PassButton value="Pass question " onClick={() => passQuestion()} />
            </ButtonBar>
          </>
        )}
        {gameOver && (
          <GameOverContainer>
            <StarWrapper>
              <StarBG />
              <Star />
            </StarWrapper>
            <TextWrapper>
              <p>Congrats {props.nameOfPlayer1}!</p>
              <p>You scored {points} points </p> <p>playing {questionsPlayed} cards!</p>
            </TextWrapper>
          </GameOverContainer>
        )}
      </Main>
      <Footer />
    </>
  );
}

SinglePlayerPage.propTypes = {
  amountOfQuestions: PropTypes.number,
  nameOfPlayer1: PropTypes.string,
  selectedCategories: PropTypes.array
};
