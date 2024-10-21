'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Specials() {
  return (
    <>
      <Nav/>
      <div className="hero-fall-specials relative overflow-hidden">
        <div className="container max-w-screen-xl">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="pt-36 pb-20 sm:py-0 mx-5 sm:mx-10">
              <h1 className="text-neon obvi-xl mb-5 sm:mb-10">
                Fall Specials
              </h1>
              <p className="text-neon text-sm sm:text-xl">
                Energize your outdoor adventures with Hyper!
              </p>
            </div>
            <Image
              src="/assets/img/hyper-fall-specials.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Catering"
              className="z-10"
            />
          </div>
        </div>
        <div className="wave-margin text-forrest z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <div className="pb-1 bg-forrest">
        <div className="container max-w-screen-lg px-5 lg:px-10 mb-10 sm:mb-20">
          <div className="block text-center">
            <h3 className="text-white obvi-lg mb-10 sm:mb-20">Hyper-Infused Energy</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Happy<br/> Glamper</h3>
              <h3 className="text-neon obvi-sm">Cranberry | Raspberry | Apple</h3>
            </div>
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Weekend Wanderer</h3>
              <h3 className="text-neon obvi-sm">Peach | Tangerine | SF Green Apple</h3>
            </div>
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Stargazer</h3>
              <h3 className="text-neon obvi-sm">Sour Candy | Blue Raspberry | Blackberry</h3>
            </div>
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Weekend Wanderer</h3>
              <h3 className="text-neon obvi-sm">Cranberry | Raspberry | Apple</h3>
            </div>
          </div>
        </div>
        <div className="container max-w-screen-lg px-5 lg:px-10 mb-10 sm:mb-20">
          <div className="block text-center">
            <h3 className="text-white obvi-lg mb-10 sm:mb-20">Coffee</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Hikers Hotcake</h3>
              <h3 className="text-neon obvi-sm">Maple | Shortbread</h3>
            </div>
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Vanilla Bean Canteen</h3>
              <h3 className="text-neon obvi-sm">Frozen | Vanilla Bean | Milk</h3>
            </div>
            <div className="block text-center border-2 border-neon rounded-xl p-4 sm:p-8">
              <h3 className="text-neon obvi-md mb-2 sm:mb-5">Treeline Chai</h3>
              <h3 className="text-neon obvi-sm">Pumpkin Pie</h3>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/treeline.png"
        quality={100}
        width={1440}
        height={667}
        alt="Hyper Energy Bar Catering"
        className="w-full z-10 bg-forrest"
      />
      <div className="text-green bg-forrest -mb-2 lg:-mb-14 z-40 -mt-12 lg:-mt-36">
        <Wave/>
      </div>
      <div className="py-10 lg:py-20 bg-green">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <h2 className="obvi-lg mb-5 lg:mb-10 text-ltgreen text-center">
            Explore More
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <Link href="/menu/smoothies" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/lazy-river.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Smoothies"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Smoothies</h3>
            </Link>
            <Link href="/menu/coffee" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/toasted-coaster.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Coffee</h3>
            </Link>
            <Link href="/menu/snacks" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/snacks.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Snacks"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Snacks</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-darkgreen bg-green -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
