import { library } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import PokemonThumnail from './components/PokemonThumnail'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('http://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async()=>{
    const res = await fetch(loadMore)
    const data =  await res.json()
    

    const ress = await fetch('http://pokeapi.co/api/v2/pokemon/1');
    const dataa =  ress.json()

  

  setLoadMore(data.next)

    function createPokemonObject (result){
      result.forEach(async pokemon => {
        const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
        
      })
    }
   console.log(allPokemons)
    createPokemonObject(data.results)
  }
  useEffect(()=>{
    getAllPokemons()
  },[])

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container"></div>
      <div className="all-container">
        {allPokemons.map((pokemonStats, index) =>
        <PokemonThumnail
        key={index}
        id={pokemonStats.id}
        image={pokemonStats.sprites.front_default}
        name={pokemonStats.name}
        type={pokemonStats.types[0].type.name}
        />
      )}
      </div>

      <button className="load-more" onClick={getAllPokemons}>Load more</button>
      
    </div>
  );
}

export default App;
