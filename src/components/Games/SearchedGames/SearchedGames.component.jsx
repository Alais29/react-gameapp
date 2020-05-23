import React from 'react'
// import Grid from "@material-ui/core/Grid";
import GamesTop from './../GamesTop/GamesTop.component'

const SearchedGames = ({searchedGames}) => {
  return ( 
    <div className="qgames-container">
      <GamesTop games={searchedGames} />
    </div>
  );
}
 
export default SearchedGames;