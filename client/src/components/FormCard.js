import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import PrivateConfirmationCard from '../components/PrivateConfirmationCard';
import PublicConfirmationCard from '../components/PublicConfirmationCard';
import QuestionCardsAdded from '../icons/QuestionCardsAdded';
import { addQuestion } from '../api/questions';

const BigContainer = styled.div`
  width: 340px;
  height: 380px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 100%;
  color: ${props => props.theme.colors.text1};
  padding: 0px 20px 0px 20px;
`;

const Nav = styled.div`
  display: flex;
  margin: 0 10px 0 0;
`;

const NavButton = styled.button`
  border: none;
  outline: none;
  background: none;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0px 0px 0px 10px;
  color: ${props => props.theme.colors.text1};
  width: 50%;
  flex-grow: 1;
`;

const Status = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: space-around;
`;

const QuestionsCounter = styled.div`
  display: flex;
  align-self: center;
`;

const Text = styled.div`
  align-self: center;
  font-size: 1.5rem;
`;

const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  text-align: center;
  color: ${props => props.theme.colors.warn};
`;

const TextWrapperOutsideCard = styled.div`
  margin: 0 0 10px;
  color: ${props => props.theme.colors.card2};
`;

export default function FormCard() {
  const [question, setQuestion] = React.useState({
    question: '',
    correct_answer: '',
    incorrect_answer1: '',
    incorrect_answer2: '',
    incorrect_answer3: ''
  });
  const [questionStatus, setQuestionStatus] = React.useState('inactive');
  const [questionsCounter, setQuestionsCounter] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  function onChange(event) {
    const value = event.target.value;
    setQuestion({
      ...question,
      [event.target.name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (checkIfFormIsCompletelyFilled(event)) {
      addQuestion(
        question.question,
        question.correct_answer,
        question.incorrect_answer1,
        question.incorrect_answer2,
        question.incorrect_answer3,
        questionStatus
      );
      setQuestion({
        question: '',
        correct_answer: '',
        incorrect_answer1: '',
        incorrect_answer2: '',
        incorrect_answer3: ''
      });
      setShowError(false);
      setQuestionsCounter(questionsCounter + 1);
    } else {
      return null;
    }
  }

  const privateCode = sessionStorage.getItem('privateCode');
  const isPrivateSet = sessionStorage.getItem('isPrivateSet');

  React.useEffect(() => {
    if (privateCode !== '') {
      setQuestionStatus('active');
    }
  }, []);

  function checkIfFormIsCompletelyFilled() {
    if (
      question.question &&
      question.correct_answer &&
      question.incorrect_answer1 &&
      question.incorrect_answer2 &&
      question.incorrect_answer3
    ) {
      return true;
    }
    {
      setShowError(true);
      return false;
    }
  }

  function onClickFinished(event) {
    handleSubmit(event);
    setFinished(true);
  }

  const addMore = () => {
    setFinished(false);
  };

  return (
    <>
      {!finished && (
        <>
          {showError && <ErrorContainer> Please fill in all fields. </ErrorContainer>}
          {isPrivateSet === 'true' ? (
            <TextWrapperOutsideCard> Your private code is {privateCode} </TextWrapperOutsideCard>
          ) : (
            <TextWrapperOutsideCard>Thanks for sharing your questions!</TextWrapperOutsideCard>
          )}
          <BigContainer>
            <Form onSubmit={handleSubmit}>
              <Status>
                {isPrivateSet === 'true' ? <Lock /> : <Planet height="58px" />}
                <QuestionsCounter>
                  <QuestionCardsAdded />
                  <Text>{questionsCounter}</Text>
                </QuestionsCounter>
              </Status>
              <Input
                type="text"
                value={question.question}
                name="question"
                onChange={onChange}
                placeholder="Question"
              />
              <Input
                value={question.correct_answer}
                name="correct_answer"
                onChange={onChange}
                placeholder="Correct Answer"
              />
              <Input
                type="text"
                value={question.incorrect_answer1}
                name="incorrect_answer1"
                onChange={onChange}
                placeholder="Wrong Answer 1"
              />
              <Input
                type="text"
                value={question.incorrect_answer2}
                name="incorrect_answer2"
                onChange={onChange}
                placeholder="Wrong Answer 2"
              />
              <Input
                type="text"
                value={question.incorrect_answer3}
                name="incorrect_answer3"
                onChange={onChange}
                placeholder="Wrong Answer 3"
              />
              <Nav>
                <NavButton>Add question</NavButton>
                <NavButton value="Submit" onClick={event => onClickFinished(event)}>
                  Submit{' '}
                </NavButton>
              </Nav>
            </Form>
          </BigContainer>
        </>
      )}
      {finished && isPrivateSet === 'true' && (
        <PrivateConfirmationCard addMore={addMore} questions={questionsCounter} />
      )}
      {finished && isPrivateSet === 'false' && (
        <PublicConfirmationCard addMore={addMore} questions={questionsCounter} />
      )}
    </>
  );
}
