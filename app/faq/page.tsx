import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Accordion from '@/components/accordion';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | FAQs",
  description: "Hyper Energy Bar | FAQs",
};

export default function FAQ() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1 relative overflow-hidden">
        <div className="container max-w-screen-xl">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="pt-28 sm:pt-10 sm:pb-20 mx-5 sm:mx-10">
              <h1 className="obvi-xl mb-5 sm:mb-10">
                FAQs
              </h1>
              <p className="text-sm sm:text-xl mb-5 sm:mb-10">
                Below are some of the most common questions our customers have asked us! If you don't find what you're looking for, please send us an email at <a href="mailto:hello@hyperenergybar.com" className="underline hover:no-underline">hello@hyperenergybar.com</a>
              </p>
            </div>
            <Image
              src="/assets/img/hyper-faq.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Catering"
              className="mix-blend-multiply z-10"
            />
          </div>
        </div>
        <div className="wave-margin text-white z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <div className="pb-10 sm:pb-20">
        <div className="container max-w-screen-md px-5 lg:px-10 text-center">
          <Accordion
            title="DO HYPER SMOOTHIES HAVE CAFFEINE?"
            content="No, all of our smoothies are caffeine-free!"
          />
          <Accordion
            title="HOW MANY MG OF CAFFEINE?"
            content="Regular: 80|120|160 Sugar-free: 120|180|240"
          />
          <Accordion
            title="WHEN ARE THE STICKER DROPS?"
            content="Every first day of the month"
          />
          <Accordion
            title="WHAT MILK OPTIONS DO YOU OFFER?"
            content="Whole milk, Skim milk, coconut, almond and oat milk"
          />
          <Accordion
            title="WHERE DO YOU SOURCE YOUR COFFEE BEANS?"
            content="Our Huey Blend is sourced from an Iowa roaster"
          />
          <Accordion
            title="DO YOU HAVE CAFFEINE-FREE OPTIONS?"
            content="Yes! We offer all infused energy drinks with an Italian soda substitute. All our smoothies, hot chocolate and lemonade drinks are also caffeine-free."
          />
          <Accordion
            title="HOW DO I CHECK MY GIFT CARD BALANCE?"
            content="You can check your gift card balance in-stores or online"
          />
          <Accordion
            title="WHERE CAN I BUY MERCH?"
            content="Merch is available for purchases at all stores or our online Shopify Store"
          />
        </div>
      </div>
      <div className="text-darkgreen bg-white -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
