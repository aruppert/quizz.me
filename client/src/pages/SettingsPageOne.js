import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ChooseContainer from '../components/container/ChooseContainer';
import SettingsButton from '../components/buttons/SettingsButton';
import TextWrapper from '../components/textAndInput/TextWrapper';
import Input from '../components/textAndInput/Input';
import { flexColumnCenter } from '../styles/General';
import Planet from '../icons/Planet';
import Lock from '../icons/Lock';
import StyledButton from '../components/buttons/StyledButton';

const StyledTextWrapper = styled(TextWrapper)`
  font-size: 1.1rem;
  margin: 30px 0 10px;
  width: 220px;
`;
const PlayerContainer = styled.div`
  margin: 0 0 10px;
`;

const AmountOfPlayersButton = styled(SettingsButton)`
  margin: 10px 30px;
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

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
`;

export default function SettingsPageOne({
  numberOfPlayers,
  setNumberOfPlayers,
  privateCode,
  setShowError,
  setShowFirstSettings,
  onChangePrivateCode
}) {
  function handlePrivateClick() {
    if (privateCode === '') {
      setShowError(true);
      return null;
    } else {
      sessionStorage.setItem('isPrivateSet', true);
      setShowError(false);
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
    <>
      <ChooseContainer>
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
      </ChooseContainer>
    </>
  );
}

SettingsPageOne.propTypes = {
  numberOfPlayers: PropTypes.number,
  setNumberOfPlayers: PropTypes.func,
  privateCode: PropTypes.string,
  setShowError: PropTypes.func,
  setShowFirstSettings: PropTypes.func,
  onChangePrivateCode: PropTypes.func
};
