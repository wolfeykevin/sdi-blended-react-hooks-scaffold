import { useState, useEffect } from 'react';

const usePokemonAPI = (URL) =>{
  
  const [data, setData] = useState({
    pokemonData: []
  });

  useEffect(() => {
    let fetchArray = [];
    // console.log("fetching Data now")
    for (let i = 1; i <= 151; i++)
    {
      fetchArray.push(
        fetch(`${URL}${i}`)
        .then(res => res.json())
      )
    }
    Promise.all(fetchArray)
    .then((fetchResults) => {
      setData({
        ...data,
        pokemonData: fetchResults
      })
    })

  },[])
  return [data, setData];

}

export default usePokemonAPI;