import React, { Fragment } from "react";
import parse from "html-react-parser";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { SRLWrapper } from "simple-react-lightbox";
import TextList from "../../Common/Lists/TextList.component";
import StoresList from "../../Common/Lists/StoresList.component";
import Subtitle from "./../../Common/Subtitle/Subtitle.component";
import Screenshots from "./../Screenshots/Screenshots.component";
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
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextList title="Publisher/s" items={publishers} />
              <TextList title="Genre/s" items={genres} />
              <TextList title="Platform/s" platforms items={platforms} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StoresList stores={stores} />
              <Subtitle text="Rating" />
              <Rating name="read-only" value={rating} readOnly />
            </Grid>
          </Grid>
          <Subtitle text="Description" />
          <div className="gdetails__description">{parse(description)}</div>
        </Grid>
        <Grid item sm={12} md={6}>
          {clip ? (
            <video width="100%" height="350px" controls autoPlay muted>
              <source src={clip.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <SRLWrapper>
            <Grid container spacing={1}>
              <Screenshots
                doneFetchScreenshots={doneFetchGameScreenshots}
                screenshots={gameScreenshots}
              />
            </Grid>
          </SRLWrapper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
