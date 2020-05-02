// src/Components/Game/Game.js

// a lot is happening in this file so let me explain
// 1. we import redirect from react-router-dom, hopefully
//  it works with hash-routes. As well as our styles and React
// 2. we set up the class, using props in our super class state
// that extends from compnonent. We try to define everything in
// this.state formate, and use our setup function to define values
// 3. choice and fakeOrReal methods are used to choose a random
// photo for both left and right sides
// 4. we created an incrimentor method to increase the players
// score
// 5. we created some methods to create a redirect link in our 
// buttons
// 6. we check if the answer they choice was correct or not. If 
// correct, we increase their score with the beforementioned method.
// Then we use our setup function to hopefully select new photo values.
// if they are wrong, we should be given a error becuase the game
// /over route does not exist yet.
// 7. We render() our code into jsx, for the user to see.

import { Redirect } from 'react-router-dom'

import React, { Component } from 'react';
// import Time from '../Time/Time';
import './Game.css'

class Game extends Component {
    constructor(props) {
      super(props);
      this.high = 0;
      this.state = { 
        count: 0, 
        redirect: false,
        leftId: 0,
        rightId: 0,
        fakeOrReal: 0,
        leftChoice: 'real',
        rightChoice: 'fake',
      };

      // setup
      this.setup();
    };

    // Chooses our games vars
    setup() {
        this.choice();
        this.fakeOrReal();
    }

    choice() {
        // ID (chooses random img based on ID)
        this.setState({ leftId: Math.floor(Math.random() *10) });
        this.setState({ rightId: Math.floor(Math.random() *10) });
    }

    // Chooses Fake or Real images
    fakeOrReal() {
        this.setState({ fakeOrReal: Math.random() });

        if (this.state.fakeOrReal >= 0.5) {
            this.setState({ leftChoice: 'real' });
            this.setState({ rightChoice: 'fake' });
        } else {
            this.setState({ leftChoice: 'fake' });
            this.setState({ rightChoice: 'real' });
        };
    }

    // increases our players score
    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    // sets redirect to true
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    // listens to see if redirect is true
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/over' />
        }
    }

    // checks if click was the correct answer
    leftTrueOrFalse() {
        if (this.state.leftChoice === 'real') {
            this.increment();
            // attempt to update photos
            this.setup();
        } else {
            //sends player to Game Over screen
            this.setRedirect();
        }
    }

    rightTrueOrFalse() {
        if (this.state.rightChoice === 'real') {
            this.increment();
            // attempt to update photos
            this.setup();
        } else {
            //sends player to Game Over screen
            this.setRedirect();
        }
    }

    // uses jsx to create our page
    render() {
        return (
        <div className="content">
            {/* STRETCH: make img names annonymous
            to avoid people finding the answers by
            using inspector */}
            {/* Left Side! */}
            <button onClick={this.leftTrueOrFalse}>
                <img src={`${process.env.PUBLIC_URL}/imgs/${this.leftId}${this.leftChoice}.jpg`} width="450px" alt={this.leftId} />
            </button>

            {/* Center Content */}
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

            {/* Right Side! */}
            <button onClick={this.rightTrueOrFalse}>
                <img src={`${process.env.PUBLIC_URL}/imgs/${this.rightId}${this.rightChoice}.jpg`} width="450px" alt={this.rightId} />
            </button>
        </div>
        )
    }
}

export default Game;