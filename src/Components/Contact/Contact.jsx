import React, { useRef, useState, useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import './Contact.css';
import Yellowdot from '../../img/yellowdot.png';
import Pinkdot from '../../img/pinkdot.png';

function Contact() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };

  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vcezprt', 'template_kkpdzbg', form.current, 'IIc1OSTjMsv4nqGdj')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="myskills">
          <span style={darkMode? {color: "white"} : {color: ""}}>Contact me</span>
        </div>
        <motion.img 
        initial={{ left:'-3rem' }}
        whileInView={{left:'1rem', transform: "rotate(90deg)" }}
        transition={transition}
        src={Yellowdot} alt="" 
        />
        <motion.img 
        initial={{top: '8rem', left:'-15rem', transform: "rotate(0deg)"}}
        whileInView={{top: '8rem', left:'-10rem', transform: "rotate(180deg)"}}
        transition={transition}
        src={Pinkdot} alt="" 
        />
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span style={darkMode? {color: "white"} : {color: ""}}>{done && "Thank you for contacting me!"}</span>
        </form>

      </div>

    </div>
  )
}

export default Contact