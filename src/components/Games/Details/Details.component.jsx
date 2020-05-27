import React, { Fragment } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { SRLWrapper } from "simple-react-lightbox";
import ProgressBar from "./../../Common/ProgressBar/ProgressBar.component";
import TextList from "../../Common/Lists/TextList.component";
import StoresList from "../../Common/Lists/StoresList.component";
import Subtitle from './../../Common/Subtitle/Subtitle.component';
import Message from './../../Common/Message/Message.component';
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
    rating,
    platforms,
    stores,
    publishers,
    genres,
    clip,
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
            <Button variant="contained" className="btn-primary gdetails__back">
              Go back
            </Button>
          </Link>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextList title="Publisher/s" items={publishers} />
              <TextList title="Genre/s" items={genres} />
              <TextList title="Platform/s" platforms={platforms} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StoresList stores={stores} />
              <h3 className="gdetails__subtitle">Rating</h3>
              <Rating name="read-only" value={rating} readOnly />
            </Grid>
          </Grid>
          <Subtitle text="Description" />
          <div className="gdetails__description">{parse(description)}</div>
        </Grid>
        <Grid item sm={12} md={6} className="g-dtails__video-ss-column">
          {clip ? (
            <video width="100%" height="350px" controls autoPlay muted>
              <source src={clip.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <div className="screenshots-container">
            <SRLWrapper>
              <Grid container spacing={1}>
                {doneFetchGameScreenshots && gameScreenshots ? (
                  gameScreenshots.results.length ? (
                    gameScreenshots.results.map((screenshot) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        key={screenshot.id}
                        className="screenshot-image-container"
                      >
                        <img
                          src={screenshot.image}
                          alt={name}
                          className="screenshot-image"
                        />
                      </Grid>
                    ))
                  ) : (
                    <Message text="There are no screenshots available for this title" />
                  )
                ) : (
                  <ProgressBar />
                )}
              </Grid>
            </SRLWrapper>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;