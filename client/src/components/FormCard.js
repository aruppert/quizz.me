import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Planet from '../icons/Planet';
import Button from './Button';

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

const NavButton = styled(Button)`
  border: 2px solid white;
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
  color: ${props => props.theme.colors.text1};
  width: 50%;
  flex-grow: 1;
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
        incorrect_answer3: question.incorrect_answer3
      })
    });
    setQuestion({
      category: '',
      question: '',
      correct_answer: '',
      incorrect_answer1: '',
      incorrect_answer2: '',
      incorrect_answer3: ''
    });
  }

  return (
    <BigContainer>
      <Form onSubmit={handleSubmit}>
        <Planet />
        <Input
          value={question.category}
          name="category"
          onChange={onChange}
          placeholder="Category"
        />
        <Input
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
          value={question.incorrect_answer1}
          name="incorrect_answer1"
          onChange={onChange}
          placeholder="Wrong Answer 1"
        />
        <Input
          value={question.incorrect_answer2}
          name="incorrect_answer2"
          onChange={onChange}
          placeholder="Wrong Answer 2"
        />
        <Input
          value={question.incorrect_answer3}
          name="incorrect_answer3"
          onChange={onChange}
          placeholder="Wrong Answer 3"
        />
        <Nav>
          <NavButton>Submit </NavButton>
        </Nav>
      </Form>
    </BigContainer>
  );
}
