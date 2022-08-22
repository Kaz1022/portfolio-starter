import React from 'react';
import './Card.css';


function Card({ emoji, heading, detail, detail2}) {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{detail2}</span>

    </div>
  )
}

export default Card