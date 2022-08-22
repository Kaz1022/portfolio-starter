import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'


function Footer() {
  return (
   <div className="footer">
    <img src={Wave} alt="" style={{width: "100%"}}/>
    <div className="f-content">
      <span>Kazuko Baynton</span>
      <div className="f-icons">
      <a href="https://github.com/Kaz1022" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kazuko-baynton-58898321b/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" />
          </a>
      </div>
    </div>
   </div>
  )
}

export default Footer