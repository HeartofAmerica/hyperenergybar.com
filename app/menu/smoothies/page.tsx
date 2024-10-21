'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Smoothies() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-10 lg:pt-44 lg:pb-10 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Smoothies
          </h1>
          <div className="max-w-screen-md mx-auto">
            <p className="text-lg lg:text-2xl">
              *Vanilla protein addition available
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/strawberry-smoothie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Strawberry Smoothie"
                  className="featured-img"
                />
                <div className="circle-lg bg-strawberry"></div>
              </div>
              <h3 className="obvi-2sm">Strawberry</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/strawberry-smoothie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Strawberry Banana Smoothie"
                  className="featured-img"
                />
                <div className="circle-lg bg-strawban"></div>
              </div>
              <h3 className="obvi-2sm">Strawberry Banana</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/mango-smoothie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Mango Smoothie"
                  className="featured-img"
                />
                <div className="circle-lg bg-mango"></div>
              </div>
              <h3 className="obvi-2sm">Mango</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/peach-smoothie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Peach Smoothie"
                  className="featured-img"
                />
                <div className="circle-lg bg-peach"></div>
              </div>
              <h3 className="obvi-2sm">Peach</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-green bg-xltgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <div className="py-10 lg:py-20 bg-green">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <h2 className="obvi-lg mb-5 lg:mb-10 text-ltgreen text-center">
            Explore More
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <Link href="/menu/hyper-infused-energy" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/bubble-gum.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Hyper-Infused Energy"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Hyper-Infused Energy</h3>
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
