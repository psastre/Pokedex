
import React from 'react'
import "./loadingStyle.css"

function Loading(loadingScreen) {
  return (
    <div className='load' style={{display: loadingScreen ? "block" : "none"}}>
    <div class="pokebola1">
        <div class="pokebola2">
    <div class="circulo-grande-arriba medio">
    </div>
    <div class="circulo-grande-abajo medio">
    </div>
    
      
        <div class="circulo-chico medio"></div>
        <div class="circulo-maschico"></div>
    </div>
</div>
    
</div>
  )
}

export default Loading