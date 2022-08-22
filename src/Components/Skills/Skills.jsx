import React from 'react';
import './Skills.css';
import YellowBack from '../../img/yellowback.png';
import PinkBack from '../../img/pinkback.png';
import NavyBack from '../../img/navyback.png';
import Card from '../Card/Card';

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
       {/* Frist Card */}
        <div style={{left: "16rem"}}>
          <Card
            emoji={YellowBack}
            heading={"Languages"}
            detail={"Javascript, Ruby, HTML, CSS, SQL"}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "6rem", left: "-1rem"}}>
          <Card
            emoji={PinkBack}
            heading={"Frameworks & Libraries"}
            detail={"NodeJS, React, Ajax, Express, EJS, jQuery, Rails"}
          />
        </div>


        {/* Third Card */}
        <div style={{ top: "15rem", left: "12rem"}}>
          <Card
            emoji={NavyBack}
            heading={"Systems & Databases"}
            detail={"PostgreSQL, Git, Active Record"}
          />
        </div>

        
      </div> 
    </div>
  )
}

export default Skills