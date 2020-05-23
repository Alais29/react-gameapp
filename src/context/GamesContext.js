import React, {createContext, useState, useEffect} from 'react';
import {popularGamesGet, upcomingGamesGet, newGamesGet, searchGameGet} from './../constants';

export const GamesContext = createContext();

const GamesContextProvider = ({children}) => {
  const [doneFetchPopularGames, setdoneFetchPopularGames] = useState(false);
  const [doneFetchUpcomingGames, setdoneFetchUpcomingGames] = useState(false);
  const [doneFetchNewGames, setdoneFetchNewGames] = useState(false);
  const [doneFetchSearchedGames, setdoneFetchSearchedGames] = useState(false);
  const [popularGames, setPopularGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [currentQGame, setCurrentQGame] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);

  //Life Cycle
  useEffect(() => getPopularGames(), []);
  useEffect(() => getUpcomingGames(), []);
  useEffect(() => getNewGames(), []);

  //Fetchs
  const getPopularGames = () => {
    fetch(popularGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchPopularGames(true);
        setdoneFetchSearchedGames(false);
        setPopularGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getUpcomingGames = () => {
    fetch(upcomingGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchUpcomingGames(true);
        setdoneFetchSearchedGames(false);
        setUpcomingGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getNewGames = () => {
    fetch(newGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchNewGames(true);
        setdoneFetchSearchedGames(false);
        setNewGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getSearchedGames = (q_game) => {
    fetch(searchGameGet(q_game))
      .then(res => res.json())
      .then(data => {
        setdoneFetchSearchedGames(true);
        setSearchedGames(data.results)
      })
      .catch(error => console.log(error));
  }

  const validateQGame = (e) => {
    let q_game = e.target.value.toLowerCase().trim();
    if(e.type === 'keypress' && e.key === 'Enter') {
      if(q_game && q_game !== currentQGame) {
        setCurrentQGame(q_game);
        setdoneFetchPopularGames(false);
        setdoneFetchUpcomingGames(false);
        setdoneFetchNewGames(false);
        getSearchedGames(q_game);
      }
    }
  }

  return (
    <GamesContext.Provider value={{doneFetchPopularGames, doneFetchUpcomingGames, doneFetchNewGames, doneFetchSearchedGames, popularGames, upcomingGames, newGames, searchedGames, validateQGame}}>
      {children}
    </GamesContext.Provider>
  )
}

export default GamesContextProvider;