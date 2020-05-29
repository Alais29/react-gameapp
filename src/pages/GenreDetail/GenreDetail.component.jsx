import React, {Fragment, useContext} from 'react';
import parse from "html-react-parser";
import { GenreDetailContext } from "../../context/GenreDetailContext";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import Game from './../../components/Games/Game/Game.component';


const GenreDetail = () => {
  const {doneFetchGenre, doneFetchGenreGames, genre, genreGames} = useContext(GenreDetailContext);
  const {name, description, image_background} = genre;
  return ( 
    <Fragment>
      {doneFetchGenre && doneFetchGenreGames ?
      <div>
        <h1>{name}</h1> 
        <div className="gdetails__description">{typeof description === 'string' && parse(description)}</div>
        <img src={image_background} alt={name} width="1000px"/>
        <Game games={genreGames} />
      </div>
        : <ProgressBar />
      }
    </Fragment>

  );
}

export default GenreDetail;
