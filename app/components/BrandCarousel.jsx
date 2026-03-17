"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export default function BrandCarousel({
  brands = [],
  speed = 1.2,
  direction = "forward",
  title,
}) {
  const autoScrollRef = useRef(
    AutoScroll({
      speed,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      direction,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoScrollRef.current]
  );

  useEffect(() => {
    if (emblaApi) {
      autoScrollRef.current.play();
    }
  }, [emblaApi]);

  // Duplicate automatically for infinite loop
  const slides = [...brands, ...brands, ...brands];

  return (
    <section className="w-full py-15 bg-white overflow-hidden">
      {title && (
        <p className="text-center text-lg md:text-lg lg:text-xl font-bold text-gray-900 tracking-wide mb-7 px-5">
          {title}
        </p>
      )}

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex items-center select-none">
          {slides.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-none px-10 sm:px-12 md:px-14 flex items-center justify-center"
            >
              <div className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain "
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}