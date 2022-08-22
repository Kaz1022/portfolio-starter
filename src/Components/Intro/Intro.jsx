import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import helloworld from '../../img/helloworld.png'
import pinkdot from '../../img/pinkdot.png'
import yellowdot from '../../img/yellowdot.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Full Stack Web Developer</span>
          <span>Kaz Baynton</span>
          <span>I am a developer who has a passion in language learning! Currently I speak Javascript, and Ruby.</span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/Kaz1022" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kazuko-baynton-58898321b/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={helloworld} alt="" />
        <div style={{left:'10%'}}>
          <FloatingDiv image={pinkdot}/>
        </div>
        <div style={{top: '19rem', left:'80%'}}>
          <FloatingDiv image={yellowdot} />
        </div>

        {/* blur divs */}
        <div className="blur" style={{background: 'var(--lightPink)'}}>
        </div>
        <div className="blur" 
          style={{
            background: 'var(--purple)',
            top: '17rem',
            width: '10rem',
            height: '10rem',
            left: '70%'}}>
        </div>
      </div>
    </div>
  )
}

export default Intro