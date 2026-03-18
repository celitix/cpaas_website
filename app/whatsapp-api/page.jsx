"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// components
import BrandCarousel from "@/app/components/BrandCarousel";
import WhatsappTextCarousal from "@/app/components/whatsappApi/WhatsappTextCarousal";
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import TabSection from "@/app/components/Tabs";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";

// icons
import { FiArrowRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const brands = [
  {
    name: "Netflix",
    src: "/whatsapp-api/netflix.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Schneider Electric",
    src: "/whatsapp-api/electric.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Tata Motors",
    src: "/whatsapp-api/tata.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Hyundai",
    src: "/whatsapp-api/hyndai.webp",
    width: 160,
    height: 48,
  },
  {
    name: "L'Oréal",
    src: "/whatsapp-api/loreal.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Myntra",
    src: "/whatsapp-api/myntra.webp",
    width: 160,
    height: 40,
  },
  // Duplicate for seamless loop
  {
    name: "Netflix",
    src: "/whatsapp-api/netflix.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Schneider Electric",
    src: "/whatsapp-api/electric.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Tata Motors",
    src: "/whatsapp-api/tata.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Hyundai",
    src: "/whatsapp-api/hyndai.webp",
    width: 160,
    height: 48,
  },
  {
    name: "L'Oréal",
    src: "/whatsapp-api/loreal.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Myntra",
    src: "/whatsapp-api/myntra.webp",
    width: 160,
    height: 40,
  },

  {
    name: "Netflix",
    src: "/whatsapp-api/netflix.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Schneider Electric",
    src: "/whatsapp-api/electric.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Tata Motors",
    src: "/whatsapp-api/tata.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Hyundai",
    src: "/whatsapp-api/hyndai.webp",
    width: 160,
    height: 48,
  },
  {
    name: "L'Oréal",
    src: "/whatsapp-api/loreal.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Myntra",
    src: "/whatsapp-api/myntra.webp",
    width: 160,
    height: 40,
  },
];

const whyGupshup = [
  {
    id: 1,
    img: "/whatsapp-api/card-img-1.webp",
    title: "Automate workflows with dynamic AI Agents",
    desc: "Elevate the overall conversational experience with multi-modal AI Agents that are context aware, understand your business and can reason",
    btnText: "Explore Gupshup AI Agent",
  },
  {
    id: 2,
    img: "/whatsapp-api/card-img-2.webp",
    title: "Fast track your WhatsApp journey",
    desc: "Tap into our library of sample journey templates to deploy WhatsApp conversations for your business instantly",
    btnText: "Explore Conversation Cloud",
  },
  {
    id: 3,
    img: "/whatsapp-api/card-img-3.webp",
    title: "Elevate campaigns with data-driven decisions",
    desc: "Track every aspect of your WhatsApp campaigns with comprehensive multi-level analytics and granular insights",
    // btnText: "Explore Analytics",
  },
];

const customerStories = [
  {
    id: 1,
    img: "/stories/housing.webp",
    title:
      "How Housing.Com Increased Conversions By 1.8x Via WhatsApp Marketing",
    desc: "Dive into the journey of how India’s real estate leader streamlined its customer experience with conversational engagement on WhatsApp.",
    brand: "HOUSING.COM",
  },
  {
    id: 2,
    quote:
      "With Gupshup Conversation Cloud, we’re up and running quickly and with the help of the amazing customer success team, we’ve seen 7X ROI via online sales attributed to targeted WhatsApp marketing.",
    author: "Vanessa Vellos",
    company: "CRM - Reserva",
  },
  {
    id: 3,
    img: "/stories/cars24.webp",
    title: "Automating Vehicle Discovery For Potential Buyers",
    desc: "Automated car discovery and test drive bookings for customers to create a seamless car purchase experience.",
    brand: "CARS24",
  },
];

const tabs = [
  {
    heading: "Rich Messaging Templates",
    description:
      "Improve engagement with multiple interactive options throughout the course of the conversation.",
    image: "/whatsapp-api/vertical-tab-img-1.webp",
  },
  {
    heading: "WhatsApp Flows",
    description:
      "Deliver bespoke app-like experiences with custom forms for multi-step information collection.",
    image: "/whatsapp-api/vertical-tab-img-2.webp",
  },
  {
    heading: "WhatsApp Commerce",
    description:
      "Showcase products directly on WhatsApp through dynamic catalogs with interactive buttons.",
    image: "/whatsapp-api/vertical-tab-img-3.webp",
  },
  {
    heading: "WhatsApp Pay",
    description:
      "Send invoices and accept payments directly on WhatsApp, natively or via payment gateways like RazorPay, PayU and Stripe.",
    image: "/whatsapp-api/vertical-tab-img-4.webp",
  },
  {
    heading: "Click-to-WhatsApp Ads",
    description:
      "Replace traditional lead gen forms with interactive ad buttons that kickstart personalized conversations on WhatsApp.",
    image: "/whatsapp-api/vertical-tab-img-5.webp",
  },
  {
    heading: "Human + AI Flexibility",
    description:
      "Provide customers with 24/7 AI support, with the option to route complex queries to a human agent.",
    image: "/whatsapp-api/vertical-tab-img-6.webp",
  },
];

const faqData = [
  {
    question: "Which industries can benefit from using WhatsApp Business API?",
    answer:
      "Industries like e- commerce, retail, FMCG, healthcare, travel, banking, education, real estate and customer service can benefit from WhatsApp Business API by streamlining marketing communication, automating support, sending notifications, and boosting engagement through personalized messaging.",
  },
  {
    question: "What are the key features of Gupshup’s WhatsApp solution?",
    answer:
      "Gupshup Conversation Cloud enhances WhatsApp conversations by leveraging AI Agents for intelligent, 2-way interactions. It also offers pre-approved templates for faster time to market, real-time customer segmentation, and personalized campaigns at scale. Businesses can automate campaigns and customer support, design journeys with a no-code visual builder, and seamlessly integrate live human agent assistance for enhanced customer service. Additionally, Gupshup provides consulting services, industry best practices, ROI analysis, and implementation support to help optimize your channel strategy. ",
  },
  {
    question: "How can Gupshup help my business integrate WhatsApp?",
    answer:
      "Gupshup Conversation Cloud on top of the WhatsApp Business API helps businesses to broadcast and automate messages, run Click-to-WhatsApp Ads, build smart 2-way conversations, embed AI Agent led conversations, showcase catalogs, enable live chat support, collect payments, and much more.",
  },
  {
    question: "What happens if my messages are not delivered on WhatsApp?",
    answer:
      "If your WhatsApp messages are not delivered, Gupshup's ‘Optimized Delivery’ can ensure delivery through designated fallback channels. We currently support failover to up to 2 channels, including WhatsApp to SMS, RCS to WhatsApp and WhatsApp to RCS to SMS.",
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

function Page() {
  const autoScrollRef = useRef(
    AutoScroll({
      speed: 1.2,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      direction: "forward",
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoScrollRef.current],
  );

  useEffect(() => {
    if (emblaApi) {
      autoScrollRef.current.play();
    }
  }, [emblaApi]);

  return (
    <>
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

        {/* Subtle secondary glow to deepen the right-side blue */}
        {/* <div
          className="absolute top-0 inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 90% 60%, #818cf8 0%, transparent 55%)",
            opacity: 0.35,
          }}
        /> */}

        <div className="max-w-7xl mx-auto relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/*  RIGHT COLUMN*/}
          <div className="flex justify-center lg:justify-end items-center text-center pt-12 order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/whatsapp-api/whatsapp-api-hero.webp"
                alt="WhatsApp illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* LEFT COLUMN: text content */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-18 pb-12 ">
            {/* Eye-brow label */}
            <span className="text-sm text-center lg:text-start font- tracking-widest text-violet-600 uppercase">
              WhatsApp Channel
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 text-center md:text-left">
              Elevate customer
              <br className="hidden lg:block" />
              <span className="block md:inline">conversations with</span>
              <br className="hidden lg:block" />
              {/* Gradient text: green → pink */}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4954ebff 0%, #7963f8ff 30%, #e91e8c 100%)",
                }}
              >
                WhatsApp Business API
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-lg text-gray-900 leading-relaxed">
              Engage over 2.75 billion customers globally through
              WhatsApp&apos;s trusted platform, powered by Gupshup Conversation
              Cloud.
            </p>

            {/* CTA Button */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <Link
                href="#"
                className="group mt-3 inline-flex items-center justify-center gap-2 bg-[#5956d6] hover:bg-[#ee3458] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 cursor-pointer z-10 relative"
              >
                Set up WhatsApp account
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

      {/* Brand carousal */}
      {/* <section className="w-full py-15 bg-white overflow-hidden">
        <p className="text-center text-lg md:text-lg lg:text-xl font-bold text-gray-900 tracking-wide mb-7 px-5">
          Driving meaningful customer conversations for leading global brands
        </p>

        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-center select-none">
            {brands.map((brand, index) => (
              <div
                className="flex-none px-10 sm:px-12 md:px-14 flex items-center justify-center"
                key={`${brand.name}-${index}`}
              >
                <div className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain max-h-10 sm:max-h-12 w-auto"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <BrandCarousel
        brands={brands}
        title="Driving meaningful customer conversations for leading global brands"
      />

      {/* Triple Cards */}
      <section className="max-w-7xl mx-auto py-0 ">
        <div className="flex flex-col bg-[#f4f4f6] px-6 py-16 md:px-12 lg:px-15 rounded-4xl ">
          {/* Top Row: Heading + Stat Card */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl text-center md:text-left">
              Reach your customers where they are — on the world's most popular
              messaging app
            </h2>

            {/* Stat Card */}
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-9 flex flex-col items-start w-[320px] lg:w-[400px]">
              <span className="text-4xl font-semibold text-[#7c5cfc]">
                2.75 billion+
              </span>
              <span className="text-gray-900 text-xl mt-1">
                global WhatsApp users
              </span>
            </div>
          </div>

          {/* Bottom Row: Three Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:pr-8 pb-8 sm:pb-0">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center mb-5">
                <Image
                  src="https://gs-upload.gupshup.io/revamp/ai-website/qr-generator/icon-2.svg"
                  alt="Reach icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Reach and engage better on an omnipresent app
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Reach average 95% delivery rates by engaging customers on a
                familiar app they use on a daily basis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:px-8 py-8 sm:py-0">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center mb-5">
                <Image
                  src="https://gs-upload.gupshup.io/revamp/ai-website/qr-generator/icon-3.svg"
                  alt="Streamline icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Streamline operations with an all-in-one platform
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Engage customers in rich, interactive conversations on WhatsApp
                itself without having to download any other applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="sm:pl-8 pt-8 sm:pt-0">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center mb-5">
                <Image
                  src="https://gs-upload.gupshup.io/revamp/ai-website/qr-generator/icon-1.svg"
                  alt="Engage icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Engage with two-way conversations
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Allow customers to interact and resolve their queries
                effectively with two-way exchanges using human and AI Agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Carousal */}
      {/* <WhatsappTextCarousal /> */}
      <section className="w-full py-16 bg-white overflow-hidden">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-[#ffebef] text-[#ff3964] text-base font-semibold tracking-wide">
            Applications
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Give customers everything they need-
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
            <span className="text-[#5e34f1] bg-violet-100 px-4 py-1 inline-block border-r-2 border-violet-400">
              without leaving WhatsApp
            </span>
          </h2>
        </div>

        {/* Carousels */}
        <InfinitePillCarousel
          row1={row1Items}
          row2={row2Items}
          showSecondRow={true}
        />
      </section>
      {/* <InfinitePillCarousel
        row1={row1Items}
        row2={row2Items}
        showSecondRow={true}
      /> */}

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
              Supercharge your WhatsApp campaigns
            </div>
            <div className=" flex gap-1 text-3xl lg:text-5xl font-semibold leading-sung">
              with two-way conversations
            </div>
          </div>
        </div>
        <div className=" max-w-xl lg:max-w-6xl mx-auto grid grid-cols-1 md:px-3 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]">
            <div className="py-2">
              <Image
                src="/whatsapp-api/campaign-img-1.webp"
                alt="campaign-img-1"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col px-8 gap-2 pt-3 pb-8 ">
              <h2 className="font-semibold text-2xl">
                Laser focused messages, personalized for each user
              </h2>
              <p className="">
                Target customers precisely and drive conversions with dynamic
                segments that update in real-time, based on behavior,
                preferences, and engagement patterns.
              </p>
              <div className=" mt-2">
                <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                  Explore Gupshup Personalize
                  <div className="flex justify-center items-center bg-white p-1 rounded-full ">
                    <FaArrowRight className="text-[#5956d6] text-base " />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]">
            <div className="py-2">
              <Image
                src="/whatsapp-api/campaign-img-2.webp"
                alt="campaign-img-1"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col px-8 gap-2 pt-3 pb-8 ">
              <h2 className="font-semibold text-2xl">
                Dynamic interactions triggered in response to customer actions
              </h2>
              <p className="">
                Orchestrate intuitive journeys with automated, relevant
                interactions combining AI Agents, structured flows, triggered
                campaigns and human agents
              </p>
              <div className="mt-2">
                <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                  Explore Conversation Cloud
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
      <section className="py-15">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#5e34f1] mb-2">
            Streamline the customer journey by leveraging
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4 leading-relaxed">
              features beyond text messaging
            </h2>
          </div>
        </div>

        <div className="px-16">
          <TabSection tabs={tabs} />
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
              Start the conversation right with an
            </h2>
            <h2 className="text-[#5e34f1]  text-3xl lg:text-5xl font-semibold leading-sung">
              award-winning WhatsApp partner
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6  bg-[#f8f8f8] rounded-2xl">
          {/* meta title */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-10">
            <div className="flex flex-col lg:flex-row order-2 lg:order-1 gap-6 p-8 items-center   bg-white shadow-2xl rounded-2xl">
              <div className="">
                <Image
                  // src="/public/whatsapp-api/logo-meta.svg"
                  src="/whatsapp-api/logo-meta.svg"
                  alt="meta logo"
                  width={130}
                  height={60}
                />
              </div>
              <div className="hidden lg:flex bg-black h-20 w-0.25 "></div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="2023 and 2024 font-semibold text-3xl">
                  Partner of the year{" "}
                </h3>
                <p className="text-xl font-medium text-gray-500">
                  2023 and 2024{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-1 order-1 lg:order-2 ">
              <p className="text-xl tracking-wide text-center lg:text-start ">
                As the only company awarded Meta's Partner of the Year in both
                2023 and 2024, we offer
                <span className="font-bold"> exclusive Beta access </span>
                to WhatsApp's newest features and innovations for more impactful
                communications.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {whyGupshup.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]"
            >
              {/* Image Container */}
              <div className="flex items-center justify-center w-full h-[330px] ">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={450}
                  height={350}
                  className="h-full object-contain"
                />
              </div>

              <div className="flex flex-col px-8 gap-2 h-full pt-3 pb-8">
                <h2 className="font-semibold text-2xl">{card.title}</h2>

                <p>{card.desc}</p>
                {card.btnText && (
                  <div className="flex items-end h-full ">
                    <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cursor-pointer">
                      {card.btnText}

                      <div className="flex justify-center items-center bg-white p-1 rounded-full">
                        <FaArrowRight className="text-[#5956d6] text-base" />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 bg-[#f5f5f5] rounded-4xl p-10 ">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              Seamlessly handover conversations to human agents
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
              Handover conversations to live human agents when situations need a
              human touch; empower support agents to connect with customers
              across multiple channels, including voice, from a single dashboard
            </p>

            <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#5956d6] text-white font-medium hover:opacity-90 transition">
              Explore Gupshup Conversation Cloud
              <span className="flex items-center justify-center bg-white rounded-full p-1">
                <FaArrowRight className="text-[#5956d6]" />
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/whatsapp-api/card-img-4.webp"
              alt="Human agent dashboard"
              width={650}
              height={400}
              className="w-full "
            />
          </div>
        </div>
      </section>

      {/* 3 cards */}
      <section className="max-w-7xl mx-auto w-full py-16 px-4 md:px-8 lg:px-16 space-y-10">
        {/* Section Header */}
        {/* Tag */}
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-start">
            <div className="flex items-center justify-center gap-2 bg-[#ffebef] rounded-full px-3 py-1 ">
              <FaCircleCheck className="text-[#ff3964]" />
              <span className=" text-[#ff3964] font-semibold tracking-wider  ">
                Customer Stories
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className=" text-3xl lg:text-5xl font-semibold leading-snug ">
              Discover how our customers drive growth with conversational AI on
              WhatsApp
            </h2>
          </div>
        </div>

        {/* Cards Row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 - Housing.com */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col relative bg-white">
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src="/whatsapp-api/housing-image.webp"
                alt="Housing.com couple"
                fill
                className="object-cover"
              />
              {/* Housing.com logo badge */}
              <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 shadow-sm">
                <span className="text-orange-500 font-bold text-xs tracking-tight">
                  HOUSING.com
                </span>
              </div>
            </div>

            {/* Content box curved, overlapping the image slightly */}
            <div className="relative z-10 -mt-4  bg-white rounded-2xl shadow-sm px-5 pt-5 pb-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                How Housing.Com Increased Conversions By 1.8x Via WhatsApp
                Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dive into the journey of how India's real estate leader
                streamlined its customer experience with conversational
                engagement on WhatsApp.
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="text-base font-semibold text-[#5e34f1]  transition-colors inline-flex items-center gap-2 hover:cursor-pointer "
                >
                  Find out more{" "}
                  <span className="text-base">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 - Reserva / Center Quote Card */}
          <div className="relative flex-1  flex flex-col rounded-2xl overflow-hidden bg-[#f8f8f8] border border-gray-300 ">
            {/* Full card background image */}
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
            {/* <Image
              src="/whatsapp-api/testimonial-bg-new.svg"
              alt="Quote background"
              fill
              className="object-contain"
            /> */}

            {/* Overlay content sitting on top of the image */}
            <div className="relative z-10 flex flex-col flex-1 px-5 pt-16 pb-6">
              <p className=" text-2xl leading-relaxed mb-4">
                "With Gupshup Conversation Cloud, we're up and running quickly
                and with the help of the amazing customer success team, we've
                seen{" "}
                <span className="font-bold text-gray-900">
                  7X ROI via online sales
                </span>{" "}
                attributed to targeted WhatsApp marketing."
              </p>
              <a
                href="#"
                className="text-base font-semibold text-[#5e34f1]  transition-colors inline-flex items-center gap-2 hover:cursor-pointer "
              >
                Find out more{" "}
                <span className="text-base">
                  <FaArrowRight />
                </span>
              </a>

              {/* Reserva box */}
              <div className="mt-20 shadow-lg border border-gray-200 rounded-xl px-4 py-6 flex items-center gap-3 bg-white/80 backdrop-blur-sm">
                <div className="relative w-36 h-8 flex-shrink-0">
                  <Image
                    src="/whatsapp-api/reserva.webp"
                    alt="Reserva logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="border-l border-gray-300 pl-3">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    Vanessa Velloso
                  </p>
                  <p className="text-xs text-gray-500">CRM - Reserva</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Cars24 */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col relative bg-white">
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src="/cars24-image.webp"
                alt="Cars24 driver"
                fill
                className="object-cover"
              />
              {/* Cars24 logo badge */}
              <div className="absolute top-3 left-3 bg-gray-900 rounded-md px-2 py-1 shadow-sm">
                <span className="text-white font-bold text-xs tracking-tight">
                  CARS<span className="text-yellow-400">24</span>
                </span>
              </div>
            </div>

            {/* Content box */}
            <div className="relative z-10 -mt-4 bg-white rounded-2xl shadow-sm px-5 pt-5 pb-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Automating Vehicle Discovery For Potential Buyers
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Autotech company Cars24 automated car discovery and test drive
                bookings for customers to create a seamless car purchase
                experience, reducing dependence on human assistance.
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="text-base font-semibold text-[#5e34f1]  transition-colors inline-flex items-center gap-2 hover:cursor-pointer "
                >
                  Find out more{" "}
                  <span className="text-base">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5956d6] hover:bg-[#ee3458] hover:cursor-pointer text-white transition-all duration-200 font-semibold group">
            Read More Customer Stories
            <span className="flex items-center justify-center w-6 h-6 rounded-full font-bold bg-white text-[#5956d6] group-hover:text-[#ee3458] transition-all duration-200 ">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </section>

      {/* CTA section*/}
      <CTA
        heading="Ready to transform your customer communication?"
        subtext="Get connected to see how you can transform your customer communication on SMS"
        linkText="Set up WhatsApp account"
        href="/contact"
      />

      {/* Faq Section */}
      <FAQ items={faqData} />
    </>
  );
}

export default Page;
