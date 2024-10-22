import { Metadata } from 'next';
import Nav from '@/components/nav';
import ContactCap from '@/components/contact-cap';
import Accordion from '@/components/accordion';
import Wave from '@/components/wave';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | Contact Us",
  description: "Hyper Energy Bar | Contact Us",
};

export default function Contact() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-5 lg:pt-44 lg:pb-20 bg-white">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Get in touch
          </h1>
        </div>
        <div className="max-w-screen-sm px-5 lg:px-10 mx-auto">
          <p className="text-lg lg:text-2xl text-center">
            The form on this page, when submitted, will go to the Hyper Energy Bar® Brand Leader and corporate office.
          </p>
        </div>
      </div>
      <div className="bg-white pb-10 sm:pb-20">
        <div className="max-w-screen-md mx-auto px-5 lg:px-10">
          <ContactCap />
        </div>
      </div>
      <div className="text-green bg-white -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <div className="pb-10 sm:pb-20 bg-green">
        <div className="container max-w-screen-md px-5 lg:px-10 text-center">
          <h1 className="text-white obvi-xl mb-5 lg:mb-10">
            FAQs
          </h1>
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
      <div className="text-darkgreen bg-green -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
