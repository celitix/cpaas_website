"use client";
import React, { useState } from "react";
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
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import TabSection from "@/app/components/Tabs";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";

const stats2 = [
  { value: "5X", label: "Return on Ad Spends" },
  { value: "3X", label: "Better Engagement" },
  { value: "75-80%", label: "Self-serve queries" },
  { value: "60%", label: "Reduction in Support Calls" },
];

const testimonials = [
  {
    quote:
      "We strive to give our customers a cool and fun banking experience, and that begins by making it easy for them to bank. By leveraging Gupshup’s Gen AI solution for customer conversations, we have significantly improved our customer service efficiency and expect to reduce operational costs by USD 20 million over the next 3 years.",
    name: "Mila Bedrenets",
    title: "Chief Growth Hacker, Tonik Bank",
    logo: "/home/logo-tonik.webp",
    logoAlt: "tonik logo",
    linkTitle: "Read The Full Story",
    linkHref: "/voice-ai",
  },
  {
    quote:
      "The Voice AI Agent has transformed how our customers experience support. It's a perfect blend of efficiency and genuine care. Our customers get immediate, accurate responses in their preferred language, and the interactions are so natural they barely realize they're speaking with AI. This has deepened their trust with our brand.",
    name: "Snehashis Roy",
    title: "Head, D2C",
    logo: "/voice-ai/dotandkey.webp",
    logoAlt: "Petromin Corp",
    linkTitle: "Read The Full Story",
    linkHref: "/voice-ai",
  },
];

const brands = [
  {
    name: "MEF",
    src: "/rcs-api/mef.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Kotak",
    src: "/rcs-api/kotak.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Flipkart",
    src: "/rcs-api/flipkart.webp",
    width: 160,
    height: 160,
  },
  {
    name: "HDFC",
    src: "/rcs-api/hdfc.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Myntra",
    src: "/rcs-api/bank.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Apollo",
    src: "/rcs-api/apollo.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Netflix",
    src: "/rcs-api/netflix.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Cars 24",
    src: "/rcs-api/cars24.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Orange",
    src: "/rcs-api/orange.webp",
    width: 160,
    height: 160,
  },
  {
    name: "Mamaearth",
    src: "/rcs-api/mamaearth.webp",
    width: 160,
    height: 160,
  },
  {
    name: "mtn",
    src: "/rcs-api/mtn.webp",
    width: 160,
    height: 160,
  },
];

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

const whyGupshup = [
  {
    id: 1,
    img: "/voice-ai/card-3.webp",
    title: "PSTN Compatibility & Click-to- Call Support",
    desc: "Seamlessly connect with customers via traditional phone systems, Voice AI, WhatsApp Business Calling, or direct click-to-call from your website/app, simplifying access to support or sales.",
  },
  {
    id: 2,
    img: "/voice-ai/card-4.webp",
    title: "Advanced Interruption Handling",
    desc: "Our AI is designed to understand and smoothly manage interruptions, ensuring conversations flow naturally and effectively.",
  },
  {
    id: 3,
    img: "/voice-ai/card-5.webp",
    title: "Ultra-Low Latency",
    desc: "Critical for natural conversations, our platform boasts minimal latency, ensuring real-time, fluid interactions that mimic human speech.",
  },
];

