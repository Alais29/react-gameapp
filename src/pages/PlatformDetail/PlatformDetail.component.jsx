import React, {Fragment, useContext} from 'react';
import { PlatformDetailContext } from "../../context/PlatformDetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Game from './../../components/Games/Game/Game.component';


const PlatformDetail = () => {
  const {doneFetchPlatform, doneFetchPlatformGames, platform, platformGames} = useContext(PlatformDetailContext);
  return ( 
    <Fragment>
      {doneFetchPlatform && doneFetchPlatformGames ? (
        <Fragment>
          <CollectionInfo item={platform} />
          <Grid container spacing={3}>
            <Game games={platformGames} />
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
}

export default PlatformDetail;