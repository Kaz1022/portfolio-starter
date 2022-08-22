import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css';
import Yellowdot from '../../img/yellowdot.png';
import Pinkdot from '../../img/pinkdot.png';

function Contact() {

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
    <div className="contact-form">
      <div className="w-left">
        <div className="myskills">
          <span>Contact me</span>
        </div>
        <img src={Yellowdot} alt="" />
        <img src={Pinkdot} alt="" style={{top: '8rem', left:'-10rem', transform: "rotate(180deg)"}} />
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thank you for contacting me!"}</span>
        </form>

      </div>

    </div>
  )
}

export default Contact