// src/Components/Over/Over.js

import React from 'react';
import './dist/Over.css'

function Over() {
    return (
        <div className="over">
            <h1>Game Over!</h1>
            <a href="game#/game"><h3>Play Again</h3></a>
            <a href="/"><h3>Return Home</h3></a>
        </div>
    )
}

export default Over;