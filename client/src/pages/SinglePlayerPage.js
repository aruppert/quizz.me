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

export default function SinglePlayerPage(props) {
  const [ids, setIds] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [correct_answer, setCorrect_answer] = React.useState('');
  const [incorrect_answer1, setIncorrect_answer1] = React.useState('');
  const [incorrect_answer2, setIncorrect_answer2] = React.useState('');
  const [incorrect_answer3, setIncorrect_answer3] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [questionsPlayed, setQuestionsPlayed] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  // const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false);

  // PARAMS TO GET NEW QUESTIONS (UNUSED ARE FOR MONGODB)
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const privateCode = props.privateCode;
  const selecctedCategories = props.selectedCategories;

  const amountOfQuestions = props.amountOfQuestions;

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
    isQuestionLimitReached(questionsPlayed + 1);
    if (sessionStorage.getItem('firstAnswer') === 'true') {
      if (value === correct_answer) {
        alert(`Perfect! That's right!`);
        setPoints(points + 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion(randomNumber);
      } else {
        alert(`Sorry, the correct answer is "${correct_answer}"!`);
        setPoints(points - 1);
        setQuestionsPlayed(questionsPlayed + 1);
        getNextQuestion(randomNumber);
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
    getNextQuestion(randomNumber);
  }

  function isQuestionLimitReached(questionsPlayed) {
    if (questionsPlayed === amountOfQuestions) {
      setGameOver(true);
    }
  }

  React.useEffect(() => {
    fetchQuestion(randomNumber);
  }, []);

  return (
    <>
      <Header />
      <Main>
        {!gameOver && (
          <>
            <p>Single Player Mode! </p>

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
            <GameOverButton value="Enough!" onClick={() => setGameOver(true)} />
          </>
        )}
        {gameOver && (
          <GameOverContainer>
            <StarPositioned />
            <TextWrapper>
              <p>You scored {points} points </p> <p>playing {questionsPlayed} cards!</p>
            </TextWrapper>
          </GameOverContainer>
        )}
      </Main>
      <Footer />
    </>
  );
}