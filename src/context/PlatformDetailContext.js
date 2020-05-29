import React, {createContext, useState, useEffect} from 'react';
import {specificPlatformGet, samplePlatformGamesGet} from '../constants';

export const PlatformDetailContext = createContext();

const PlatformDetailContextProvider = ({children}) => {
  const platform_id = window.location.pathname.split('/')[2];
  const [doneFetchPlatform, setDoneFetchPlatform] = useState(false);
  const [doneFetchPlatformGames, setDoneFetchPlatformGames] = useState(false);
  const [platform, setPlatform] = useState([]);
  const [platformGames, setPlatformGames] = useState([]);

  //Life cycle
  useEffect(() => getPlatform(platform_id), [platform_id]);
  useEffect(() => getPlatformGames(platform_id), [platform_id]);

  //Fetch
  const getPlatform = (platform_id) => {
    fetch(specificPlatformGet(platform_id))
      .then(res => res.json())
      .then(data => {
        setDoneFetchPlatform(true)
        setPlatform(data)
      })
      .catch(error => console.log(error))
  }

  const getPlatformGames = (platform_id) => {
    fetch(samplePlatformGamesGet(platform_id))
      .then(res => res.json())
      .then(data => {
        setDoneFetchPlatformGames(true)
        setPlatformGames(data.results)
      })
  }

  return (
    <PlatformDetailContext.Provider value={{doneFetchPlatform, doneFetchPlatformGames, platform, platformGames}}>
      {children}
    </PlatformDetailContext.Provider>
  )
}

export default PlatformDetailContextProvider;