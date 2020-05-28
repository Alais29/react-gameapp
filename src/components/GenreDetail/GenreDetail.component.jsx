import React, {useContext} from 'react';
import { GenreDetailContext } from "./../../context/GenreDetailContext";


const GenreDetail = () => {
  const {doneFetchGenre, genre} = useContext(GenreDetailContext);
  return ( <h1>From Genre Detail</h1> );
}
 
export default GenreDetail;
