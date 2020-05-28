import React, {createContext, useState, useEffect} from 'react';
import {gameGenresGet} from './../constants';

export const GenresContext = createContext();

const GenresContextProvider = ({children}) => {
  // const genre_id = window.location.pathname.split('/')[2];
  const [doneFetchGenres, setdoneFetchGenres] = useState(false);
  // const [doneFetchGenre, setdoneFetchGenre] = useState(false);
  const [genres, setGenres] = useState([]);
  // const [genre, setGenre] = useState([]);

  //Life cycle
  useEffect(() => getGenres(), []);
  // useEffect(() => getGenre(genre_id), [genre_id]);

  //Fetch
  const getGenres = () => {
    fetch(gameGenresGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchGenres(true);
        setGenres(data.results)
      })
      .catch(error => console.log(error))
  }

  // const getGenre = (genre_id) => {
  //   fetch(specificGenreGet(genre_id))
  //     .then(res => res.json())
  //     .then(data => {
  //       setdoneFetchGenre(true);
  //       setGenre(data)
  //     })
  // }

  return (
    <GenresContext.Provider value={{doneFetchGenres, genres}}>
      {children}
    </GenresContext.Provider>
  )
}

export default GenresContextProvider;