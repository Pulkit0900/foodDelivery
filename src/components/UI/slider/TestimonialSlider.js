import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/slider.css'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <Slider {...settings}>
        <div>
            <p className='review__text'>
                Using FoodEazy from last one year when we had lockdown due to pandemic. FE provides excellent food product and services. As a customer I am highly impressed with the behaviour of the staff. Delivery is always on time. If anything goes wrong the well experienced staff initimate promptly
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar" className='rounded' />
                <h6> Jhon Doe</h6>
            </div>
        </div>
        <div>
        <p className='review__text'>
                I am repeat customer of FoodEazy and I highly appreciate FE for the best delivery in my location. I thanked them for good quality of food.
                </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className='rounded' />
                <h6> Mitchell Marsh </h6>
            </div>
        </div>
        <div>
        <p className='review__text'>
                A big shout FOODEAZY. You guys are doing a phenomenal job. The products are of Top-notch quality and the level of their services is extremely professional. Overall an amazing experience with FOODEAZY. Kudos!!
                </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className='rounded' />
                <h6> Steven Crock </h6>
            </div>
        </div>
    </Slider>
  )
}

export default TestimonialSlider