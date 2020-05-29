import React, {createContext, useState, useEffect} from 'react';
import {specificGenreGet, sampleGenreGamesGet} from './../constants';

export const GenreDetailContext = createContext();

const GenreDetailContextProvider = ({children}) => {
  const genre_id = window.location.pathname.split('/')[2];
  const [doneFetchGenre, setdoneFetchGenre] = useState(false);
  const [doneFetchGenreGames, setdoneFetchGenreGames] = useState(false);
  const [genre, setGenre] = useState([]);
  const [genreGames, setGenreGames] = useState([]);

  //Life cycle
  useEffect(() => getGenre(genre_id), [genre_id]);
  useEffect(() => getGenreGames(genre_id), [genre_id]);

  //Fetch
  const getGenre = (genre_id) => {
    fetch(specificGenreGet(genre_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGenre(true);
        setGenre(data)
      })
      .catch(error => console.log(error))
  }

  const getGenreGames = (genre_id) => {
    fetch(sampleGenreGamesGet(genre_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGenreGames(true)
        setGenreGames(data.results)
      })
  }

  return (
    <GenreDetailContext.Provider value={{doneFetchGenre, doneFetchGenreGames, genre, genreGames}}>
      {children}
    </GenreDetailContext.Provider>
  )
}

export default GenreDetailContextProvider;