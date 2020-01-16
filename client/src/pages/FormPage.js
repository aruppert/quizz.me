import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/textAndInput/Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import PrivateConfirmationCard from '../components/cards/PrivateConfirmationCard';
import PublicConfirmationCard from '../components/cards/PublicConfirmationCard';
import QuestionCardsAdded from '../icons/QuestionCardsAdded';
import NavButton from '../components/buttons/NavButton';
import { addQuestion } from '../api/questions';
import { flexColumnCenter } from '../styles/General';
import {
  BigContainer,
  Form,
  Nav,
  Status,
  QuestionsCounter,
  Text,
  ErrorContainer,
  TextWrapperOutsideCard
} from '../components/main/Form';

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
    // eslint-disable-next-line
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
