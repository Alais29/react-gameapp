import React, {Fragment, useContext} from 'react';
import parse from "html-react-parser";
import { PublisherDetailContext } from "../../context/PublisherDetailContext";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import Game from './../../components/Games/Game/Game.component';


const PublisherDetail = () => {
  const {doneFetchPublisher, doneFetchPublisherGames, publisher, publisherGames} = useContext(PublisherDetailContext);
  const {name, description, image_background} = publisher;
  return ( 
    <Fragment>
      {doneFetchPublisher && doneFetchPublisherGames ?
      <div>
        <h1>{name}</h1> 
        <div className="gdetails__description">{typeof description === 'string' && parse(description)}</div>
        <img src={image_background} alt={name} width="1000px"/>
        <Game games={publisherGames} />
      </div>
        : <ProgressBar />
      }
    </Fragment>

  );
}

export default PublisherDetail;