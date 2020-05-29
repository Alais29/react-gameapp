import React, {Fragment, useContext} from 'react';
import parse from "html-react-parser";
import { PlatformDetailContext } from "../../context/PlatformDetailContext";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import Game from './../../components/Games/Game/Game.component';


const PlatformDetail = () => {
  const {doneFetchPlatform, doneFetchPlatformGames, platform, platformGames} = useContext(PlatformDetailContext);
  const {name, description, image_background} = platform;
  return ( 
    <Fragment>
      {doneFetchPlatform && doneFetchPlatformGames ?
      <div>
        <h1>{name}</h1> 
        <div className="gdetails__description">{typeof description === 'string' && parse(description)}</div>
        <img src={image_background} alt={name} width="1000px"/>
        <Game games={platformGames} />
      </div>
        : <ProgressBar />
      }
    </Fragment>

  );
}

export default PlatformDetail;