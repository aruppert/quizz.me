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

export default function PublicConfirmationCard(props) {
  function handleClickOnMore() {
    props.addMore();
  }
  return (
    <BigContainer>
      <TextWrapper>
        Thank you for contributing <p>{props.questions}</p> questions to the public domain. Your
        questions will be reviewed by an admin and set active very soon. Wanna play now? Hit the
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
