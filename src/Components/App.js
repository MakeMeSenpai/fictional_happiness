// src/Components/App.js
import { HashRouter as Router, Route } from 'react-router-dom';

import React from 'react';
import Title from './Title/Title';
import Home from './Home/Home';
import Game from './Game/Game';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Title />
          {/* exact path necessary for none trailing pages */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/game" component={Game} />
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
