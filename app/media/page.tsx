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
      <div className="sm:grid sm:grid-cols-3 sm:gap-0 py-5 sm:py-10">
        <a
          href=""
          className="flex sm:h-[600px] border-b-2 sm:border-r-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">9/24/24</h3>
            <h3 className="obvi-md text-center py-10">The Hype is coming to Iowa City</h3>
            <h3 className="obvi-sm text-center">News</h3>
          </div>
        </a>
        <a
          href="https://subscribe.desmoinesregister.com/restricted?return=https%3A%2F%2Fwww.desmoinesregister.com%2F..." target="_blank"
          className="flex sm:h-[600px] border-b-2 sm:border-r-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">3/22/24</h3>
            <h3 className="obvi-md text-center py-10">WILL ANKENY GET A HYPER ENERGY BAR?</h3>
            <h3 className="obvi-sm text-center">Des Moines Register</h3>
          </div>
        </a>
        <a
          href="https://www.desmoinesregister.com/story/entertainment/dining/2023/06/21/hyper-energy-bar-opens-new-location-in-urbandale-including-walkup-window/70335873007/" target="_blank"
          className="flex sm:h-[600px] border-b-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">6/21/23</h3>
            <h3 className="obvi-md text-center py-10">NEW LOCATION IN URBANDALE</h3>
            <h3 className="obvi-sm text-center">Des Moines Register</h3>
          </div>
        </a>
        <a
          href="https://www.dsmpartnership.com/news-media/blog/hyping-up-dsm-one-energy-drink-at-a-time" target="_blank"
          className="flex sm:h-[600px] border-b-2 sm:border-r-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">6/6/23</h3>
            <h3 className="obvi-md text-center py-10">Hyping up Des Moines</h3>
            <h3 className="obvi-sm text-center">DSM Partnership</h3>
          </div>
        </a>
        <a
          href="https://www.desmoinesregister.com/story/money/business/retail/2021/07/15/hyper-energy-bar-coffee-drive-thru-lands-waukee-first-des-moines-metro-chain/7955905002/" target="_blank"
          className="flex sm:h-[600px] border-b-2 sm:border-r-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">7/15/21</h3>
            <h3 className="obvi-md text-center py-10">NOT YOUR DAD'S COFFEE SHOP</h3>
            <h3 className="obvi-sm text-center">Des Moines Register</h3>
          </div>
        </a>
        <a
          href="https://www.businessrecord.com/more-mobile-convenient-eating-and-shopping-options-here-to-stay-2/" target="_blank"
          className="flex sm:h-[600px] border-b-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">6/23/21</h3>
            <h3 className="obvi-md text-center py-10">IT'S A DRAMATIC SHIFT</h3>
            <h3 className="obvi-sm text-center">Business Record</h3>
          </div>
        </a>
        <a
          href="https://www.businessrecord.com/hyper-energy-bar-proposed-in-west-des-moines/" target="_blank"
          className="flex sm:h-[600px] sm:border-r-2 slate-100 bg-white p-5 sm:p-10 transition-all duration-300 hover:bg-[rgba(105,185,164,0.3)] hover:bg-gradient-to-br from-[rgba(105,185,164,0.3)] via-[rgba(239,244,225,0.3)] to-[rgba(255,213,108,0.3)] cursor-pointer"
        >
          <div className="flex flex-col justify-between">
            <h3 className="obvi-sm text-center">4/19/21</h3>
            <h3 className="obvi-md text-center py-10">THEY WANT TO GET ENERGIZED</h3>
            <h3 className="obvi-sm text-center">Business Record</h3>
          </div>
        </a>
      </div>
      <div className="text-darkgreen bg-white -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
