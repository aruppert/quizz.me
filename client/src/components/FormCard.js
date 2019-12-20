import React from 'react';
import styled from '@emotion/styled';
import InputField from './InputField';
import Lock from '../icons/Lock';
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

const Form = styled.div`
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

const Input = styled(InputField)`
  align-self: center;
  height: 25px;
  width: 280px;
  font-size: 0.75em;
`;

export default function FormCard() {
  return (
    <BigContainer>
      <Form>
        <Lock />
        <Input placeholder="Category" />
        <Input placeholder="Question" />
        <Input placeholder="Correct Answer" />
        <Input placeholder="Wrong Answer 1" />
        <Input placeholder="Wrong Answer 2" />
        <Input placeholder="Wrong Answer 3" />
        <Nav>
          <NavButton>Create one more</NavButton>
          <NavButton>Submit </NavButton>
        </Nav>
      </Form>
    </BigContainer>
  );
}
