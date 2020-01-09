import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  secondary,
  primary,
  tertiary,
  quaternary,
  quinary,
  senary,
  septenary,
  octonary,
  nonary
} from './themes/themes';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ChooseGameModePage from './pages/ChooseGameModePage';
import PlayOrAddSetPage from './pages/PlayOrAddSetPage';
import SinglePlayerPage from './pages/SinglePlayerPage';
import MultiPlayerPage from './pages/MultiPlayerPage';
import PublicOrPrivateSetPage from './pages/PublicOrPrivateSetPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = React.useState(4);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(2);
  const [privateCode, setPrivateCode] = React.useState('');
  const [nameOfPlayer1, setNameOfPlayer1] = React.useState('Player 1');
  const [nameOfPlayer2, setNameOfPlayer2] = React.useState('Player 2');
  const [theme, setTheme] = React.useState(8);

  function chooseNamePlayer1(name) {
    setNameOfPlayer1(name);
  }

  function chooseNamePlayer2(name) {
    setNameOfPlayer2(name);
  }

  const themeColors = {
    1: primary,
    2: secondary,
    3: tertiary,
    4: quaternary,
    5: quinary,
    6: senary,
    7: septenary,
    8: octonary,
    9: nonary
  };

  const activeTheme = themeColors[theme];

  function handleThemeClick() {
    if (theme < 9) {
      setTheme(theme + 1);
    } else {
      setTheme(1);
    }
  }
  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route>
              <Header onThemeButtonClick={() => handleThemeClick} />
              <Switch>
                <Route path="/add">
                  <FormPage privateCode={privateCode} />
                </Route>
                <Route path="/choose">
                  <ChooseGameModePage
                    onAmountOfQuestionsChange={amountOfQuestions =>
                      setAmountOfQuestions(amountOfQuestions)
                    }
                    amountOfQuestions={amountOfQuestions}
                    privateCode={privateCode}
                    setNumberOfPlayers={number => setNumberOfPlayers(number)}
                    numberOfPlayers={numberOfPlayers}
                    onChangePrivateCode={value => setPrivateCode(value)}
                    chooseNamePlayer1={chooseNamePlayer1}
                    chooseNamePlayer2={chooseNamePlayer2}
                  />
                </Route>
                <Route path="/privacy">
                  <PublicOrPrivateSetPage
                    onChangePrivateCode={privateCode => setPrivateCode(privateCode)}
                    privateCode={privateCode}
                  />
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
              </Switch>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
