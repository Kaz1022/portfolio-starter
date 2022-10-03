import { React, useContext } from 'react'
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import './Skills.css';
import YellowBack from '../../img/yellowback.png';
import PinkBack from '../../img/pinkback.png';
import NavyBack from '../../img/navyback.png';
import Card from '../Card/Card';

function Skills() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transision = {duration: 1, type: "spring"};

  return (
    <div className="skills" id="Skills">
      {/* left side */}
      <div className="myskills">
        <h1 style={darkMode? {color: "white"} : {color: ""}}>
          My Skills
        </h1>
        <span>
          <h3 style={darkMode? {color: "white"} : {color: ""}}>Tech Stack</h3> Javascript, Ruby HTML, CSS, SQL, NodeJS, Ajax, Express, EJS, jQuery, React, Rails, Active Record, Bootstrap, SASS.<br/><br/>
          I first started coding in the fall of 2021 in preparation for a Web Development Bootcamp, starting with zero experience. Through the 8 month program I learned not only the fundamentals of web development, but also how to work with a team and to think like a developer, picking up new languages and frameworks on the go.

          <h3 style={darkMode? {color: "white"} : {color: ""}}>Other</h3>
          I am adaptable and possess a flexible mindset.<br/><br/>

          I have traveld extensively around the world before Covid and I am aware that when working with other poeple it is crucial to be flexible, patient, and cluturaly sensitive. I have these skills and I am confident that I can continue to apply them in any environment. 
        </span>
          
        <div className="blur s-blur1" style={{background: "var(--yellow)"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
       {/* Frist Card */}
        <motion.div 
        initial={{left: "25rem"}}
        whileInView={{left: "16rem"}}
        transition={transision}        
        >
          <Card
            emoji={YellowBack}
            heading={"Languages"}
            detail={"Javascript, Ruby"}
            detail2={"HTML, CSS, SQL"}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div 
        initial={{top: "2rem", left: "-5rem"}}
        whileInView={{top: "6rem", left: "-1rem"}}
        transition={transision}
        >
          <Card
            emoji={PinkBack}
            heading={"Frameworks & Libraries"}
            detail={"NodeJS, Ajax, Express, EJS"}
            detail2={"jQuery, React, Rails, Active Record, Bootstrap, SASS"}
          />
        </motion.div>


        {/* Third Card */}
        <motion.div 
        initial={{top: "18rem", left: "15rem"}}
        whileInView={{top: "15rem", left: "12rem"}}
        transition={transision}
        >
          <Card
            emoji={NavyBack}
            heading={"Systems & Databases"}
            detail={"PostgreSQL, Git"}
          />
        </motion.div>

        
      </div> 
    </div>
  )
}

export default Skills