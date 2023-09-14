import React from "react";
import "../css/body.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import _ from 'lodash';

export default function Body({changeScore}) {
  const [pokemonData, setPokemonData] = React.useState([]);
  const pokemon = [149, 248, 306, 330, 373, 376, 445, 612, 635, 637, 706, 715, 784, 887, 998];

    React.useEffect(() => {
        Promise.all(
        pokemon.map((dragon,id) => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${dragon}/`)
            .then(response => response.json())
            .then(data => {
                 return {
                    imageUrl:data.sprites.other['official-artwork'].front_default,
                    name:data.name,
                    id:pokemon[id],
                    isClicked:false,
                }
            })
            .catch(error => {
                console.error('Error:', error);
                return null; 
            });
        })
        ).then(results => {
        setPokemonData(results); 
        });
    }, []);
  
    function handleClick(id) {
        setPokemonData(prevData =>
            prevData.map(data => {
                if (id === data.id) {
                    return {
                        ...data,
                        isClicked: true
                    };
                }
                return data;
            })
        );
        changeScore();
        shuffleCards();

    }
    
    
    function shuffleCards(){
     setPokemonData(data => _.shuffle(data));
    }

    return (
        <div className="pokemonDiv">
          {pokemonData.map(pokemon => (
            <div key={pokemon.id}>
              <img className='pokemon' src={pokemon.imageUrl} onClick={()=>handleClick(pokemon.id,pokemon.isClicked)}  />
            </div>
          ))}
        </div>
    );
}