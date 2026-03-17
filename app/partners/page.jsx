"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import { FiArrowRight } from "react-icons/fi";


const cards = [
  {
    id: 1,
    image: "/partners/card-img-1.webp",
    heading: "Go Global Instantly",
    description:
      "Expand your reach across continents with our worldwide infrastructure",
  },
  {
    id: 2,
    image: "/partners/card-img-2.webp",
    heading: "Scale Without Limits",
    description:
      "Grow your business without worrying about capacity constraints",
  },
  {
    id: 3,
    image: "/partners/card-img-3.webp",
    heading: "Always-On Global Support",
    description: "24/7 cross-geographical assistance whenever you need it",
  },
  {
    id: 4,
    image: "/partners/card-img-4.webp",
    heading: "Plug-and-Play Simplicity",
    description:
      "Modular solutions that integrate seamlessly with your existing setup",
  },
  {
    id: 5,
    image: "/partners/card-img-5.webp",
    heading: "Zero Infrastructure Hassle",
    description:
      "No upfront costs, no resource headaches - just pure business growth",
  },
  {
    id: 6,
    image: "/partners/card-img-6.webp",
    heading: "First-to-launch Meta Features",
    description:
      "Get Meta features to your customer faster than ever before",
  },
  {
    id: 7,
    image: "/partners/card-img-7.webp",
    heading: "Industry's Most Comprehensive Program",
    description:
      "The partner program that sets the gold standard in BSP partnerships",
  },
  {
    id: 8,
    image: "/partners/card-img-8.webp",
    heading: "The Most Coveted Partnership",
    description:
      "Join the exclusive premium program that every competitor wants to be part of",
  }
];


