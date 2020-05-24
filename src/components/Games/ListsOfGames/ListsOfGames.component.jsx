import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Game from "./../Game/Game.component";

const ListOfGames = ({ popularGames, upcomingGames, newGames }) => (
  <Fragment>
    <Grid item xs={12} md={6} lg={4}>
      <h3>Popular Games</h3>
      <Paper elevation={3} className="games-container">
        <Game games={popularGames} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <h3>Upcoming Games</h3>
      <Paper elevation={3} className="games-container">
        <Game games={upcomingGames} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <h3>New Games</h3>
      <Paper elevation={3} className="games-container">
        <Game games={newGames} />
      </Paper>
    </Grid>
  </Fragment>
);

export default ListOfGames;
