import React, { Fragment, useContext } from "react";
import { GamesContext } from "./../../context/GamesContext";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../../components/Games/SearchBar/SearchBar.component";
import ListOfGames from "./../../components/Games/ListsOfGames/ListsOfGames.component";
import SearchedGames from "./../../components/Games/SearchedGames/SearchedGames.component";
import "./HomePage.styles.scss";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const HomePage = () => {
  const {
    doneFetchPopularGames,
    doneFetchUpcomingGames,
    doneFetchNewGames,
    doneFetchSearchedGames,
    popularGames,
    upcomingGames,
    newGames,
    searchedGames,
    validateQGame,
  } = useContext(GamesContext);
  return (
    <Fragment>
      <h1>Home</h1>
      <SearchBar validateQGame={validateQGame} />
      <Grid container spacing={3}>
        {!doneFetchSearchedGames ? (
          doneFetchPopularGames &&
          doneFetchUpcomingGames &&
          doneFetchNewGames ? (
            <ListOfGames
              popularGames={popularGames}
              upcomingGames={upcomingGames}
              newGames={newGames}
            />
          ) : (
            <ProgressBar />
          )
        ) : (
          <SearchedGames searchedGames={searchedGames} />
        )}
      </Grid>
    </Fragment>
  );
};

export default HomePage;
