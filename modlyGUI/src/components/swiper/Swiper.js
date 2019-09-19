import React from 'react'
import Swiper from 'react-id-swiper'
import table1 from '../../shared/images/tableImages/1.jpg'
import table2 from '../../shared/images/tableImages/2.jpg'
import table3 from '../../shared/images/tableImages/3.jpg'
import table4 from '../../shared/images/tableImages/4.jpg'
import table5 from '../../shared/images/tableImages/5.jpg'
import table6 from '../../shared/images/tableImages/6.jpg'
import table7 from '../../shared/images/tableImages/7.jpg'
import table8 from '../../shared/images/tableImages/8.jpg'
import table9 from '../../shared/images/tableImages/9.jpg'
import table10 from '../../shared/images/tableImages/10.jpg'
import './Swiper.css'
import 'react-id-swiper/lib/styles/css/swiper.css'

const MutipleSlidesPerView = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 40,
        stretch: -30,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
/*       breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      } */
      
      
      
    }
    return (
      <div className="test">
      <h1>Templates. Why dont you put some of your flavour upon it?</h1>
      <Swiper {...params}>
            <img className="swiperImage" src={table1}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table2}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table3}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table4}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table5}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table6}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table7}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table8}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table9}   alt="SpinnerLogo"/>
            <img className="swiperImage" src={table10}   alt="SpinnerLogo"/>
      </Swiper>
    </div>
    )
  };
  export default MutipleSlidesPerView;