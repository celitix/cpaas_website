"use client";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const Pill = ({ text }) => (
  <div className="shrink-0  mx-2">
    <div
      className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-[#efeafe] bg-white text-gray-500 text-lg font-medium whitespace-nowrap"
      style={{
        boxShadow:
          "0px 7px 25px rgba(94, 52, 241, 0.15), 0px 2px 18px rgba(94, 52, 241, 0.08)",
      }}
    >
      {text}
    </div>
  </div>
);

const RowCarousel = ({ items, direction, speed }) => {
  const autoScrollPlugin = useRef(
    AutoScroll({
      speed,
      direction,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [autoScrollPlugin.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  const slides = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full " ref={emblaRef}>
      <div className="flex py-4 ">
        {slides.map((item, i) => (
          <Pill key={i} text={item} />
        ))}
      </div>
    </div>
  );
};

export default function InfinitePillCarousel({
  row1 = [],
  row2 = [],
  showSecondRow = false,
  row1Direction = "forward",
  row2Direction = "backward",
  row1Speed = 0.5,
  row2Speed = 0.3,
}) {
  return (
    <div className="flex flex-col w-full ">
      {row1.length > 0 && (
        <RowCarousel
          items={row1}
          direction={row1Direction}
          speed={row1Speed}
        />
      )}

      {showSecondRow && row2.length > 0 && (
        <RowCarousel
          items={row2}
          direction={row2Direction}
          speed={row2Speed}
        />
      )}
    </div>
  );
}