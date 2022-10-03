import { React, useContext } from 'react'
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import './Intro.css'
import Resume from './Resume.pdf'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import helloworld from '../../img/helloworld.png'
import pinkdot from '../../img/pinkdot.png'
import yellowdot from '../../img/yellowdot.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  
  // Transition
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Full Stack Web Developer</span>
          <span style={darkMode? {color: "white"} : {color: ""}}>Kaz Baynton</span>
          <span>I am a developer who is passionate about language learning, trying new things and aquiring new skills! </span>
        </div>

        
        <button className="button i-button"><a href={Resume} target="_blank" rel="noopener noreferrer" >Resume </a></button>
       

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

        {/* animation */}
        <motion.div
          initial={{ left: "-25%" }}
          whileInView={{ left: "-12%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={pinkdot}/>
        </motion.div>

        <motion.div
          initial={{top: '19rem', left:'90%'}}
          whileInView={{ top: '19rem', left:'75%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={yellowdot} />
        </motion.div>

        {/* blur divs */}
        <div className="blur" style={{background: 'var(--purple)'}}>
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