import React from 'react'


function PokemonThumnail({id, name, image, type}) {
    const style= type + " thumb-container"
  return (
    <div className={style}>
        <div className="number">
            <small>#0{id}</small>
        </div>
        <img className="image-pokemon" src={image} alt={name} />
        <div className="detail-wrapper">
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonThumnail