import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Game.styles.scss";

const Game = ({ games, listofgames }) => {
  return (
    <Fragment>
      {games.map((game) => {
        const { id, background_image, name, released, parent_platforms } = game;
        const imgSrc = background_image
          ? background_image
          : require("./../../../assets/images/placeholder.png");
        return (
          <Grid key={id} item xs={12} sm={listofgames ? 12 : 6} md={listofgames ? 12 : 4}>
            <Link to={`/games/details/${id}`} className="card-link" >
              <Card variant="outlined" className="card">
                <CardMedia
                  className="card-game-image"
                  image={imgSrc}
                  title={name}
                />
                <CardContent className="card-game-content">
                  <div>
                    <h4 className="card-game-name text-white">{name}</h4>
                    <p className="card-game-released text-white">{released}</p>
                  </div>
                  <ul className="card-game-platforms">
                    {parent_platforms &&
                      parent_platforms.map((platform) => {
                        const { id, name } = platform.platform;
                        return (
                          <li key={id} className="card-game-platform">
                            <img
                              src={require(`./../../../assets/images/${id}.svg`)}
                              alt={name}
                              className="platform-logo"
                            />
                          </li>
                        );
                      })}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default Game;
