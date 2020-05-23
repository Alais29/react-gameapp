import React, { Fragment } from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
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
    clip
  } = gameDetails;
  
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <h1 className="gdetails__title">{name}</h1>
          <p className="gdetails__released">
            <span className="font-weight-bold">Release date:</span> {released}
          </p>
          <Link to="/">
            <Button variant="contained" className="btn-primary gdetails__back">Go back</Button>
          </Link>
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
          <div className="gdetails__description">
            {parse(description)}
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <video width="100%" height="350px" controls autoPlay muted>
            <source src={clip.clip} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="screenshots-container">
            <Grid container spacing={1}>
              {doneFetchGameScreenshots && gameScreenshots ? (
                gameScreenshots.results.map((screenshot) => (
                  <Grid item xs={12} sm={6} key={screenshot.id} className="screenshot-image-container">
                    <img src={screenshot.image} alt={name} className="screenshot-image" />
                  </Grid>
                ))
              ) : (
                <ProgressBar />
              )}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
