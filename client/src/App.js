import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import primary from './themes/primary';
import Header from './components/Header';
import Footer from './components/Footer';
import HashInsert from './components/HashInsertCard';
import FormCard from './components/FormCard';
import CategoryCard from './components/CategoryCard';
import styled from '@emotion/styled';
import PlayCard from './components/PlayCard';
import AddQuestionsCard from './components/AddQuestionsCard';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={primary}>
        <Router>
          <GlobalStyles />
          <Main>
            <Header />
            <Switch>
              <Route path="/add">
                <FormCard />
              </Route>
              <Route path="/choosegamemode">
                <CategoryCard />
                <HashInsert />
              </Route>
              <Route path="/">
                <PlayCard />
                <AddQuestionsCard />
              </Route>
            </Switch>
          </Main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
