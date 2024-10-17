'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function StickerDrop() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1 relative overflow-hidden">
        <div className="container max-w-screen-xl">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="pt-28 sm:pt-10 sm:pb-20 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                Sticker Drop
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Every first of the month we hand out a new limited sticker design to every customer that purchases a drink until supplies runs out.
              </p>
            </div>
            <Image
              src="/assets/img/hyper-stickers.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Sticker Drop"
              className="mix-blend-multiply z-10"
            />
          </div>
        </div>
        <div className="wave-margin text-xltgreen z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <Footer/>
    </>
  );
}
