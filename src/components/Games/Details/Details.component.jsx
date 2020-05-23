import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ProgressBar from "./../../Common/ProgressBar/ProgressBar.component";
import "./Details.styles.scss";

const Details = ({
  gameDetails,
  gameScreenshots,
  doneFetchGameScreenshots,
}) => {
  const {
    name,
    description,
    released,
    background_image,
    rating,
    platforms,
    stores,
    publishers,
    genres,
  } = gameDetails;
  
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <h1 className="gdetails__title">{name}</h1>
          <p className="gdetails__released">
            <span className="font-weight-bold">Release date:</span> {released}
          </p>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <h3 className="font-weight-bold gdetails__subtitle">Publisher/s</h3>
              <ul className="gdetails__list">
                {publishers.map((publisher) => (
                  <li className="gdetails__list-item" key={publisher.id}>{publisher.name}</li>
                ))}
              </ul>
              <h3 className="font-weight-bold gdetails__subtitle">Genre/s</h3>
              <ul className="gdetails__list">
                {genres.map((genre) => (
                  <li className="gdetails__list-item" key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <h3 className="font-weight-bold gdetails__subtitle">Platform/s</h3>
              <ul className="gdetails__list">
                {platforms.map((platform) => (
                  <li className="gdetails__list-item" key={platform.platform.id}>{platform.platform.name}</li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3 className="gdetails__buy">Get it here</h3>
              <ul className="gdetails__list">
                {stores.map((store) => (
                  <li className="gdetails__list-item" key={store.id}>
                    <a href={store.url} target="_blank" rel="noopener noreferrer">
                      <img src={require(`./../../../assets/images/${store.store.slug}.png`)} alt={store.name} className="gdetails__store-logo" />
                    </a>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <h3 className="font-weight-bold gdetails__subtitle">Description</h3>
          <div className="gdetails__description" dangerouslySetInnerHTML={{ __html: description }} />
          {/* <p className="gdetails__description">{description}</p> */}
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="screenshots-container">
            <GridList cellHeight={200} className="screenshots-list" cols={2}>
              {doneFetchGameScreenshots && gameScreenshots ? (
                gameScreenshots.results.map((screenshot) => (
                  <GridListTile key={screenshot.id} cols={screenshot.cols || 1}>
                    <img src={screenshot.image} alt={name} />
                  </GridListTile>
                ))
              ) : (
                <ProgressBar />
              )}
            </GridList>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
