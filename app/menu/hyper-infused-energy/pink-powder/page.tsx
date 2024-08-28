'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import WaveBottom from '@/components/wave-bottom';
import Footer from '@/components/footer';

export default function PinkPowder() {
  return (
    <>
      <Nav/>
      <div className="py-28 sm:pt-40 sm:pb-40 bg-pinkpowder/25">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="sm:grid grid-cols-2 sm:gap-20 sm:flex sm:items-center">
            <div className="bg-pinkpowder rounded-3xl">
              <Image
                src="/assets/img/pink-powder-2.png"
                quality={100}
                width={1080}
                height={1140}
                alt="Hyper Energy Bar Pink Powder"
                className="mx-auto mb-5 sm:mb-0"
              />
            </div>
            <div className="block">
              <h1 className="obvi-lg mb-5 sm:mb-10">
                Pink Powder
              </h1>
              <h2 className="obvi-2sm mb-5 sm:mb-10">
                STRAWBERRY | WATERMELON | WHITE CHOCOLATE *
              </h2>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Like a vacation for your tastebuds, Pink Powder perfectly balances strawberry, watermelon, and white chocolate for a crisp, juicy and nostalgic flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-margin text-pinkpowder z-40">
        <Wave />
      </div>
      <div className="bg-pinkpowder py-20 sm:py-40">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-lg mb-5 sm:mb-10">
              See what the hype is about
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/img/pink-powder-featured.jpg"
          quality={100}
          width={1920}
          height={1024}
          alt="Hyper Energy Bar Pink Powder"
          className="mx-auto mb-5 sm:mb-0"
        />
        <div className="absolute w-full top-0 z-40 text-pinkpowder">
          <WaveBottom />
        </div>
      </div>
      <Footer/>
    </>
  );
}
