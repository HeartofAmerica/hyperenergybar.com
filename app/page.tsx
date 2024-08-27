'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function Home() {
  const [heroTitle, setHeroTitle] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/assets/content/content.json');
      const data = await response.json();
      setHeroTitle(data.home.heroTitle);
    };

    fetchContent();
  }, []);

  return (
    <>
      <Nav/>
      <div className="py-40 lg:py-96 hero-bg">
        <div className="container max-w-screen-xl px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="block">
              <h1 className="obvi-xl">
                {heroTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
