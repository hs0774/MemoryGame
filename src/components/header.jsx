import React from "react";
import "../css/header.css"

export default function Header(){
    const [dataa,setDataa] = React.useState(null);
    fetch('https://pokeapi.co/api/v2/pokemon/salamence')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setDataa(data.sprites.other['official-artwork'].front_default)
  })
  .catch(error => {
    console.error('Error:', error);
  });

    return (
        <> 
        <header className="header">
            <p>Pokemon Memory Game</p>
            <div className="score">
                <img height='200px' src={dataa} />
                <p>Score: <span className="currentScore">0</span></p>
                <p>Best Score: <span className="bestScore">0</span></p>
            </div>
        </header>
        </>
       
    )
}