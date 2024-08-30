'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

export default function AnnouncementBar() {
  return (
    <Link href="/specials" className="block w-full bg-neon hover:bg-white rounded-2xl pt-2 sm:pt-4 pb-4 lg:pb-6 transition-all duration-300">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={20000}
        allowTouchMove={false}
        pagination={false}
        navigation={false}
        className="swiper-no-ease"
      >
        <SwiperSlide>
          <div className="flex items-center">
            <div className="mx-ab text-green w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M0,108c59.65,0,108-48.35,108-108,0,59.65,48.35,108,108,108-59.65,0-108,48.35-108,108,0-59.65-48.35-108-108-108Z"/>
              </svg>
            </div>
            <div className="obvi-ab text-center">
              CHECK OUT THE NEW FALL SPECIALS MENU
            </div>
            <div className="mx-ab sm:mx-10 text-pinkpowder w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M216,108c0-14.44-11.71-26.15-26.15-26.15h-18.73l13.24-13.24c10.21-10.21,10.21-26.77,0-36.98-10.21-10.21-26.76-10.21-36.98,0l-13.24,13.24v-18.73c0-14.44-11.71-26.15-26.15-26.15s-26.15,11.71-26.15,26.15v18.73l-13.24-13.24c-10.21-10.21-26.77-10.21-36.98,0-10.21,10.21-10.21,26.77,0,36.98l13.24,13.24h-18.73c-14.44,0-26.15,11.71-26.15,26.15s11.71,26.15,26.15,26.15h18.73l-13.24,13.24c-10.21,10.21-10.21,26.77,0,36.98,5.11,5.11,11.8,7.66,18.49,7.66s13.38-2.55,18.49-7.66l13.24-13.24v18.73c0,14.44,11.71,26.15,26.15,26.15s26.15-11.71,26.15-26.15v-18.73l13.24,13.24c5.11,5.11,11.8,7.66,18.49,7.66s13.38-2.55,18.49-7.66c10.21-10.21,10.21-26.77,0-36.98l-13.24-13.24h18.73c14.44,0,26.15-11.71,26.15-26.15Z"/>
              </svg>
            </div>
            <div className="obvi-ab text-center hidden sm:block">
              CHECK OUT THE NEW FALL SPECIALS MENU
            </div>
            <div className="mx-ab sm:mx-10 text-green w-8 h-8 hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M0,108c59.65,0,108-48.35,108-108,0,59.65,48.35,108,108,108-59.65,0-108,48.35-108,108,0-59.65-48.35-108-108-108Z"/>
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center">
            <div className="mx-ab sm:mx-10 text-pinkpowder w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M216,108c0-14.44-11.71-26.15-26.15-26.15h-18.73l13.24-13.24c10.21-10.21,10.21-26.77,0-36.98-10.21-10.21-26.76-10.21-36.98,0l-13.24,13.24v-18.73c0-14.44-11.71-26.15-26.15-26.15s-26.15,11.71-26.15,26.15v18.73l-13.24-13.24c-10.21-10.21-26.77-10.21-36.98,0-10.21,10.21-10.21,26.77,0,36.98l13.24,13.24h-18.73c-14.44,0-26.15,11.71-26.15,26.15s11.71,26.15,26.15,26.15h18.73l-13.24,13.24c-10.21,10.21-10.21,26.77,0,36.98,5.11,5.11,11.8,7.66,18.49,7.66s13.38-2.55,18.49-7.66l13.24-13.24v18.73c0,14.44,11.71,26.15,26.15,26.15s26.15-11.71,26.15-26.15v-18.73l13.24,13.24c5.11,5.11,11.8,7.66,18.49,7.66s13.38-2.55,18.49-7.66c10.21-10.21,10.21-26.77,0-36.98l-13.24-13.24h18.73c14.44,0,26.15-11.71,26.15-26.15Z"/>
              </svg>
            </div>
            <div className="obvi-ab text-center">
              CHECK OUT THE NEW FALL SPECIALS MENU
            </div>
            <div className="mx-ab text-green w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M0,108c59.65,0,108-48.35,108-108,0,59.65,48.35,108,108,108-59.65,0-108,48.35-108,108,0-59.65-48.35-108-108-108Z"/>
              </svg>
            </div>
            <div className="obvi-ab text-center hidden sm:block">
              CHECK OUT THE NEW FALL SPECIALS MENU
            </div>
            <div className="mx-ab sm:mx-10 text-green w-8 h-8 hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor">
                <path d="M0,108c59.65,0,108-48.35,108-108,0,59.65,48.35,108,108,108-59.65,0-108,48.35-108,108,0-59.65-48.35-108-108-108Z"/>
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Link>
  );
}