import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from "./GlobalContext";

const PokemonList = () => {

    var globalContext = useContext(GlobalContext);
    // useEffect
    // console.log(globalContext);

    var pokemonData = globalContext.data.pokemonData;

    // console.log(pokemonData);

    if (pokemonData.length > 0) {
      return (
        <div className="landing">
            <h1>Pokemon Listing</h1>
            <div className="pokemon-list">
              { pokemonData.map((pokemon, i) => {
                return<li  key={i} onClick={()=>{
                  globalContext.setPokemonIndex(i, console.log("index: ", globalContext.currentPokemonIndex))
                  

                  globalContext.setCurrentPage('details');
                
                  
                  // console.log("index: ", i)  ;
                  // console.log("current pokemon index to: ", globalContext.currentPokemonIndex)  ;
                }}>
                          <img src = {pokemon.sprites.front_default} alt={pokemon.name}/>
                          <p>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</p>

                      </li>
                })
              }
            </div>
        </div>

        );
    } else {
      return (
        <div id="loading" className="loading"><div className="spinner"><img src="https://www.freeiconspng.com/uploads/pikachu-png-icon-6.png" alt="loading"></img></div></div>
      )
    }


}

export default PokemonList;

// globalContext.setData({                              
//   ...globalContext.data,
//   currentPokemonIndex: i
// },console.log(globalContext.data))