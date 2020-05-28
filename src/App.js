import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import Container from '@material-ui/core/Container';
import GamesContextProvider from './context/GamesContext';
import GamesDetailsContextProvider from './context/GameDetailsContext';
import GenresContextProvider from './context/GenresContext';
import GenreDetailContextProvider from './context/GenreDetailContext';
import HomePage from './pages/Home/HomePage.component';
import Header from './components/Common/Header/Header.component';
import GameDetails from './pages/GameDetails/GameDetails.component';
import Genres from './pages/Genres/Genres.component';
import GenreDetail from './components/GenreDetail/GenreDetail.component';
import Footer from './components/Common/Footer/Footer.component';
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Container maxWidth="lg" className="main-container">
      <Switch>
        <Route exact path='/'>
          <GamesContextProvider>
            <HomePage />
          </GamesContextProvider>
        </Route>
        <Route path={`/games/details/:id`}>
          <SimpleReactLightbox>
            <GamesDetailsContextProvider>
              <GameDetails />
            </GamesDetailsContextProvider>
          </SimpleReactLightbox>
        </Route>
        <Route path={'/genres'}>
          <GenresContextProvider>
            <Genres />
          </GenresContextProvider>
        </Route>
        <Route path={'/genres/:id'}>
          <GenreDetailContextProvider>
            <GenreDetail />
          </GenreDetailContextProvider>
        </Route>
      </Switch>
    </Container>
    <Footer />
  </BrowserRouter>
)

export default App;
