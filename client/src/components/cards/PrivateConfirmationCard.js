import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ButtonLink from '../buttons/ButtonLink';
import Dice from '../../icons/Dice';
import {
  flexColumnCenter,
  noBorderOutlineBGTextDeco,
  TextCenterColorOneMargin20
} from '../../styles/General';
import BigContainer from '../container/BigContainer';

const StyledBigContainer = styled(BigContainer)`
  ${flexColumnCenter};
  flex-flow: column;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  ${noBorderOutlineBGTextDeco};
  border: 2px solid white;
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  margin: 0px 5px;
  color: ${props => props.theme.colors.text1};
  width: fit-content;
`;

const TextWrapper = styled.div`
  ${TextCenterColorOneMargin20};
`;
const TextWrapperWarning = styled(TextWrapper)`
  color: ${props => props.theme.colors.warn};
`;

export default function PrivateConfirmationCard(props) {
  function handleClickOnMore() {
    props.addMore();
  }

  console.log(props.privateCode);
  return (
    <StyledBigContainer>
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
            <p>{props.privateCode}</p>
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
    </StyledBigContainer>
  );
}

PrivateConfirmationCard.propTypes = {
  addMore: PropTypes.func,
  questions: PropTypes.number,
  privateCode: PropTypes.string
};
