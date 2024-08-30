'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

export default function ContinuousSwiper() {
  return (
    <div className="w-full py-5 sm:py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={10000}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-no-ease"
      >
        <SwiperSlide>
          <Image
            src="/assets/img/ig-1.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/ig-2.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/ig-3.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/ig-4.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/ig-5.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/ig-6.jpg"
            quality={100}
            width={1080}
            height={1080}
            alt="Hyper Energy Bar Instagram"
            className="mx-auto rounded-2xl sm:rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
