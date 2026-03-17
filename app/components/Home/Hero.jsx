"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const images = ["/home/ic-chat-b.webp", "/home/ic-chat-p.webp"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimating(false);
      }, 600); // halfway through animation, swap the image
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  overflow-hidden bg-white">
      {/* Background gradient mesh */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #ffffff 20%, #6b44f1 70%)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-8  pt-18 pb-0">
         

          {/* Text content */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 text-center max-w-7xl mx-auto">
            <div className="relative  w-full ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">
                Drive Business Growth
              </h1>
              <div className="absolute right-1 lg:right-20 -top-10 lg:-top-5">
                <style>{`
              @keyframes slideUpFadeOut {
                0%   { transform: translateY(0);    opacity: 1; }
                100% { transform: translateY(-40px); opacity: 0; }
              }
              @keyframes slideUpFadeIn {
                0%   { transform: translateY(40px); opacity: 0; }
                100% { transform: translateY(0);    opacity: 1; }
              }
              .slide-out {
                animation: slideUpFadeOut 0.6s ease forwards;
              }
              .slide-in {
                animation: slideUpFadeIn 0.6s ease forwards;
              }
            `}</style>

                <div
                  style={{
                    width: 60,
                    height: 60,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Hero Image"
                    width={60}
                    height={60}
                    className={animating ? "slide-out" : "slide-in"}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-snug max-w-4xl">
              with Autonomous AI Agents for Every Customer Conversation
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-900 font-normal max-w-2xl leading-relaxed">
              Accelerate lead generation, drive sales, and delight customers
              with personalized support using industry-trained AI Agents for
              every customer conversation
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <Link
                href="#"
                className="group flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-pink-500 hover:to-rose-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-pink-200 hover:scale-105"
              >
                Start a conversation
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-200">
                  <FiArrowRight size={14} className="text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full max-w-7xl mx-auto px-0 sm:px-4">
            <div className="relative">
              <div className="absolute right-0 md:top-12 md:left-36 z-10">
                <div
                  className="relative mx-2  "
                  style={{ width: 82, height: 82 }}
                >
                  {/* Circle SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 82 82"
                    fill="none"
                  >
                    <rect
                      width="82.012"
                      height="82.012"
                      rx="41.006"
                      fill="white"
                    />
                    <g
                      filter="url(#filter0_circle)"
                      style={{
                        filter:
                          "url(#filter0_circle) drop-shadow(0px 16px 36px rgba(155, 155, 160, 0.5))",
                      }}
                    >
                      {" "}
                      <circle
                        cx="41.006"
                        cy="41.006"
                        r="32.782"
                        fill="url(#paint0_circle)"
                      />
                      <circle
                        cx="41.006"
                        cy="41.006"
                        r="32.782"
                        stroke="url(#paint1_circle)"
                        strokeWidth="0.79"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_circle"
                        x="3"
                        y="4"
                        width="100"
                        height="110"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.79" dy="1.58" />
                        <feGaussianBlur stdDeviation="2.37" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0.078 0 0 0 0 0.239 0 0 0 0.29 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="6.32" dy="7.11" />
                        <feGaussianBlur stdDeviation="7.54" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_circle"
                        x1="19.088"
                        y1="16.966"
                        x2="62.783"
                        y2="60.816"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FA88A4" />
                        <stop offset="0.24" stopColor="#E568EF" />
                        <stop offset="0.485" stopColor="#7374F9" />
                        <stop offset="0.69" stopColor="#5089FF" />
                        <stop offset="1" stopColor="#51CBFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_circle"
                        x1="5.414"
                        y1="3.292"
                        x2="82.384"
                        y2="86.011"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.197" stopColor="#FFA3B9" />
                        <stop offset="0.265" stopColor="#DF80E7" />
                        <stop offset="0.538" stopColor="#8F90F1" />
                        <stop offset="0.646" stopColor="#6C9CFF" />
                        <stop offset="0.834" stopColor="#6DD3FF" />
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
                        animation:
                          "bigStarMove 1s ease-in-out infinite alternate",
                        marginRight: 2,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
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
                        animation:
                          "smallStarMove 1s ease-in-out infinite alternate",
                        marginTop: 20,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
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
              </div>
            </div>
            <Image
              src="/home/hero-large.webp"
              alt="Hero image"
              className="hidden lg:block w-full h-auto object-contain drop-shadow-2xl"
              width={1200}
              height={800}
            />
            <Image
              src="/home/hero-mobile.webp"
              alt="Hero image"
              className="block lg:hidden w-full h-auto object-contain drop-shadow-xl"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
