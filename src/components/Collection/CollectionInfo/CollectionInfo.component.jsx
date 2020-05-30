import React, {Fragment} from 'react';
import parse from "html-react-parser";
import Grid from "@material-ui/core/Grid";

const CollectionInfo = ({item}) => {
  const { name, description, image_background } = item;
  return ( 
    <Fragment>
      <h1 className="text-center">{name}</h1>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <div className="gdetails__description">
            {typeof description === "string" && parse(description)}
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={image_background} alt={name} width="100%" />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default CollectionInfo;