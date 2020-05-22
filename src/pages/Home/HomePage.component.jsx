import React, { Fragment, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { GamesContext } from "./../../context/GamesContext";
import GamesTop from "./../../components/Games/GamesTop/GamesTop.component";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import "./HomePage.styles.scss";

const HomePage = () => {
  const {
    doneFetchPopularGames,
    doneFetchUpcomingGames,
    doneFetchNewGames,
    doneFetchSearchedGames,
    doneFetchGameDetails,
    popularGames,
    upcomingGames,
    newGames,
    searchedGames,
    gameDetails,
  } = useContext(GamesContext);
  return (
    <Fragment>
      <h1>Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <h3>Popular Games</h3>
          <Paper elevation={3} className="games-container">
            {doneFetchPopularGames ? (
              <GamesTop games={popularGames} />
            ) : (
              <ProgressBar />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <h3>Upcoming Games</h3>
          <Paper elevation={3} className="games-container">
            {doneFetchUpcomingGames ? (
              <GamesTop games={upcomingGames} />
            ) : (
              <ProgressBar />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <h3>New Games</h3>
          <Paper elevation={3} className="games-container">
            {doneFetchNewGames ? (
              <GamesTop games={newGames} />
            ) : (
              <ProgressBar />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
