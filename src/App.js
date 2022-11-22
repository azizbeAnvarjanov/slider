import React from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';


// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';


import Img1 from './imgd/1.jpg'
import Img2 from './imgd/2.jpg'
import Img3 from './imgd/3.jpg'
import Img4 from './imgd/4.jpg'
import Img5 from './imgd/5.jpg'


function App() {
  return (
   <>
      <header>
        <Splide
        className="slider"
        aria-label="My Favorite Images"
          options={{
            type: 'loop',
            width: "auto",
            height: "100%",
            perPage: 2,
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
            autoplay: true,
            focus: 'center',
            gap: '1rem',
          }}
        >
          <SplideSlide className="slide">
            <img src={Img1} alt="" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={Img2} alt="" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={Img3} alt="" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={Img4} alt="" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={Img5} alt="" />
          </SplideSlide>
        </Splide>
      </header>
   </>
  );
}

export default App;
