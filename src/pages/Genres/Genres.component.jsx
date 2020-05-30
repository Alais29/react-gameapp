import React, { Fragment, useContext } from 'react';
import { GenresContext } from './../../context/GenresContext';
import Grid from "@material-ui/core/Grid";
import CollectionCard from './../../components/Collection/CollectionCard/CollectionCard.component';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Genre = () => {
  const {doneFetchGenres, genres} = useContext(GenresContext);
  return ( 
    <Fragment>
      <h1 className="text-center">Genres</h1>
      {
        doneFetchGenres && genres ?
        <Grid container spacing={2}>
          <CollectionCard link="genres" items={genres} />
        </Grid>
        : <ProgressBar />
      }
    </Fragment>
  );
}

export default Genre;