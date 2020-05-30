import React, {Fragment, useContext} from 'react';
import {PublishersContext} from './../../context/PublishersContext';
import Grid from "@material-ui/core/Grid";
import CollectionCard from './../../components/Collection/CollectionCard/CollectionCard.component';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Publishers = () => {
  const {doneFetchPublishers, publishers} = useContext(PublishersContext);
  return ( 
    <Fragment>
      <h1 className="text-center">Publishers</h1>
      {
        doneFetchPublishers && publishers ?
        <Grid container spacing={2}>
          <CollectionCard link="publishers" items={publishers} />
        </Grid>
        : <ProgressBar />
      }
    </Fragment>
  );
}
 
export default Publishers;
