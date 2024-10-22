import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | Hyper-Infused Energy Menu",
  description: "Hyper Energy Bar | Hyper-Infused Energy Menu",
};

export default function HyperInfusedEnergy() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-10 lg:pt-44 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Hyper-Infused Energy
          </h1>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg lg:text-2xl">
              Hyper-Infused Energy delivers a delicious burst of flavor alongside a powerful boost of energy and focus.<br/>
              *Caffeine-free substitute & sugar-free syrups available.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10 sm:pb-40 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/pink-power.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Pink power"
                  className="featured-img"
                />
                <div className="circle-lg bg-pinkpower"></div>
              </div>
              <h3 className="obvi-2sm">Pink power</h3>
              <h3 className="obvi-sm">STRAWBERRY | WATERMELON | WHITE CHOCOLATE *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/violet-voltage.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Violet Voltage"
                  className="featured-img"
                />
                <div className="circle-lg bg-violetvoltage"></div>
              </div>
              <h3 className="obvi-2sm">Violet Voltage</h3>
              <h3 className="obvi-sm">BLUE RASPBERRY | WATERMELON *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/jet-fuel.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Jet Fuel"
                  className="featured-img"
                />
                <div className="circle-lg bg-jetfuel"></div>
              </div>
              <h3 className="obvi-2sm">Jet Fuel</h3>
              <h3 className="obvi-sm">WATERMELON | PEACH | MANGO *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/aftershock.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Aftershock"
                  className="featured-img"
                />
                <div className="circle-lg bg-aftershock"></div>
              </div>
              <h3 className="obvi-2sm">Aftershock</h3>
              <h3 className="obvi-sm">Blue Raspberry | Pomegranate *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/adrenaline-junkie.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Adrenaline Junkie"
                  className="featured-img"
                />
                <div className="circle-lg bg-adrenalinejunkie"></div>
              </div>
              <h3 className="obvi-2sm">Adrenaline Junkie</h3>
              <h3 className="obvi-sm">Blue Raspberry *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/electric-wave.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Electric Wave"
                  className="featured-img"
                />
                <div className="circle-lg bg-electricwave"></div>
              </div>
              <h3 className="obvi-2sm">Electric Wave</h3>
              <h3 className="obvi-sm">BLUE RASPBERRY | WHITE CHOCOLATE *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/cosmic-lightning.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Cosmic Lightning"
                  className="featured-img"
                />
                <div className="circle-lg bg-cosmiclightning"></div>
              </div>
              <h3 className="obvi-2sm">Cosmic Lightning</h3>
              <h3 className="obvi-sm">Peach | Mango | Pineapple *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/triple-threat.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Triple Threat"
                  className="featured-img"
                />
                <div className="circle-lg bg-triplethreat"></div>
              </div>
              <h3 className="obvi-2sm">Triple Threat</h3>
              <h3 className="obvi-sm">Green Apple | Blue Raspberry | White Chocolate</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/dynamite.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Dynamite"
                  className="featured-img"
                />
                <div className="circle-lg bg-dynamite"></div>
              </div>
              <h3 className="obvi-2sm">Dynamite</h3>
              <h3 className="obvi-sm">Strawberry | Orange | White Chocolate *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/kinetic-coconut.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Kinetic Coconut"
                  className="featured-img"
                />
                <div className="circle-lg bg-kineticcoconut"></div>
              </div>
              <h3 className="obvi-2sm">Kinetic Coconut</h3>
              <h3 className="obvi-sm">Blue Raspberry | Coconut *</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/screamin-green.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Screamin' Green"
                  className="featured-img"
                />
                <div className="circle-lg bg-screamingreen"></div>
              </div>
              <h3 className="obvi-2sm">Screamin' Green</h3>
              <h3 className="obvi-sm">GREEN APPLE | PINEAPPLE | WHITE CHOCOLATE</h3>
            </div>
            <div className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/solar-strawberry.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Screamin' Green"
                  className="featured-img"
                />
                <div className="circle-lg bg-solarstrawberry"></div>
              </div>
              <h3 className="obvi-2sm">Solar Strawberry</h3>
              <h3 className="obvi-sm">Strawberry | Almond | White Chocolate *</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-green bg-xltgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <div className="pt-5 lg:pt-10 pb-20 sm:pb-40 bg-green">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <h2 className="obvi-lg mb-5 lg:mb-10 text-ltgreen text-center">
            Explore More
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
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
            <Link href="/menu/coffee" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/toasted-coaster.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-white/25"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Coffee</h3>
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
