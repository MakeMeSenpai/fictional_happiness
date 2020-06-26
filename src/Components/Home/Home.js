// src/Components/Home/Home.js

import React from 'react'
import { Link } from 'react-router-dom'
import './dist/Home.css'

function Home() {
    return (
        <div className="container">
            <h3>Click the logo to play!</h3>
            <Link className="a" to={`/game`} lable="game">
                <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} width="300" height="300" alt="Logo of Smiling Face" />
            </Link>
            <p>If it is your first time, this game is inspired by <a href="http://www.higherlowergame.com/" target="_blank" rel='noreferrer noopener'>The Higher Lower Game.</a> All
            you have to do is click on one image or the other if you think it is a <b className="bold">Real Smile</b>. Get as many points as you can. Want more? let me know that you 
            liked it by staring my project on <a href="https://github.com/MakeMeSenpai/" target="_blank" rel='noreferrer noopener'>Github</a></p>
        </div>
    );
}

export default Home;