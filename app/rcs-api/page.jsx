import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import { FiArrowRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

// components
import BrandCarousel from "@/app/components/BrandCarousel";
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import TabSection from "@/app/components/Tabs";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";

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
    heading: "Rich Media Support",
    description:
      "Interactive elements like images, audio, video, carousels to capture customers’ attention.",
    image: "/rcs-api/tab-1-img-1.webp",
  },
  {
    heading: "QR Code Conversations",
    description:
      "Let users initiate chats by scanning QR codes from print ads, digital media, or in-store displays.",
    image: "/rcs-api/tab-1-img-2.webp",
  },
  {
    heading: "P2A Journeys",
    description:
      "Allow users to effortlessly start conversations with your RCS agent and resolve queries faster.",
    image: "/rcs-api/tab-1-img-3.webp",
  },
  {
    heading: "Deep Analytics",
    description:
      "Track campaign level metrics and get insights into conversations.",
    image: "/rcs-api/tab-1-img-4.webp",
  },
];

const whyGupshup = [
  {
    id: 1,
    img: "/rcs-api/card-1.webp",
    title: "Build dynamic conversations powered by GenAI",
    desc: "Elevate the overall experience with with context-aware AI Agents that can handle dynamic, natural language conversations.",
    // btnText: "Explore Gupshup AI Agent",
  },
  {
    id: 2,
    img: "/rcs-api/card-2.webp",
    title: "Proven choice for enterprises",
    desc: "Powering 1B+ messages monthly through Gupshup and Dotgo.",
    // btnText: "Explore Conversation Cloud",
  },
  {
    id: 3,
    img: "/rcs-api/card-3.webp",
    title: "Elevate campaigns with data-driven decisions",
    desc: "Track every aspect of conversations with comprehensive funnel wise view of the journey and granular insights.",
    // btnText: "Explore Analytics",
  },
];

const faqData = [
  {
    question: "Is RCS better than SMS?",
    answer:
      "Rich Communication Services (RCS) offer enhanced multimedia features and a richer user experience compared to traditional SMS.",
  },
  {
    question: "What is the difference between RCS and WhatsApp?",
    answer:
      "RCS is built into native messaging apps, while WhatsApp is an OTT (over-the-top) service that requires a separate download. RCS delivers app-like interactivity—rich cards, carousels, suggested actions and replies, high-def images, GIFs, and videos—directly to users’ SMS inboxes, complete with your brand logo and verification. Unlike WhatsApp, which requires users to switch apps, RCS keeps the experience within the default messaging platform they already use daily. ",
  },
  {
    question: "Is RCS only for Android phones?",
    answer:
      "Initially, RCS was primarily associated with Android phones, but now it’s available for both Android and iOS.",
  },
  {
    question: "How do I access RCS?",
    answer:
      "Businesses can send RCS messages by partnering with a Mobile Network Operator (MNO) or Communication Platform as a Service (CPaaS) provider who have access to RCS infrastructure. Contact Gupshup to set up your RCS Business Messaging account and get your business verified for branded, interactive messaging directly in customers' SMS inboxes.",
  },
  {
    question: "Which of the mobile phone handsets currently support RCS?",
    answer:
      "Android: You must have Android 5.0 or higher for RCS chats to work. RCS is available on Android devices running Android 5.0 (Lollipop) and above with Google Messages. iPhone: Apple began rolling out RCS to iPhones as part of iOS 18 in September 2024. All iPhones with iOS 18 or later will have RCS messaging depending on where Apple currently supports RCS.",
  },
  {
    question: "How do I know if a handset supports RCS?",
    answer:
      "Android: Open Google Messages > Settings > Chat features and check if 'Enable chat features' is turned on. iPhone: Go to Settings > Messages > RCS Messaging to enable/check status. Available on iOS 18+ devices. When active, the text input shows 'Text Message – RCS'.",
  },
  {
    question:
      "We have already set up business messaging through an OTT app. Should we go for RBM again? If yes, then what is the benefit?",
    answer:
      "Yes! RCS transforms your customer's SMS inbox into an interactive, branded experience. RCS messages appear in the phone's (Android & Apple) default messaging app alongside SMS, making them difficult for recipients to miss or ignore. Key benefits include interactive buttons and rich media, verified sender profiles with your business name, logo, and verification badge, and seamless integration as part of your multichannel strategy.",
  },
  {
    question:
      "Can I use my existing live agent system to support my customers with RCS?",
    answer:
      "Yes. Gupshup integrates RCS with your current live agent system, thereby allowing you to use RCS with other business messaging solutions.",
  },
  {
    question:
      "What are the privacy and security implications of using RCS messaging for our brand?",
    answer:
      "RCS messaging has built-in security features that protects users' data, including end-to-end encryption and authentication. However, it is important to comply with privacy laws and regulations, such as GDPR, when using RCS messaging for your brand.",
  },
];

