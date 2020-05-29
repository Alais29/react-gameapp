import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import './Header.styles.scss';

const Header = () => (
  <AppBar position="sticky" className="navbar">
    <Toolbar>
      <Link to="/" className="w-100 navbar__title-link text-white">
        <h1 className="text-center navbar__title">
          Videogames Browser
        </h1>
      </Link>
      <Link to="/genres">
        Genres
      </Link>
      <Link to="/platforms">
        Platforms
      </Link>
      <Link to="/publishers">
        Publishers
      </Link>
    </Toolbar>
  </AppBar>
)

export default Header;
