'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';
import Wave from '@/components/wave';
import WaveBottom from '@/components/wave-bottom';
import ContinuousSwiper from '@/components/continuous-swiper';
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
      { y: -540 },
      {
        y: 0,
        ease: 'power2.out',
        immediateRender: true,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  
    gsap.fromTo(
      '.scroll-img-right',
      { y: 540 },
      {
        y: 0,
        ease: 'power2.out',
        immediateRender: true,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  
    ScrollTrigger.refresh();
  }, []);

  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current && sectionRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 150 }, // Start from the bottom of the box
        {
          y: 0, // Move to the top
          ease: 'power2.out',
          immediateRender: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <>
      <Nav/>
      <div className="hero-bg hero relative">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="md:grid grid-cols-2 md:gap-20">
            <div className="pb-20 lg:pb-0">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                The search for energy is over
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10 sm:mr-20">
                While traditional coffee bars simply exist, Hyper Energy Bars® offer an energetic experience that sets us apart. Our hand-crafted coffee and infused energy drinks are designed to keep you energized and hyped throughout the day.
              </p>
              <Link href="/menu" className="btn">
                View Menu
              </Link>
            </div>
            <div className="relative fade-element">
              <Image
                src="/assets/img/spaceshot-full.png"
                quality={100}
                width={540}
                height={720}
                alt="Hyper Energy Bar Spaceshot"
                className="absolute left-img left-[-50px] top-[20px] z-20 scroll-img-left"
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
        <div className="container max-w-screen-xl px-5 sm:px-10 z-40 absolute bottom-5">
          <AnnouncementBar/>
        </div>
      </div>
      <div className="pt-10 sm:pt-28 pb-10 sm:pb-20">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-lg mb-5 sm:mb-10">
              EXPLORE OUR FLAVORS
            </h2>
            <div className="max-w-screen-sm mx-auto">
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Whether you’re looking for a refreshing energy drink to kickstart your day, a delicious smoothie packed with nutrients, or a rich cup of hand-crafted coffee to savor, we have something for everyone. Discover the perfect drink to fuel your active lifestyle!
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
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
                <div className="circle-lg bg-xltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Hyper-Infused Energy</h3>
            </Link>
            <Link href="/menu/smoothies" className="card group">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/strawberry-smoothie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Smoothies"
                  className="featured-img"
                />
                <div className="circle-lg bg-xltgreen"></div>
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
                <div className="circle-lg bg-xltgreen"></div>
              </div>
              <h3 className="underline-btn-lg">Coffee</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xltgreen z-40">
        <Wave/>
      </div>
      <div className="pt-10 sm:pt-0 sm:-mt-12 bg-xltgreen">
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
        <div className="bg-home-specials">
          <div className="pt-8 pb-4 sm:pt-12 sm:pb-4 text-center">
            <h3 className="obvi-md text-neon mb-6 sm:mb-8">
              Fall Specials
            </h3>
            <Link href="/specials" className="btn-white">
              View Menu
            </Link>
          </div>
        </div>
        <div className="bg-green">
          <div className="pt-8 pb-4 sm:pt-12 sm:pb-4 text-center">
            <h3 className="obvi-md text-neon mb-6 sm:mb-8">
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
      <div ref={sectionRef} className="pt-10 pb-10 sm:pt-20 sm:pb-5 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="sm:grid grid-cols-2 sm:gap-20 sm:flex sm:items-center">
            <div 
              className="relative rounded-3xl overflow-hidden mx-auto w-full max-w-[720px] h-[400px] sm:h-[540px] bg-green mb-5 sm:mb-0"
            >
              <div 
                className="absolute inset-0"
                ref={imageRef}
              >
                <Image
                  src="/assets/img/hyper-box.png"
                  quality={100}
                  width={1080}
                  height={1080}
                  alt="Hyper Energy Bar"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="block">
              <h3 className="obvi-lg mb-5 sm:mb-10">
                Find us
              </h3>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                With multiple locations throughout the Des Moines area and our newest spot in Iowa City, you can easily find us to experience our hand-crafted beverages and uplifting atmosphere. Check out our locations page to find the nearest Hyper Energy Bar® and join us for a taste of our unique flavors today!
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
      <div className="pt-10 pb-10 sm:pt-10 sm:pb-20">
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="text-center">
            <div className="btn-black">
              CONNECT WITH US
            </div>
            <h2 className="obvi-md">
              @hyperenergybar
            </h2>
          </div>
        </div>
        <ContinuousSwiper />
        <div className="container max-w-screen-xl px-5 sm:px-10">
          <div className="text-center">
            <h2 className="obvi-md mb-5 sm:mb-10">
              #GETHYPED
            </h2>
            <a href="https://www.instagram.com/hyperenergybar/" target="_blank" className="btn">
              <div className="flex items-center">
                <div className="block pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor" className="w-4 lg:w-8 h-4 lg:h-8 mr-2"><path d="m108.1,0c-29.4,0-33.1.1-44.6.6-11.5.6-19.4,2.4-26.2,5.1-7.2,2.7-13.7,7-19.1,12.5-5.5,5.4-9.7,11.9-12.5,19.1-2.7,6.8-4.5,14.7-5.1,26.1-.5,11.6-.6,15.3-.6,44.6s.1,33,.6,44.5c.5,11.5,2.3,19.3,5,26.2,2.8,7.1,6.5,13.1,12.5,19.1s12,9.7,19.1,12.5c6.9,2.7,14.7,4.5,26.2,5,11.6.6,15.3.7,44.6.7s33-.1,44.5-.6,19.4-2.3,26.2-5c7.2-2.7,13.7-7,19.1-12.5,6-6,9.7-12,12.5-19.1,2.7-6.9,4.5-14.7,5-26.2s.6-15.2.6-44.5-.1-33-.6-44.5-2.4-19.3-5-26.2c-2.7-7.2-7-13.7-12.5-19.1-5.4-5.5-11.9-9.8-19.1-12.5-6.9-2.7-14.7-4.5-26.2-5-11.4-.7-15.1-.8-44.4-.8h0Zm-9.8,19.5h9.7c28.8,0,32.3.1,43.6.6,10.5.5,16.3,2.2,20.1,3.7,5,2,8.6,4.3,12.4,8.1,3.8,3.8,6.1,7.4,8.1,12.4,1.5,3.8,3.2,9.5,3.7,20,.5,11.4.6,14.8.6,43.6s-.1,32.3-.6,43.6c-.5,10.5-2.2,16.2-3.7,20-1.7,4.7-4.5,8.9-8.1,12.4-3.8,3.8-7.4,6.1-12.4,8.1-3.8,1.5-9.5,3.2-20,3.7-11.4.5-14.8.6-43.6.6s-32.3-.1-43.6-.6c-10.5-.5-16.2-2.2-20-3.7-4.7-1.7-8.9-4.5-12.4-8.1-3.6-3.5-6.4-7.7-8.1-12.4-1.5-3.8-3.2-9.5-3.7-20-.5-11.4-.6-14.8-.6-43.6s.1-32.2.6-43.6c.5-10.5,2.2-16.3,3.7-20.1,2-5,4.3-8.6,8.1-12.4,3.8-3.8,7.4-6.1,12.4-8.1,3.8-1.5,9.5-3.2,20-3.7,9.8-.4,13.7-.5,33.8-.5,0-.1,0,0,0,0Zm67.5,17.9c-7.2,0-13,5.8-13,13s5.8,13,13,13h0c7.2,0,13-5.8,13-13s-5.9-13-13-13Zm-57.7,15.1c-30.6-.5-55.9,24-56.3,54.6-.5,30.6,24,55.9,54.6,56.3h1.7c30.6-.5,55.1-25.7,54.6-56.3-.5-29.9-24.6-54.1-54.6-54.6Zm0,19.5c19.9,0,36,16.1,36,36s-16.1,36-36,36h0c-19.9,0-36-16.1-36-36s16-36,36-36Z"/></svg>
                </div>
                <span>Follow us</span>
              </div>
            </a>
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
