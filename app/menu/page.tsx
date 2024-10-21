'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Menu() {
  return (
    <>
      <Nav/>
      <div className="pt-28 pb-5 sm:pt-44 sm:pb-10 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Menu
          </h1>
        </div>
      </div>
      <div className="bg-xltgreen pb-10 sm:pb-40">
        <div className="container max-w-screen-md px-5 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
            <Link href="/menu/hyper-infused-energy" className="card group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/bubble-gum.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Hyper-Infused Energy"
                  className="featured-img"
                />
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Hyper-Infused Energy</h3>
            </Link>
            <Link href="/menu/smoothies" className="card group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/lazy-river.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Smoothies"
                  className="featured-img"
                />
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Smoothies</h3>
            </Link>
            <Link href="/menu/coffee" className="card group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/toasted-coaster.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Coffee</h3>
            </Link>
            <Link href="/menu/snacks" className="card group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/snacks.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Snacks"
                  className="featured-img"
                />
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Snacks</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-darkgreen bg-xltgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
