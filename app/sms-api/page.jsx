import Image from "next/image";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/Home/Cta";
import TabSection from "@/app/components/Tabs";
import BrandCarousel from "@/app/components/BrandCarousel";
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import { FiArrowRight } from "react-icons/fi";
import { BsFillQuestionCircleFill, BsCheckCircleFill } from "react-icons/bs";



const brands = [
  {
    name: "Flipkart",
    src: "/sms-api/flipkart.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Google",
    src: "/sms-api/google.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Housing",
    src: "/sms-api/housing.webp",
    width: 160,
    height: 48,
  },
  {
    name: "IDFC",
    src: "/sms-api/IDFC.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Indusland",
    src: "/sms-api/indusind.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Kotak",
    src: "/sms-api/kotak.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Meesho",
    src: "/sms-api/meesho.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Myntra",
    src: "/sms-api/myntra.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Nobroker",
    src: "/sms-api/nobroker.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Olacabs",
    src: "/sms-api/ola.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Phonepe",
    src: "/sms-api/phonepe.webp",
    width: 160,
    height: 40,
  },
  {
    name: "ShadowFax",
    src: "/sms-api/shadowfax.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Tata",
    src: "/sms-api/tata.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Trent",
    src: "/sms-api/trent.webp",
    width: 160,
    height: 40,
  },
  // Duplicate for seamless loop
  {
    name: "Flipkart",
    src: "/sms-api/flipkart.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Google",
    src: "/sms-api/google.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Housing",
    src: "/sms-api/housing.webp",
    width: 160,
    height: 48,
  },
  {
    name: "IDFC",
    src: "/sms-api/IDFC.webp",
    width: 160,
    height: 48,
  },
  {
    name: "Indusland",
    src: "/sms-api/indusind.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Kotak",
    src: "/sms-api/kotak.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Meesho",
    src: "/sms-api/meesho.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Myntra",
    src: "/sms-api/myntra.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Nobroker",
    src: "/sms-api/nobroker.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Olacabs",
    src: "/sms-api/ola.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Phonepe",
    src: "/sms-api/phonepe.webp",
    width: 160,
    height: 40,
  },
  {
    name: "ShadowFax",
    src: "/sms-api/shadowfax.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Tata",
    src: "/sms-api/tata.webp",
    width: 160,
    height: 40,
  },
  {
    name: "Trent",
    src: "/sms-api/trent.webp",
    width: 160,
    height: 40,
  }
];


const row1Items = [
  "Make dining reservation",
  "Renew subscription",
  "Book appointment",
  "Purchase tickets",
  "Check order status",
  "Resolve queries",
];


const TABS = [
  {
    heading: "2-Factor Authentication",
    description:
      "Add an extra layer of security with two-factor authentication for all your users.",
    image: "/sms-api/tab-1-img-1.webp",
  },
  {
    heading: "Service Implicit Messages (Alerts)",
    description:
      "Send automatic service alerts and implicit messages triggered by user actions.",
    image: "/sms-api/tab-1-img-2.webp",
  },
  {
    heading: "Promotional Messages with Link Tracking",
    description:
      "Gain deeper insights into user behavior and campaign effectiveness, and tap into a vast audience for your marketing campaigns and special offers.",
    image: "/sms-api/tab-1-img-3.webp",
  },
  {
    heading: "Cross-Promotional Campaigns (Service Explicit)",
    description:
      "Run cross-promotional campaigns with explicit service branding and tracking.",
    image: "/sms-api/tab-1-img-4.webp",
  },
];

const features = [
  {
    id: 1,
    title: "Enterprise Dashboard & Advanced Analytics",
    description:
      "Get a holistic view of SMS performance, with delivery and failure stats, template-level insights, category-wise breakdowns, and spend monitoring, all in one place.",
    image: "/sms-api/grid-img-1.webp",
    alt: "Enterprise Dashboard & Advanced Analytics",
    bg: "bg-violet-50",
  },
  {
    id: 2,
    title: "Message Searcher",
    description:
      "Empower your teams to independently explore 90 days of SMS logs to verify activity, resolve delivery issues, and gain message-level visibility.",
    image: "/sms-api/grid-img-2.webp",
    alt: "Message Searcher",
    bg: "bg-violet-50",
  },
  {
    id: 3,
    title: "Launch SMS Campaigns at Scale",
    description:
      "Broadcast to large contact lists in one shot, send instantly or schedule for later. Easily tailor every message with custom variables like name, address, and links, with smart fallback substitutions.",
    image: "/sms-api/grid-img-3.webp",
    alt: "Launch SMS Campaigns at Scale",
    bg: "bg-violet-50",
  },
  {
    id: 4,
    title: "Multi-Channel Failover to SMS",
    description:
      "Automatically re-route messages that fail on rich channels like RCS or WhatsApp to SMS, increasing the reach of your critical communications.",
    image: "/sms-api/grid-img-4.webp",
    alt: "Multi-Channel Failover to SMS",
    bg: "bg-violet-50",
  },
];

const faqData = [
  {
    question:
      "How effective is SMS compared to other marketing channels like email?",
    answer:
      "SMS has significantly higher open rates than email, typically reaching 98% open rates within minutes of delivery.",
  },
  {
    question:
      "What are some key use cases for SMS across the customer lifecycle?",
    answer:
      "Key uses include sending One-Time-Passwords (OTPs), transactional and service alerts, and promotional campaigns.",
  },
  {
    question:
      "What is the global reach of SMS, and how do customers feel about receiving texts?",
    answer:
      "SMS reaches over 5 billion people globally. Studies show most customers prefer receiving order updates and alerts via SMS.",
  },
  {
    question: "How does the platform ensure messages are delivered reliably?",
    answer:
      "We use a multi-carrier routing engine with real-time failover to ensure maximum deliverability across all regions.",
  },
];

