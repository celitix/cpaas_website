"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const row1 = [
  { img: "/home/message-question.webp", label: "Product Enquiries" },
  { img: "/home/bag-tick.webp", label: "Assisted Shopping On WhatsApp" },
  { img: "/home/award.webp", label: "Virtual Enquiry Assistant" },
  { img: "/home/hierarchy-2.webp", label: "Automated Invoicing" },
  { img: "/home/emoji-normal.webp", label: "Assisted Sales" },
  { img: "/home/like-shapes.webp", label: "Account Support And Service" },
];

const row2 = [
  { img: "/home/user-tick.webp", label: "Customer KYC" },
  { img: "/home/gps.webp", label: "Targeted Customer Promotions" },
  { img: "/home/receipt-discount.webp", label: "Insurance And Loan Approvals" },
  { img: "/home/card-edit.webp", label: "Quizzes And Gamification" },
  { img: "/home/sms-tracking.webp", label: "Interactive Sales Campaigns" },
  { img: "/home/dollar-circle.webp", label: "Banking On The Go" },
];

const CarouselTag = ({ img, label }) => (
  <div className="flex items-center gap-2 px-4 py-3 bg-white border-3 border-[#efeafe] rounded-3xl mx-2 text-sm font-normal text-gray-800">
    <Image src={img} alt={label} width={25} height={25} className="mr-2 h-auto" />
    <span className="text-gray-500 text-xl">{label}</span>
  </div>
);

