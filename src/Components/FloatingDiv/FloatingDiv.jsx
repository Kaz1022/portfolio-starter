import React from 'react'
import './FloatingDiv.css'

function FloatingDiv({image, txt1, txt2}) {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
    </div>
  )
}

export default FloatingDiv