import React from 'react'
// import Grid from "@material-ui/core/Grid";
import Game from './../Game/Game.component';

import './SearchedGames.styles.scss';

const SearchedGames = ({searchedGames}) => {
  return ( 
    <div className="qgames-container">
      <Game games={searchedGames} />
    </div>
  );
}
 
export default SearchedGames;