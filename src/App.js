import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import GamesContextProvider from './context/GamesContext';
import GamesDetailsContextProvider from './context/GameDetailsContext';
import HomePage from './pages/Home/HomePage.component';
import Header from './components/Common/Header/Header.component';
import GameDetails from './pages/GameDetails/GameDetails.component';
import Footer from './components/Common/Footer/Footer.component';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Container maxWidth="lg">
      <Switch>
        <Route exact path='/'>
          <GamesContextProvider>
            <HomePage />
          </GamesContextProvider>
        </Route>
        <Route path={`/games/details/:id`}>
          <GamesDetailsContextProvider>
            <GameDetails />
          </GamesDetailsContextProvider>
        </Route>
      </Switch>
    </Container>
    <Footer />
  </BrowserRouter>
)

export default App;
