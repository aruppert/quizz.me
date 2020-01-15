import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import PrivateConfirmationCard from '../components/cards/PrivateConfirmationCard';
import PublicConfirmationCard from '../components/cards/PublicConfirmationCard';
import QuestionCardsAdded from '../icons/QuestionCardsAdded';
import { addQuestion } from '../api/questions';
import {
  linearGradientBoxShadow,
  flexRowWrapCenter,
  flexColumnCenter,
  noBorderOutlineBGTextDeco
} from '../styles/General';

const BigContainer = styled.div`
  ${linearGradientBoxShadow};
  width: 340px;
  height: 380px;
  border-radius: 25px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 100%;
  color: ${props => props.theme.colors.text1};
  padding: 0px 20px;
`;

const Nav = styled.div`
  display: flex;
  margin: 0 10px 0 0;
`;

const NavButton = styled.button`
  ${noBorderOutlineBGTextDeco};
  border: 2px solid ${props => props.theme.colors.text1};
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0 0 0 10px;
  color: ${props => props.theme.colors.text1};
  width: 50%;
  flex-grow: 1;
`;

const Status = styled.div`
  ${flexRowWrapCenter};
  width: 100%;
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

const Main = styled.main`
  ${flexColumnCenter};
  height: 100vh;
  width: 100vw;
`;

export default function FormPage({ privateCode }) {
  const [question, setQuestion] = React.useState({
    question: '',
    correctAnswer: '',
    incorrectAnswer1: '',
    incorrectAnswer2: '',
    incorrectAnswer3: '',
    privateCode: privateCode
  });
  const [questionStatus, setQuestionStatus] = React.useState('active');
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
    if (checkIfFormIsCompletelyFilled()) {
      addQuestion({
        ...question,
        status: questionStatus,
        privateCode: privateCode
      });
      setQuestion({
        question: '',
        correctAnswer: '',
        incorrectAnswer1: '',
        incorrectAnswer2: '',
        incorrectAnswer3: ''
      });
      setShowError(false);
      setQuestionsCounter(questionsCounter + 1);
    } else {
      return null;
    }
  }

  React.useEffect(() => {
    if (privateCode !== '') {
      setQuestionStatus('active');
    }
  }, []);

  function checkIfFormIsCompletelyFilled() {
    if (
      question.question &&
      question.correctAnswer &&
      question.incorrectAnswer1 &&
      question.incorrectAnswer2 &&
      question.incorrectAnswer3
    ) {
      return true;
    } else {
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
    <Main>
      {!finished && (
        <>
          {showError && <ErrorContainer> Please fill in all fields. </ErrorContainer>}
          {privateCode !== '' ? (
            <TextWrapperOutsideCard> Your private code is {privateCode} </TextWrapperOutsideCard>
          ) : (
            <TextWrapperOutsideCard>Thanks for sharing your questions!</TextWrapperOutsideCard>
          )}
          <BigContainer>
            <Form onSubmit={handleSubmit}>
              <Status>
                {privateCode !== '' ? <Lock /> : <Planet height="58px" />}
                <QuestionsCounter>
                  <QuestionCardsAdded />
                  <Text>{questionsCounter}</Text>
                </QuestionsCounter>
              </Status>
              <Input
                type="text"
                maxLength="145"
                value={question.question}
                name="question"
                onChange={onChange}
                placeholder="Question"
              />
              <Input
                type="text"
                maxLength="40"
                value={question.correctAnswer}
                name="correctAnswer"
                onChange={onChange}
                placeholder="Correct Answer"
              />
              <Input
                type="text"
                maxLength="40"
                value={question.incorrectAnswer1}
                name="incorrectAnswer1"
                onChange={onChange}
                placeholder="Wrong Answer 1"
              />
              <Input
                type="text"
                maxLength="40"
                value={question.incorrectAnswer2}
                name="incorrectAnswer2"
                onChange={onChange}
                placeholder="Wrong Answer 2"
              />
              <Input
                type="text"
                maxLength="40"
                value={question.incorrectAnswer3}
                name="incorrectAnswer3"
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
      {finished && privateCode !== '' && (
        <PrivateConfirmationCard
          addMore={addMore}
          privateCode={privateCode}
          questions={questionsCounter}
        />
      )}
      {finished && privateCode === '' && (
        <PublicConfirmationCard addMore={addMore} questions={questionsCounter} />
      )}
    </Main>
  );
}

FormPage.propTypes = {
  privateCode: PropTypes.string
};
