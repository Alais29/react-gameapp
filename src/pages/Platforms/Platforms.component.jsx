import React, {Fragment, useContext} from 'react';
import {PlatformsContext} from './../../context/PlatformsContext';
import Grid from "@material-ui/core/Grid";
import CollectionCard from './../../components/Collection/CollectionCard/CollectionCard.component';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Platforms = () => {
  const {doneFetchPlatforms, platforms} = useContext(PlatformsContext);
  return ( 
    <Fragment>
      <h1 className="text-center">Platforms</h1>
      {
        doneFetchPlatforms && platforms ?
        <Grid container spacing={2}>
          <CollectionCard link="platforms" items={platforms} />
        </Grid>
        : <ProgressBar />
      }
    </Fragment>
  );
}
 
export default Platforms;
