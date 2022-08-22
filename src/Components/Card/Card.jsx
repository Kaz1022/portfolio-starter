import { React, useContext } from 'react'
import { themeContext } from '../../Context';
import './Card.css';

function Card({ emoji, heading, detail, detail2}) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={darkMode? {color: "var(--purple)"} : {color: ""}}>{heading}</span>
      <span style={darkMode? {color: "white"} : {color: ""}}>{detail}</span>
      <span style={darkMode? {color: "white"} : {color: ""}}>{detail2}</span>

    </div>
  )
}

export default Card