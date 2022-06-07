import { library } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import PokemonThumnail from './components/PokemonThumnail'
import PokemonDetail  from './components/PokemonDetail'
import Loading from './components/Loading'
import Animate from './animateScroll'

import pokeImg from "./images/pokedex.png"



function App() {

 
  //RANDOM NUMBER LOGIC

    const randomNumberMax = Math.floor(Math.random() * (120- 20 + 1) + 20)
    const api= `http://pokeapi.co/api/v2/pokemon?limit=150&offset=1`
  
 


  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(api)
  const [detailSection, setdetailSection] = useState(false)
  const [detailSelection, setDetailSelection] = useState()
  const [loadingScreen, setLoadingScreen] = useState(true)




  //CURSOR LOGIC
  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )
  const cursorStyle={
    left:x,
      top:y
  };

  //KEYDOWN LOGIC
  useEffect(
    ()=>{
      document.addEventListener('keydown', detectKeyEsc, true)
    },[])
  
    const detectKeyEsc =(e)=>{
      if(e.key==="Escape"){
        setdetailSection(false)
      }
    }

  //DETAIL LOGIC
    const detailToggle=()=>{
      setdetailSection(currentState => !currentState)
  
    }
  
    const detailSelect=(x)=>{
      setDetailSelection(x)
      
    }



//API FETCH LOGIC
 
  const getAllPokemons = async()=>{
    const res = await fetch(loadMore)
    const data =  await res.json()
   
    

  

  

  setLoadMore(data.next)

  const getPokemonData = async(url)=>{
    const response = await fetch(url);
    const dataa  =  await response.json();
    return dataa 
  }
  const promises = data.results.map(async (pokemons)=>{
    return await getPokemonData(pokemons.url)
  })
  const results = await Promise.all(promises)
  setAllPokemons(results)
   
  setLoadingScreen(false)
  }
  
  

  

  useEffect(()=>{
    
    getAllPokemons()
    Animate()
    
  },[])

  return (
    <div className='main'>
    {loadingScreen && <Loading loadingScreen={loadingScreen}/>}

    
    <div className='cursor' style={cursorStyle}> <img src={pokeImg} alt="" /> </div>
    
    {detailSection && <PokemonDetail detailToggle={detailToggle} detailSelection={detailSelection} allPokemons={allPokemons} cursorStyle={cursorStyle} />}
    <div className="app-container">
      
      
     
      <h1>Pokedex</h1>
      <div className="pokemon-container"></div>
      <div className="all-container">
        {allPokemons.map((pokemonStats, index) =>
        <PokemonThumnail
        key={index}
        id={index}
        image={pokemonStats.sprites.front_default}
        name={pokemonStats.name}
        type={pokemonStats.types[0].type.name}
        detailToggle={detailToggle}
        detailSelect={detailSelect}
        detailSelection={detailSelection}

        />
      )}
      </div>

      
      
    </div>
    
    </div>
  );
}

export default App;
