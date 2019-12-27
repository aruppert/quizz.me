import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Planet from '../icons/Planet';
import QuestionMark from '../icons/QuestionMark';
import Lock from '../icons/Lock';
import PrivateConfirmationCard from '../components/PrivateConfirmationCard';
import PublicConfirmationCard from '../components/PublicConfirmationCard';

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
`;

const NavButton = styled.button`
  border: none;
  outline: none;
  background: none;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
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

export default function FormCard() {
  const [question, setQuestion] = React.useState({
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answer1: '',
    incorrect_answer2: '',
    incorrect_answer3: ''
  });
  const [questionStatus, setQuestionStatus] = React.useState('inactive');
  const [questionsCounter, setQuestionsCounter] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  function onChange(event) {
    const value = event.target.value;
    setQuestion({
      ...question,
      [event.target.name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/questions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        category: question.category,
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answer1: question.incorrect_answer1,
        incorrect_answer2: question.incorrect_answer2,
        incorrect_answer3: question.incorrect_answer3,
        status: questionStatus
      })
    });
    if (privateCategory !== '') {
      setQuestion({
        category: privateCategory,
        question: '',
        correct_answer: '',
        incorrect_answer1: '',
        incorrect_answer2: '',
        incorrect_answer3: ''
      });
      setQuestionStatus('active');
    } else {
      setQuestion({
        category: question.category,
        question: '',
        correct_answer: '',
        incorrect_answer1: '',
        incorrect_answer2: '',
        incorrect_answer3: ''
      });
    }
    setQuestionsCounter(questionsCounter + 1);
  }

  const privateCategory = sessionStorage.getItem('category');
  const isPrivateSet = sessionStorage.getItem('isPrivateSet');

  React.useEffect(() => {
    if (privateCategory !== '') {
      setQuestion({ category: privateCategory });
      setQuestionStatus('active');
    }
  }, []);

  function onClickFinished() {
    setFinished(true);
  }

  const addMore = () => {
    setFinished(false);
  };

  return (
    <>
      {!finished && (
        <BigContainer>
          <Form onSubmit={handleSubmit}>
            <Status>
              {isPrivateSet === 'true' && <Lock />}
              {isPrivateSet === 'false' && <Planet />}
              <QuestionsCounter>
                <QuestionMark />
                <Text>{questionsCounter}</Text>
              </QuestionsCounter>
            </Status>
            <Input
              type="text"
              value={question.category}
              name="category"
              onChange={onChange}
              placeholder="Category"
              required
            />
            <Input
              type="text"
              value={question.question}
              name="question"
              onChange={onChange}
              placeholder="Question"
              autofocus
              required
            />
            <Input
              value={question.correct_answer}
              name="correct_answer"
              onChange={onChange}
              placeholder="Correct Answer"
              required
            />
            <Input
              type="text"
              value={question.incorrect_answer1}
              name="incorrect_answer1"
              onChange={onChange}
              placeholder="Wrong Answer 1"
              required
            />
            <Input
              type="text"
              value={question.incorrect_answer2}
              name="incorrect_answer2"
              onChange={onChange}
              placeholder="Wrong Answer 2"
              required
            />
            <Input
              type="text"
              value={question.incorrect_answer3}
              name="incorrect_answer3"
              onChange={onChange}
              placeholder="Wrong Answer 3"
              required
            />
            <Nav>
              <NavButton>Submit </NavButton>
              <NavButton value="Submit" onClick={onClickFinished}>
                Finished adding{' '}
              </NavButton>
            </Nav>
          </Form>
        </BigContainer>
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
