import React from "react";
import "../css/header.css"

export default function Header(){
    return (
        <> 
        <div className="header">
            <p>Pokemon Memory Game</p>
            <div className="score">
                <p>Score: <span className="currentScore">0</span></p>
                <p>Best Score: <span className="bestScore">0</span></p>
            </div>
        </div>
        </>
       
    )
}