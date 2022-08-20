import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import helloworld from '../../img/helloworld.png'

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
          <a href="https://github.com/Kaz1022">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kazuko-baynton-58898321b/">
          <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={helloworld} alt="" />
      </div>
    </div>
  )
}

export default Intro