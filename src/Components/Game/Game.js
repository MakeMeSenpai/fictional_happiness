// src/Components/Game/Game.js

import React, { Component } from 'react';
// import Time from '../Time/Time';
import './Game.css'

class Game extends Component {
    constructor(props) {
      super(props);

      // ID
      this.leftId = Math.floor(Math.random() *10)
      this.rightId = Math.floor(Math.random() * 10);

      // Fake or Real
      this.fakeOrReal = Math.random();
      this.leftChoice = '';
      this.rightChoice = '';

      // Score
      this.high = 0;
      this.state = { count: 0 };
      this.setup();
    };

    setup(){
        if (this.fakeOrReal >= 0.5) {
            this.leftChoice = 'real';
            this.rightChoice = 'fake';
        } else {
            this.leftChoice = 'fake';
            this.rightChoice = 'real';
        };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
        <div className="content">
            {/* STRETCH: make img names annonymous */}
            <img src={`${process.env.PUBLIC_URL}/imgs/${this.leftId}${this.leftChoice}.jpg`} width="450px" alt={this.leftId} />
            <div className="center">
                <h2>High-Score:</h2>
                <h3>{this.high}</h3>
                <h2>Score:</h2>
                <h3>{this.state.count}</h3>
                {/* STRETCH: make a Time function
                should be optional whether it's a timer
                or a counter */}
                {/* <div>Time: 5 sec.</div>  */}
            </div>
            <img src={`${process.env.PUBLIC_URL}/imgs/${this.rightId}${this.rightChoice}.jpg`} width="450px" alt={this.rightId} />
        </div>
        )
    }
}

export default Game;