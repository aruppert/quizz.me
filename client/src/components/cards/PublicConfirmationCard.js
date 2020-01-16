import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ButtonLink from '../buttons/ButtonLink';
import Dice from '../../icons/Dice';
import BigContainer from '../container/BigContainer';
import TextWrapper from '../textAndInput/TextWrapper';

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
  margin: 0px 5px;
  color: ${props => props.theme.colors.text};
  width: fit-content;
`;

const TextWrapperWarning = styled(TextWrapper)`
  color: ${props => props.theme.colors.warn};
`;

export default function PublicConfirmationCard(props) {
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
            Thank you for contributing <p>{props.questions}</p> question(s) to the public domain.
            Your question(s) will be reviewed by an admin and set active very soon. To play click
            the dice:
          </TextWrapper>
          <ButtonLink to="/play">
            <Dice />
          </ButtonLink>
          <TextWrapper>or add more with the button below:</TextWrapper>
          <Nav>
            <NavButton onClick={handleClickOnMore}> Wait, I love this - let me add more!</NavButton>
          </Nav>
        </>
      )}
    </BigContainer>
  );
}

PublicConfirmationCard.propTypes = {
  addMore: PropTypes.func,
  questions: PropTypes.number
};
