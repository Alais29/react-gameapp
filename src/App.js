import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GamesContextProvider from './context/GamesContext';
import HomePage from './pages/Home/HomePage.component';
import Header from './components/Common/Header/Header.component';
import Footer from './components/Common/Footer/Footer.component';

const App = () => (
  <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/'>
          <GamesContextProvider>
            <HomePage />
          </GamesContextProvider>
        </Route>
      </Switch>
    <Footer />
  </BrowserRouter>
)

export default App;
