'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Subscribe from '@/components/subscribe';

export default function Footer() {

  return (
    <>
      <footer className="py-10 lg:py-20 bg-darkgreen">
        <div className="container max-w-screen-xl px-5 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="col-span-2">
                <h3 className="obvi-2sm text-ltgreen mb-2">
                  LET’S BE FRIENDS
                </h3>
                <p className="text-white mb-5 lg:mb-10">
                  Subscribe to our newsletter to stay hyped about upcoming features, promotions, or the ramblings of some easily distractible folks (sort of).
                </p>
                <div className="block mb-5 lg:mb-10">
                  <Subscribe/>
                </div>
                <div className="block">
                  <a href="https://www.facebook.com/HyperEnergyBar/" target="_blank" className="inline-block text-ltgreen hover:text-green transition-all duration-300 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor" className="w-6 lg:w-10 h-6 lg:h-10"><path d="m216,108.66C216,48.65,167.65,0,108.01,0,48.35.01,0,48.65,0,108.67c0,54.22,39.5,99.17,91.11,107.33v-75.93h-27.4v-31.4h27.43v-23.96c0-27.23,16.13-42.26,40.79-42.26,11.82,0,24.18,2.12,24.18,2.12v26.73h-13.62c-13.4,0-17.59,8.38-17.59,16.98v20.38h29.94l-4.78,31.4h-25.17v75.93c51.62-8.15,91.11-53.1,91.11-107.33Z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/hyperenergybar/" target="_blank" className="inline-block text-ltgreen hover:text-green transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="currentColor" className="w-6 lg:w-10 h-6 lg:h-10"><path d="m108.1,0c-29.4,0-33.1.1-44.6.6-11.5.6-19.4,2.4-26.2,5.1-7.2,2.7-13.7,7-19.1,12.5-5.5,5.4-9.7,11.9-12.5,19.1-2.7,6.8-4.5,14.7-5.1,26.1-.5,11.6-.6,15.3-.6,44.6s.1,33,.6,44.5c.5,11.5,2.3,19.3,5,26.2,2.8,7.1,6.5,13.1,12.5,19.1s12,9.7,19.1,12.5c6.9,2.7,14.7,4.5,26.2,5,11.6.6,15.3.7,44.6.7s33-.1,44.5-.6,19.4-2.3,26.2-5c7.2-2.7,13.7-7,19.1-12.5,6-6,9.7-12,12.5-19.1,2.7-6.9,4.5-14.7,5-26.2s.6-15.2.6-44.5-.1-33-.6-44.5-2.4-19.3-5-26.2c-2.7-7.2-7-13.7-12.5-19.1-5.4-5.5-11.9-9.8-19.1-12.5-6.9-2.7-14.7-4.5-26.2-5-11.4-.7-15.1-.8-44.4-.8h0Zm-9.8,19.5h9.7c28.8,0,32.3.1,43.6.6,10.5.5,16.3,2.2,20.1,3.7,5,2,8.6,4.3,12.4,8.1,3.8,3.8,6.1,7.4,8.1,12.4,1.5,3.8,3.2,9.5,3.7,20,.5,11.4.6,14.8.6,43.6s-.1,32.3-.6,43.6c-.5,10.5-2.2,16.2-3.7,20-1.7,4.7-4.5,8.9-8.1,12.4-3.8,3.8-7.4,6.1-12.4,8.1-3.8,1.5-9.5,3.2-20,3.7-11.4.5-14.8.6-43.6.6s-32.3-.1-43.6-.6c-10.5-.5-16.2-2.2-20-3.7-4.7-1.7-8.9-4.5-12.4-8.1-3.6-3.5-6.4-7.7-8.1-12.4-1.5-3.8-3.2-9.5-3.7-20-.5-11.4-.6-14.8-.6-43.6s.1-32.2.6-43.6c.5-10.5,2.2-16.3,3.7-20.1,2-5,4.3-8.6,8.1-12.4,3.8-3.8,7.4-6.1,12.4-8.1,3.8-1.5,9.5-3.2,20-3.7,9.8-.4,13.7-.5,33.8-.5,0-.1,0,0,0,0Zm67.5,17.9c-7.2,0-13,5.8-13,13s5.8,13,13,13h0c7.2,0,13-5.8,13-13s-5.9-13-13-13Zm-57.7,15.1c-30.6-.5-55.9,24-56.3,54.6-.5,30.6,24,55.9,54.6,56.3h1.7c30.6-.5,55.1-25.7,54.6-56.3-.5-29.9-24.6-54.1-54.6-54.6Zm0,19.5c19.9,0,36,16.1,36,36s-16.1,36-36,36h0c-19.9,0-36-16.1-36-36s16-36,36-36Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="block">
                <h3 className="obvi-2sm text-ltgreen mb-2">
                  MENU
                </h3>
                <ul className="block">
                  <li>
                    <Link href="/menu/hyper-infused-energy" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Hyper-Infused Energy
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu/smoothies" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Smoothies
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu/coffee" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Coffee
                    </Link>
                  </li>
                  <li>
                    <Link href="/specials" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Specials
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu/snacks" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Snacks
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h3 className="obvi-2sm text-ltgreen mb-2">
                  NAVIGATE
                </h3>
                <ul className="block">
                  <li>
                    <Link href="/locations" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Locations
                    </Link>
                  </li>
                  <li>
                    <Link href="/catering" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Catering
                    </Link>
                  </li>
                  <li>
                    <Link href="/swag" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Swag
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/sticker-drop" className="obvi-sm text-white hover:text-green trasition-all duration-300 mb-5">
                      Sticker Drop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-5 bg-xdarkgreen">
        <div className="container max-w-screen-xl px-5 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-white">
              © 2024 Hyper Energy Bar
            </div>
            <div className="text-white lg:text-right">
              <a href="https://cws.givex.com/cws4.0/heartofamerica/check-balance/" target="_blank" className="text-white hover:text-green trasition-all duration-300 mr-2 lg:ml-5">
                Gift Cards
              </a>
              <Link href="/review-us" className="text-white hover:text-green trasition-all duration-300 mr-2 lg:ml-5">
                Review Us
              </Link>
              <Link href="/development" className="text-white hover:text-green trasition-all duration-300 mr-2 lg:ml-5">
                Development
              </Link>
              <Link href="/privacy-policy" className="text-white hover:text-green trasition-all duration-300 mr-2 lg:ml-5">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
