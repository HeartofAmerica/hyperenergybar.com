'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function Catering() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1">
        <div className="container max-w-screen-xl pt-10 sm:pt-20">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 flex items-center">
            <div className="py-20 sm:py-40 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                Hype up your event
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Now offering catering in the Greater Des Moines Area for everything from graduation parties and high school events to corporate meetings and weddings! Contact us and a member of our team will be in touch with you shortly.
              </p>
            </div>
            <Image
              src="/assets/img/hyper-catering.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Catering"
              className="mix-blend-multiply"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
