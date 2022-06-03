import React from 'react'

const PokemonDetail = ({ detailSelection, allPokemons, cursorStyle, }) => {
    
    const typeColor = allPokemons[detailSelection].types[0].type.name
    const stylee= typeColor + " image-detail"

    const peso = (allPokemons[detailSelection].weight)/10
    const altura = (allPokemons[detailSelection].height)/10
  return (
    <div className='detail-background' style={cursorStyle}>
        <div className="detail-section">

        <div className={stylee}>
            
            <img src={allPokemons[detailSelection].sprites.other.dream_world.front_default} alt="" />
        </div>
        <div className="text-detail">
            <ul>
                <li  style={{fontSize:"25px", textTransform: 'uppercase'}}>{allPokemons[detailSelection].name}</li>
                
                <li style={{marginTop:"3px"}}>habilidades: {allPokemons[detailSelection].abilities.map((e)=>(e.ability.name + " " ))} </li>
            </ul>
        </div>
        <div className="peso"> {peso} kg</div>
        <div className="altura">{altura} m</div>
        <div className="instrucciones">Esc para limpiar</div>
        </div>
    </div>
  )
}
export default PokemonDetail