function PrimaryButton({ label, href = "/" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-white text-[15px] cursor-pointer border-none"
      style={{
        background: hovered ? "#ff3964" : "#5B4FD8",
        transition: "background 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0 text-white"
        style={{
          background: hovered ? "#fff" : "#fff",
          color: hovered ? "#ff3964" : "#4640b8",
          transition: "background 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </Link>
  );
}

function SecondaryButton({ label, href = "/" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-[15px] bg-transparent cursor-pointer"
      style={{
        backgroundColor: hovered ? "#ff3964" : "transparent",
        border: `2px solid ${hovered ? "#ff3964" : "#5B4FD8"}`,
        color: hovered ? "#fff" : "#5B4FD8",
        transition: "border-color 0.25s ease, color 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0"
        style={{
          border: `2px solid ${hovered ? "#ff3964" : "#5B4FD8"}`,
          background: hovered ? "#fff" : "#5B4FD8",
          color: hovered ? "#ff3964" : "#ffffff",
          transition:
            "border-color 0.25s ease, background 0.25s ease, color 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </Link>
  );
}


function CtaPrimaryButton({ label, href = "/" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-violet-600 hover:text-white text-[15px] cursor-pointer border-none"
      style={{
        background: hovered ? "#ff3964" : "#fff",
        transition: "background 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0 text-white"
        style={{
          background: hovered ? "#fff" : "#5B4FD8",
          color: hovered ? "#ff3964" : "#fff",
          transition: "background 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </Link>
  );
}

function CtaSecondaryButton({ label, href = "/" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-[15px] text-white bg-transparent cursor-pointer"
      style={{
        backgroundColor: hovered ? "#ff3964" : "transparent",
        border: `2px solid ${hovered ? "#ff3964" : "#fff"}`,
        color: hovered ? "#fff" : "#fff",
        transition: "border-color 0.25s ease, color 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0"
        style={{
          border: `2px solid ${hovered ? "#ff3964" : "#5B4FD8"}`,
          background: hovered ? "#fff" : "#fff",
          color: hovered ? "#ff3964" : "#5B4FD8",
          transition:
            "border-color 0.25s ease, background 0.25s ease, color 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </Link>
  );
}


const faqData = [
  {
    question:
      "What is Gupshup’s ISV Partner Program ?",
    answer:
      "Gupshup’s ISV Partner Program is designed for Independent Software Vendors looking to integrate conversational messaging into their solutions. It provides access to Gupshup’s robust messaging infrastructure, partner-dedicated BSP license, and global partner support to accelerate go-to-market and scale effortlessly.",
  },
  {
    question:
      "What are the benefits of joining Gupshup’s Partner Program?",
    answer:
      "Gupshup's ISV partners get:\n" +
      "1) Access to two BSP licenses (Gupshup & One Direct) for optimized performance and faster setup, \n" +
      "2) Global infrastructure delivering 750M+ messages/day at peak\n   " +
      "3) Sub-100ms 2FA delivery latency\n  " +
      "4) Modular, plug-and-play APIs\n  " +
      "5) 24/7 technical support across regions\n  " +
      "6) Zero infra or resource overheads\n  " +
      "7) Access to Meta-first features and a competitive premium partner program  ",
  },
  {
    question:
      "Who is eligible to become a Gupshup ISV Partner ?",
    answer:
      "Any Independent Software Vendor (ISV), CRM platform, martech solution, or system integrator aiming to embed messaging and conversational AI capabilities into their offerings can apply. Whether you're a startup or an enterprise SaaS player, Gupshup offers the scale and support to suit your needs.",
  },
  {
    question: "How does Gupshup ensure message delivery at scale ?",
    answer:
      "Gupshup’s platform processes 50,000+ messages per second and supports daily volumes of 300M+ messages, peaking at 750M+. Even during high-volume campaigns, it ensures sub-100ms latency for critical messaging like OTPs, ensuring unmatched reliability and performance.",
  },
  {
    question: "What’s the difference between the Gupshup and One Direct BSP licenses ?",
    answer: "The Gupshup license offers unmatched infrastructure scale and competitive pricing. The One Direct license, owned by Gupshup, is optimized for faster onboarding, upgrades, and issue resolution, and is exclusively tailored to serve the partner ecosystem. Both work in tandem to offer flexibility and operational excellence.",
  },
  {
    question: "What can I do with the WhatsApp Business API ?",
    answer: "With a WhatsApp Business API, businesses can: 1. Talk to customers anywhere in the world. 2. Share important information, e.g., business address, description, website, email address. 3. Send timely notifications and alerts. 4. Bring customers closer to the brand to boost its equity and recall value. By partnering with BSP like Gupshup, small/medium businesses also get access to data-rich analytics to gauge the effectiveness of their sales or customer support functions.",
  },
];



const BouncingDots = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#7c6fe0",
            display: "inline-block",
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

// SVG corner decorations matching the image style
const CornerDecorLeft = () => (
 <img src="/home/ctaleft.webp" alt="" style={{ width: 30 }} />
);

const CornerDecorRight = () => (
 <img src="/home/ctaright.webp" alt="" style={{ width: 130 }} />
);



const page = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className=" flex flex-col gap-6 items-center justify-center px-6 py-16"
        style={{
          /* Egradient from image: white top-left → soft lavender → medium blue-purple bottom-right */
          background:
            "linear-gradient(135deg, #ffffff 0%, #f0eeff 20%, #e8e7eeff 40%, #bcc3ef 65%, #7a8efcff 85%, #384ca3ff 100%)",
          /* Rounded bottom corners to match image */
          borderRadius: "0 0 2rem 2rem",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Drive Growth with
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #5e34f1 36.28%, #ff3964 99.75%)",
              }}
            >
              Gupshup’s ISV Partnership
            </span>
          </h1>
          <p className="text-xl text-gray-950">
            Build, Integrate, and scale your solutions with Gupshup's robust
            WhatsApp messaging platform
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <PrimaryButton label="Get started" />
          <SecondaryButton label="Partner Login" />
        </div>
      </div>

      {/* Two Card Section */}
     <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                The all-in-one platform for
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
                <span className="text-[#5e34f1] bg-violet-100 px-4 py-1 inline-block border-r-2 border-violet-400">
                  managing conversations at scale
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Exceptional Reliability
                  </h2>
                  <p className="text-gray-950 text-sm sm:text-base">
                    We process massive scale with exceptional reliability -
                    delivering over 300 million messages daily with peak volumes
                    exceeding 750 million in a single day, while maintaining
                    processing capacity of over 50,000 messages per second.
                  </p>
                </div>
                <div className="relative w-full flex-1">
                  <Image
                    src="/partners/grid-img-1.webp"
                    alt="Exceptional Reliability"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    At Scale
                  </h2>
                  <p className="text-gray-950 text-sm sm:text-base">
                    We guarantee enterprise-grade performance - delivering
                    two-factor authentication (2FA) messages with sub-100ms
                    latency, even when other customers are running parallel
                    campaigns with 100 million messages.
                  </p>
                </div>
                <div className="relative w-full flex-1 min-h-64 sm:min-h-72 lg:min-h-80">
                  <Image
                    src="/partners/grid-img-2.webp"
                    alt="At Scale"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Text section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              BSP connections dedicated to Gupshup:
            </h2>
            <p className="text-xl text-gray-950 max-w-7xl font-bold mx-auto">
              In 2022, Gupshup expanded its capabilities by acquiring five companies. Among them was <span className="text-[#5e34f1]">One Direct (OD)</span>, an omnichannel customer service platform for businesses, which also holds an independent BSP license.
            </p>
          </div>
        </div>
      </section>


      {/* Globe icon section */}
      <section className=" py-10 px-4 sm:px-8 rounded-2xl max-w-7xl mx-auto my-2">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Partners can now leverage the dual advantage of two BSP licenses:
            </h2>

            <ul className="space-y-3 text-sm sm:text-base text-gray-700 list-disc list-outside pl-5">
              <li>
                Gupshup license provides the infrastructure scale and competitive
                advantage
              </li>
              <li>
                <Link
                  href="https://onedirect.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 font-medium hover:underline"
                >
                  One Direct
                </Link>{" "}
                license, a Gupshup-owned company, leverages the infrastructure and
                scale of Gupshup and optimizes for faster setup, upgrades, and
                resolution time, and is dedicated for the partner ecosystem.
              </li>
            </ul>

            <Link
              href="/press-release"
              className="inline-block text-sm text-violet-600 font-medium hover:underline mt-2"
            >
              Press Release
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center w-full max-w-sm md:max-w-none rounded-2xl shadow-2xl">
            <div className="relative w-full aspect-square max-w-[460px] overflow-hidden   flex items-center justify-center">
              <Image
                src="/partners/sidehug-bsp.webp"
                alt="BSP Network Illustration"
                width={460}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* 8 card section */}
      <section className="w-full bg-white py-16 px-4 sm:px-8">
        {/* Header */}
        <style>{`
          @keyframes bounceUp {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-10px); }
          }
        `}</style>
        <div className="text-center mb-12">
          <p className="text-2xl text-violet-600  mb-3 flex justify-center">
            <span style={{ animation: 'bounceUp 1.2s ease-in-out infinite', animationDelay: '0s' }}>•</span>
            <span style={{ animation: 'bounceUp 1.2s ease-in-out infinite', animationDelay: '0.2s' }}>•</span>
            <span style={{ animation: 'bounceUp 1.2s ease-in-out infinite', animationDelay: '0.5s' }}>•</span>
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Why do partners love{" "}
            <span className="text-violet-600">Gupshup?</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon / Image */}
              <div className="mb-5 flex items-center justify-center w-30 h-30 rounded-full ">
                <Image
                  src={card.image}
                  alt={card.heading}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  unoptimized
                />
              </div>

              {/* Heading */}
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">
                {card.heading}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed max-w-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
        <section
      style={{
        backgroundColor: "#fff",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "520px",
      
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#4f3fd4",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "1150px",
          height: "540px",
          padding: "60px 40px 50px",
          textAlign: "center",
          overflow: "visible",
        }}
      >
       {/* Top notch with bouncing dots overlaid on curved part image */}
<div
  style={{
    position: "absolute",
    top: -4,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Image
    src="/home/top.webp"
    alt="curved part"
    width={186}
    height={86}
    style={{ display: "block" }}
  />
  {/* Bouncing dots centered over the image */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <BouncingDots />
  </div>
</div>

        {/* Bottom-left corner decoration */}
        <div style={{ position: "absolute", bottom: 20, left: 2 }}>
          <CornerDecorLeft />
        </div>

        {/* Bottom-right corner decoration */}
        <div style={{ position: "absolute", bottom: 0, right: 2 }}>
          <CornerDecorRight />
        </div>

        {/* Heading */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Fixed Gupshup per message fee - as
        </h2>
        
        <h2 style={{
          color: "#ffffff",
          fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
          fontWeight: 700,
          marginBottom: "16px",
          lineHeight: 1.2,
        }}>
          low as $0.001*
        </h2>
        {/* Subtext */}
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(1.4rem, 2vw, 1rem)",
            fontWeight: 600,
            maxWidth: "480px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          No hidden fees, no subscription fees, no volume commitment
        </p>

        {/* CTA Button */}
     
         <div className="flex flex-wrap gap-4 justify-center items-center">
          <CtaPrimaryButton label="Get started" />
          <CtaSecondaryButton label="Partner Login" />
        </div>
       
      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.2em", marginTop: "32px", }}>*WhatsApp fee at actuals</p>
      </div>

    </section>


    {/* Faq Section */}
      <FAQ items={faqData} />
    </>
  );
};

export default page;
