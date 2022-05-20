import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import GlobalContext from './GlobalContext';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import usePokemonAPI from './usePokemonAPI'

/**
 * 2 main components in app
  * Pokemon List
  * Individual Pokemon Details
 */



function App() {
  

  const [currentPage, setCurrentPage] = React.useState('listing');
  const [data, setData] = usePokemonAPI(`https://pokeapi.co/api/v2/pokemon/`)
  const [speciesData, setSpeciesData] = usePokemonAPI(`https://pokeapi.co/api/v2/pokemon-species/`)
  const [currentPokemonIndex, setPokemonIndex] = React.useState(0);


  console.log(data.pageToDisplay);
  if(currentPage === 'listing')
  {
    return (
      <div className="App">
        <GlobalContext.Provider value={{data, setData, currentPokemonIndex, setPokemonIndex, currentPage, setCurrentPage}}>
          <PokemonList />
        </GlobalContext.Provider>
      </div>
    );
  }else
  {
    return(
      <div className="App">
        <GlobalContext.Provider value={{data, setData, currentPokemonIndex, setPokemonIndex, currentPage, setCurrentPage, speciesData, setSpeciesData}}>
          <PokemonDetails />
        </GlobalContext.Provider>
      </div>
    )

  }

}

export default App;


