import React from 'react';
import './Skills.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

function Skills() {
  return (
    <div className="skills">
      {/* left side */}
      <div className="myskills">
        <span>My Skills</span>
        <span>
        I first started coding in the fall of 2021 to get into a bootcamp. I always liked using computers but never coded before. From zero experience, through 8 month flex program, I have learned so much.
        </span>
        <a href="https://resume.creddle.io/resume/6g5rlahe2ri">
        <button className="button s-button">My Resume</button>
        </a>
       
        <div className="blur s-blur1" style={{background: "var(--yellow)"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
        I am the right.
      </div>
      
    </div>
  )
}

export default Skills