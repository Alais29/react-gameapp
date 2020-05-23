import React, {createContext, useState, useEffect} from 'react';
import {gameDetailsGet, gameScreenshotsGet} from './../constants';

export const GameDetailsContext = createContext();

const GameDetailsContextProvider = ({children}) => {
  const game_id = window.location.pathname.split('/')[3];
  const [doneFetchGameDetails, setdoneFetchGameDetails] = useState(false);
  const [doneFetchGameScreenshots, setdoneFetchGameScreenshots] = useState(false);
  const [gameDetails, setGameDetails] = useState();
  const [gameScreenshots, setGameScreenshots] = useState();

  useEffect(() => getGameDetails(game_id), [game_id]);
  useEffect(() => getGameScreenshots(game_id), [game_id]);

  const getGameDetails = (game_id) => {
    fetch(gameDetailsGet(game_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGameDetails(true);
        setGameDetails(data)
      })
      .catch(error => console.log(error));
  }

  const getGameScreenshots = (game_id) => {
    fetch(gameScreenshotsGet(game_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGameScreenshots(true);
        setGameScreenshots(data)
      })
      .catch(error => console.log(error));
  }

  return (
    <GameDetailsContext.Provider value={{doneFetchGameDetails, gameDetails, doneFetchGameScreenshots, gameScreenshots}}>
      {children}
    </GameDetailsContext.Provider>
  )
}

export default GameDetailsContextProvider;