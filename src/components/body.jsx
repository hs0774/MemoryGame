import React from "react";
import "../css/body.css";

export default function Body() {
  const [pokemonData, setPokemonData] = React.useState([]);
  const pokemon = [149, 248, 373, 376, 445, 635, 706, 784, 887, 998];

    React.useEffect(() => {
        Promise.all(
        pokemon.map(dragon => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${dragon}/`)
            .then(response => response.json())
            .then(data => data.sprites.other['official-artwork'].front_default)
            .catch(error => {
                console.error('Error:', error);
                return null; 
            });
        })
        ).then(results => {
        setPokemonData(results); 
        });
    }, []);
  

return (
    <div className="pokemonDiv">
      {pokemonData.map((imgUrl, index) => (
        <img className="pokemon" key={pokemon[index]}  src={imgUrl}/>
      ))}
    </div>
  );
}

