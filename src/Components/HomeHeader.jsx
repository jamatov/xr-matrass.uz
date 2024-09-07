import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img from '../Images/home-header.png'
import icon1 from '../Images/header-slide1.png'
import icon2 from '../Images/header-slider2.png'
import icon3 from '../Images/header-slider3.png'
import { Fade } from 'react-reveal';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeHeader() {
  return (
    <header className='HomeHeader'>
      <div className="container">
        <div className="row re">
          <Fade left>

            <div className="col-md-6 header-info">
              <h2>Наслаждайтесь <span>здоровьем и комфортом</span> с нашим матрасом!</h2>
              <h3>Ортопедическая опора с дополнительным амортизирующим слоем. <br />
  С нашими матрасами теперь вам будет легче спать по ночам. <br />
  Жесткость настраивается и адаптируется к вашему телу.</h3>
              {/* <h3>Qo'shimcha yostiqli qatlamli, ortopedik qo'llab-quvvatlovchi <br /> matraslarimiz bilan tunda tinch uxlash endi yanada oson. <br /> Qattiqligi moslashtirilgan va tanangizga mos ravishda tayyorlangan.</h3> */}
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6">
              <img className='header-img' src={img} alt="header-img" />
            </div>
          </Fade>

          

          <div className="header-icons dn col-12">
            <div className="row">

              <div className="col-md-4 primushestva">
                <div className="card">
                  <div className="d-flex">
                    <div className='card-icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="url(#paint0_linear_177_1410)"/>
                        <defs>
                          <linearGradient id="paint0_linear_177_1410" x1="2" y1="2" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1971D0"/>
                            <stop offset="1" stop-color="#1B7BE4"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className='card-info'>
                      <h3>Высокое качество и гарантия</h3>
                      <p>Мы даем гарантию на наши матрасы от 4 до 7 лет. Наши матрасы не теряют своих качеств даже через 10 лет.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 primushestva">
                <div className="card">
                  <div className="d-flex">
                    <div className='card-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z" fill="url(#paint0_linear_177_1415)"/>
                      <defs>
                        <linearGradient id="paint0_linear_177_1415" x1="1" y1="5" x2="23" y2="5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1971D0"/>
                          <stop offset="1" stop-color="#1B7BE4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    </div>
                    <div className='card-info'>
                      <h3>Служба доставки</h3>
                      <p>Наша служба доставки доступна по всему Узбекистану, бесплатная доставка по городу Ташкенту.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 primushestva">
                <div className="card">
                  <div className="d-flex">
                    <div className='card-icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_177_1423)">
                          <path d="M18.8581 0.0984287C17.5925 0.365616 16.4769 1.21874 15.905 2.36718C15.3519 3.47812 15.3284 4.36405 15.7972 6.85312C15.9472 7.65468 16.0081 7.81874 16.205 7.95937C16.4909 8.16093 16.8284 8.14218 17.0909 7.91249C17.3581 7.67812 17.3722 7.52343 17.2081 6.64218C16.955 5.28749 16.9081 4.9078 16.9034 4.31249C16.8987 3.81562 16.9175 3.67968 17.0066 3.41718C17.4191 2.22187 18.4691 1.44843 19.6878 1.44374C20.5175 1.43905 21.0847 1.67343 21.6566 2.24999C22.0456 2.63905 22.1956 2.88749 22.3878 3.4453C22.4956 3.76874 22.5191 3.91874 22.5378 4.50937C22.5894 6.23905 22.1347 8.2453 21.3144 9.86718C20.9956 10.5047 20.9487 10.7672 21.1222 11.0062C21.4269 11.4141 21.9237 11.4562 22.2519 11.1C22.3925 10.95 22.8331 10.05 23.0534 9.46874C23.6909 7.77187 23.9675 6.35155 23.9675 4.7578C23.9722 3.83437 23.8972 3.3703 23.6441 2.7328C23.3019 1.86093 22.5659 0.984366 21.8347 0.571866C20.9112 0.0515537 19.8706 -0.117196 18.8581 0.0984287Z" fill="url(#paint0_linear_177_1423)"/>
                          <path d="M11.4846 3.84374C11.2127 3.8625 10.9455 3.89999 10.8986 3.92812C10.8471 3.95625 8.4377 6.34687 5.54552 9.24374C2.10489 12.6891 0.258017 14.5734 0.197079 14.6953C-0.0419832 15.1734 -0.0326082 15.7594 0.211142 16.2141C0.295517 16.3687 1.46739 17.5641 3.99864 20.0953C7.25177 23.3391 7.69239 23.7609 7.91739 23.8547C8.39552 24.0562 8.93458 24.0281 9.35177 23.7844C9.45489 23.7234 11.9252 21.2859 14.8455 18.3656C19.6502 13.5562 20.1518 13.0359 20.1893 12.8672C20.2596 12.5156 20.2268 9.74531 20.1377 8.74218C20.0299 7.47656 19.7955 5.32968 19.7346 5.02031C19.6736 4.69218 19.5377 4.48125 19.3221 4.37812C19.1721 4.30781 18.4549 4.18124 17.8033 4.11562C17.6252 4.09218 17.583 4.10625 17.5643 4.17187C17.5408 4.26562 17.5877 4.82343 17.6721 5.38124C17.7236 5.72343 17.7377 5.75624 17.9721 5.99999C18.2721 6.30937 18.3893 6.50156 18.4877 6.83906C18.6518 7.40156 18.5346 8.07187 18.1924 8.53125C17.7893 9.06562 17.2736 9.32812 16.6127 9.32812C15.2065 9.32812 14.2596 7.85625 14.8502 6.59062L14.9955 6.27656L14.8971 5.65781C14.8408 5.30624 14.7986 4.79531 14.794 4.46718L14.7893 3.89531L14.4611 3.87187C13.8611 3.825 11.9861 3.80624 11.4846 3.84374ZM13.6783 10.6547L14.1096 11.0859L13.7158 11.4797L13.3174 11.8734L13.519 12.1125C13.8752 12.5344 14.2971 13.2516 14.2971 13.4344C14.2971 13.4766 13.4111 14.0203 13.0736 14.1844C13.0596 14.1937 12.9893 14.0578 12.9143 13.8844C12.6236 13.2 12.0705 12.5062 11.6346 12.2859C11.2643 12.0984 10.8565 12.1922 10.7111 12.4969C10.5705 12.7922 10.6315 13.0547 11.0908 14.1422C11.644 15.4453 11.7096 16.0312 11.3721 16.7062C11.0299 17.4094 10.3783 17.8781 9.62833 17.9672C9.2627 18.0141 9.18302 18.0094 8.82677 17.9156C8.46114 17.8219 8.20802 17.7141 7.84239 17.5031L7.6877 17.4141L7.23302 17.8687L6.77364 18.3281L6.3377 17.8969L5.90645 17.4609L6.3377 17.0297L6.76427 16.6031L6.55333 16.35C6.43614 16.2141 6.28145 16.0078 6.20177 15.8906C5.96739 15.5437 5.58302 14.7422 5.62989 14.7C5.63927 14.6859 5.93458 14.5125 6.28145 14.3016C6.82052 13.9828 6.91895 13.9359 6.94708 14.0062C6.96583 14.0484 7.03145 14.2219 7.09708 14.3859C7.45333 15.3047 8.2127 16.1344 8.82677 16.2844C9.1502 16.3594 9.53458 16.1109 9.61427 15.7687C9.67989 15.4875 9.58614 15.15 9.22989 14.3344C8.8127 13.3828 8.7002 12.9562 8.72833 12.4266C8.74239 12.0984 8.7752 11.9625 8.89239 11.7141C9.16895 11.1234 9.79708 10.65 10.4486 10.5422C10.9736 10.4578 11.6768 10.6219 12.1877 10.9453L12.3611 11.0531L12.7783 10.6359C13.008 10.4062 13.2049 10.2187 13.219 10.2187C13.233 10.2187 13.4393 10.4156 13.6783 10.6547Z" fill="url(#paint1_linear_177_1423)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_177_1423" x1="15.4663" y1="11.3419" x2="23.9677" y2="11.3419" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1971D0"/>
                            <stop offset="1" stop-color="#1B7BE4"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_177_1423" x1="0.0229492" y1="23.9886" x2="20.2273" y2="23.9886" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1971D0"/>
                            <stop offset="1" stop-color="#1B7BE4"/>
                          </linearGradient>
                          <clipPath id="clip0_177_1423">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='card-info'>
                      <h3>Широкий ценовой диапазон:</h3>
                      <p>У нас есть матрасы на любой бюджет, и мы предлагаем продукцию по конкурентоспособным ценам.</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <div className="d-flex">
              <div className='card-icon'>
                <img src={icon1} alt="" />
              </div>
              <div className='card-info'>
                <h3>Высокое качество и гарантия</h3>
                <p>Мы даем гарантию на наши матрасы от 4 до 7 лет. Наши матрасы не теряют своих качеств даже через 10 лет.</p>
              </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="d-flex">
              <div className='card-icon'>
                <img src={icon2} alt="icon" />
              </div>
              <div className='card-info'>
                <h3>Служба доставки</h3>
                <p>Наша служба доставки доступна по всему Узбекистану, бесплатная доставка по городу Ташкенту.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
            <div className="d-flex">
              <div className='card-icon'>
                <img src={icon3} alt="icon" />
              </div>
              <div className='card-info'>
              <h3>Широкий ценовой диапазон:</h3>
                      <p>У нас есть матрасы на любой бюджет, и мы предлагаем  продукцию по конкурентоспособным ценам.</p>
                    </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </header>
  )
}
