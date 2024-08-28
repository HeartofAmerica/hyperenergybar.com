'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import lottie from 'lottie-web';

export default function Nav() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnterMenu = () => {
    setIsMenuOpen(true);
  };
  const handleMouseLeaveMenu = () => {
    setIsMenuOpen(false);
  };

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/img/menu-bars.json',
      });
    }
    return () => {
      animationInstance.current?.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileOpen(prevState => {
      if (prevState) {
        animationInstance.current?.setDirection(-1);
        animationInstance.current?.play();
      } else {
        animationInstance.current?.setDirection(1);
        animationInstance.current?.play();
      }
      return !prevState;
    });
  };

  return (
    <>
      <nav
        className={`nav bg-white fixed top-0 left-0 right-0 mx-3 mt-3 roudned-2xl sm:rounded-3xl z-50 px-10 hidden md:block ${isMenuOpen ? 'menu-open' : ''}`}
      >
        <div className="flex justify-between items-center">
          <ul className="flex space-x-10">
            <li
              onMouseEnter={handleMouseEnterMenu}
              onMouseLeave={handleMouseLeaveMenu}
              className={pathname === '/menu' ? 'active' : ''}
            >
              <Link href="/menu" className="underline-btn menu-link drop-down">
                Menu
              </Link>
              <div
                className={`menu-grid grid grid-cols-4 gap-4 pt-4 lg:pt-8 absolute left-0 right-0 mx-3 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <Link href="/menu/hyper-infused-energy" className="card pb-10 lg:pb-20">
                  <div className="circle-wrap text-center">
                    <Image
                      src="/assets/img/bubble-gum.png"
                      quality={100}
                      width={540}
                      height={720}
                      alt="Hyper Energy Bar Logo"
                      className="featured-img"
                    />
                    <div className="circle"></div>
                  </div>
                  <h3 className="underline-btn">Hyper-Infused Energy</h3>
                </Link>
                <Link href="/menu/smoothies" className="card pb-10 lg:pb-20">
                  <div className="circle-wrap text-center">
                    <Image
                      src="/assets/img/lazy-river.png"
                      quality={100}
                      width={540}
                      height={720}
                      alt="Hyper Energy Bar Logo"
                      className="featured-img"
                    />
                    <div className="circle"></div>
                  </div>
                  <h3 className="underline-btn">Smoothies</h3>
                </Link>
                <Link href="/menu/coffee" className="card pb-10 lg:pb-20">
                  <div className="circle-wrap text-center">
                    <Image
                      src="/assets/img/toasted-coaster.png"
                      quality={100}
                      width={540}
                      height={720}
                      alt="Hyper Energy Bar Logo"
                      className="featured-img"
                    />
                    <div className="circle"></div>
                  </div>
                  <h3 className="underline-btn">Coffee</h3>
                </Link>
                <Link href="/menu/snacks" className="card pb-10 lg:pb-20">
                  <div className="circle-wrap text-center">
                    <Image
                      src="/assets/img/snacks.png"
                      quality={100}
                      width={540}
                      height={720}
                      alt="Hyper Energy Bar Logo"
                      className="featured-img"
                    />
                    <div className="circle"></div>
                  </div>
                  <h3 className="underline-btn">Snacks</h3>
                </Link>
              </div>
            </li>
            <li className={pathname === '/specials' ? 'active' : ''}>
              <Link href="/specials" className="underline-btn">
                Specials
              </Link>
            </li>
            <li className={pathname === '/locations' ? 'active' : ''}>
              <Link href="/locations" className="underline-btn">
                Locations
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src="/assets/img/Hyper-Energy-Bar-Logo.svg"
                quality={100}
                width={177}
                height={72}
                alt="Hyper Energy Bar Logo"
                className="py-4"
              />
            </Link>
          </div>
          <ul className="flex space-x-10">
            <li className={pathname === '/rewards' ? 'active' : ''}>
              <Link href="/rewards" className="underline-btn">
                Rewards
              </Link>
            </li>
            <li className={pathname === '/swag' ? 'active' : ''}>
              <Link href="/swag" className="underline-btn">
                Swag
              </Link>
            </li>
            <li className={pathname === '/catering' ? 'active' : ''}>
              <Link href="/catering" className="underline-btn">
                Catering
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`mobile-nav bg-white fixed top-0 left-0 right-0 mx-3 py-2 mt-3 rounded-3xl z-50 px-5 block md:hidden ${isMobileOpen ? 'mobile-open' : ''}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/img/Hyper-Energy-Bar-Logo.svg"
              quality={100}
              width={132.75}
              height={54}
              alt="Hyper Energy Bar Logo"
              className=""
            />
          </Link>
          <div className="block">
            <div
              ref={animationContainer}
              className="w-8 h-8 cursor-pointer"
              onClick={toggleMenu}
            ></div>
          </div>
        </div>
        <div
          className={`transition-all duration-300 ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="relative h-auto">
            <div className="absolute inset-0 grid place-items-center text-center">
              <ul className="block">
                <li className={pathname === '/menu' ? 'active' : 'my-5'}>
                  <Link href="/menu" className="underline-btn-lg">
                    Menu
                  </Link>
                </li>
                <li className={pathname === '/specials' ? 'active' : 'my-5'}>
                  <Link href="/specials" className="underline-btn-lg">
                    Specials
                  </Link>
                </li>
                <li className={pathname === '/locations' ? 'active' : 'my-5'}>
                  <Link href="/locations" className="underline-btn-lg">
                    Locations
                  </Link>
                </li>
                <li className={pathname === '/rewards' ? 'active' : 'my-5'}>
                  <Link href="/rewards" className="underline-btn-lg">
                    Rewards
                  </Link>
                </li>
                <li className={pathname === '/swag' ? 'active' : 'my-5'}>
                  <Link href="/swag" className="underline-btn-lg">
                    Swag
                  </Link>
                </li>
                <li className={pathname === '/catering' ? 'active' : 'my-5'}>
                  <Link href="/catering" className="underline-btn-lg">
                    Catering
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
