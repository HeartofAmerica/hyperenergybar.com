'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import WaveBottom from '@/components/wave-bottom';
import Footer from '@/components/footer';

export default function Home() {
  const [heroTitle, setHeroTitle] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/assets/content/content.json');
      const data = await response.json();
      setHeroTitle(data.home.heroTitle);
    };

    fetchContent();
  }, []);

  return (
    <>
      <Nav/>
      <div className="py-40 sm:py-72 hero-bg">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="sm:grid grid-cols-2 sm:gap-10">
            <div className="block">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                The search for energy is over
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                While traditional coffee bars just exist, Hyper Energy Bars® exist with a vibe of energetic differentiation. Hyper Energy Bar’s® hand-crafted coffee and infused energy drinks are sure to keep you hyped at any point throughout your day.
              </p>
              <Link href="/menu" className="btn">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 sm:py-40">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-lg mb-5 sm:mb-10">
              EXPLORE OUR FLAVORS
            </h2>
            <div className="max-w-screen-md mx-auto">
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                While traditional coffee bars just exist, Hyper Energy Bars® exist with a vibe of energetic differentiation. Hyper Energy Bar’s® hand-crafted coffee and infused energy drinks are sure to keep you hyped at any point throughout your day.
              </p>
              <Link href="/menu/hyper-infused-energy" className="btn">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xltgreen">
        <Wave />
      </div>
      <div className="pt-10 sm:pt-0 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="sm:grid grid-cols-2 sm:gap-20 sm:flex sm:items-center">
            <div className="block">
              <h3 className="obvi-lg mb-5 sm:mb-10">
                FAST, FRIENDLY, FANTASTIC
              </h3>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                At Hyper we strive for more than just providing your drink exactly as you like, we strive to hype up your day. Our Energistas® cue up their favorite playlists, crank up the volume and sling your drinks with flair.
              </p>
            </div>
            <div className="block">
              <Image
                src="/assets/img/energista.png"
                quality={100}
                width={662}
                height={772.41}
                alt="Hyper Energy Bar Enegista"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid grid-cols-2 sm:gap-0">
        <div className="bg-pinkpowder">
          <div className="pt-8 pb-4 sm:pt-12 sm:pb-4 text-center">
            <h3 className="obvi-md mb-5">
              Fall Specials
            </h3>
            <Link href="/specials" className="btn-white">
              View Menu
            </Link>
          </div>
          <Image
            src="/assets/img/fall-specials-featured-img.png"
            quality={100}
            width={960}
            height={540}
            alt="Hyper Energy Bar Fall Specials"
            className="mx-auto"
          />
        </div>
        <div className="bg-green">
          <div className="pt-8 pb-4 sm:pt-12 sm:pb-4 text-center">
            <h3 className="obvi-md text-neon mb-5">
              Hyper swag
            </h3>
            <a href="https://hyperenergybar.myshopify.com/" target="_blank" className="btn-white">
              Shop Now
            </a>
          </div>
          <Image
            src="/assets/img/swag-featured.png"
            quality={100}
            width={960}
            height={540}
            alt="Hyper Energy Bar Swag"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="pt-10 pb-10 sm:pt-20 sm:pb-0 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="sm:grid grid-cols-2 sm:gap-20 sm:flex sm:items-center">
            <div className="block">
              <Image
                src="/assets/img/hyper-cob.png"
                quality={100}
                width={1080}
                height={1140}
                alt="Hyper Energy Bar"
                className="mx-auto mb-5 sm:mb-0"
              />
            </div>
            <div className="block">
              <h3 className="obvi-lg mb-5 sm:mb-10">
                Find us
              </h3>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                At Hyper we strive for more than just providing your drink exactly as you like, we strive to hype up your day. Our Energistas® cue up their favorite playlists, crank up the volume and sling your drinks with flair.
              </p>
              <Link href="/locations" className="btn">
                Explore Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xltgreen">
        <WaveBottom />
      </div>
      <div className="py-20 sm:py-40">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-md mb-5 sm:mb-10">
              Connect with us
            </h2>
            <a href="https://www.instagram.com/hyperenergybar/" target="_blank" className="btn">
              Follow us
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
