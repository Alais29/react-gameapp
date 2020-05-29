import React, {createContext, useState, useEffect} from 'react';
import {gamePlatformsGet} from './../constants';

export const PlatformsContext = createContext();

const PlatformsContextProvider = ({children}) => {
  const [doneFetchPlatforms, setDoneFetchPlatforms] = useState(false);
  const [platforms, setPlatforms] = useState(false);

  //Life Cycle
  useEffect(() => getPlatforms(), []);

  //Fetch
  const getPlatforms = () => {
    fetch(gamePlatformsGet())
      .then(res => res.json())
      .then(data => {
        setDoneFetchPlatforms(true);
        setPlatforms(data.results)
      })
      .catch(error => console.log(error))
  }

  return (
    <PlatformsContext.Provider value={{doneFetchPlatforms, platforms}}>
      {children}
    </PlatformsContext.Provider>
  )

}

export default PlatformsContextProvider;