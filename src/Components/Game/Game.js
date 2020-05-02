// src/Components/Game/Game.js

import React from 'react';
// import High from '../High/High';
// import Score from '../Score/Score';
// import Time from '../Time/Time';
import './Game.css';

function Game() {
    // chooses a random image by id
    let leftId = Math.floor(Math.random() *10)
    let rightId = Math.floor(Math.random() * 10);

    // determines which image will be a fake or real smile
    let fakeOrReal = Math.random();
    let leftChoice = '';
    let rightChoice = '';
    if (fakeOrReal >= 0.5) {
        leftChoice = 'real';
        rightChoice = 'fake';
    } else {
        leftChoice = 'fake';
        rightChoice = 'real';
    };

    return (
        <div className="content">
             {/* STRETCH: make img names annonymous */}
             <img src={`${process.env.PUBLIC_URL}/imgs/${leftId}${leftChoice}.jpg`} width="300" alt={leftId} />
             {/* placeholders for actual functions High, Score, & Time */}
             <div className="center">
                 <div>High-Score: 10</div>
                 <div>Score: 3</div>
                 {/* should be optional whether it's a timer
                 or a counter */}
                 <div>Time: 5 sec.</div> 
             </div>
             <img src={`${process.env.PUBLIC_URL}/imgs/${rightId}${rightChoice}.jpg`} width="300" alt={rightId} />
        </div>
    );
}

export default Game;