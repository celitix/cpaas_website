"use client";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const row1Items = [
  "Make dining reservation",
  "Renew subscription",
  "Book appointment",
  "Purchase tickets",
  "Check order status",
  "Resolve queries",
];

const row2Items = [
  "Redeem Rewards",
  "Share Feedback",
  "Check Account Balance",
  "View Product Catalogue",
  "Purchase Product",
  "Track Orders",
];

// const Pill = ({ text }) => (
//   <div className="flex-shrink-0 mx-2 ">
//     <div className="inline-flex items-center px-5 py-2.5 rounded-4xl border-3 border-[#efeafe] bg-white text-gray-500 text-lg font-medium whitespace-nowrap cursor-default  shadow-[0_4px_24px_0px_rgba(139,92,246,0.15)]">
//       {text}
//     </div>
//   </div>
// );
const Pill = ({ text }) => (
  <div className="flex-shrink-0   mx-2">
    <div
      className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-[#efeafe] bg-white text-gray-500 text-lg font-medium whitespace-nowrap cursor-default"
      style={{
        boxShadow:
          "0px 7px 25px rgba(94, 52, 241, 0.15), 0px 2px 18px rgba(94, 52, 241, 0.08)",
        // rgba(32, 0, 112, 0) 0px 220px 62px 0px, rgba(32, 0, 112, 0.02) 0px 141px 56px 0px, rgba(32, 0, 112, 0.07) 0px 79px 47px 0px, rgba(32, 0, 112, 0.11) 0px 35px 35px 0px, rgba(32, 0, 112, 0.13) 0px 9px 19px 0px
      }}
    >
      {text}
    </div>
  </div>
);

const InfiniteCarousel = ({ items, direction = "forward", speed = 0.1 }) => {
  const autoScrollPlugin = useRef(
    AutoScroll({
      speed,
      direction,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", slidesToScroll: 1 },
    [autoScrollPlugin.current],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  // Duplicate items for seamless loop
  const slides = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex py-4">
        {slides.map((item, i) => (
          <Pill key={i} text={item} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-[#ffebef] text-[#ff3964] text-base font-semibold tracking-wide">
          Applications
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Give customers everything they need-
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
          <span className="text-[#5e34f1] bg-violet-100 px-3 py-1 rounded-md inline-block">
            without leaving WhatsApp
            <span className="text-violet-400 font-thin ml-1">|</span>
          </span>
        </h2>
      </div>

      {/* Carousels */}
      <div className="flex flex-col gap-0 w-full">
        {/* Row 1 — scrolls left (forward) */}

        <InfiniteCarousel items={row1Items} direction="forward" speed={0.5} />

        {/* Row 2 — scrolls right (backward) */}
        <InfiniteCarousel items={row2Items} direction="backward" speed={0.3} />
      </div>
    </section>
  );
}
