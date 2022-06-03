import React from 'react'


function PokemonThumnail({key,id, name, image, type, detailToggle, detailSelect}) {

         
   
  return (
    <div className=" thumb-container" onClick={()=>{detailToggle(); detailSelect(id)}} >
        
        <img className="image-pokemon" src={image} alt={name} />
        
    </div>
  )
}

export default PokemonThumnail