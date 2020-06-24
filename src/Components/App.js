// src/Components/App.js
import { HashRouter as Router, Route } from 'react-router-dom';

import React from 'react';
import Title from './Title/Title';
import Home from './Home/Home';
import Game from './Game/Game';
import Over from './Over/Over';
import Footer from './Footer/Footer';
import './dist/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Title />
          {/* exact path necessary for none trailing pages */}
          <Route exact path="/" component={Home}/>
          <Route path="/game" component={Game} />
          <Route exact path="/over" component={Over} />
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