const faqData = [
  {
    question:
      "What is Voice AI and how does it differ from traditional IVR systems?",
    answer:
      "Voice AI, or Artificial Intelligence for voice interactions, is a sophisticated technology that enables natural, human-like conversations. Unlike traditional IVR (Interactive Voice Response) systems that rely on rigid menus and keyword recognition, Voice AI uses advanced Natural Language Processing (NLP) and Machine Learning (ML) to understand user intent, context, and even sentiment. This allows for truly intelligent and adaptive interactions, making customers feel like they're speaking to a real person.",
  },
  {
    question: "Which communication channels does your Voice AI support?",
    answer:
      "Our Voice AI solution offers broad support, including the traditional PSTN (Public Switched Telephone Network) for standard phone calls. Crucially, we also integrate seamlessly with popular messaging platforms like WhatsApp, enabling powerful multi-modal (voice and messaging) conversations for higher impact.",
  },
  {
    question: "How does your Voice AI handle different languages and accents?",
    answer:
      "Our Voice AI is equipped with robust multi-lingual support, allowing it to understand and respond in various languages. Its advanced NLP capabilities are designed to handle different accents and dialects, ensuring a smooth and inclusive experience for a diverse customer base.",
  },
  {
    question:
      "What makes your Voice AI interactions 'natural' and 'intelligent'?",
    answer:
      "Our Voice AI leverages Contextual Intelligence to understand the full scope of each conversation, remembering past interactions and applying relevant information for personalized responses. It also features Adaptive Communication, seamlessly adjusting its tone, pace, and vocabulary in real-time, much like a human, to ensure fluid and effective dialogues.",
  },
  {
    question: "What impact does Voice AI have on key contact center metrics?",
    answer:
      "Implementing our Voice AI significantly improves critical contact center metrics. You can expect to lower your First Response Time (FRT) by providing instant answers, and substantially reduce overall Resolution Time by automating common issues. This leads to higher customer satisfaction and operational efficiency.",
  },
  {
    question:
      "Can your Voice AI handle a high volume of customer interactions?",
    answer:
      "Yes, our Voice AI is designed for high scalability, capable of handling a massive volume of customer interactions simultaneously. This ensures consistent service quality even during peak demand, without the need to rapidly scale up human agent teams.",
  },
  {
    question:
      "How does Voice AI improve customer support beyond just answering questions?",
    answer:
      "Beyond 24/7 intelligent assistance for FAQs, our Voice AI enhances customer support by improving first-call resolution rates, proactively identifying and addressing potential issues, and intelligently routing complex queries to the most appropriate human agent with full context.",
  },
  {
    question:
      "How does your Voice AI handle interruptions during a conversation?",
    answer:
      "Our Voice AI features strong interruption handling. It is designed to intelligently detect when a user interrupts or changes their mind and can gracefully adjust the conversation flow, re-prompting or redirecting as needed, ensuring a seamless and natural dialogue.",
  },
];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const current = testimonials[activeIndex];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full  overflow-hidden rounded-b-4xl">
        {/* Gradient background */}
        <div
          className="absolute  inset-0 z-0"
          style={{
            background:
              // "radial-gradient(ellipse at 70% 50%, #a5fcccff 0%, #c7d2fe 20%, #e0e7ff 45%, #f8f8ff 70%, #ffffff 100%)",
              "radial-gradient(ellipse at 80% 100%, #5d82df , #5d82df , #e0e7ff , #f8f8ff , #ffffff 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/* ── RIGHT COLUMN*/}
          <div className="flex justify-center lg:justify-end items-center text-center pt-12 order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/rcs-api/product-hero.webp"
                alt="WhatsApp illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* LEFT COLUMN: text content */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-18 pb-12 ">
            {/* Eye-brow label */}
            {/* <div className="flex justify-start">
              <div className="flex items-center justify-center gap-2 bg-[#ffebef] rounded-full px-2 py-1 ">
                <FaCircleCheck className="text-sm text-[#ff3964]" />
                <span className="text-sm text-[#ff3964] font-semibold ">
                  RCS
                </span>
              </div>
            </div> */}

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
              {/* Gradient text: green → pink */}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #5e34f1 36.28%, #ff3964 99.75%)",
                }}
              >
                Gupshup Voice AI:{" "}
              </span>
              Next- Gen Contact Center Experiences
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-xl text-gray-900 font-light leading-relaxed">
              Automate 80% of calls with human-like Voice AI agents. Scale your
              contact center instantly across 100+ languages with unmatched
              context and flexibility.
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

      <BrandCarousel
        brands={brands}
        title="Sparking action with meaningful conversations for leading global businesses"
      />

      {/* Triple Cards */}
      <section className="max-w-7xl mx-auto py-0 ">
        <div className="flex flex-col gap-10 bg-[#f4f4f6] px-6 py-16 md:px-12 rounded-4xl ">
          {/* Title */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Heading */}
            <h2 className=" text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight text-center md:text-left">
              Speaking Your Business Language:
              <p>Gupshup Voice AI</p>
            </h2>

            {/* Stat Card */}
            <div className="flex flex-col items-start bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 ">
              <span className="text-[40px] font-semibold text-[#5956d6]">
                80% of calls
              </span>
              <span className="text-gray-900 font-medium text-2xl mt-1">
                automated by Voice AI
              </span>
            </div>
          </div>

          {/* Bottom Row: Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 md:divide-gray-300">
            {/* Card 1 */}
            <div className="flex flex-col pr-10">
              <div className=" ">
                <Image
                  src="/voice-ai/icon-01.svg"
                  alt="Reach icon"
                  width={72}
                  height={72}
                  className="relative top-2 right-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Unmatched Natural Conversations & Cloning
                </h3>
                <p className=" leading-sung">
                  Natural, intelligent voice interactions that build customer
                  trust and satisfaction. Clone custom voices for your unique
                  needs and deliver truly personalized experiences.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col px-10">
              {/* <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-2xl ">
                <Image
                  src="/rcs-api/icon-3.svg"
                  alt="Reach icon"
                  width={46}
                  height={46}
                />
              </div> */}
              <div className=" ">
                <Image
                  src="/voice-ai/icon-02.svg"
                  alt="Reach icon"
                  width={72}
                  height={72}
                  className="relative top-2 right-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Contextual Intelligence
                </h3>
                <p className=" leading-sung">
                  Leverage full conversational history and past interactions for
                  truly personalized, relevant, and accurate responses.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col pl-10">
              <div className=" ">
                <Image
                  src="/voice-ai/icon-03.svg"
                  alt="Reach icon"
                  width={72}
                  height={72}
                  className="relative top-2 right-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Multilingual Adaptive Communication
                </h3>
                <p className=" leading-sung">
                  Adapting seamlessly to conversation flow and customer needs
                  like a human, in over 100+ languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youtube */}
      {/* <section className="py-12">
        <div className="py-20 px-10 bg-[#f6f4ff]">
          <div className=" max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex justify-center">
              <h2 className="text-5xl font-semibold ">
                Gupshup Voice AI:
                <span className="text-[#5956d6]">
                  {" "}
                  For Seamless Conversations
                </span>
              </h2>
            </div>

            <div className="flex justify-center items-center p-4 relative ">
              <div className="w-full relative overflow-hidden">
                <div className="w-full relative overflow-hidden">
                  <iframe
                    width="1068"
                    height="487"
                    src="https://www.youtube.com/embed/Ims_i6d94B8?si=fzeZFYqJJo54yCgl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Text Carousal */}
      <section className="w-full py-16 bg-white overflow-hidden">
        {/* Badge */}
        <div div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-[#ffebef] text-[#ff3964] text-base font-semibold tracking-wide">
            Applications
          </span>
        </div>

        {/* Heading */}
        <div div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Real-World Voice AI Solutions
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
            <span className="text-[#5e34f1] bg-violet-100 px-4 py-1 inline-block border-r-2 border-violet-400">
              For Your Business Vertical
              {/* <span className="text-violet-400 font-thin ml-1">|</span> */}
            </span>
          </h2>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
            <span className="text-[#5e34f1] bg-violet-100 px-3 py-1 rounded-md inline-block">
              For Your Business Vertical
              <span className="text-violet-400 font-thin ml-1">|</span>
            </span>
          </h2> */}
        </div>

        {/* Carousels */}
        <InfinitePillCarousel
          row1={row1Items}
          row2={row2Items}
          showSecondRow={true}
        />
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto space-y-10 px-6">
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

      {/* Tab Section */}
      <section className="max-w-7xl mx-auto py-15 space-y-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4 leading-relaxed">
            Powering Enterprise Communication:
            <span className="text-[#5e34f1]"> Diverse Voice AI Use Cases</span>
          </h2>
        </div>

        <div className="px-16">
          <TabSection tabs={tabs} />
        </div>
      </section>

      {/* Scalable Operations */}
      <section className="max-w-7xl mx-auto py-15 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold leading-tight">
              Embrace Exceptional CX and Scalable Operations
            </h2>
            <p className="text-xl font-normal  ">
              Our Agentic Core delivers personalized, low-latency, multilingual
              conversations across the customer lifecycle, driving superior
              business outcomes and scaling your operations.
            </p>
          </div>

          {/* image */}
          <div className="flex justify-start  ">
            <Image
              src="/voice-ai/sidehug.webp"
              alt="juniper logo"
              width={500}
              height={350}
              className="rounded-2xl border "
            />
          </div>
        </div>
      </section>

      {/* Why Gupshup */}
      <section className="max-w-7xl mx-auto space-y-10 px-6 py-15">
        <div className="flex flex-col ">
          <div className="flex justify-start">
            <div className="flex items-center justify-center gap-2 bg-[#ffebef] rounded-full px-3 py-1 ">
              <BsFillQuestionCircleFill className="text-[#ff3964]" />
              <span className=" text-[#ff3964] font-semibold tracking-wider  ">
                Why Gupshup?
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className=" text-3xl lg:text-5xl font-semibold leading-relaxed ">
              Delivering unparalleled efficiency, customer experiences, and
              actionable insights
            </h2>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {whyGupshup.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-1 rounded-4xl overflow-hidden  bg-[#f8f8f8]"
            >
              {/* Image Container */}
              <div className="flex items-center justify-center w-full   ">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={450}
                  height={320}
                  className="max-h-[330px] object-contain"
                />
              </div>

              <div className="flex flex-col px-8 gap-2 h-full pt-3 pb-8">
                <h2 className="font-semibold text-2xl">{card.title}</h2>

                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 bg-[#f5f5f5] rounded-4xl p-10 ">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              No customer missed with channel fallback
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
              Begin with rich RCS conversations, then let our intelligent
              channel failover handle the rest. When an RCS message can't be
              delivered, it automatically routes to backup channels like SMS or
              WhatsApp, increasing the reach of your critical messages.
            </p>
            <p className="text-gray-600 mt-2 mb-6 leading-relaxed max-w-lg">
              like SMS or WhatsApp, increasing the reach of your critical
              messages.
            </p>

            {/* <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#5956d6] text-white font-medium hover:opacity-90 transition">
              Explore Gupshup Conversation Cloud
              <span className="flex items-center justify-center bg-white rounded-full p-1">
                <FaArrowRight className="text-[#5956d6]" />
              </span>
            </button> */}
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/rcs-api/wide-card.webp"
              alt="Human agent dashboard"
              width={650}
              height={400}
              className="w-full "
            />
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section
        style={{
          background:
            "radial-gradient(40.92% 100% at 50% 0px, rgb(94, 52, 241) 0px, rgb(66, 31, 188) 100%)",
        }}
      >
        <div className="relative w-full rounded-2xl">
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
            <div className="relative w-full h-full opacity-80">
              <Image
                src="/voice-ai/banner-bg.webp"
                alt="World Map"
                fill
                className="object-cover  object-center"
                priority
              />
            </div>
          </div>

          {/* ── Gradient overlay ── */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #512cd0 35%, rgba(86, 48, 222,0.75) 58%, rgba(78, 43, 202) 100%)",
            }}
          />

          {/* ── Top: badge + heading + stats ── */}
          <div className="max-w-7xl mx-auto relative z-10 px-6 py-25">
            <div className="grid grid-cols-[40%_60%] gap-6">
              <div className="flex flex-col max-w-lg justify-center gap-10 ">
                <h2 className="text-white font-medium text-3xl lg:text-5xl leading-tight">
                  Why global businesses choose to partner with Gupshup
                </h2>
                <div className="grid grid-cols-2 gap-x-10 gap-y-7 ">
                  {stats2.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <h3 className="font-semibold text-[34px] lg:text-[38px] text-white leading-none">
                        {stat.value}
                      </h3>
                      <p className="text-white/80 text-lg lg:text-xl leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* carousel */}
              <div className="max-w-xl mx-auto flex ">
                <div className="  bg-white rounded-2xl p-3 shadow">
                  <div className=" relative flex flex-col justify-between bg-[#f8f8f8]  h-full p-8  rounded-2xl shadow-xl ">
                    <div className="absolute top-2 left-2 ">
                      <Image
                        src="/voice-ai/top.svg"
                        alt="World Map"
                        width={90}
                        height={70}
                        className=""
                      />
                    </div>
                    <div className="absolute bottom-25 right-3">
                      <Image
                        src="/voice-ai/bottom.svg"
                        alt="World Map"
                        width={170}
                        height={130}
                        className=""
                      />
                    </div>

                    {/* mavigation button */}
                    <div className="absolute right-5 top-5 flex justify-end items-center gap-2">
                      <button
                        onClick={prev}
                        className="flex items-center justify-center rounded-full transition-all"
                        aria-label="Previous testimonial"
                      >
                        <FaArrowLeftLong />
                      </button>
                      <button
                        onClick={next}
                        className="flex items-center justify-center rounded-full transition-all"
                        aria-label="Next testimonial"
                      >
                        <FaArrowRightLong />
                      </button>
                    </div>

                    <div className="flex flex-col gap-3 pt-14">
                      {/* Quote */}
                      <p className="text-xl leading-relaxed">{current.quote}</p>
                      <div className="flex items-center text-[#5e34f1] font-semibold gap-2.5">
                        <a href={current.linkHref}> {current.linkTitle} </a>
                        <FaArrowRightLong />
                      </div>
                    </div>

                    {/* Author card */}
                    <div className="flex items-center gap-6 rounded-xl z-1 p-4 mt-6 border border-gray-200 bg-white shadow-xl">
                      <div className="flex-shrink-0 flex items-center min-h-16">
                        <Image
                          src={current.logo}
                          alt={current.logoAlt}
                          width={90}
                          height={63}
                          className="  "
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <h3 className="text-sm text-gray-400">
                          {current.name}
                        </h3>
                        <p className="text-sm font-semibold">{current.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes bounceDot {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
            40% { transform: translateY(-7px); opacity: 1; }
          }
          `}</style>
      </section>

      {/* Faq Section */}
      <FAQ items={faqData} />

      {/* CTA section*/}
      <CTA
        heading="Transform Your Customer Communications Today"
        subtext="Experience the future of contact center technology. Schedule a demo and see how Gupshup Voice AI can revolutionize your customer interactions."
        linkText="Let's Talk"
        href="/contact"
      />
    </div>
  );
};

export default page;
