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
import PlayPage from './pages/PlayPage';
import PublicOrPrivateSetPage from './pages/PublicOrPrivateSetPage';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import HighscorePage from './pages/HighscorePage';

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = React.useState(3);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(1);
  const [privateCode, setPrivateCode] = React.useState('');
  const [theme, setTheme] = React.useState(5);

  const [namesOfPlayers, setNamesOfPlayers] = React.useState({
    1: 'Player 1',
    2: 'Player 2',
    3: 'Player 3',
    4: 'Player 4'
  });

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
                    onAmountOfQuestionsChange={amount => setAmountOfQuestions(amount)}
                    amountOfQuestions={amountOfQuestions}
                    privateCode={privateCode}
                    setNumberOfPlayers={number => setNumberOfPlayers(number)}
                    numberOfPlayers={numberOfPlayers}
                    onChangePrivateCode={value => setPrivateCode(value)}
                    namesOfPlayers={namesOfPlayers}
                    onChangeNameOfPlayer1={name =>
                      setNamesOfPlayers({ ...namesOfPlayers, 1: name })
                    }
                    onChangeNameOfPlayer2={name =>
                      setNamesOfPlayers({ ...namesOfPlayers, 2: name })
                    }
                    onChangeNameOfPlayer3={name =>
                      setNamesOfPlayers({ ...namesOfPlayers, 3: name })
                    }
                    onChangeNameOfPlayer4={name =>
                      setNamesOfPlayers({ ...namesOfPlayers, 4: name })
                    }
                  />
                </Route>
                <Route path="/privacy">
                  <PublicOrPrivateSetPage
                    onChangePrivateCode={privateCode => setPrivateCode(privateCode)}
                    privateCode={privateCode}
                  />
                </Route>
                <Route path="/play">
                  <PlayPage
                    numberOfPlayers={numberOfPlayers}
                    amountOfQuestions={amountOfQuestions}
                    privateCode={privateCode}
                    namesOfPlayers={namesOfPlayers}
                  />
                </Route>
                <Route path="/playoradd">
                  <PlayOrAddSetPage />
                </Route>
                <Route path="/highscore">
                  <HighscorePage />
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
