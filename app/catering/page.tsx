'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Catering() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1 relative overflow-hidden">
        <div className="container max-w-screen-xl pt-10 sm:pt-20">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="pt-20 sm:pt-10 sm:pb-20 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                Hype up your event
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Now offering catering int the Greater Des Moines Area.
              </p>
            </div>
            <Image
              src="/assets/img/hyper-catering.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Catering"
              className="mix-blend-multiply z-10"
            />
          </div>
        </div>
        <div className="wave-margin text-white z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <div className="bg-white -mt-5 py-10 sm:py-20 z-40">
        <div className="container max-w-screen-md px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-lg mb-5 sm:mb-10">
              PERFECT FOR EVERY OCCASION
            </h2>
            <div className="max-w-screen-sm mx-auto">
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Now offering catering in the Greater Des Moines Area for everything from graduation parties and high school events to corporate meetings and weddings! Contact us and a member of our team will be in touch with you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
