// "use client";
// import { useState, useEffect } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
// import Image from "next/image";

// const tickImages = [
//   { src: "/home/static-tick.webp", alt: "static tick" },
//   { src: "/home/dynamic-tick.webp", alt: "dynamic tick" },
// ];

// function CyclingTick() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % tickImages.length);
//     }, 1500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes popIn {
//           0%   { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         .tick-pop {
//           animation: popIn 0.2s ease forwards;
//         }
//       `}</style>

//       <span
//         style={{
//           display: "inline-block",
//           width: 50,
//           height: 50,
//           verticalAlign: "middle",
//         }}
//       >
//         <Image
//           key={currentIndex}
//           src={tickImages[currentIndex].src}
//           alt={tickImages[currentIndex].alt}
//           width={60}
//           height={60}
//           className="tick-pop"
//         />
//       </span>
//     </>
//   );
// }


// const cards = [
//   {
//     id: 1,
//     title: "Marketing",
//     description:
//       "Accelerate user acquisition and engagement with AI-powered conversations that nurture leads 24/7 across multiple channels.",
//     image:
//       "/home/marketing.webp",
//   },
//   {
//     id: 2,
//     title: "Performance Marketing",
//     description:
//       "Boost CLTV and ROI through data-driven interactions that optimize every stage of the customer journey.",
//     image:
//       "/home/performance-marketing.webp",
//   },
//   {
//     id: 3,
//     title: "Commerce & Growth",
//     description:
//       "Drive engagement along every step of the buying journey, from discovery to checkout.",
//     image:
//       "/home/commerce.webp",
//   },
//   {
//     id: 4,
//     title: "Customer Support & CX",
//     description:
//       "Resolve queries and reduce workloads with AI-powered support.",
//     image:
//       "/home/support.webp",
//   },
// ];

// function TeamCard({ card }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       className="flex flex-col cursor-pointer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image */}
//       <div className="rounded-2xl overflow-hidden h-48 md:h-44">
//         <img
//           src={card.image}
//           alt={card.title}
//           className={`w-full h-full object-cover transition-transform duration-500 ${
//             hovered ? "scale-110" : "scale-100"
//           }`}
//         />
//       </div>

//       {/* Description Box */}
//       <div
//         className={`mt-4 bg-[#f4f4f4] rounded-2xl border border-gray-200 shadow-sm p-4 h-36 md:h-40 lg:h-44 overflow-hidden transition-transform duration-300 ${
//           hovered ? "scale-105" : "scale-100"
//         }`}
//       >
//         <h3
//           className={`font-medium text-sm md:text-base lg:text-xl mb-2 transition-colors duration-200 ${
//             hovered ? "text-red-500" : "text-gray-900"
//           }`}
//         >
//           {card.title}
//         </h3>
//         <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-relaxed line-clamp-3">
//           {card.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function TeamsTrustSection() {
//   return (
//     <section className="bg-white py-16 px-4 font-sans">
//       <div className="max-w-7xl mx-auto">
//         {/* Badge */}
//       <div className="flex items-center justify-center bg-white mb-10">
//           <button
//             className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none cursor-pointer hover:bg-red-100 transition-colors"
          
//           >
//             <BsCheckCircleFill className="text-[#ff3964]" size={18} />
//             <span className="text-[#ff3964] text-base font-semibold">Built for every role</span>
//           </button>
//         </div>

//         {/* Heading */}
//          <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto mb-12">
//       <span className="text-indigo-500">Teams trust us</span>{" "}
//       <CyclingTick />{" "}
//       to get their message across regardless of role and function
//     </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {cards.map((card) => (
//             <TeamCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";
import { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Image from "next/image";

const tickImages = [
  { src: "/home/static-tick.webp", alt: "static tick" },
  { src: "/home/dynamic-tick.webp", alt: "dynamic tick" },
];

function CyclingTick() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickImages.length);
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
        .tick-pop {
          animation: popIn 0.2s ease forwards;
        }
      `}</style>

      <span
        style={{
          display: "inline-block",
          width: 50,
          height: 50,
          verticalAlign: "middle",
        }}
      >
        <Image
          key={currentIndex}
          src={tickImages[currentIndex].src}
          alt={tickImages[currentIndex].alt}
          width={60}
          height={60}
          className="tick-pop"
        />
      </span>
    </>
  );
}


const cards = [
  {
    id: 1,
    title: "Workflow Intelligence",
    description:
      "Automates decision-making processes, intelligently handling retries and seamless failovers to ensure reliability.",
    image:
      "/home/marketing.webp",
  },
  {
    id: 2,
    title: "Unified AI Ecosystem",
    description:
      "All-in-one platform with native bots, voice, surveys, and support tools for seamless customer engagement.",
    image:
      "/home/performance-marketing.webp",
  },
  {
    id: 3,
    title: "AI + Human Orchestration",
    description:
      "Powerful automation capabilities designed to streamline workflows while maintaining full visibility and control.",
    image:
      "/home/commerce.webp",
  },
  // {
  //   id: 4,
  //   title: "Customer Support & CX",
  //   description:
  //     "Resolve queries and reduce workloads with AI-powered support.",
  //   image:
  //     "/home/support.webp",
  // },
];

function TeamCard({ card }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col cursor-pointer max-w-xs w-full mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="rounded-2xl overflow-hidden h-48 md:h-44">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Description Box */}
      <div
        className={`mt-4 bg-[#f4f4f4] rounded-2xl border border-gray-200 shadow-sm p-4 h-36 md:h-40 lg:h-44 overflow-hidden transition-transform duration-300 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      >
        <h3
          className={`font-medium text-sm md:text-base lg:text-xl mb-2 transition-colors duration-200 ${
            hovered ? "text-red-500" : "text-gray-900"
          }`}
        >
          {card.title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function TeamsTrustSection() {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
      <div className="flex items-center justify-center bg-white mb-10">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none cursor-pointer hover:bg-red-100 transition-colors"
          
          >
            <BsCheckCircleFill className="text-[#ff3964]" size={18} />
            <span className="text-[#ff3964] text-base font-semibold"> AI-Native Architecture</span>
          </button>
        </div>

        {/* Heading */}
         <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto mb-12">
      <span className="text-indigo-500">We Rebuilt CPaaS Around AI</span>{" "}
      <CyclingTick />{" "}
      We Didn’t Add AI to CPaaS
    </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {cards.map((card) => (
            <TeamCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}