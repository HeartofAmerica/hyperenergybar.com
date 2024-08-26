import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import ContactForm from '@/components/contact';
import Footer from '@/components/footer';

export default function Contact() {
  return (
    <>
      <Nav/>
      <div className="pt-36 pb-5 lg:pt-44 lg:pb-20 bg-xltgreen">
        <div className="container max-w-screen-lg px-5 lg:px-10 text-center">
          <h1 className="obvi-xl mb-5 lg:mb-10">
            Contact
          </h1>
          <div className="max-w-screen-md mx-auto">
            <ContactForm/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
