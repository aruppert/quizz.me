import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import ButtonLink from '../components/ButtonLink';
import SettingsButton from '../components/SettingsButton';
import Rocket from '../icons/Rocket';
import { flexColumnCenter, linearGradientBoxShadow } from '../styles/General';
import TextWrapper from '../components/TextWrapper';

const Main = styled.main`
  ${flexColumnCenter};
  justify-content: space-around;
  height: 100%;
  margin: auto;
  width: 375px;
`;
const Container = styled.div`
  ${flexColumnCenter};
  ${linearGradientBoxShadow};
  justify-content: space-around;
  align-self: center;
  text-align: center;
  color: ${props => props.theme.colors.text1};
  width: 340px;
  height: 325px;
  border-radius: 25px 0px;
`;
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
`;

const StyledTextWrapper = styled(TextWrapper)`
  margin: 30px 0 20px;
`;

const StyledButton = styled(ButtonLink)`
  display: flex;
  height: 100%;
  width: 50%;
  flex-flow: column;
  justify-content: space-evenly;
  text-decoration: none;
  color: ${props => props.theme.colors.text1};
`;

const FlexColumn = styled.div`
  ${flexColumnCenter};
  justify-content: space-evenly;
  height: 100%;
  width: 50%;
`;

const CodeInput = styled(Input)`
  width: 75%;
  padding: 3px;
  margin: 3px;
  align-self: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const PlayerContainer = styled.div`
  margin: 0 0 30px;
`;

const QuestionsContainer = styled.div`
  margin: 0 0 20px;
`;

const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1000;
  align-self: center;
  margin: 30px 0 0;
  color: ${props => props.theme.colors.warn};
`;

const RadioButton = styled(SettingsButton)``;

export default function ChooseGameModePage({
  onAmountOfQuestionsChange,
  amountOfQuestions,
  privateCode,
  setNumberOfPlayers,
  numberOfPlayers,
  onChangePrivateCode,
  namesOfPlayers,
  onChangeNameOfPlayer1,
  onChangeNameOfPlayer2,
  onChangeNameOfPlayer3,
  onChangeNameOfPlayer4
}) {
  const [showFirstSettings, setShowFirstSettings] = React.useState(true);
  const [showError, setShowError] = React.useState(false);

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

  function handlePrivateClick() {
    if (privateCode === '') {
      setShowError(true);
      return null;
    } else {
      sessionStorage.setItem('isPrivateSet', true);
      setShowFirstSettings(false);
    }
  }

  function handlePublicClick() {
    sessionStorage.setItem('isPrivateSet', false);
    setShowFirstSettings(false);
    setShowError(false);
  }

  function handleCodeChange(event) {
    const value = event.target.value;
    onChangePrivateCode(value);
  }

  return (
    <Main>
      {showFirstSettings && (
        <Container>
          <StyledTextWrapper>How many want to play?</StyledTextWrapper>
          <PlayerContainer>
            <RadioButton
              active={numberOfPlayers === 1}
              onClick={() => setNumberOfPlayers(1)}
              type="radio"
            >
              1 Player
            </RadioButton>
            <RadioButton
              active={numberOfPlayers === 2}
              onClick={() => setNumberOfPlayers(2)}
              type="radio"
            >
              2 Players
            </RadioButton>
            <RadioButton
              active={numberOfPlayers === 3}
              onClick={() => setNumberOfPlayers(3)}
              type="radio"
            >
              3 Players
            </RadioButton>
            <RadioButton
              active={numberOfPlayers === 4}
              onClick={() => setNumberOfPlayers(4)}
              type="radio"
            >
              4 Players
            </RadioButton>
          </PlayerContainer>
          <StyledTextWrapper>Please choose public or enter your code:</StyledTextWrapper>
          <FlexContainer>
            <FlexColumn>
              <StyledButton onClick={handlePublicClick}>
                PUBLIC
                <Planet />
              </StyledButton>
            </FlexColumn>
            <FlexColumn>
              <CodeInput placeholder="Code goes here" onChange={handleCodeChange} />
              <Lock onClick={handlePrivateClick} />
            </FlexColumn>
          </FlexContainer>
        </Container>
      )}

      {!showFirstSettings && (
        <Container>
          {numberOfPlayers === 1 ? (
            <>
              <StyledTextWrapper>Enter your name:</StyledTextWrapper>
              <Input placeholder="Player 1" number="1" onChange={handleChangePlayer1}></Input>{' '}
            </>
          ) : (
            <>
              <StyledTextWrapper>Enter your names:</StyledTextWrapper>
              <InputContainer>
                <Input placeholder="Player 1" onChange={handleChangePlayer1}></Input>
                <Input placeholder="Player 2" onChange={handleChangePlayer2}></Input>
                <Input placeholder="Player 3" onChange={handleChangePlayer3}></Input>
                <Input placeholder="Player 4" onChange={handleChangePlayer4}></Input>
              </InputContainer>
            </>
          )}
          <StyledTextWrapper> How many questions do you want to play?</StyledTextWrapper>

          <QuestionsContainer>
            <RadioButton
              active={amountOfQuestions === 3}
              onClick={() => handleQuestionAmountClick(3)}
              type="radio"
            >
              3
            </RadioButton>
            <RadioButton
              active={amountOfQuestions === 5}
              onClick={() => handleQuestionAmountClick(5)}
              type="radio"
            >
              5
            </RadioButton>
            <RadioButton
              active={amountOfQuestions === 7}
              onClick={() => handleQuestionAmountClick(7)}
              type="radio"
            >
              7
            </RadioButton>
            <RadioButton
              active={amountOfQuestions === 9}
              onClick={() => handleQuestionAmountClick(9)}
              type="radio"
            >
              9
            </RadioButton>
            <RadioButton
              active={amountOfQuestions === 11}
              onClick={() => handleQuestionAmountClick(11)}
              type="radio"
            >
              11
            </RadioButton>
          </QuestionsContainer>
          <StyledButton to="/play">
            START HERE <Rocket />
          </StyledButton>
        </Container>
      )}
      {showError && <ErrorContainer>Code is missing!</ErrorContainer>}
    </Main>
  );
}

ChooseGameModePage.propTypes = {
  amountOfQuestions: PropTypes.number,
  onAmountOfQuestionsChange: PropTypes.func,
  setNumberOfPlayers: PropTypes.func,
  chooseNamePlayer1: PropTypes.func,
  chooseNamePlayer2: PropTypes.func,
  onChangePrivateCode: PropTypes.func
};
