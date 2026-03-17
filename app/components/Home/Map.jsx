// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { HiArrowLongLeft } from "react-icons/hi2";
// import { HiArrowLongRight } from "react-icons/hi2";
// import { FaQuoteRight } from "react-icons/fa";

// const stats = [
//   { value: "120", unit: "billion", label: "conversations", sub: "every year" },
//   { value: "50,000+", unit: "", label: "customers", sub: "worldwide" },
//   { value: "60+", unit: "", label: "countries served", sub: "worldwide" },
//   {
//     value: "20+",
//     unit: "",
//     label: "years of operations",
//     sub: "in conversational engagement",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "By leveraging Gupshup’s Gen AI solution for customer conversations, we have significantly improved our customer service efficiency and expect to reduce operational costs by USD 20 million over the next three years.",
//     name: "Mila Bedrenets",
//     title: "Chief Growth Hacker, Tonik Bank",
//     logo: "/home/logo-tonik.webp",
//     logoAlt: "tonik logo",
//   },
//   {
//     quote:
//       "At Petromin Corp, we're reimagining automotive customer service through the power of intelligent AI Agents. PETROMINit! isn't just a technological upgrade—it's a strategic leap forward that demonstrates how autonomous AI can fundamentally transform customer engagement.",
//     name: "Hussein M Dajani",
//     title: "Group Chief Marketing and Customer Centricity Officer",
//     logo: "/home/Petromin.webp",
//     logoAlt: "Petromin Corp",
//   },
//   {
//     quote:
//       "Faced with the challenge of finding innovative channels to engage younger and Gen Z audiences, we partnered with Gupshup Conversation Cloud to deliver standout campaigns for leading brands. Bingo’s Gen AI Roast Generator on WhatsApp captured festive excitement, engaging 5.7M users. With AI, we're redefining how brands connect with modern audiences.",
//     name: "Unmisha Bhatt",
//     title: "Chief Strategy Officer",
//     logo: "/home/Tonic-Worldwide.webp",
//     logoAlt: "tonic logo",
//   },
//   {
//     quote:
//       "Gupshup has truly simplified our operations at Schneider Electric. From converting paper-based quotations into digital carts within 90 seconds, the convenience and efficiency it brings are unmatched. Thanks to Gupshup for driving this impactful change!",
//     name: "Premika Chandrasekaran",
//     title: "Diretor- Retail & e-Comm",
//     logo: "/home/Schneider-Electric.webp",
//     logoAlt: "Schneider Electric logo",
//   }
// ];

// const partners = [
//   {
//     logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-meta.svg",
//     logoAlt: "Meta",
//     label: "",
//     title: "Partner of the year",
//     subtitle: "2023 and 2024",
//     titleColor: "#000",
//   },
//   {
//     logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-juniper.svg",
//     logoAlt: "Juniper",
//     label: "",
//     title: "Leader in Juniper OTT",
//     subtitle: "messaging 2024",
//     titleColor: "#000",
//   },
//   {
//     logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-gartner.svg",
//     logoAlt: "Gartner",
//     label: "",
//     title: "Featured in Gartner",
//     subtitle: "market guide for conversational AI",
//     titleColor: "#000",
//   },
//   {
//     logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-everest.svg",
//     logoAlt: "Everest Group",
//     label: "",
//     title: "AI top 50",
//     subtitle: "list 2023",
//     titleColor: "#000",
//   },
// ];

// function ArrowLeft() {
//   return (
//     <HiArrowLongLeft className="text-black text-3xl" />
//   );
// }

// function ArrowRight() {
//   return (
//     <HiArrowLongRight className="text-black text-4xl" />

//   );
// }

// function QuoteIcon() {
//   return (
//     <FaQuoteRight className="text-[#C4B5FD] text-3xl transform rotate-z-180 transition-transform duration-500" />
//   );
// }

// export default function HeroSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
//   const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
//   const current = testimonials[activeIndex];

//   return (
//     <div className="pt-10 pb-50 bg-[#5B21B6]">

//       <div className="max-w-7xl mx-auto">
//         <section className="relative w-full rounded-2xl bg-[#5B21B6] h-180">
//           {/* ── Notch ── */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
//             {/* Curved phone-like notch */}
//             <div className="relative flex items-center justify-center">

