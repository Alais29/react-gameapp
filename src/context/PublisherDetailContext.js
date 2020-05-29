import React, {createContext, useState, useEffect} from 'react';
import {specificPublisherGet, samplePublisherGamesGet} from '../constants';

export const PublisherDetailContext = createContext();

const PublisherDetailContextProvider = ({children}) => {
  const publisher_id = window.location.pathname.split('/')[2];
  const [doneFetchPublisher, setDoneFetchPublisher] = useState(false);
  const [doneFetchPublisherGames, setDoneFetchPublisherGames] = useState(false);
  const [publisher, setPublisher] = useState([]);
  const [publisherGames, setPublisherGames] = useState([]);

  //Life cycle
  useEffect(() => getPublisher(publisher_id), [publisher_id]);
  useEffect(() => getPublisherGames(publisher_id), [publisher_id]);

  //Fetch
  const getPublisher = (publisher_id) => {
    fetch(specificPublisherGet(publisher_id))
      .then(res => res.json())
      .then(data => {
        setDoneFetchPublisher(true)
        setPublisher(data)
      })
      .catch(error => console.log(error))
  }

  const getPublisherGames = (publisher_id) => {
    fetch(samplePublisherGamesGet(publisher_id))
      .then(res => res.json())
      .then(data => {
        setDoneFetchPublisherGames(true)
        setPublisherGames(data.results)
      })
  }

  return (
    <PublisherDetailContext.Provider value={{doneFetchPublisher, doneFetchPublisherGames, publisher, publisherGames}}>
      {children}
    </PublisherDetailContext.Provider>
  )
}

export default PublisherDetailContextProvider;