const customerJourney = [
  {
    heading: "Click to Chat",
    description:
      "Turn search intent into conversations by letting customers start an RCS chat directly from Google search results.",
    image: "/rcs-api/tab-2-img-1.webp",
  },
  {
    heading: "Chat to Google Maps",
    description:
      "Drive footfall by letting users find store or event locations in one tap-redirecting them from chat to a pinned destination on Google Maps.",
    image: "/rcs-api/tab-2-img-2.webp",
  },
  {
    heading: "Calendar Sync with One Tap",
    description:
      "Boost event participation with timely reminders by enabling users to save event dates from RCS chats to Google Calendar with a single tap.",
    image: "/rcs-api/tab-2-img-3.webp",
  },
  {
    heading: "Google Wallet Integration",
    description:
      "Connect directly to Google Wallet to store your tickets, boarding passes, and more.",
    image: "/rcs-api/tab-2-img-4.webp",
  },
];

const page = () => {
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
            <div className="flex justify-start">
              <div className="flex items-center justify-center gap-2 bg-[#ffebef] rounded-full px-2 py-1 ">
                <FaCircleCheck className="text-sm text-[#ff3964]" />
                <span className="text-sm text-[#ff3964] font-semibold ">
                  RCS
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
              Upgrade to interactive
              <br className="hidden lg:block" />
              {/* Gradient text: green → pink */}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #5e34f1 36.28%, #ff3964 99.75%)",
                }}
              >
                RCS Business Messaging
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-xl text-gray-900 font-light leading-relaxed">
              Expand reach and grow engagement with rich media, brand logo,
              credible trust marks and conversational journeys - all in the
              native SMS inbox
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
        <div className="flex flex-col gap-10 bg-[#f4f4f6] px-6 py-16 md:px-12 lg:px-15 rounded-4xl ">
          {/* Top Row: Heading + Stat Card */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight  text-center md:text-left">
              Stand out in the messaging inbox with RCS Business Messaging
            </h2>

            {/* Stat Card */}
            <div className="flex flex-col items-start bg-white rounded-2xl shadow-2xl p-8 ">
              <span className="text-[40px] font-semibold text-[#7c5cfc]">
                2 billion+
              </span>
              <span className="text-gray-900 text-2xl mt-1">
                monthly active RCS users globally
              </span>
            </div>
          </div>

          {/* Bottom Row: Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x ">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 pr-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-2xl ">
                <Image
                  src="/rcs-api/icon-2.svg"
                  alt="Reach icon"
                  width={46}
                  height={46}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Engage better with timely & relevant messages
                </h3>
                <p className=" leading-relaxed">
                  Engage customers by sending expected, timely, & relevant
                  messages with auto-capping capability.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 px-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-2xl ">
                <Image
                  src="/rcs-api/icon-3.svg"
                  alt="Reach icon"
                  width={46}
                  height={46}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Enable instant discovery with Click-to-Chat via Search
                </h3>
                <p className=" leading-relaxed">
                  Let customers discover and message your verified business
                  directly from search results, driving richer engagement than
                  traditional channels.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 pl-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-2xl ">
                <Image
                  src="/rcs-api/icon-1.svg"
                  alt="Reach icon"
                  width={46}
                  height={46}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-relaxed">
                  Drive instant engagement with QR code
                </h3>
                <p className=" leading-relaxed">
                  Use QR codes on packaging and marketing to launch instant RCS
                  chats for support, offers, and personalized experiences—no app
                  needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Deliver app like experiences customers love
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
            <span className="text-[#5e34f1] bg-violet-100 px-3 py-1 rounded-md inline-block">
              right in their RCS inbox
              <span className="text-violet-400 font-thin ml-1">|</span>
            </span>
          </h2>
        </div>

        {/* Carousels */}
        <InfinitePillCarousel
          row1={row1Items}
          row2={row2Items}
          showSecondRow={true}
        />

        <div className="max-w-7xl mx-auto px-6 py-16 ">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x bg-white rounded-3xl px-4 py-6 shadow-2xl">
            {/* card 1 */}
            <div className="flex flex-col gap-4 px-6">
              <div className="flex justify-center">
                <h2 className="text-4xl font-semibold text-[#5956d5]">74%</h2>
              </div>
              <div className="">
                <p className="text-lg text-center">
                  consumers prefer to engage with brands VIa RCS
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col gap-4 px-6">
              <div className="flex justify-center">
                <h2 className="text-4xl font-semibold text-[#5956d5]">70%</h2>
              </div>
              <div className="">
                <p className="text-lg text-center">
                  higher conversion rate than other channels
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col gap-4 px-6">
              <div className="flex justify-center">
                <h2 className="text-4xl font-semibold text-[#5956d5]">
                  100% Guaranteed
                </h2>
              </div>
              <div className="">
                <p className="text-lg text-center">
                  delivery across both Android and iPhone platforms
                </p>
              </div>
            </div>
          </div>
        </div>
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
              Supercharge your RCS campaigns
            </div>
            <div className=" flex gap-1 text-3xl lg:text-5xl font-semibold leading-sung">
              with high-impact conversational journeys
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
                Boost conversions and CLTV through tailored 2-way messaging
              </h2>
              <p className="">
                Deliver rich, personalized interactions using images, GIFs, videos, rich cards, carousels, and action buttons.
              </p>
              <div className="mt-2">
                <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                  Talk to an Expert
                  <div className="flex justify-center items-center bg-white p-1 rounded-full ">
                    <FaArrowRight className="text-[#5956d6] text-base " />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative flex flex-col rounded-4xl h-full bg-[#f8f8f8]">
            <div className="h-full">
              <Image
                src="/rcs-api/grid-img-2.webp"
                alt="grid-img-2"
                width={600}
                height={450}
                className="object-cover h-full rounded-4xl"
              />
            </div>
            <div className="absolute bottom-0 flex flex-col gap-2 p-6 ">
              <h2 className="font-semibold text-2xl text-white">
                Improve CSAT with instant support on RCS
              </h2>
              <p className="text-white ">
                Enable customers to get quick help through post-purchase support, order tracking, and more. When users initiate a P2A conversation, handle their queries with AI-led journeys and seamlessly hand over to a human agents.
              </p>
              <div className="mt-2">
                <button className="flex gap-4 px-4 py-2 rounded-full border-2 border-white text-white hover:cursor-pointer group  ">
                  Talk to an Expert
                  <div className="flex justify-center items-center bg-white p-1 rounded-full ">
                    <FaArrowRight className="text-[#5956d6] text-base group-hover:text-[#ee345a] " />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-15 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#5e34f1] mb-2">
            Streamline the customer journey
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4 leading-relaxed">
              with dynamic elements that encourage action
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
              Trusted
              <span className="text-[#5e34f1]  text-3xl lg:text-5xl font-semibold leading-sung">
                RCS business messaging partner
              </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6  bg-[#f8f8f8] rounded-2xl">
          {/* meta title */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-10">
            <div className="flex flex-col lg:flex-row order-2 lg:order-1 gap-6 p-8 items-center   bg-white shadow-2xl rounded-2xl">
              <div className="">
                <Image
                  // src="/public/rcs-api/logo-meta.svg"
                  src="/rcs-api/juniper.svg"
                  alt="juniper logo"
                  width={220}
                  height={60}
                />
              </div>
              {/* <div className="hidden lg:flex bg-black h-20 w-0.25 "></div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="2023 and 2024 font-semibold text-3xl">
                  Partner of the year{" "}
                </h3>
                <p className="text-xl font-medium text-gray-500">
                  2023 and 2024{" "}
                </p>
              </div> */}
            </div>
            <div className="flex flex-1 order-1 lg:order-2 ">
              <p className="text-xl tracking-wide text-center lg:text-start ">
                Gupshup - recognized as an
                <span className="font-bold"> Established Leader </span>
                in Juniper Research’s latest
                <span className="font-bold">
                  {" "}
                  RCS for Business Vendors 2026, Competitor Leaderboard.{" "}
                </span>
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

      {/* Tab Section */}
      <section className="py-15 space-y-10 ">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#5e34f1] mb-2">
           Seamless Customer Journeys Across
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4 leading-relaxed">
             the Google & Apple Ecosystem, Powered by RCS
            </h2>
          </div>
        </div>

        <div className="px-16">
          <TabSection tabs={customerJourney} />
        </div>
      </section>

      {/* 3 cards */}
      <section
        section
        className="max-w-7xl mx-auto w-full py-16 px-4 md:px-8 lg:px-16 space-y-10"
      >
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
              Discover how our customers drive growth with conversational
              experience on RCS
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
                src="/housing-image.webp"
                alt="Housing.com couple"
                fill
                className="object-cover"
              />
              {/* Housing.com logo badge */}
              {/* <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 shadow-sm">
                <span className="text-orange-500 font-bold text-xs tracking-tight">
                  HOUSING.com
                </span>
              </div> */}
            </div>

            {/* Content box curved, overlapping the image slightly */}
            <div className="relative z-10 -mt-4  bg-white rounded-2xl shadow-sm px-5 pt-5 pb-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Digital healthcare platform boosts engagement by 3X with RCS
                Business Messaging
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The healthcare platform aimed to deepen customer engagement
                across channels by launching two-way RCS campaigns for medicine
                orders, prescription uploads, and personalized reminders
                targeting groups like new moms and diabetics. These efforts
                boosted repeat purchases and sped up responses to critical
                health alerts.
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
          <div className="flex-1 rounded-2xl overflow-hidden flex flex-col relative bg-white min-h-[550px]">
            {/* Full card background image */}
            <Image
              src="/rcs-api/card-bg.png"
              alt="Quote background"
              fill
              className="object-cover"
            />

            {/* Overlay content sitting on top of the image */}
            <div className="relative z-10 flex flex-col flex-1 px-5 pt-16 pb-6">
              <p className=" text-2xl leading-relaxed mb-4">
                Our partnership with Gupshup has helped us deliver a
                personalized and engaging messaging experience, making it easier
                for our customers to explore and understand our products.{" "}
              </p>
              <p className=" text-2xl leading-relaxed mb-4">
                It has been a rewarding journey so far and we look forward to
                scaling the partnership in the future
              </p>
              {/* <a
                href="#"
                className="text-base font-semibold text-[#5e34f1]  transition-colors inline-flex items-center gap-2 hover:cursor-pointer "
              >
                Find out more{" "}
                <span className="text-base">
                  <FaArrowRight />
                </span>
              </a> */}

              {/* Reserva box */}
              <div className="mt-20 shadow-lg border border-gray-200 rounded-xl px-4 py-6 flex items-center gap-3 bg-white/80 backdrop-blur-sm">
                <div className="relative w-36 h-8 flex-shrink-0">
                  <Image
                    src="/reserva.webp"
                    alt="Reserva logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="border-l border-gray-300 pl-3">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    Murari Sridharan
                  </p>
                  <p className="text-xs text-gray-500">CTO - Bank Bazar</p>
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
              {/* <div className="absolute top-3 left-3 bg-gray-900 rounded-md px-2 py-1 shadow-sm">
                <span className="text-white font-bold text-xs tracking-tight">
                  CARS<span className="text-yellow-400">24</span>
                </span>
              </div> */}
            </div>

            {/* Content box */}
            <div className="relative z-10 -mt-4 bg-white rounded-2xl shadow-sm px-5 pt-5 pb-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                India’s leading eyewear brand boosts website traffic with
                outreach campaigns over RCS
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The eyewear brand sought a personalized, interactive way to
                engage their large customer base. Partnering with Gupshup, they
                adopted RCS, leveraging rich media and interactive buttons to
                captivate customers. Real-time campaign tracking empowered them
                to measure impact, achieving an outstanding 99.7% delivery.
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
            Read More
            <span className="flex items-center justify-center w-6 h-6 rounded-full font-bold bg-white text-[#5956d6] group-hover:text-[#ee3458] transition-all duration-200 ">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </section>

      {/* CTA section*/}
      <CTA
        heading="Ready to transform your customer communications?"
        subtext="Get connected to see how you can transform your customer communication on RCS"
        linkText="Talk to an Expert"
        href="/contact"
      />

      {/* Faq Section */}
      <FAQ items={faqData} />
    </div>
  );
};

export default page;
