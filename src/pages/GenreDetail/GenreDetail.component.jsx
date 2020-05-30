import React, { Fragment, useContext } from "react";
import { GenreDetailContext } from "../../context/GenreDetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Game from "./../../components/Games/Game/Game.component";

const GenreDetail = () => {
  const { doneFetchGenre, doneFetchGenreGames, genre, genreGames } = useContext(
    GenreDetailContext
  );
  return (
    <Fragment>
      {doneFetchGenre && doneFetchGenreGames ? (
        <Fragment>
          <CollectionInfo item={genre} />
          <Grid container spacing={3}>
            <Game games={genreGames} />
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default GenreDetail;
