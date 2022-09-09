import { React, useContext } from 'react'
import { themeContext } from '../../Context';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Arpeggio from '../../img/arpeggio.png';
import Marketplace from '../../img/marketplace.png';
import Tweeter from '../../img/tweeter.png';
import LiamHicks from '../../img/LiamHicks.png';
import 'swiper/css';


function Portfolio() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      id: 1,
      img: LiamHicks,
      github: "https://github.com/Kaz1022/liamhicks"
    },
    {
      id: 2,
      img: Arpeggio,
      github: "https://github.com/Kaz1022/arpeggio"
    },
    {
      id: 3,
      img: Marketplace,
      github: "https://github.com/Kaz1022/Lighthouse-Marketplace"
    },
    {
      id: 4,
      img: Tweeter,
      github: "https://github.com/Kaz1022/tweeter-template"
    }
  ]

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={darkMode? {color: "var(--purple)"} : {color: ""}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{clickable: true}}
        navigation={{clickable: true}}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((project, index) => {
          return(
            <SwiperSlide key={index}>
               <a href={project.github} target="_blank" rel="noopener noreferrer">
          <img src={project.img} alt="" />
          </a>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>
  )
}

export default Portfolio