import React, {Fragment, useContext} from 'react';
import { PublisherDetailContext } from "../../context/PublisherDetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Game from './../../components/Games/Game/Game.component';


const PublisherDetail = () => {
  const {doneFetchPublisher, doneFetchPublisherGames, publisher, publisherGames} = useContext(PublisherDetailContext);
  return ( 
    <Fragment>
      {doneFetchPublisher && doneFetchPublisherGames ? (
        <Fragment>
          <CollectionInfo item={publisher} />
          <Grid container spacing={3}>
            <Game games={publisherGames} />
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
}

export default PublisherDetail;