const SmsApiPage = () => {
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

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/* ── RIGHT COLUMN*/}
          <div className="flex justify-center lg:justify-end items-center text-center order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/sms-api/product-hero.webp"
                alt="WhatsApp illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* ── LEFT COLUMN: text content ── */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-16 pb-12 ">
            {/* Eye-brow label */}
            <span className="text-lg md:text-sm font-medium tracking-widest text-violet-600 uppercase text-center md:text-left">
              SMS
            </span>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 text-center md:text-left">
              The universal channel to
              <br className="hidden lg:block" />
              <span className="block md:inline">reach every customer</span>
              <br className="hidden lg:block" />

            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-xl text-gray-900 leading-relaxed">
              SMS remains the single most reliable and universal messaging channel, ensuring your critical communications and engaging promotions reach customers regardless of their device, location, or internet access
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


      {/* Brand Carousal */}
      <BrandCarousel
        brands={brands}
        title="Driving meaningful customer conversations for leading global brands"
      />

      {/* Triple Card Section */}
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
                  src="/sms-api/icon-2.svg"
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
                  src="/sms-api/icon-3.svg"
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
                  src="/sms-api/icon-1.svg"
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
      <div className=" py-20">
        <div className="flex justify-center mb-5 ">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none hover:bg-red-100 transition-colors">
            <span className="text-[#ff3964] text-base font-semibold">
              Applications
            </span>
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-5xl mx-auto leading-tight mb-14">
          Designed for maximum reach, engagement &amp; reliability with SMS
        </h2>

        <div>
          <InfinitePillCarousel
            row1={row1Items}
            showSecondRow={false}
          />
        </div>
      </div>


      {/* Tab Section */}
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#5e34f1] mb-2">
            Supercharge your SMS campaigns
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4">
              across customer lifecycle
            </h2>
            <Image
              src="/sms-api/chat-icon.svg"
              alt="Chat icon"
              width={48}
              height={48}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"></h2>
        </div>

        <div className="px-16">
          <TabSection tabs={TABS} />
        </div>
      </div>

      {/* Why Gupshup section */}
      <section className="py-20 px-4 bg-white">
        {/* Top Badge */}
        <div className="flex justify-center mb-5">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none hover:bg-red-100 transition-colors">
            <BsFillQuestionCircleFill className="text-[#ff3964]" size={18} />
            <span className="text-[#ff3964] text-base font-semibold">
              Why Gupshup?
            </span>
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-5xl mx-auto leading-tight mb-14">
          Designed for maximum reach, engagement &amp; reliability with SMS
        </h2>

        {/* 2x2 Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image / Screenshot Area */}
              <div
                className={`relative w-full h-[340px] h-96 ${feature.bg} flex items-center justify-center overflow-hidden`}
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-lg md:text-2xl font-semibold text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-900 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Quote card section */}
      <section className="w-full  py-16 px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className=" max-w-7xl mx-auto mb-10 flex flex-col items-center text-center">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none cursor-pointer hover:bg-red-100 transition-colors"

          >
            <BsCheckCircleFill className="text-[#ff3964]" size={18} />
            <span className="text-[#ff3964] text-base font-semibold">Customer Stories</span>
          </button>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug max-w-7xl">
            Discover how our customers drive growth with SMS
          </h2>
        </div>

        {/* Cards Row */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row  gap-6 items-stretch">

          {/* Card 1 */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm  relative bg-violet-400 min-h-[490px]">
            {/* Full card background image */}
            <Image
              src="/card-bg.png"
              alt="Quote background"
              fill
              className=""
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center h-full px-6 pt-14 pb-8">
              {/* Text box */}
              <div className="bg-white rounded-2xl shadow-lg px-5 py-4 mb-6 w-fit max-w-xs">
                <p className="text-gray-800 text-lgfont-semibold leading-snug">
                  Powering seamless communication for leading banks
                </p>
              </div>

              {/* Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed mt-8">
                At Gupshup, we're proud to empower leading banks to build stronger customer relationships through reliable, secure, and personalized messaging ensuring every message delivers trust, value, and impact. Together, these banks have achieved message delivery rates exceeding 85–90% and sent over 76 crore messages combined.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative bg-white min-h-[490px]">
            {/* Full card background image */}
            <Image
              src="/card-bg.png"
              alt="Quote background"
              fill
              className=""
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center  h-full px-6 pt-14 pb-8">
              {/* Text box */}
              <div className="bg-white rounded-2xl shadow-lg px-5 py-4 mb-6 w-fit max-w-xs">
                <p className="text-gray-800 text-base font-semibold leading-snug">
                  Enabling fast, secure, and reliable messaging at enterprise scale
                </p>
              </div>

              {/* Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed mt-8">
                Trusted by leading brands, Gupshup powers billions of secure, lightning-fast messages every day. With 94–99% delivery success and sub 10 second speeds, we help businesses communicate seamlessly, build trust, and engage customers.
              </p>
            </div>
          </div>

        </div>

        {/* Customer Stories Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="mt-5 group inline-flex items-center gap-3 bg-[#5956d6] hover:bg-[#ee3458] text-white text-base font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Customer Stories
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-all duration-200 group-hover:bg-white">
              <FiArrowRight
                size={18}
                className="text-[#5956d6] group-hover:text-[#ee3458] transition-colors duration-200"
              />
            </span>
          </Link>
        </div>
      </section>


      {/* CTA section*/}
      <CTA
        heading="Ready to transform your customer communication?"
        subtext="Get connected to see how you can transform your customer communication on SMS"
        linkText="Start Sending SMS"
        href="/contact"
      />

      {/* Faq Section */}
      <FAQ items={faqData} />
    </>
  );
};

export default SmsApiPage;