// Reusable auto-scrolling carousel row
const AutoScrollRow = ({ items, direction = "forward" }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      watchDrag: false, 
    },
    [
      AutoScroll({
        speed: 1,                          // roughly equivalent to Swiper speed:5000
        direction: direction,              // "forward" = LTR, "backward" = RTL
        stopOnInteraction: false,          // keep scrolling on interaction
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  
  const slides = [...items, ...items];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((item, i) => (
          <div key={i} className="flex-none">
            <CarouselTag img={item.img} label={item.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-purple-50 py-16 px-4"
    >
    
      <style>{`
       

        @keyframes bounce-dot {
          0%, 80%, 100% { transform: translateY(0);  }
          40% { transform: translateY(-6px); opacity: 1; }
        }

        .dot-1 { animation: bounce-dot 1.2s ease-in-out infinite; animation-delay: 0s; }
        .dot-2 { animation: bounce-dot 1.2s ease-in-out infinite; animation-delay: 0.2s; }
        .dot-3 { animation: bounce-dot 1.2s ease-in-out infinite; animation-delay: 0.4s; }

   

      `}</style>

      {/* Bouncing Dots */}
      <div className="flex justify-center gap-1 mb-6">
        <span className="dot-1 w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
        <span className="dot-2 w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
        <span className="dot-3 w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
      </div>

      {/* Headline */}
      <div className="text-center max-w-5xl mx-auto mb-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          <span
            className="inline text-[#5e34f1] px-3 py-0.5"
            style={{ background: "#dcdcff" }}
          >
            Automate every customer interaction
          </span>
          <br />
          <span className="text-gray-900">with Gupshup AI Agents</span>
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
          Turn everyday transactions into an AI-driven two-way conversation to drive higher customer engagement, across almost every function and industry imaginable.
        </p>
      </div>

    {/* Arms + Circle Image */}
<div className="flex items-center justify-center gap-0 my-8">
  
  {/* Left arm */}
  <Image
    src="/home/shape-left.webp"
    alt="left arm"
    className="w-28 md:w-40 object-contain"
    height={40}
    width={60}
    onError={(e) => { e.target.style.display = "none"; }}
  />

  {/* Glowing Circle */}
    <div className="relative mx-2 mb-18" style={{ width: 82, height: 82 }}>

        {/* Circle SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
          <rect width="82.012" height="82.012" rx="41.006" fill="white"/>
          <g filter="url(#filter0_circle)">
            <circle cx="41.006" cy="41.006" r="32.782" fill="url(#paint0_circle)"/>
            <circle cx="41.006" cy="41.006" r="32.782" stroke="url(#paint1_circle)" strokeWidth="0.79"/>
          </g>
          <defs>
            <filter id="filter0_circle" x="3" y="4" width="100" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0.79" dy="1.58"/>
              <feGaussianBlur stdDeviation="2.37"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.078 0 0 0 0 0.239 0 0 0 0.29 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="6.32" dy="7.11"/>
              <feGaussianBlur stdDeviation="7.54"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
            </filter>
            <linearGradient id="paint0_circle" x1="19.088" y1="16.966" x2="62.783" y2="60.816" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FA88A4"/>
              <stop offset="0.24" stopColor="#E568EF"/>
              <stop offset="0.485" stopColor="#7374F9"/>
              <stop offset="0.69" stopColor="#5089FF"/>
              <stop offset="1" stopColor="#51CBFF"/>
            </linearGradient>
            <linearGradient id="paint1_circle" x1="5.414" y1="3.292" x2="82.384" y2="86.011" gradientUnits="userSpaceOnUse">
              <stop offset="0.197" stopColor="#FFA3B9"/>
              <stop offset="0.265" stopColor="#DF80E7"/>
              <stop offset="0.538" stopColor="#8F90F1"/>
              <stop offset="0.646" stopColor="#6C9CFF"/>
              <stop offset="0.834" stopColor="#6DD3FF"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Stars container */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: "none" }}
        >
          {/* Large star — moves LEFT to RIGHT */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "bigStarMove 1s ease-in-out infinite alternate",
              marginRight: 2,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.82753 0.263184C6.25703 5.39773 2.54874 6.08709 0.884766 6.20595C5.0447 6.56251 6.70868 10.1678 6.82753 12.1487C7.54066 7.3945 10.7498 6.44366 12.7703 6.20595C8.37265 5.84938 6.986 2.16487 6.82753 0.263184Z"
                fill="white"
              />
            </svg>
          </span>

          {/* Small star — moves RIGHT to LEFT (opposite) */}
          <span
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "smallStarMove 1s ease-in-out infinite alternate",
              marginTop: 20,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.82753 0.263184C6.25703 5.39773 2.54874 6.08709 0.884766 6.20595C5.0447 6.56251 6.70868 10.1678 6.82753 12.1487C7.54066 7.3945 10.7498 6.44366 12.7703 6.20595C8.37265 5.84938 6.986 2.16487 6.82753 0.263184Z"
                fill="white"
              />
            </svg>
          </span>
        </span>

        {/* Keyframe styles */}
        <style>{`
          @keyframes bigStarMove {
            0%   { transform: translate(calc(-50% - 10px), calc(-50% - 4px)); }
            100% { transform: translate(calc(-50% + 10px), calc(-50% - 4px)); }
          }
          @keyframes smallStarMove {
            0%   { transform: translate(calc(-50% + 8px), calc(-50% + 10px)); }
            100% { transform: translate(calc(-50% - 8px), calc(-50% + 10px)); }
          }
        `}</style>
      </div>

  {/* Right arm */}
  <Image
    src="/home/shape-right.webp"
    alt="right arm"
    className="w-28 md:w-40 object-contain"
    height={40}
    width={60}
    onError={(e) => { e.target.style.display = "none"; }}
  />
</div>

      {/* Carousel Row 1 — LTR (left to right) */}
      <div className="mb-4">
        <AutoScrollRow items={row1} direction="forward" />
      </div>

      {/* Carousel Row 2 — RTL (right to left) */}
      <div className="mb-3">
        <AutoScrollRow items={row2} direction="backward" />
      </div>



      {/* CTA Button */}
      <div className="flex justify-center">
        <Link
          href="#"
          className="mt-5 group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#ee3458] text-white text-base font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Explore AI Agents

          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white transition-all duration-200 group-hover:bg-white">
            <FiArrowRight
              size={14}
              className="text-[#7c3aed] group-hover:text-[#ee3458] transition-colors duration-200"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