//               <Image
//                 src="/home/top.webp"
//                 alt="center curved top"
//                 width={200}
//                 height={200}
//               />

//               {/* Three bouncing dots over image */}
//               <div className="absolute flex items-center gap-[5px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 {[0, 1, 2].map((i) => (
//                   <span
//                     key={i}
//                     className="block rounded-full bg-[#7C3AED]"
//                     style={{
//                       width: "7px",
//                       height: "7px",
//                       animation: `bounceDot 1.1s ease-in-out ${i * 0.18}s infinite`,
//                     }}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>

//           {/* ── World map bg ── */}
//           <div className="absolute inset-0 z-10 flex items-center justify-end pointer-events-none">
//             <div className="relative w-1/2 h-full opacity-80">
//               <Image
//                 src="/home/globe-bg.webp"
//                 alt="World Map"
//                 fill
//                 className="object-cover object-center"
//                 priority
//               />
//             </div>
//           </div>

//           {/* ── Gradient overlay ── */}
//           <div
//             className="absolute inset-0 z-[1] pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(90deg, #5B21B6 35%, rgba(91,33,182,0.75) 58%, rgba(91,33,182,0.2) 100%)",
//             }}
//           />

//           {/* ── Top: badge + heading + stats ── */}
//           <div className="relative z-10 pb-2 pt-0">
//             <div
//               className="flex flex-col md:flex-row gap-4 px-8 sm:px-12"
//               style={{ transform: "translateY(50%)" }}
//             >
//               <div className="flex flex-col justify-center gap-4 max-w-lg">
//                 <span
//                   className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-sm font-semibold"
//                   style={{ background: "#fff", color: "#7C3AED", boxShadow: "0 2px 12px rgba(124,58,237,0.10)", letterSpacing: "0.01em" }}
//                 >
//                   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
//                     <circle cx="7.5" cy="7.5" r="7.5" fill="#EF4444" />
//                     <path d="M4.5 7.5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   Leading Conversations Globally
//                 </span>
//                 <h2
//                   className="text-white font-extrabold leading-tight"
//                   style={{
//                     fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
//                     fontFamily: "'Sora', 'DM Sans', sans-serif",
//                     letterSpacing: "-0.02em",
//                     textShadow: "0 2px 16px rgba(80,30,180,0.18)",
//                   }}
//                 >
//                   The world&apos;s conversational AI
//                   <br />engine, powering conversations
//                   <br />in over 60 countries.
//                 </h2>
//               </div>

//               {/* Right: Stats */}
//               <div className="grid grid-cols-2 gap-x-10 gap-y-7 self-center md:ml-auto md:mr-8">
//                 {stats.map((stat, i) => (
//                   <div key={i} className="flex flex-col gap-0.5">
//                     <div
//                       className="font-extrabold text-white leading-none"
//                       style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontFamily: "'Sora', 'DM Sans', sans-serif", letterSpacing: "-0.03em" }}
//                     >
//                       {stat.value}
//                       {stat.unit && (
//                         <span className="font-semibold ml-1" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}>
//                           {stat.unit}
//                         </span>
//                       )}
//                     </div>
//                     <div className="text-white/80 font-medium leading-tight" style={{ fontSize: "clamp(0.78rem, 1.2vw, 0.97rem)", fontFamily: "'DM Sans', sans-serif" }}>
//                       {stat.label}
//                     </div>
//                     <div className="text-white/55" style={{ fontSize: "clamp(0.7rem, 1vw, 0.85rem)", fontFamily: "'DM Sans', sans-serif" }}>
//                       {stat.sub}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── Bottom cards ── */}
//         </section >

//        <div className="relative">
//          <div className="max-w-7xl mx-auto absolute -bottom-40 z-10 flex flex-col md:flex-row gap-4 px-8 sm:px-12 ">

//           {/* LEFT: Testimonial carousel */}
//           <div
//             className="flex-1 rounded-2xl p-4 flex flex-col"
//             style={{
//               background: "#c43535ff",
//               border: "1px solid rgba(255,255,255,0.14)",
//               minWidth: 0,
//             }}
//           >
//             <div className="bg-[#ece7ff] p-8 rounded-lg">
//               {/* Quote icon + arrows */}
//               <div className="flex items-start justify-between mb-4 ">
//                 <QuoteIcon />
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={prev}
//                     className="flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
//                     style={{ width: "30px", height: "30px", }}
//                     aria-label="Previous testimonial"
//                   >
//                     <ArrowLeft className="" />
//                   </button>
//                   <button
//                     onClick={next}
//                     className="flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
//                     style={{ width: "30px", height: "30px" }}
//                     aria-label="Next testimonial"
//                   >
//                     <ArrowRight />
//                   </button>
//                 </div>
//               </div>

