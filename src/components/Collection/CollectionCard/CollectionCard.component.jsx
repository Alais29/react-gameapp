import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import TextList from "./../../Common/Lists/TextList.component";
import './CollectionCard.styles.scss'

const CollectionCard = ({ items, link }) => {
  return (
    <Fragment>
      {items.map((item) => {
        const { id, name, image_background, games } = item;
        return (
          <Grid item xs={12} sm={6} md={3} key= {id}>
            <Link to={`/${link}/${id}`} className="collection-link">
              <Card style={{backgroundColor: '#353535', background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image_background}) center center/cover no-repeat`}} className="collection-card">
                <CardContent className="text-white">
                  <h2>{name}</h2>
                  <TextList collection title="Some games:" items={games} />
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default CollectionCard;
