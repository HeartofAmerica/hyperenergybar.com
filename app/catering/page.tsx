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
            <div className="pt-20 sm:pt-10 sm:pb-40 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                Hype up your event
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Now offering catering int the Greater Des Moines Area. From graduation parties and high school events to corporate meeting and weddings, Hyper is sure to hype up your event! Contact us and a member of our team will be in touch with you shortly.
              </p>
              <a href="#catering-form" className="btn-white">
                Order Catering
              </a>
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
              Catering Menu
            </h2>
          </div>
          <div className="bg-xltgreen rounded-3xl p-5">
            <div className="max-w-screen-sm mx-auto px-5 sm:px-10 text-center mb-5 sm:mb-10">
              <h3 className="obvi-2sm text-center mb-2 mt-5">Hyper-infused energy</h3>
              <p className="text-sm sm:text-xl mb-2">
                Customize your event menu with more than 100 flavor options Sugar-free & caffeine-free options available
              </p>
              <h3 className="text-green obvi-sm text-center">FAN FAVORITE FLAVORS - $5 PER GUEST</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/pink-powder.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Logo"
                    className="featured-img"
                  />
                  <div className="circle bg-ltgreen"></div>
                </div>
                <h3 className="obvi-sm">Pink Powder</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/violet-voltage.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Logo"
                    className="featured-img"
                  />
                  <div className="circle bg-ltgreen"></div>
                </div>
                <h3 className="obvi-sm">Violet voltage</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/jet-fuel.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Logo"
                    className="featured-img"
                  />
                  <div className="circle bg-ltgreen"></div>
                </div>
                <h3 className="obvi-sm">Jet Fuel</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/violet-voltage.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Logo"
                    className="featured-img"
                  />
                  <div className="circle bg-ltgreen"></div>
                </div>
                <h3 className="obvi-sm">Violet voltage</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
