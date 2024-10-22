import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | Coffee Menu",
  description: "Hyper Energy Bar | Coffee Menu",
};

export default function Coffee() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-10 lg:pt-44 lg:pb-10 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Coffee
          </h1>
          <div className="max-w-screen-md mx-auto">
            <p className="text-lg lg:text-2xl">
              *Milk substitutes available
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/campfire.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Campfire Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-coffee"></div>
              </div>
              <h3 className="obvi-2sm">Campfire</h3>
              <h3 className="obvi-sm">MARSHMALLOW | CHOCOLATE | BROWN SUGAR | CINNAMON</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/butter-bomber.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Campfire Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-coffee"></div>
              </div>
              <h3 className="obvi-2sm">Butter Bomber</h3>
              <h3 className="obvi-sm">BUTTERSCOTCH | SHORTBREAD | CARAMEL</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/pbclutter.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Peanut Butter Clutter"
                  className="featured-img"
                />
                <div className="circle-lg bg-coffee"></div>
              </div>
              <h3 className="obvi-2sm">Peanut Butter Clutter</h3>
              <h3 className="obvi-sm">PEANUT BUTTER | CARAMEL | CHOCOLATE</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Caramel Crush"
                  className="featured-img"
                />
                <div className="circle-lg bg-coffee"></div>
              </div>
              <h3 className="obvi-2sm">Caramel Crush</h3>
              <h3 className="obvi-sm">FRENCH VANILLA | CARAMEL</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/rip6.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Rip 6"
                  className="featured-img"
                />
                <div className="circle-lg bg-coffee"></div>
              </div>
              <h3 className="obvi-sm">Rip 6</h3>
              <h3 className="obvi-sm">6 ESPRESSO SHOTS | FRENCH VANILLA | WHITE CHOCOLATE | BREVE</h3>
            </div>
          </div>
          <div className="block text-center mt-10 sm:mt-20">
            <h3 className="obvi-lg mb-10 sm:mb-20">Lattes</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">MOCHA</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">WHITE CHOCOLATE MOCHA</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">FRENCH VANILLA</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">CARAMEL</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">SALTED CARAMEL</h3>
            </div>
          </div>
          <div className="block text-center mt-10 sm:mt-20">
            <h3 className="obvi-lg mb-10 sm:mb-20">And All the rest</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">CHAI TEA LATTE</h3>
              <h3 className="obvi-sm text-coffee">OREGON CHAI | MILK</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">AMERICANO</h3>
              <h3 className="obvi-sm text-coffee">HOT OR ICED</h3>
            </div>
            <div className="block text-center border-2 border-coffee rounded-xl p-4 sm:p-8">
              <h3 className="text-coffee obvi-md mb-2 sm:mb-5">COLD BREW</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-green bg-xltgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <div className="py-10 lg:py-20 bg-green">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <h2 className="obvi-lg mb-5 lg:mb-10 text-ltgreen text-center">
            Explore More
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <Link href="/menu/hyper-infused-energy" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/bubble-gum.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Hyper-Infused Energy"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Hyper-Infused Energy</h3>
            </Link>
            <Link href="/menu/smoothies" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/lazy-river.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Smoothies"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Smoothies</h3>
            </Link>
            <Link href="/menu/snacks" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/snacks.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Snacks"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Snacks</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-darkgreen bg-green -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
