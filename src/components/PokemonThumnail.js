import React,{useEffect} from 'react'
import Animate from '../../src/animateScroll'


function PokemonThumnail({key,id, name, image, type, detailToggle, detailSelect}) {

  useEffect(()=>{
    
    
    Animate()
    
  },[])
   
  return (
    <div className=" thumb-container" onClick={()=>{detailToggle(); detailSelect(id)}} >
        
        <img className="image-pokemon" src={image} alt={name} />
        
    </div>
  )
}

export default PokemonThumnail