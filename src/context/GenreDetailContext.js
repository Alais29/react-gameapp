import React, {createContext, useState, useEffect} from 'react';
import {specificGenreGet} from './../constants';

export const GenreDetailContext = createContext();

const GenreDetailContextProvider = ({children}) => {
  const genre_id = window.location.pathname.split('/')[2];
  const [doneFetchGenre, setdoneFetchGenre] = useState(false);
  const [genre, setGenre] = useState([]);

  //Life cycle
  useEffect(() => getGenre(genre_id), [genre_id]);

  //Fetch
  const getGenre = (genre_id) => {
    fetch(specificGenreGet(genre_id))
      .then(res => res.json())
      .then(data => {
        setdoneFetchGenre(true);
        setGenre(data)
      })
  }

  return (
    <GenreDetailContext.Provider value={{doneFetchGenre, genre}}>
      {children}
    </GenreDetailContext.Provider>
  )
}

export default GenreDetailContextProvider;