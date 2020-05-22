import React, {Fragment, useContext} from 'react';
import { GameDetailsContext } from "./../../context/GameDetailsContext";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';

const GameDetails = () => {
  const {doneFetchGameDetails, gameDetails} = useContext(GameDetailsContext);
  return ( 
    <Fragment>
      {
        doneFetchGameDetails && gameDetails ?
          <Fragment>
            <h1>{gameDetails.name}</h1> 
            <p>{gameDetails.description_raw}</p>
          </Fragment>
        : <ProgressBar />
      }
    </Fragment>
  );
}
 
export default GameDetails;