//               {/* Quote */}
//               <p
//                 className="text-black leading-relaxed flex-1 mb-5"
//                 style={{ fontSize: "clamp(0.78rem, 1.05vw, 0.875rem)" }}
//               >
//                 &ldquo;{current.quote}&rdquo;
//               </p>

//               {/* Author card */}
//               <div
//                 className="flex items-center gap-3 rounded-xl px-3 py-2.5 mt-12"
//                 style={{ background: "rgba(255,255,255,0.93)" }}
//               >
//                 <div className="relative flex-shrink-0" style={{ width: "80px", height: "26px" }}>
//                   <Image src={current.logo} alt={current.logoAlt} fill className="object-contain object-left" />
//                 </div>
//                 <div className="w-px self-stretch bg-gray-200" />
//                 <div>
//                   <div className="font-semibold text-gray-800" style={{ fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>
//                     {current.name}
//                   </div>
//                   <div className="text-gray-400" style={{ fontSize: "0.72rem", fontFamily: "'DM Sans', sans-serif" }}>
//                     {current.title}
//                   </div>
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* RIGHT: Partner logos 2x2 grid */}
//           <div
//             className="flex-1 rounded-2xl p-4 grid grid-cols-2 gap-3"
//             style={{ background: "rgba(255,255,255,0.97)", minWidth: 0 }}
//           >
//             {partners.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col justify-center items-center rounded-xl p-4"
//                 style={{
//                   background: "#fff",
//                   // border: "1px solid #f0eeff",
//                   boxShadow: "0 1px 8px rgba(124,58,237,0.05)",
//                 }}
//               >
//                 <div className="relative mb-2" style={{ width: "120px", height: "60px" }}>
//                   <Image src={p.logo} alt={p.logoAlt} fill className="object-contain object-left" />
//                 </div>

//                 <div>
//                   <div
//                     className="font-bold leading-tight text-center"
//                     style={{ fontSize: "clamp(1.1rem, 1vw, 0.88rem)", color: p.titleColor }}
//                   >
//                     {p.title}
//                   </div>
//                   <div className="text-gray-400 mt-0.5 text-center" style={{ fontSize: "1.1rem" }}>
//                     {p.subtitle}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//        </div>

//         <style>{`
//         @keyframes bounceDot {
//           0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
//           40% { transform: translateY(-7px); opacity: 1; }
//         }
//       `}</style>
//       </div>

//     </div>
//   );
// }
// 





"use client";

import Image from "next/image";
import { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaQuoteRight } from "react-icons/fa";

const stats = [
  { value: "120", unit: "billion", label: "conversations", sub: "every year" },
  { value: "50,000+", unit: "", label: "customers", sub: "worldwide" },
  { value: "60+", unit: "", label: "countries served", sub: "worldwide" },
  {
    value: "20+",
    unit: "",
    label: "years of operations",
    sub: "in conversational engagement",
  },
];

const testimonials = [
  {
    quote:
      "By leveraging Gupshup’s Gen AI solution for customer conversations, we have significantly improved our customer service efficiency and expect to reduce operational costs by USD 20 million over the next three years.",
    name: "Mila Bedrenets",
    title: "Chief Growth Hacker, Tonik Bank",
    logo: "/home/logo-tonik.webp",
    logoAlt: "tonik logo",
  },
  {
    quote:
      "At Petromin Corp, we're reimagining automotive customer service through the power of intelligent AI Agents. PETROMINit! isn't just a technological upgrade—it's a strategic leap forward that demonstrates how autonomous AI can fundamentally transform customer engagement.",
    name: "Hussein M Dajani",
    title: "Group Chief Marketing and Customer Centricity Officer",
    logo: "/home/Petromin.webp",
    logoAlt: "Petromin Corp",
  },
  {
    quote:
      "Faced with the challenge of finding innovative channels to engage younger and Gen Z audiences, we partnered with Gupshup Conversation Cloud to deliver standout campaigns for leading brands. Bingo’s Gen AI Roast Generator on WhatsApp captured festive excitement, engaging 5.7M users. With AI, we're redefining how brands connect with modern audiences.",
    name: "Unmisha Bhatt",
    title: "Chief Strategy Officer",
    logo: "/home/Tonic-Worldwide.webp",
    logoAlt: "tonic logo",
  },
  {
    quote:
      "Gupshup has truly simplified our operations at Schneider Electric. From converting paper-based quotations into digital carts within 90 seconds, the convenience and efficiency it brings are unmatched. Thanks to Gupshup for driving this impactful change!",
    name: "Premika Chandrasekaran",
    title: "Diretor- Retail & e-Comm",
    logo: "/home/Schneider-Electric.webp",
    logoAlt: "Schneider Electric logo",
  },
];

