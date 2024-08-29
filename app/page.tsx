'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import WaveBottom from '@/components/wave-bottom';
import Footer from '@/components/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.scroll-img-left',
      { y: -270 },
      {
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '.scroll-img-right',
      { y: 540 },
      {
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Nav/>
      <div className="hero-bg hero">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="lg:grid grid-cols-2 lg:gap-40">
            <div className="pb-20 lg:pb-0">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                The search for energy is over
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10 sm:mr-20">
                While traditional coffee bars just exist, Hyper Energy Bars® exist with a vibe of energetic differentiation. Hyper Energy Bar’s® hand-crafted coffee and infused energy drinks are sure to keep you hyped at any point throughout your day.
              </p>
              <a href="/menu" className="btn">
                View Menu
              </a>
            </div>
            <div className="relative">
              <Image
                src="/assets/img/spaceshot-full.png"
                quality={100}
                width={540}
                height={720}
                alt="Hyper Energy Bar Spaceshot"
                className="absolute left-img left-[-50px] top-[-20px] z-20 scroll-img-left"
              />
              <Image
                src="/assets/img/bubble-gum-full.png"
                quality={100}
                width={540}
                height={720}
                alt="Hyper Energy Bar Spaceshot"
                className="absolute right-img left-[80px] sm:left-[250px] top-[20px] z-10 scroll-img-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-28">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-lg mb-5 sm:mb-10">
              EXPLORE OUR FLAVORS
            </h2>
            <div className="max-w-screen-sm mx-auto">
              <p className="text-sm sm:text-xl mb-10 sm:mb-20">
                While traditional coffee bars just exist, Hyper Energy Bars® exist with a vibe of energetic differentiation. Hyper Energy Bar’s® hand-crafted coffee and infused energy drinks are sure to keep you hyped.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-20">
            <Link href="/menu/hyper-infused-energy" className="card pb-10 lg:pb-20 group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/adrenaline-junkie.png"
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
            <Link href="/menu/smoothies" className="card pb-10 lg:pb-20 group">
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
            <Link href="/menu/coffee" className="card pb-10 lg:pb-20 group">
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
          </div>
        </div>
      </div>
      <div className="text-xltgreen z-40">
        <Wave/>
      </div>
      <div className="pt-10 sm:-mt-10 bg-xltgreen">
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
