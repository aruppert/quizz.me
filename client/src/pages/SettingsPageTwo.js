import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/textAndInput/Input';
import TextWrapper from '../components/textAndInput/TextWrapper';
import SettingsButton from '../components/buttons/SettingsButton';
import StyledButtonLink from '../components/buttons/StyledButtonLink';
import Rocket from '../icons/Rocket';
import ChooseContainer from '../components/container/ChooseContainer';

const StyledTextWrapper = styled(TextWrapper)`
  font-size: 1.1rem;
  margin: 30px 0 10px;
  width: 220px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const NameInput = styled(Input)`
  margin: 5px 10px;
  width: 35%;
`;

const QuestionsContainer = styled.div`
  margin: 0 0 20px;
`;

const AmountOfQuestionsButton = styled(SettingsButton)`
  margin: 10px 12px 0;
`;

export default function SettingsPageTwo({
  numberOfPlayers,
  onChangeNameOfPlayer1,
  onChangeNameOfPlayer2,
  onChangeNameOfPlayer3,
  onChangeNameOfPlayer4,
  amountOfQuestions,
  onAmountOfQuestionsChange
}) {
  function handleChangePlayer1(event) {
    const value = event.target.value;
    onChangeNameOfPlayer1(value);
  }

  function handleChangePlayer2(event) {
    const value = event.target.value;
    onChangeNameOfPlayer2(value);
  }

  function handleChangePlayer3(event) {
    const value = event.target.value;
    onChangeNameOfPlayer3(value);
  }

  function handleChangePlayer4(event) {
    const value = event.target.value;
    onChangeNameOfPlayer4(value);
  }

  function handleQuestionAmountClick(number) {
    onAmountOfQuestionsChange(number);
  }
  return (
    <>
      <ChooseContainer>
        {numberOfPlayers === 1 ? (
          <StyledTextWrapper>Enter your name:</StyledTextWrapper>
        ) : (
          <StyledTextWrapper>Enter your names:</StyledTextWrapper>
        )}
        <InputContainer>
          <NameInput placeholder="Player 1" onChange={handleChangePlayer1}></NameInput>
          {numberOfPlayers > 1 && (
            <NameInput placeholder="Player 2" onChange={handleChangePlayer2}></NameInput>
          )}
          {numberOfPlayers > 2 && (
            <NameInput placeholder="Player 3" onChange={handleChangePlayer3}></NameInput>
          )}
          {numberOfPlayers > 3 && (
            <NameInput placeholder="Player 4" onChange={handleChangePlayer4}></NameInput>
          )}
        </InputContainer>
        <StyledTextWrapper> How many questions do you want to play?</StyledTextWrapper>

        <QuestionsContainer>
          <AmountOfQuestionsButton
            active={amountOfQuestions === 3}
            onClick={() => handleQuestionAmountClick(3)}
            type="radio"
          >
            3
          </AmountOfQuestionsButton>
          <AmountOfQuestionsButton
            active={amountOfQuestions === 5}
            onClick={() => handleQuestionAmountClick(5)}
            type="radio"
          >
            5
          </AmountOfQuestionsButton>
          <AmountOfQuestionsButton
            active={amountOfQuestions === 7}
            onClick={() => handleQuestionAmountClick(7)}
            type="radio"
          >
            7
          </AmountOfQuestionsButton>
          <AmountOfQuestionsButton
            active={amountOfQuestions === 9}
            onClick={() => handleQuestionAmountClick(9)}
            type="radio"
          >
            9
          </AmountOfQuestionsButton>
          <AmountOfQuestionsButton
            active={amountOfQuestions === 11}
            onClick={() => handleQuestionAmountClick(11)}
            type="radio"
          >
            11
          </AmountOfQuestionsButton>
        </QuestionsContainer>
        <StyledButtonLink to="/play">
          START HERE <Rocket />
        </StyledButtonLink>
      </ChooseContainer>
    </>
  );
}
SettingsPageTwo.propTypes = {
  numberOfPlayers: PropTypes.number,
  onChangeNameOfPlayer1: PropTypes.func,
  onChangeNameOfPlayer2: PropTypes.func,
  onChangeNameOfPlayer3: PropTypes.func,
  onChangeNameOfPlayer4: PropTypes.func,
  amountOfQuestions: PropTypes.number,
  onAmountOfQuestionsChange: PropTypes.func
};
