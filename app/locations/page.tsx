'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export default function Locations() {
  return (
    <>
      <Nav/>
      <div className="pt-28 pb-12 sm:pt-44 sm:pb-32 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl">
            Locations
          </h1>
        </div>
      </div>
      <div className="pb-10 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
            <div className="white-card">
              <Image
                src="/assets/img/hyper-altoona.jpg"
                quality={100}
                width={720}
                height={360}
                alt="Hyper Energy Bar Altoona"
                className="mx-auto"
              />
              <div className="white-card-content">
                <h2 className="obvi-md mb-2 sm:mb-5">
                  Altoona
                </h2>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Hours
                </h3>
                <p className="text-sm sm:text-md mb-2 sm:mb-5">
                  Mon. - Sat. 6am - 7pm <br/>
                  Sun. 7am - 7pm
                </p>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-md mb-5 sm:mb-10">
                  640 36TH Avenue SW <br/>
                  Altoona, IA 50009
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Hyper+Energy+Bar+Altoona,+640+36th+Ave+SW,+Altoona,+IA+50009" target="_blank" className="btn">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="white-card">
              <Image
                src="/assets/img/hyper-grimes.jpg"
                quality={100}
                width={720}
                height={360}
                alt="Hyper Energy Bar Grimes"
                className="mx-auto"
              />
              <div className="white-card-content">
                <h2 className="obvi-md mb-2 sm:mb-5">
                  Grimes
                </h2>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Hours
                </h3>
                <p className="text-sm sm:text-md mb-2 sm:mb-5">
                  Mon. - Sat. 6am - 7pm <br/>
                  Sun. 7am - 7pm
                </p>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-md mb-5 sm:mb-10">
                  180 SE Miehe Drive<br/>
                  Grimes, IA 50111
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Hyper+Energy+Bar+Grimes" target="_blank" className="btn">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="white-card">
              <Image
                src="/assets/img/hyper-urbandale.jpg"
                quality={100}
                width={720}
                height={360}
                alt="Hyper Energy Bar Urbandale"
                className="mx-auto"
              />
              <div className="white-card-content">
                <h2 className="obvi-md mb-2 sm:mb-5">
                  Urbandale
                </h2>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Hours
                </h3>
                <p className="text-sm sm:text-md mb-2 sm:mb-5">
                  Mon. - Sat. 6am - 7pm <br/>
                  Sun. 7am - 7pm
                </p>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-md mb-5 sm:mb-10">
                  3739 86th ST<br/>
                  Urbandale, IA 50322
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Hyper+Energy+Bar+Urbandale" target="_blank" className="btn">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="white-card">
              <Image
                src="/assets/img/hyper-waukee.jpg"
                quality={100}
                width={720}
                height={360}
                alt="Hyper Energy Bar Waukee"
                className="mx-auto"
              />
              <div className="white-card-content">
                <h2 className="obvi-md mb-2 sm:mb-5">
                  Waukee
                </h2>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Hours
                </h3>
                <p className="text-sm sm:text-md mb-2 sm:mb-5">
                  Mon. - Sat. 6am - 7pm <br/>
                  Sun. 7am - 7pm
                </p>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-md mb-5 sm:mb-10">
                  1025 SE Laurel ST<br/>
                  Waukee, IA 50263
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Hyper+Energy+Bar+Waukee" target="_blank" className="btn">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="white-card">
              <Image
                src="/assets/img/hyper-west-des-moines.jpg"
                quality={100}
                width={720}
                height={360}
                alt="Hyper Energy Bar West Des Moines"
                className="mx-auto"
              />
              <div className="white-card-content">
                <h2 className="obvi-md mb-2 sm:mb-5">
                  West Des Moines
                </h2>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Hours
                </h3>
                <p className="text-sm sm:text-md mb-2 sm:mb-5">
                  Mon. - Sat. 6am - 7pm <br/>
                  Sun. 7am - 7pm
                </p>
                <h3 className="obvi-sm mb-1 sm:mb-2">
                  Address
                </h3>
                <p className="text-sm sm:text-md mb-5 sm:mb-10">
                  675 S. 60th ST<br/>
                  West Des Moines, IA 50266
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Hyper+Energy+Bar+West+Des+Moines" target="_blank" className="btn">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-darkgreen bg-xltgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
