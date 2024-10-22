'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';
import CateringCap from '@/components/catering-cap';

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
              <a href="#order-catering" className="btn-white">
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
          <div className="bg-xltgreen rounded-3xl p-5 sm:p-10 mb-5">
            <div className="max-w-screen-sm mx-auto px-5 sm:px-10 text-center mb-5 sm:mb-10">
              <h3 className="obvi-md text-center mb-2 sm:mb-5">Hyper-infused energy</h3>
              <p className="text-sm sm:text-xl mb-2">
                Customize your event menu with more than 100 flavor options Sugar-free & caffeine-free options available
              </p>
              <h3 className="text-green obvi-sm text-center">FAN FAVORITE FLAVORS - $5 PER GUEST</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/pink-power.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-pinkpower"></div>
                </div>
                <h3 className="obvi-sm">Pink power</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/violet-voltage.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-violetvoltage"></div>
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
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-jetfuel"></div>
                </div>
                <h3 className="obvi-sm">Jet Fuel</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/aftershock.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-aftershock"></div>
                </div>
                <h3 className="obvi-sm">Aftershock</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/adrenaline-junkie.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-adrenalinejunkie"></div>
                </div>
                <h3 className="obvi-sm">Adrenaline Junkie</h3>
              </div>
              <div className="card">
                <div className="circle-wrap text-center">
                  <Image
                    src="/assets/img/electric-wave.png"
                    quality={100}
                    width={540}
                    height={720}
                    alt="Hyper Energy Bar Catering"
                    className="featured-img"
                  />
                  <div className="circle bg-electricwave"></div>
                </div>
                <h3 className="obvi-sm">Electric Wave</h3>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-green p-5 sm:p-10 text-center rounded-3xl">
              <h3 className="obvi-md text-neon mb-1 sm:mb-2">Coffee</h3>
              <h3 className="obvi-sm text-neon mb-2 sm:mb-5">[cold brew]</h3>
              <h3 className="obvi-sm text-white mb-1 sm:mb-2">$30 PER Gallon</h3>
              <p className="text-xs sm:text-md mb-2 text-white sm:mx-20">
                (includes cups, lids, and straws)
              </p>
              <h3 className="obvi-sm text-white mb-1 sm:mb-2">ADD FLAVORS:</h3>
              <p className="text-xs sm:text-md mb-2 text-white sm:mx-20">
                French Vanilla, Caramel, Hazelnut, or Chocolate Chip Cookie Dough
              </p>
            </div>
            <div className="bg-green p-5 sm:p-10 text-center rounded-3xl">
              <h3 className="obvi-md text-neon mb-2 sm:mb-5">Gallon to-go</h3>
              <h3 className="obvi-sm text-white mb-2 sm:mb-5">$45 PER INFUSED ENERGY</h3>
              <h3 className="obvi-sm text-white mb-1 sm:mb-2">$25 PER ITALIAN SODA</h3>
              <p className="text-xs sm:text-md mb-2 text-white sm:mx-20">
                *Serves ~10 small drinks
              </p>
            </div>
          </div>
          <div id="order-catering" className="pt-20 sm:pt-40 pb-5 sm:pb-10">
            <h2 className="obvi-lg mb-5 sm:mb-10 text-center">
              ORDER CATERING
            </h2>
            <CateringCap/>
          </div>
        </div>
      </div>
      <div className="text-darkgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
