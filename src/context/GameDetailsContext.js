import React, {createContext, useState, useEffect} from 'react';
import {gameDetailsGet} from './../constants';

export const GameDetailsContext = createContext();

const GameDetailsContextProvider = ({children}) => {
  const game_id = window.location.pathname.split('/')[3];
  const [doneFetchGameDetails, setdoneFetchGameDetails] = useState(false);
  const [gameDetails, setGameDetails] = useState();

  useEffect(() => getGameDetails(game_id), [game_id]);

  const getGameDetails = (game_id) => {
    fetch(gameDetailsGet(game_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGameDetails(true);
        setGameDetails(data)
      })
      .catch(error => console.log(error));
  }

  return (
    <GameDetailsContext.Provider value={{doneFetchGameDetails, gameDetails}}>
      {children}
    </GameDetailsContext.Provider>
  )
}

export default GameDetailsContextProvider;