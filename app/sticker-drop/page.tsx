import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import SubmitDesignComponent from '@/components/submit-design-cap';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | Sticker Drop",
  description: "Hyper Energy Bar | Sticker Drop",
};

export default function StickerDrop() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1 relative overflow-hidden">
        <div className="container max-w-screen-xl">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="py-28 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                Sticker Drop
              </h1>
              <p className="text-sm sm:text-xl mb-2 sm:mb-5">
                Every first of the month we hand out a new limited sticker design to every customer that purchases a drink until supplies runs out. We figured this could be a great opportunity to give our customers the opportunity to contribute something to Hyper—so, we are accepting sticker design submissions from our customers!
              </p>
              <a href="#submit-a-design" className="btn-white mr-2 mb-2 inline-block">
                Submit a design
              </a>
              <a href="https://hyperenergybar.myshopify.com/" target="_blank" className="btn">
                Purchase Stickers
              </a>
            </div>
            <Image
              src="/assets/img/hyper-stickers.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Sticker Drop"
              className="mix-blend-multiply z-10"
            />
          </div>
        </div>
        <div id="submit-a-design" className="wave-margin text-white z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <div className="py-5">
        <div className="container max-w-screen-md">
          <SubmitDesignComponent />
        </div>
      </div>
      <div className="text-darkgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
