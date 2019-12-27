import React from 'react';
import styled from '@emotion/styled';
import ButtonLink from './ButtonLink';
import Dice from '../icons/Dice';

const BigContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
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

const TextWrapper = styled.div`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;

export default function PrivateConfirmationCard(props) {
  function handleClickOnMore() {
    props.addMore();
  }
  return (
    <BigContainer>
      <TextWrapper>
        Congrats ! You’ve created a private set with<p> {props.questions} </p>questions. Just share
        this unique code
        <p>{sessionStorage.getItem('category')}</p>
        with your friends. No one, without the hash can see your set ! Wanna test your set? hit the
        dice!
      </TextWrapper>
      <ButtonLink to="/play">
        <Dice />
      </ButtonLink>
      <Nav>
        <NavButton onClick={handleClickOnMore}>
          {' '}
          Wait, let me add more or I forgot to submit last question
        </NavButton>
      </Nav>
    </BigContainer>
  );
}
