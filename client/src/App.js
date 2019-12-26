import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import primary from './themes/primary';
import LandingPage from './pages/LandingPage';
import FormPage from './pages/FormPage';
import ChooseGameModePage from './pages/ChooseGameModePage';
import PlayOrAddSetPage from './pages/PlayOrAddSetPage';
import PlayPage from './pages/PlayPage';
import PublicOrPrivateSetPage from './pages/PublicOrPrivateSetPage';

function App() {
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
              <ChooseGameModePage />
            </Route>
            <Route path="/puborprivate">
              <PublicOrPrivateSetPage />
            </Route>
            <Route path="/play">
              <PlayPage />
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
