import React, {createContext, useState, useEffect} from 'react';
import {gameGenresGet, specificGenreGet} from './../constants';

export const GenresContext = createContext();

const GenresContextProvider = ({children}) => {
  const [doneFetchGenres, setdoneFetchGenres] = useState(false);
  const [doneFetchSpecificGenre, setdoneFetchSpecificGenre] = useState(false);

  
}