// src/Components/Title/Title.js

// import { NavLink } from 'react-router-dom';

import React from 'react';
import './Title.css';

function Title() {
    return (
      <div className="background">
        <header>
          <title>Fictional Happiness</title>
          <h1 className="Title">Fictional Happiness</h1>
          <h3 className="Title-Subtitle">Can you tell a fake smile from a real one?</h3>
  
          {/* <div className="nav-link">
            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                exact to="/">List</NavLink>

            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                to="/about">About</NavLink>
          </div> */}
  
        </header>
      </div>
    )
  }

export default Title