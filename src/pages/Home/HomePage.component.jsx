import React, { Fragment, useContext } from "react";
import { GamesContext } from "./../../context/GamesContext";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../../components/Games/SearchBar/SearchBar.component";
import ListOfGames from "./../../components/Games/ListsOfGames/ListsOfGames.component";
import SearchedGames from "./../../components/Games/SearchedGames/SearchedGames.component";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import NotFound from "./../../components/NotFound/NotFound.component";
import "./HomePage.styles.scss";

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
        ) : searchedGames.length ? (
          <SearchedGames searchedGames={searchedGames} />
        ) : (
          <NotFound />
        )}
      </Grid>
    </Fragment>
  );
};

export default HomePage;
