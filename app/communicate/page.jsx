import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { FiArrowRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

// components
import BrandCarousel from "@/app/components/BrandCarousel";
import TabSection from "@/app/components/Tabs";

const brands = [
  {
    name: "MEF",
    src: "/communicate/logo-1.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Kotak",
    src: "/communicate/logo-2.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Flipkart",
    src: "/communicate/logo-3.webp",
    width: 120,
    height: 120,
  },
  {
    name: "HDFC",
    src: "/communicate/logo-4.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Myntra",
    src: "/communicate/logo-5.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Apollo",
    src: "/communicate/logo-6.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Netflix",
    src: "/communicate/logo-7.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Cars 24",
    src: "/communicate/logo-8.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Orange",
    src: "/communicate/logo-9.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Mamaearth",
    src: "/communicate/logo-10.webp",
    width: 120,
    height: 120,
  },
  {
    name: "mtn",
    src: "/communicate/logo-11.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Kotak",
    src: "/communicate/logo-12.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Flipkart",
    src: "/communicate/logo-13.webp",
    width: 120,
    height: 120,
  },
  {
    name: "HDFC",
    src: "/communicate/logo-14.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Myntra",
    src: "/communicate/logo-15.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Apollo",
    src: "/communicate/logo-16.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Netflix",
    src: "/communicate/logo-18.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Cars 24",
    src: "/communicate/logo-19.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Orange",
    src: "/communicate/logo-20.webp",
    width: 120,
    height: 120,
  },
  {
    name: "Mamaearth",
    src: "/communicate/logo-21.webp",
    width: 120,
    height: 120,
  },
];

const tabs = [
  {
    heading: "Lead Qualification & Nurture",
    description:
      "Engage prospects, answer initial questions, and qualify leads with conversational flows that guide them toward conversion.",
    image: "/voice-ai/tab-1.webp",
  },
  {
    heading: "Collections",
    description:
      "Handle collection reminders with a sophisticated understanding of tone and context for better outcomes.",
    image: "/voice-ai/tab-2.webp",
  },
  {
    heading: "Customer Support",
    description:
      "Handle inquiries, provide instant resolutions, escalate complex issues.",
    image: "/voice-ai/tab-3.webp",
  },
  {
    heading: " Multi-Modal Interactions",
    description:
      "Allow customers to choose their preferred communication channel, switching effortlessly between voice and text for a truly personalized experience.",
    image: "/voice-ai/tab-4.webp",
  },
];

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-[url('/producthero-bg.svg')] bg-cover bg-no-repeat  overflow-hidden rounded-b-4xl mb-10">
        <div className="max-w-7xl mx-auto relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/* RIGHT COLUMN */}
          <div className="flex justify-center lg:justify-end items-center text-center pt-12 order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/communicate/hero.webp"
                alt="WhatsApp illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* LEFT COLUMN: text content */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-18 pb-12 ">
            {/* Eye-brow label */}
            <div className="flex justify-start">
              <div className="flex items-center justify-center gap-2 bg-[#ffebef] rounded-full px-2 py-1 ">
                <FaCircleCheck className="text-sm text-[#ff3964]" />
                <span className="text-sm text-[#ff3964] font-semibold ">
                  Gupshup Communicate
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
              {/* Gradient text: green pink */}
              High scale personalized messaging,
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #5e34f1 36.28%, #ff3964 99.75%)",
                }}
              >
                {" "}
                now with optimized delivery
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-xl text-gray-900 font-light leading-relaxed">
              Multi-channel, high-scale CPaaS platform that learns when to send,
              when to wait, and when to retry ensuring higher delivery rates
            </p>

            {/* CTA Button */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <Link
                href="#"
                className="group mt-3 inline-flex items-center justify-center gap-2 bg-[#5956d6] hover:bg-[#ee3458] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 cursor-pointer z-10 relative"
              >
                Book a consultation
                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <FiArrowRight
                    size={14}
                    className="text-[#5956d6] group-hover:text-[#ee3458] font-bold transition-colors duration-200"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel
        brands={brands}
        title="The platform of choice for leading global brands"
      />

      {/* smarter interactions */}
      <section className="max-w-5xl mx-auto py-12">
        <div className="flex flex-col gap-6">
          {/* title */}
          <h2 className=" text-5xl text-center max-w-3xl mx-auto leading-tight font-semibold ">
            Make every message matter with smarter interactions
            {/* <Image
              src="/communicate/icon-0.svg"
              alt="message icon"
              width={60}
              height={60}
            /> */}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* card 1 */}
            <div className="flex flex-col bg-[#f4f4f4] p-6 rounded-2xl ">
              <h3 className="text-2xl font-medium">Critical Communications</h3>
              <p className="text-2xl text-[#959596] ">
                Via Traditional CPaaS Providers
              </p>
            </div>

            {/* card 2 */}
            <div className=" relative flex justify-between bg-[#5e34f1] p-6 rounded-2xl ">
              <h3 className="text-2xl max-w-sm font-medium text-white ">
                Critical Communications via Gupshup
              </h3>
              <div className=" absolute right-0">
                <Image
                  src="/communicate/icon-1.svg"
                  alt="message icon"
                  width={100}
                  height={50}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col gap-6 p-8 border-4 border-[#f4f4f4] rounded-4xl ">
              {/* card 1 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-01.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl font-light ">
                    <span className="font-semibold">Sub-par reach </span>
                    with blasts on a single channel and high delivery failures
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-2.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl font-light ">
                    <span className="font-semibold">Low engagement </span>–
                    wasted spend on those not likely to respond
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-3.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl ">
                    <span className="font-semibold">Limited scalability </span>,
                    frequent downtime and message delays
                  </p>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div className="flex flex-col gap-6 p-8 border-4 border-[#f4f4f4] rounded-4xl ">
              {/* card 1 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-4.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl font-light ">
                    <span className="font-semibold text-[#5e34f1] ">
                      Higher campaign reach {" "}
                    </span>
                    by auto-rerouting failed messages to fallback channels
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-5.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl font-light ">
                    <span className="font-semibold  text-[#5e34f1]">
                      Enhanced engagement{" "}
                    </span>
                    – with multi-lingual, optimized, propensity driven campaigns
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className="flex gap-2 ">
                <div className="shrink-0">
                  <Image
                    src="/communicate/Icon-6.svg"
                    alt="message icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex items-center border-l border-[#f4f4f4] ps-6 ">
                  <p className="text-xl font-light font-light ">
                    <span className="font-semibold  text-[#5e34f1]">
                      Future-proof scalability,{" "}
                    </span>
                    proven with 120 Bn+ messages annually and multi-level
                    prioritization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Capabilities */}
      <section section className="max-w-7xl mx-auto space-y-10 px-6">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-1 bg-[#ffebef] rounded-full px-2 py-1 ">
              <FaCircleCheck className="text-[#ff3964]" />
              <span className="text-sm text-[#ff3964] font-medium ">
                Capabilities
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[#5e34f1] text-3xl lg:text-5xl font-semibold leading-relaxed ">
              Supercharge Your Contact Center
            </div>
            <div className=" flex gap-1 text-3xl lg:text-5xl font-semibold leading-sung">
              with Gupshup Voice AI
            </div>
          </div>
        </div>

        {/* cards */}
        <div className=" max-w-xl lg:max-w-6xl mx-auto grid grid-cols-1 md:px-3 lg:grid-cols-2 gap-6">
          {/* card 1 */}
          <div className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]">
            <div className="py-2">
              <Image
                src="/rcs-api/grid-img-1.webp"
                alt="grid-img-1"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col gap-2 p-6 ">
              <h2 className="font-semibold text-2xl">
                Augment Your Contact Center Staff
              </h2>
              <p className="">
                Empower your human agents by offloading routine inquiries and
                repetitive tasks to our Voice AI, allowing them to focus on
                complex, high-value interactions and strategic initiatives.
              </p>
              <div className="mt-2">
                <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                  Try out our Voice AI Agent
                  <div className="flex justify-center items-center bg-white p-1 rounded-full ">
                    <FaArrowRight className="text-[#5956d6] text-base " />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]">
            <div className="py-2">
              <Image
                src="/rcs-api/grid-img-1.webp"
                alt="grid-img-1"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col gap-2 p-6 ">
              <h2 className="font-semibold text-2xl">
                Accelerated Resolution Times
              </h2>
              <p className="">
                Drastically lower your First Response Time (FRT) and
                significantly reduce overall resolution time. Get your customers
                the answers and solutions they need, faster.
              </p>
              <div className="mt-2">
                <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                  Try out our Voice AI Agent
                  <div className="flex justify-center items-center bg-white p-1 rounded-full ">
                    <FaArrowRight className="text-[#5956d6] text-base " />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
