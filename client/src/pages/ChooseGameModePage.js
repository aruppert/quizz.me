import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { flexColumnCenter } from '../styles/General';
import ErrorContainer from '../components/container/ErrorContainer';
import SettingsPageOne from './SettingsPageOne';
import SettingsPageTwo from './SettingsPageTwo';

const Main = styled.main`
  ${flexColumnCenter};
  justify-content: space-around;
  height: 100%;
  margin: auto;
  width: 375px;
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

  return (
    <Main>
      {showFirstSettings && (
        <SettingsPageOne
          numberOfPlayers={numberOfPlayers}
          setNumberOfPlayers={setNumberOfPlayers}
          privateCode={privateCode}
          setShowError={setShowError}
          setShowFirstSettings={setShowFirstSettings}
          onChangePrivateCode={onChangePrivateCode}
        />
      )}
      {!showFirstSettings && (
        <SettingsPageTwo
          numberOfPlayers={numberOfPlayers}
          onChangeNameOfPlayer1={onChangeNameOfPlayer1}
          onChangeNameOfPlayer2={onChangeNameOfPlayer2}
          onChangeNameOfPlayer3={onChangeNameOfPlayer3}
          onChangeNameOfPlayer4={onChangeNameOfPlayer4}
          amountOfQuestions={amountOfQuestions}
          onAmountOfQuestionsChange={onAmountOfQuestionsChange}
        />
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
