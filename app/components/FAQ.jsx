"use client";

import { useState,useEffect } from "react";
import Image from "next/image";

const stickerImages = [
  { src: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/ic-closed-sticker.svg", alt: "closed sticker" },
  { src: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/ic-open-sticker.svg", alt: "open sticker" },
];


function CyclingSticker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stickerImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        .sticker-pop {
          animation: popIn 0.2s ease forwards;
        }
      `}</style>

      <Image
        key={currentIndex}
        src={stickerImages[currentIndex].src}
        alt={stickerImages[currentIndex].alt}
        width={45}
        height={45}
        className="sticker-pop"
      />
    </>
  );
}


// Single Arrow SVG — rotates smoothly via CSS transition
const ArrowIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="29"
    viewBox="0 0 24 25"
    fill="none"
    style={{
      flexShrink: 0,
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    }}
  >
    <path
      d="M15 2.5L9 2.5C4 2.5 2 4.5 2 9.5L2 15.5C2 20.5 4 22.5 9 22.5L15 22.5C20 22.5 22 20.5 22 15.5L22 9.5C22 4.5 20 2.5 15 2.5Z"
      fill="#5E34F1"
    />
    <path
      d="M8.47003 11.1401L12 14.6601L15.53 11.1401"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Single FAQ Accordion Item — controlled by parent
const FAQAccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className="bg-[#F5F4FF] rounded-2xl px-6 py-5 sm:px-8 sm:py-6 cursor-pointer select-none"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
          {item.question}
        </h3>
        <div className="ml-auto">
          <ArrowIcon isOpen={isOpen} />
        </div>
      </div>

      {/* Animated answer reveal */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="mt-3 text-base sm:text-base text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
const FAQ = ({ title = "Frequently Asked Questions", items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 text-center">
          {title}
        </h2>
        <span className="text-2xl sm:text-3xl"><CyclingSticker /></span>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {items.map((item, index) => (
          <FAQAccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;