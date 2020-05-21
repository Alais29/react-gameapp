import React, { Fragment, useContext } from 'react';
import {GamesContext} from './../../context/GamesContext';

const HomePage = () => {
  const {doneFetchPopularGames, doneFetchUpcomingGames, doneFetchNewGames, doneFetchSearchedGames, doneFetchGameDetails, popularGames, upcomingGames, newGames, searchedGames, gameDetails} = useContext(GamesContext);
  return ( 
    <Fragment>
      <h1>Home</h1>
      {doneFetchPopularGames ? 
        (popularGames.map(game => (
          <p>{game.name}</p>
        )))
        :
        <p>Cargando...</p>
      }
    </Fragment>
  );
}
 
export default HomePage;
