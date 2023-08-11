import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src='/slider/slider1.jpg' height="460px" className="d-block w-100" alt="Alterantive text" /></SwiperSlide>
                <SwiperSlide> <img src='/slider/slider2.jpg' height="460px" className="d-block w-100" alt="Alterantive text" /></SwiperSlide>
                <SwiperSlide> <img src='/slider/slider3.jpg' height="460px" className="d-block w-100" alt="Alterantive text" /></SwiperSlide>
                <SwiperSlide> <img src='/slider/slider4.jpg' height="460px" className="d-block w-100" alt="Alterantive text" /></SwiperSlide>
            </Swiper>
        </>
    );
}
