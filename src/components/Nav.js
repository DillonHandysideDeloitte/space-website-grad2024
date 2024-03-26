import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header className="Nav">
        <nav>
          <Link to="home">Home</Link>
          <Link to="destinations">Destination</Link>
          <Link to="crew">Crew</Link>
          <Link to="technologies">Technology</Link>
        </nav>
    </header>
  );
}

export default Nav;