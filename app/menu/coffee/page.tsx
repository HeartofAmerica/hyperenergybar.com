import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

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
            <Link href="/menu/coffee/campfire" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/campfire.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Campfire Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-campfire"></div>
              </div>
              <h3 className="underline-btn-lg">Campfire</h3>
            </Link>
            <Link href="/menu/coffee/butter-bomber" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/butter-bomber.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Campfire Coffee"
                  className="featured-img"
                />
                <div className="circle-lg bg-butterbomber"></div>
              </div>
              <h3 className="underline-btn-lg">Butter Bomber</h3>
            </Link>
            <Link href="/menu/coffee/peanut-butter-clutter" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/pbclutter.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Peanut Butter Clutter"
                  className="featured-img"
                />
                <div className="circle-lg bg-pbclutter"></div>
              </div>
              <h3 className="underline-btn-lg">Peanut Butter Clutter</h3>
            </Link>
            <Link href="/menu/coffee/caramel-crush" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Caramel Crush"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Caramel Crush</h3>
            </Link>
            <Link href="/menu/coffee/rip6" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/rip6.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Rip 6"
                  className="featured-img"
                />
                <div className="circle-lg bg-rip6"></div>
              </div>
              <h3 className="underline-btn-lg">Rip 6</h3>
            </Link>
            <Link href="/menu/coffee/caramel-crush" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Mocha"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Mocha</h3>
            </Link>
            <Link href="/menu/coffee/white-chocolate-mocha" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar White Chocolate Mocha"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">White Chocolate Mocha</h3>
            </Link>
            <Link href="/menu/coffee/french-vanilla" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar French Vanilla"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">French Vanilla</h3>
            </Link>
            <Link href="/menu/coffee/caramel" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Caramel"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Caramel</h3>
            </Link>
            <Link href="/menu/coffee/salted-caramel" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Salted Caramel"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Salted Caramel</h3>
            </Link>
            <Link href="/menu/coffee/chai-tea" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Chai Tea"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Chai Tea</h3>
            </Link>
            <Link href="/menu/coffee/americano" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Americano"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Americano</h3>
            </Link>
            <Link href="/menu/coffee/cold-brew" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/caramel-crush.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Americano"
                  className="featured-img"
                />
                <div className="circle-lg bg-caramelcrush"></div>
              </div>
              <h3 className="underline-btn-lg">Cold Brew</h3>
            </Link>
          </div>
        </div>
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
                <div className="circle-lg bg-ltgreen"></div>
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
                <div className="circle-lg bg-ltgreen"></div>
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
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Snacks</h3>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