const partners = [
  {
    logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-meta.svg",
    logoAlt: "Meta",
    label: "",
    title: "Partner of the year",
    subtitle: "2023 and 2024",
    titleColor: "#000",
  },
  {
    logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-juniper.svg",
    logoAlt: "Juniper",
    label: "",
    title: "Leader in Juniper OTT",
    subtitle: "messaging 2024",
    titleColor: "#000",
  },
  {
    logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-gartner.svg",
    logoAlt: "Gartner",
    label: "",
    title: "Featured in Gartner",
    subtitle: "market guide for conversational AI",
    titleColor: "#000",
  },
  {
    logo: "https://gs-upload.gupshup.io/revamp/ai-website/home-page/logo-everest.svg",
    logoAlt: "Everest Group",
    label: "",
    title: "AI top 50",
    subtitle: "list 2023",
    titleColor: "#000",
  },
];

function ArrowLeft() {
  return <HiArrowLongLeft className="text-black text-3xl" />;
}

function ArrowRight() {
  return <HiArrowLongRight className="text-black text-4xl" />;
}

function QuoteIcon() {
  return (
    <FaQuoteRight className="text-[#C4B5FD] text-3xl transform rotate-z-180 transition-transform duration-500" />
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const current = testimonials[activeIndex];

  return (
    <div
      className=" "
      style={{
        background:
          // "linear-gradient(90deg, #5B21B6 35%, rgba(91,33,182,0.75) 58%, rgba(91,33,182,0.2) 100%)",
          "linear-gradient(90deg, #512cd0 35%, rgba(86, 48, 222,0.75) 58%, rgba(78, 43, 202) 100%)",
      }}
    >
      <div className="">
        <section className="relative w-full rounded-2xl bg-[#5B21B6]">
          {/* ── Notch ── */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            {/* Curved phone-like notch */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/home/top.webp"
                alt="center curved top"
                width={200}
                height={200}
              />

              {/* Three bouncing dots over image */}
              <div className="absolute flex items-center gap-[5px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block rounded-full bg-[#7C3AED]"
                    style={{
                      width: "7px",
                      height: "7px",
                      animation: `bounceDot 1.1s ease-in-out ${i * 0.18}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── World map bg ── */}
          <div className="absolute top-10 right-0 inset-0 z-10 flex items-center justify-end pointer-events-none">
            <div className="relative w-260 h-full opacity-80">
              <Image
                src="/home/globe-bg.webp"
                alt="World Map"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Gradient overlay ── */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background:
                // "linear-gradient(90deg, #5B21B6 35%, rgba(91,33,182,0.75) 58%, rgba(91,33,182,0.2) 100%)",
                "linear-gradient(90deg, #512cd0 35%, rgba(86, 48, 222,0.75) 58%, rgba(78, 43, 202) 100%)",
            }}
          />

          {/* ── Top: badge + heading + stats ── */}
          {/* <div className="max-w-7xl mx-auto relative z-10 pb-2 pt-0"> */}
          <div className="max-w-7xl mx-auto relative z-10 pt-25 lg:pt-40 pb-135 md:pb-130 lg:pb-80">
            <div
              className="flex flex-col lg:flex-row gap-6 px-8 sm:px-12 lg:px-4"
              // style={{ transform: "translateY(50%)" }}
                >
              <div className="flex flex-col justify-center gap-4 ">
                <span
                  className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-sm font-semibold"
                  style={{
                    background: "#fee7e7",
                    color: "#ff3964",
                    boxShadow: "0 2px 12px rgba(124,58,237,0.10)",
                    letterSpacing: "0.01em",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#EF4444" />
                    <path
                      d="M4.5 7.5l2 2 4-4"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Leading Conversations Globally
                </span>
                <h2
                  className="text-white font-medium text-3xl lg:text-5xl leading-tight"
                  style={{
                    // fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                    // letterSpacing: "-0.02em",
                    textShadow: "0 2px 16px rgba(80,30,180,0.18)",
                  }}
                >
                  The world&apos;s conversational AI <br className="hidden lg:block"  />
                  engine, powering conversations <br className="hidden lg:block" />
                  in over 60 countries.
                </h2>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-7 lg:ml-auto ">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div
                      className="font-medium text-[34px] lg:text-[44px] lg:text-end text-white leading-none"
                      style={{
                        // fontSize: "clamp(1.6rem, 3vw, 2.2rem)",

                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.value}
                      {stat.unit && (
                        <span
                          className="font-medium text-[20px] lg:text-[24px] tracking-wider ml-1"
                          // style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}
                        >
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div
                      className="text-white/80 text-lg lg:text-xl lg:text-end leading-tight"
                      style={{
                        // fontSize: "clamp(0.78rem, 1.2vw, 0.97rem)",
                        
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-white/55 lg:text-lg  lg:text-end"
                      style={{
                        // fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                        
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom cards ── */}
        <div className="max-w-7xl mx-auto relative mb-40">
          <div className="  grid grid-cols-1 lg:grid-cols-[40%_58%] gap-4 justify-center absolute -bottom-40 z-10  px-8 sm:px-12 lg:px-4 ">
            {/* LEFT: Testimonial carousel */}
            <div
              className="flex-1 rounded-2xl p-2.5 flex flex-col shadow"
              style={{
                background: "#fff",
                border: "1px solid rgba(255,255,255,0.14)",
                minWidth: 0,
              }}
            >
              <div className="flex flex-col justify-between bg-[#ece7ff]  h-full p-8 rounded-lg ">
                <div className="">
                  {/* Quote icon + arrows */}
                  <div className="flex items-start justify-between mb-4 ">
                    <QuoteIcon />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                        style={{ width: "30px", height: "30px" }}
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="" />
                      </button>
                      <button
                        onClick={next}
                        className="flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                        style={{ width: "30px", height: "30px" }}
                        aria-label="Next testimonial"
                      >
                        <ArrowRight />
                      </button>
                    </div>
                  </div>

                  {/* Quote */}
                  <p
                    className="text-black leading-relaxed flex-1 mb-5"
                    style={{ fontSize: "clamp(0.78rem, 1.05vw, 0.875rem)" }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                {/* Author card */}
                <div
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                  style={{ background: "rgba(255,255,255,0.93)" }}
                >
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: "80px", height: "26px" }}
                  >
                    <Image
                      src={current.logo}
                      alt={current.logoAlt}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="w-px self-stretch bg-gray-200" />
                  <div>
                    <div
                      className="font-semibold text-gray-800"
                      style={{
                        fontSize: "0.8rem",
                       
                      }}
                    >
                      {current.name}
                    </div>
                    <div
                      className="text-gray-400"
                      style={{
                        fontSize: "0.72rem",
                        
                      }}
                    >
                      {current.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Partner logos 2x2 grid */}
            <div
              className=" rounded-2xl p-2 md:p-4 grid grid-cols-2 bg-white gap-2 md:gap-3 shadow "
              // style={{ background: "rgba(255,255,255,0.97)", minWidth: 0 }}
            >
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center gap-2 bg-white items-center rounded-xl p-2 md:p-4"
                >
                  <div
                    className="relative mb-2"
                    style={{ width: "130px", height: "60px" }}
                  >
                    <Image
                      src={p.logo}
                      alt={p.logoAlt}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  <div>
                    <div
                      className="font-bold leading-relaxed text-sm md:text-xl text-center"
                      style={{
                        // fontSize: "clamp(1.1rem, 1vw, 0.88rem)",
                        color: p.titleColor,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      className="text-gray-400 text-xs  mt-0.5 text-center"
                      // style={{ fontSize: "1.1rem" }}
                    >
                      {p.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes bounceDot {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
            40% { transform: translateY(-7px); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}
