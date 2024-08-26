import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function Snacks() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-5 lg:pt-44 lg:pb-10 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Snacks
          </h1>
          <div className="max-w-screen-md mx-auto">
            <p className="text-xl lg:text-2xl">
              *Ask about our seasonal flavors
            </p>
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
            <Link href="/menu/snacks/chocolate-chip-muffin-tops" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/chocolate-chip-muffin-tops.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Chocolate Chip Muffin Tops"
                  className="featured-img"
                />
                <div className="circle-lg bg-strawberry"></div>
              </div>
              <h3 className="underline-btn-lg">Chocolate Chip Muffin Tops</h3>
            </Link>
            <Link href="/menu/snacks/lemon-poppy-seed-muffin-tops" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/snacks.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Chocolate Chip Muffin Tops"
                  className="featured-img"
                />
                <div className="circle-lg bg-strawberry"></div>
              </div>
              <h3 className="underline-btn-lg">Lemon Poppy Seed Muffin Tops</h3>
            </Link>
            <Link href="/menu/snacks/creme-brulee-muffin-tops" className="card">
              <div className="circle-wrap-lg text-center">
                <Image
                  src="/assets/img/snacks.png"
                  quality={100}
                  width={540}
                  height={720}
                  alt="Hyper Energy Bar Crème brûlée Muffin Tops"
                  className="featured-img"
                />
                <div className="circle-lg bg-strawberry"></div>
              </div>
              <h3 className="underline-btn-lg">Crème brûlée Muffin Tops</h3>
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
                <div className="circle-lg bg-ltgreen"></div>
              </div>
              <h3 className="underline-btn-ltgreen-lg">Coffee</h3>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}