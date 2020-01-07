import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { secondary } from './themes/themes';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ChooseGameModePage from './pages/ChooseGameModePage';
import PlayOrAddSetPage from './pages/PlayOrAddSetPage';
import SinglePlayerPage from './pages/SinglePlayerPage';
import MultiPlayerPage from './pages/MultiPlayerPage';
import PublicOrPrivateSetPage from './pages/PublicOrPrivateSetPage';

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = React.useState(4);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(1);
  const [privateCode, setPrivateCode] = React.useState('');
  const [nameOfPlayer1, setNameOfPlayer1] = React.useState('' || 'Player 1');
  const [nameOfPlayer2, setNameOfPlayer2] = React.useState('' || 'Player 2');

  function chooseNamePlayer1(name) {
    setNameOfPlayer1(name);
  }

  function chooseNamePlayer2(name) {
    setNameOfPlayer2(name);
  }

  return (
    <>
      <ThemeProvider theme={secondary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path="/add">
              <FormPage />
            </Route>
            <Route path="/choose">
              <ChooseGameModePage
                setAmountOfQuestions={setAmountOfQuestions}
                amountOfQuestions={amountOfQuestions}
                setNumberOfPlayers={number => setNumberOfPlayers(number)}
                numberOfPlayers={numberOfPlayers}
                setPrivateCode={value => setPrivateCode(value)}
                chooseNamePlayer1={chooseNamePlayer1}
                chooseNamePlayer2={chooseNamePlayer2}
              />
            </Route>
            <Route path="/puborprivate">
              <PublicOrPrivateSetPage />
            </Route>
            <Route path="/play">
              {numberOfPlayers === 1 && (
                <SinglePlayerPage
                  amountOfQuestions={amountOfQuestions}
                  privateCode={privateCode}
                  nameOfPlayer1={nameOfPlayer1}
                />
              )}
              {numberOfPlayers === 2 && (
                <MultiPlayerPage
                  amountOfQuestions={amountOfQuestions}
                  privateCode={privateCode}
                  nameOfPlayer1={nameOfPlayer1}
                  nameOfPlayer2={nameOfPlayer2}
                />
              )}
            </Route>
            <Route path="/playoradd">
              <PlayOrAddSetPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
