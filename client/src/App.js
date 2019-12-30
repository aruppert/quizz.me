import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import primary from './themes/primary';
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
  const [categories, setCategories] = React.useState([]);
  const [privateCode, setPrivateCode] = React.useState('');
  console.log(amountOfQuestions);
  console.log(numberOfPlayers);
  console.log(categories);
  function addCategory(name) {
    setCategories([...categories, name]);
  }
  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path="/add">
              <FormPage />
            </Route>
            <Route path="/choose">
              <ChooseGameModePage
                setAmountOfQuestions={setAmountOfQuestions}
                setNumberOfPlayers={setNumberOfPlayers}
                addCategory={addCategory}
                setPrivateCode={setPrivateCode}
              />
            </Route>
            <Route path="/puborprivate">
              <PublicOrPrivateSetPage />
            </Route>
            <Route path="/play">
              {numberOfPlayers === 1 && (
                <SinglePlayerPage
                  amountOfQuestions={amountOfQuestions}
                  selectedCategories={categories}
                  privateCode={privateCode}
                />
              )}
              {numberOfPlayers === 2 && (
                <MultiPlayerPage
                  amountOfQuestions={amountOfQuestions}
                  privateCode={privateCode}
                  selectedCategories={categories}
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
