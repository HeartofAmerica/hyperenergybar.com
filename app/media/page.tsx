'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Media() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-5 lg:pt-44 lg:pb-20">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            The Hype
          </h1>
        </div>
      </div>
      <div className="container max-w-screen-xl px-5 lg:px-10">
        <div className="relative overflow-hidden">
          <div className="container max-w-screen-xl">
            <div className="sm:grid sm:grid-cols-2 sm:gap-0 sm:flex items-center bg-darkgreen rounded-3xl overflow-hidden">
              <div className="max-w-[600px] mx-auto px-5 py-10 text-center">
                <h3 className="obvi-sm text-neon mb-2 sm:mb-5">
                  Featured
                </h3>
                <h1 className="obvi-md text-ltgreen mb-5 sm:mb-10">
                  The Hype is coming to Iowa City
                </h1>
                <p className="text-white text-sm sm:text-md mb-5 sm:mb-10">
                  We’re a young brand but our roots run deep. Our craft is firmly rooted in hospitality and genuine quality. Our love of providing the best flavors and the best service led us on our journey to create Hyper Energy Bar®.
                </p>
                <a href="#" className="btn-white">
                  Read More
                </a>
              </div>
              <Image
                src="/assets/img/hyper-news-iowa-city.jpg"
                quality={100}
                width={1440}
                height={1280}
                alt="Hyper Energy Bar Catering"
                className="z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-darkgreen bg-white -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
