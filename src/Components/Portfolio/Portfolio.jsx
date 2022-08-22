import { React, useContext } from 'react'
import { themeContext } from '../../Context';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Arpeggio from '../../img/arpeggio.png';
import Marketplace from '../../img/marketplace.png';
import Tweeter from '../../img/tweeter.png';
import Tinyapp from '../../img/tinyapp.png';
import 'swiper/css';


function Portfolio() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      {/* heading */}
      <span style={darkMode? {color: "var(--purple)"} : {color: ""}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/Kaz1022/arpeggio" target="_blank" rel="noopener noreferrer">
          <img src={Arpeggio} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/Kaz1022/Lighthouse-Marketplace" target="_blank" rel="noopener noreferrer">
          <img src={Marketplace} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/Kaz1022/tweeter-template" target="_blank" rel="noopener noreferrer">
          <img src={Tweeter} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
         <a href="https://github.com/Kaz1022/tinyapp" target="_blank" rel="noopener noreferrer">
          <img src={Tinyapp} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Portfolio