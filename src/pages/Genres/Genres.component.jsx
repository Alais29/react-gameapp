import React, { Fragment, useContext } from 'react';
import { GenresContext } from './../../context/GenresContext';
import {Link} from 'react-router-dom';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Genre = () => {
  const {doneFetchGenres, genres} = useContext(GenresContext);
  
  return ( 
    <Fragment>
      <ul>
        {doneFetchGenres && genres? 
          genres.map(item => (
          <li key={item.id}>{item.name}
            <Link to={`/genres/${item.id}`}>Detail</Link>
          </li>
          ))
          : <ProgressBar /> 
          } 
      </ul>
    </Fragment>
  );
}

export default Genre;