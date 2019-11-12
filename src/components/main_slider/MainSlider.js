import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import classNames from 'classnames';


const ManipulatingSwiper = () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
      if (swiper !== null) {
          swiper.slideNext();
      }
  }

  const goPrev = () => {
      if (swiper != null) {
          swiper.slidePrev();
      }
  }

  return (
    <>
        <Swiper getSwiper={updateSwiper}>
            <div>slide 1</div>
            <div>slide 2</div>
            <div>slide 3</div>
        </Swiper>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
    </>
  );
};

export default ManipulatingSwiper;