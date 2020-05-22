import React, {createContext, useState, useEffect} from 'react';
import {popularGamesGet, upcomingGamesGet, newGamesGet, gameDetailsGet, searchGameGet} from './../constants';

export const GamesContext = createContext();

const GamesContextProvider = ({children}) => {
  // const q_game = document.querySelector('#qGame').value.toLowerCase().trim();
  const [doneFetchPopularGames, setdoneFetchPopularGames] = useState(false);
  const [doneFetchUpcomingGames, setdoneFetchUpcomingGames] = useState(false);
  const [doneFetchNewGames, setdoneFetchNewGames] = useState(false);
  const [doneFetchSearchedGames, setdoneFetchSearchedGames] = useState(false);
  const [popularGames, setPopularGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);

  //Life Cycle
  useEffect(() => getPopularGames(), []);
  useEffect(() => getUpcomingGames(), []);
  useEffect(() => getNewGames(), []);
  // useEffect(() => getSearchedGames(q_game), [q_game]);

  //Fetchs
  const getPopularGames = () => {
    fetch(popularGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchPopularGames(true);
        setPopularGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getUpcomingGames = () => {
    fetch(upcomingGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchUpcomingGames(true);
        setUpcomingGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getNewGames = () => {
    fetch(newGamesGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchNewGames(true);
        setNewGames(data.results)
      })
      .catch(error => console.log(error));
  }
  // const getSearchedGames = (q_game) => {
  //   fetch(searchGameGet(q_game))
  //     .then(res => res.json())
  //     .then(data => {
  //       setdoneFetchSearchedGames(true);
  //       setSearchedGames(data.results)
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <GamesContext.Provider value={{doneFetchPopularGames, doneFetchUpcomingGames, doneFetchNewGames, doneFetchSearchedGames, popularGames, upcomingGames, newGames, searchedGames}}>
      {children}
    </GamesContext.Provider>
  )
}

export default GamesContextProvider;