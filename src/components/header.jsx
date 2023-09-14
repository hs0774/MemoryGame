import React from "react";
import "../css/header.css"

export default function Header({scoreData ,bestScore}){
    return (
        <> 
        <div className="header">
            <p>Pokemon Memory Game</p>
            <div className="score">
                <p>Score: <span className="currentScore">{scoreData}</span></p>
                <p>Best Score: <span className="bestScore">{bestScore}</span></p>
            </div>
        </div>
        </>
       
    )
}