import React, { Fragment, useContext } from "react";
import { GameDetailsContext } from "./../../context/GameDetailsContext";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import Details from "./../../components/Games/Details/Details.component";

const GameDetails = () => {
  const {
    doneFetchGameDetails,
    gameDetails,
    doneFetchGameScreenshots,
    gameScreenshots,
  } = useContext(GameDetailsContext);
  return (
    <Fragment>
      {doneFetchGameDetails && gameDetails ? (
        <Fragment>
          <Details
            gameDetails={gameDetails}
            gameScreenshots={gameScreenshots}
            doneFetchGameScreenshots={doneFetchGameScreenshots}
          />
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default GameDetails;
