import React from 'react'
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Kaz</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to="Navbar" smooth={true} >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true} >
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} >
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar