'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : '0px',
        opacity: isOpen ? 1 : 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          if (contentRef.current) {
            contentRef.current.style.overflow = isOpen ? 'visible' : 'hidden';
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-ltgreen rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-3 sm:mb-6 transition-colors duration-300 ${
        isOpen ? 'bg-white' : 'hover:bg-white'
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-6 sm:px-10 py-4 sm:py-6 text-left text-lg font-semibold"
      >
        <span className="obvi-sm">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          )}
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden text-left"
      >
        <p className="px-6 sm:px-10 pb-5 sm:pb-8 text-sm sm:text-lg">
          {content}
        </p>
      </div>
    </div>
  );
}
