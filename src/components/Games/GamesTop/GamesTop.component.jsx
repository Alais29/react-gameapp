import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./GamesTop.styles.scss";

const GamesTop = ({ games }) => {
  return (
    <Fragment>
      {games.map((game) => {
        const {id, background_image, name, released, parent_platforms} = game;
        return (
          <Card variant="outlined" key={id} className="card">
            <CardMedia
              className="card-game-image"
              image={background_image}
              title={name}
            />
            <CardContent className="card-game-content">
              <div>
                <Link to={`/games/details/${id}`}>
                  <h4 className="card-game-name text-white">{name}</h4>
                </Link>
                <p className="card-game-released text-white">{released}</p>
              </div>
              <ul className="card-game-platforms">
                {parent_platforms.map(platform => (
                  <li key={platform.platform.id} className="card-game-platform"><img src={require(`./../../../assets/images/${platform.platform.id}.svg`)} alt={platform.platform.name} className="platform-logo" /></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )} 
      )}
    </Fragment>
  );
};

export default GamesTop;
