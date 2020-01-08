import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import ButtonLink from '../components/ButtonLink';
import SettingsButton from '../components/SettingsButton';
import Rocket from '../icons/Rocket';

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 50%;

  background: linear-gradient(
    to right,
    ${props => props.theme.colors.card2},
    ${props => props.theme.colors.card1}
  );
  border-radius: 25px 0px 25px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
`;
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
`;

const TextWrapper = styled.p`
  text-align: center;
  align-self: center;
  color: ${props => props.theme.colors.text1};
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
  display: flex;
  height: 100%;
  width: 50%;
  flex-flow: column;
  justify-content: space-evenly;
`;

const CodeInput = styled(Input)`
  width: 75%;
  align-self: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
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

export default function ChooseGameModePage(props) {
  const [showFirstSettings, setShowFirstSettings] = React.useState(true);
  const [uniqueCode, setUniqueCode] = React.useState('');
  const [showError, setShowError] = React.useState(false);

  function handleChangePlayer1(event) {
    const value = event.target.value;
    props.chooseNamePlayer1(value);
  }
  function handleChangePlayer2(event) {
    const value = event.target.value;
    props.chooseNamePlayer2(value);
  }

  function handleQuestionAmountClick(number) {
    props.onAmountOfQuestionsChange(number);
  }

  function handlePrivateClick(event) {
    if (uniqueCode === '') {
      setShowError(true);
      return null;
    } else {
      props.onChangePrivateCode(uniqueCode);
      sessionStorage.setItem('privateCode', uniqueCode);
      sessionStorage.setItem('isPrivateSet', true);
      setShowFirstSettings(false);
    }
  }
  console.log(uniqueCode);

  function handlePublicClick() {
    sessionStorage.setItem('privateCode', '');
    sessionStorage.setItem('isPrivateSet', false);
    setShowFirstSettings(false);
    setShowError(false);
  }

  function handleCodeChange(event) {
    const value = event.target.value;
    setUniqueCode(value);
    props.setPrivateCode(value);
  }

  return (
    <Main>
      <Header />
      {showFirstSettings && (
        <Container>
          <TextWrapper>How many want to play?</TextWrapper>
          <PlayerContainer>
            <RadioButton
              active={props.numberOfPlayers === 1}
              onClick={() => props.setNumberOfPlayers(1)}
              type="radio"
            >
              1 Player
            </RadioButton>
            <RadioButton
              active={props.numberOfPlayers === 2}
              onClick={() => props.setNumberOfPlayers(2)}
              type="radio"
            >
              2 Players
            </RadioButton>
          </PlayerContainer>
          <TextWrapper>Please choose public or enter your code:</TextWrapper>
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
          {props.numberOfPlayers === 1 ? (
            <>
              <TextWrapper>Enter your name:</TextWrapper>
              <Input placeholder="Player 1" hanldeCodeChange={handleChangePlayer1}></Input>{' '}
            </>
          ) : (
            <>
              <TextWrapper>Enter your names:</TextWrapper>
              <InputContainer>
                <Input placeholder="Player 1" onChange={handleChangePlayer1}></Input>
                <Input placeholder="Player 2" onChange={handleChangePlayer2}></Input>{' '}
              </InputContainer>
            </>
          )}
          <TextWrapper> How many questions do you want to play?</TextWrapper>

          <QuestionsContainer>
            <RadioButton
              active={props.amountOfQuestions === 4}
              onClick={() => handleQuestionAmountClick(4)}
              type="radio"
            >
              4
            </RadioButton>
            <RadioButton
              active={props.amountOfQuestions === 8}
              onClick={() => handleQuestionAmountClick(8)}
              type="radio"
            >
              8
            </RadioButton>
            <RadioButton
              active={props.amountOfQuestions === 12}
              onClick={() => handleQuestionAmountClick(12)}
              type="radio"
            >
              12
            </RadioButton>
          </QuestionsContainer>
          <StyledButton to="/play">
            START HERE <Rocket />
          </StyledButton>
        </Container>
      )}
      {showError && <ErrorContainer>Code is missing!</ErrorContainer>}

      <Footer />
    </Main>
  );
}

ChooseGameModePage.propTypes = {
  amountOfQuestions: PropTypes.number,
  onAmountOfQuestionsChange: PropTypes.func,
  setNumberOfPlayers: PropTypes.func,
  setPrivateCode: PropTypes.func,
  chooseNamePlayer1: PropTypes.func,
  chooseNamePlayer2: PropTypes.func,
  onChangePrivateCode: PropTypes.string
};
