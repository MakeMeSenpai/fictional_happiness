// src/Components/Game/Game.js

// a lot is happening in this file so let me explain
// 1. we import redirect from react-router-dom, hopefully
//  it works with hash-routes. As well as our styles and React
// 2. we set up the class, using props in our super class state
// that extends from compnonent. We try to define everything in
// this.state formate, and use our setup function to define values
// 3. choice and fakeOrReal methods are used to choose a random
// photo for both left and right sides. Then return the saved highscore
// from the cache
// 4. we created an incrimentor method to increase the players
// score
// 5. we created a highscore method in order to try and save the players
// highscore in the local cache.
// 6. we created some methods to create a redirect link in our 
// buttons
// 7. we check if the answer they choice was correct or not. If 
// correct, we increase their score with the beforementioned method.
// Then we use our setup function to hopefully select new photo values.
// if they are wrong, we should be given a error becuase the game
// /over route does not exist yet.
// 8. We render() our code into jsx, for the user to see.

import { Redirect } from 'react-router-dom'

import React, { Component } from 'react';
// import Time from '../Time/Time';
import './dist/Game.css'

class Game extends Component {
    constructor(props) {
      super(props);
      this.saved = 0;
      this.state = { 
        count: 0, 
        high: this.saved,
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
        // retieves our local storage
        console.log(this.saved)
        this.saved = localStorage.getItem(this.saved);
        this.setState({ high: localStorage.getItem(this.saved) });
    }
    // // retieves our local storage 
    // const fromLocal = localStorage.getItem(GAME_STORE)
    // let savedState
    // if (savedState === null) { // We need this in case nothing was saved
    //     savedState = { high: 0 }
    // } else {
    //     savedState = JSON.parse(fromLocal)
    // }
    // this.setState(savedState)
    // }

    // ID (chooses random img based on ID)
    choice() {
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

    // calculates our players high score
    highScore() {
        // checks if score is higher then highscore
        if (this.state.high <= this.state.count) {
            // stores our score inside our local storage
            window.localStorage.setItem(this.saved, this.state.count + 1);
            // displays new High score
            this.setState({ high: localStorage.getItem(this.saved) });
        };
    }
    // highScore() {
    //   // checks if score is higher then highscore
    //   if (this.state.high <= this.state.count) {
    //     // stores our score inside our local storage
    //     localStorage.setItem(GAME_STORE, this.state.count + 1);
    //     // displays new High score
    //     this.setState({ high: localStorage.getItem(this.saved) });
    //   };
    // }

    // saveState() {
    //     localStorage.setItem("SOME_KEY", JSON.stringify(this.state))
    //   }
    //   getState() {
    //     let savedState = localStorage.getItem('SOME_KEY')
    //     if (savedState === null) {
    //       savedState = { high: 0 }
    //     }
    //     this.setState(savedState)
    // }

    // sets redirect to true
    setRedirect() {
        this.setState({
          redirect: true
        })
      }

    // listens to see if redirect is true
    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/over' />
        }
    }

    // checks if click was the correct answer
    leftTrueOrFalse() {
        
        if (this.state.leftChoice === 'real') {
            // updates photos and incriments scores
            this.increment();
            this.highScore();
            this.setup();
        } else {
            //sends player to Game Over screen
            this.setRedirect();
        }
    }

    rightTrueOrFalse() {
        if (this.state.rightChoice === 'real') {
            // updates photos and incriments scores
            this.increment();
            this.highScore();
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
            {this.renderRedirect()}
            <button onClick={this.leftTrueOrFalse.bind(this)}>
                <img src={`${process.env.PUBLIC_URL}/imgs/${this.state.leftId}${this.state.leftChoice}.jpg`}
                 width="450px" alt={this.state.leftId} />
            </button>

            {/* Center Content */}
            <div className="center">
                {/* <h2>High-Score:</h2>
                <h3>{this.state.high}</h3> */}
                <h2>Score:</h2>
                <h3>{this.state.count}</h3>
                {/* STRETCH: make a Time function
                should be optional whether it's a timer
                or a counter */}
                {/* <div>Time: 5 sec.</div>  */}
            </div>

            {/* Right Side! */}
            {this.renderRedirect()}
            <button onClick={this.rightTrueOrFalse.bind(this)}>
                <img src={`${process.env.PUBLIC_URL}/imgs/${this.state.rightId}${this.state.rightChoice}.jpg`}
                 width="450px" alt={this.state.rightId} />
            </button>
        </div>
        )
    }
}

export default Game;