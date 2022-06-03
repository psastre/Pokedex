import React,{useState, useEffect} from 'react'
import pokeImg from "../images/pokedex.png"

const Pokedex = () => {

  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)

    },
    [setX, setY]
  )
  const cursorStyle={
    left:x,
    top:y
  };

  return (
    <div className='cursor' style={cursorStyle}><img src={pokeImg} alt="" /></div>
  )
}
export default Pokedex