import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../Common/ProgressBar/ProgressBar.component";
import Message from "./../../Common/Message/Message.component";

const Screenshots = ({ doneFetchScreenshots, screenshots }) => {
  return (
    <Fragment>
      {doneFetchScreenshots && screenshots ? (
        screenshots.results.length ? (
          screenshots.results.map((screenshot) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={screenshot.id}
              className="screenshot-image-container"
            >
              <img
                src={screenshot.image}
                alt={screenshot.id}
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
    </Fragment>
  );
};

export default Screenshots;
