import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from "./GlobalContext";

const PokemonDetails = () => {

    let globalContext = useContext(GlobalContext);
    // useEffect
    // console.log(globalContext);

    let pokemonData = globalContext.data.pokemonData;
    let pokemonSpeciesData = globalContext.speciesData.pokemonData;
    console.log(pokemonSpeciesData);
    let pokemonIndex = globalContext.currentPokemonIndex
    let pokemonName = pokemonData[pokemonIndex].species.name[0].toUpperCase() + pokemonData[pokemonIndex].species.name.substring(1);
    return (
            <div className="pokemon-details">

                <button onClick={() => {
                            globalContext.setCurrentPage('listing');

                }}>
                    <p>Back to Listing</p>
                </button>
                <div className="profile">
                  <div className="profileimg">
                    <img src = {pokemonData[pokemonIndex].sprites.front_default} alt={pokemonData[pokemonIndex].name}/>
                  </div>
                  <div className="profilecontent">
                    <h1>{pokemonName}</h1>
                    <p>{pokemonSpeciesData[pokemonIndex].flavor_text_entries[0].flavor_text}</p>
                    <p>Type: {pokemonData[pokemonIndex].types.map((type) => {
                        return <> {type.type.name + " "}/ </>
                    })}</p>
                    <p>Height: {pokemonData[pokemonIndex].height}</p>
                    <p>Weight: {pokemonData[pokemonIndex].weight}</p>
                    <p>
                        Base Stats: {pokemonData[pokemonIndex].stats.map((stat) => {
                            return <>{`\t${stat.stat.name} = ${stat.base_stat} / `}</>
                        })}
                    </p>
                  </div>
                </div>
                <div className="moves">
                    <h2>Moves:</h2> 
                    <ul className = "moves-list">
                      {pokemonData[pokemonIndex].moves.map((move) => {
                          return (
                          <li>
                              {move.move.name}
                          </li>)
                      })}
                    </ul>
                </div>
            </div>


        );
}

export default PokemonDetails;

// globalContext.setData({                              
//   ...globalContext.data,
//   currentPokemonIndex: i
// },console.log(globalContext.data))