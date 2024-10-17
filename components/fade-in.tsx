'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const FadeIn = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const elements = document.querySelectorAll('.fade-in');
      
      if (elements.length > 0) {
        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.4,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: el,
                start: 'top 40%',  // Animation starts when 80% of the element is in view
                toggleActions: 'play none none none',  // Only plays once
              },
            }
          );
        });
      }
    }
  }, []);

  return null; // No JSX output, just running the effect.
};

export default FadeIn;
