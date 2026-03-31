"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";


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


const blogCards = [
  {
    id: 1,
    tag: "Blog",
    title: "From Apps to AI Agents: The New Era of Problem-Solving",
    description:
      "Explore how AI Agents are transforming business customer conversations, becoming the next generation of problem-solvers and smart assistants.",
    image:
      "/home/blog1.webp",
    href: "/blog/from-apps-to-ai-agents",
  },
  {
    id: 2,
    tag: "Blog",
    title: "AI Agents: Revolutionizing Business Marketing Strategies",
    description:
      "Discover what AI agents are, their roles in industries, and their impact on efficiency and decision-making.",
    image:
      "/home/blog2.webp",
    href: "/blog/ai-agents-revolutionizing-business-marketing-strategies",
  },
  {
    id: 3,
    tag: "Blog",
    title: "What Are AI Agents? How Do They Drive Conversations That Matter?",
    description:
      "Gain insights on AI agents and their role in transforming industries by boosting efficiency and driving smarter decisions.",
    image:
      "/home/blog3.webp",
    href: "/blog/what-are-ai-agents",
  },
];

const stats = [
  {
    count: "10",
    label: "Webinars",
    color: "#F97316",
    image: "/home/orangepdf.webp",
  },
  {
    count: "12",
    label: "PDF guides",
    color: "#3B82F6",
    image: "/home/bluepdf.webp",
  },
  {
    count: "40",
    label: "Customer stories",
    color: "#EC4899",
    image: "/home/pinkpdf.webp",
  },
];

function BlogCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden h-44">
        <Image
          src={card.image}
          alt={card.title}
          width={500}
          height={500}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <div className="p-4">
        <span className="inline-block border border-orange-500 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-lg mb-3">
          {card.tag}
        </span>
        <h3
          className={`font-semibold text-xl leading-snug mb-2 transition-colors duration-200 ${
            hovered ? "text-red-500" : "text-gray-900"
          }`}
        >
          {card.title}
        </h3>
        <p className="text-gray-500 text-base leading-relaxed mb-4">{card.description}</p>
         <Link
          href={card.href}
          className={`text-base font-semibold transition-colors duration-200 inline-flex items-center  ${
            hovered ? "text-red-500" : "text-violet-500"
          }`}
        
        >
          Find out more 
        </Link>
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between h-full ">
      <div className="space-y-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-6">
            <Image src={stat.image} alt={stat.label} width={90} height={90} className="mb-6"/>
            <div className="flex gap-2 flex-col">
              <p className="text-2xl font-extrabold leading-none" style={{ color: stat.color }}>
                {stat.count}
              </p>
              <p className="text-gray-900 text-lg font-medium ">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      <Link 
  href="#"
  className="mt-3 w-fit group inline-flex items-center justify-center gap-3 
  bg-white border border-[#7c3aed] hover:border-[#ff3964] hover:bg-[#ff3964] 
  text-[#7c3aed] hover:text-white text-sm font-semibold 
  px-5 py-2 rounded-full"
>
  View all resources

  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#7c3aed] transition group-hover:bg-white">
    <FiArrowRight 
      size={14} 
      className="text-white transition group-hover:text-[#ff3964]" 
    />
  </span>
</Link>
    </div>
  );
}

export default function ResourcesSection() {
  return (
    <section className="bg-gray-50  py-16 px-4 ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
        <div className="flex items-center justify-center bg-white mb-10">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none cursor-pointer hover:bg-red-100 transition-colors"
      
      >
        <BsCheckCircleFill className="text-[#ff3964]" size={18} />
        <span className="text-[#ff3964] text-base font-semibold">Resources</span>
      </button>
    </div>

     <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-6xl mx-auto">
      Join the customer engagement conversation with the latest insights and{" "}
      <span className="inline-flex items-center gap-2">
        <CyclingSticker />
        success stories
      </span>
    </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogCards.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
          <StatsCard />
        </div>
      </div>
    </section>
  );
}