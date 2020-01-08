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
  justify-content: center;
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
  width: fit-content;
`;

const TextWrapper = styled.p`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
  margin: 20px;
`;
const TextWrapperWarning = styled(TextWrapper)`
  color: ${props => props.theme.colors.warn};
`;

export default function PrivateConfirmationCard(props) {
  function handleClickOnMore() {
    props.addMore();
  }
  return (
    <BigContainer>
      {props.questions === 0 ? (
        <>
          <TextWrapperWarning>Oops, you didn't add any questions.</TextWrapperWarning>
          <TextWrapper>
            Please go back with the button below or start a game with the dice:
          </TextWrapper>
          <Nav>
            <NavButton onClick={handleClickOnMore}> I will do better this time</NavButton>
          </Nav>
        </>
      ) : (
        <>
          <TextWrapper>
            Congrats! You’ve created a private set with<p> {props.questions} </p>question(s). Just
            share this unique code
            <p>{sessionStorage.getItem('privateCode')}</p>
            with your friends. No one, without the private code can play your set! Wanna test your
            set? Hit the dice and enter your code!
          </TextWrapper>
          <ButtonLink to="/play">
            <Dice />
          </ButtonLink>
          <Nav>
            <NavButton onClick={handleClickOnMore}> Wait, I love this - let me add more!</NavButton>
          </Nav>{' '}
        </>
      )}
    </BigContainer>
  );
}
