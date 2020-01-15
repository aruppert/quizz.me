import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import ButtonLink from '../components/buttons/ButtonLink';
import SettingsButton from '../components/buttons/SettingsButton';
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
  width: 320px;
  height: 370px;
  border-radius: 25px 0px;
`;
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
`;

const StyledTextWrapper = styled(TextWrapper)`
  font-size: 1.1rem;
  margin: 30px 0 10px;
  width: 220px;
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
  padding: 10px;
`;

const CodeInput = styled(Input)`
  width: 80%;

  margin: 0 20px 0;
  align-self: center;
`;

const NameInput = styled(Input)`
  margin: 5px 10px;
  width: 35%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const PlayerContainer = styled.div`
  margin: 0 0 10px;
`;

const QuestionsContainer = styled.div`
  margin: 0 0 20px;
`;

const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 80%;
  height: 10%;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.colors.warn};
  background: ${props => props.theme.colors.background};
  z-index: 1000;
  align-self: center;
  margin: 30px 0 0;
  color: ${props => props.theme.colors.warn};
`;

const AmountOfPlayersButton = styled(SettingsButton)`
  margin: 10px 30px;
`;

const AmountOfQuestionsButton = styled(SettingsButton)`
  margin: 10px 12px 0;
`;

export default function ChooseGameModePage({
  onAmountOfQuestionsChange,
  amountOfQuestions,
  privateCode,
  setNumberOfPlayers,
  numberOfPlayers,
  onChangePrivateCode,
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
            <AmountOfPlayersButton
              active={numberOfPlayers === 1}
              onClick={() => setNumberOfPlayers(1)}
              type="radio"
            >
              1 Player
            </AmountOfPlayersButton>
            <AmountOfPlayersButton
              active={numberOfPlayers === 2}
              onClick={() => setNumberOfPlayers(2)}
              type="radio"
            >
              2 Players
            </AmountOfPlayersButton>
            <AmountOfPlayersButton
              active={numberOfPlayers === 3}
              onClick={() => setNumberOfPlayers(3)}
              type="radio"
            >
              3 Players
            </AmountOfPlayersButton>
            <AmountOfPlayersButton
              active={numberOfPlayers === 4}
              onClick={() => setNumberOfPlayers(4)}
              type="radio"
            >
              4 Players
            </AmountOfPlayersButton>
          </PlayerContainer>
          <StyledTextWrapper>Choose public questions or enter your private code:</StyledTextWrapper>
          <FlexContainer>
            <FlexColumn>
              <StyledButton onClick={handlePublicClick}>
                PUBLIC
                <Planet />
              </StyledButton>
            </FlexColumn>
            <FlexColumn>
              <CodeInput placeholder="enter code here" onChange={handleCodeChange} />
              <Lock onClick={handlePrivateClick} />
            </FlexColumn>
          </FlexContainer>
        </Container>
      )}

      {!showFirstSettings && (
        <Container>
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
          <StyledButton to="/play">
            START HERE <Rocket />
          </StyledButton>
        </Container>
      )}
      {showError && <ErrorContainer>Enter your code and try again!</ErrorContainer>}
    </Main>
  );
}

ChooseGameModePage.propTypes = {
  amountOfQuestions: PropTypes.number,
  onAmountOfQuestionsChange: PropTypes.func,
  setNumberOfPlayers: PropTypes.func,
  onChangePrivateCode: PropTypes.func,
  privateCode: PropTypes.string,
  numberOfPlayers: PropTypes.number,
  onChangeNameOfPlayer1: PropTypes.func,
  onChangeNameOfPlayer2: PropTypes.func,
  onChangeNameOfPlayer3: PropTypes.func,
  onChangeNameOfPlayer4: PropTypes.func
};
