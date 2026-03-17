import Image from "next/image"
import Link from "next/link"
import TabSection from "@/app/components/Tabs";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import { FiArrowRight } from "react-icons/fi"
import { BsFillQuestionCircleFill, BsCheckCircleFill } from "react-icons/bs"

const row1Items = [
  "Book site visit",
  "Book appointment",
  "Book tickets",
  "Check order status",
  "Resolve queries",
  "Make dining reservation",
];

const row2Items = [
  "Redeem rewards",
  "Renew subscription",
  "Generate leads",
  "View products",
  "Purchase Product",
  "Track Orders",
];


const stats = [
  {
    number: "1.83%",
    label: "Users discover products & services on Instagram",
  },
  {
    number: "2.90%",
    label: "of Instagram users follow at least one business",
  },
  {
    number: "3.13 M",
    label: "Users tap on shopping posts every month",
  },
];


const cards = [
  {
    id: 1,
    image: "/instagram-api/card-1.webp",
    alt: "Build 2-way dynamic conversations powered by GenAI",
    title: "Build 2-way dynamic conversations powered by GenAI",
    description:
      "Elevate the overall conversational experience with AI Agents that are context aware, able to handle dynamic conversations and multi-modal"

  },
  {
    id: 2,
    image: "/instagram-api/card-2.webp",
    alt: "Fast track your Conversational journey with pre-built templates",
    title: "Fast track your Conversational journey with pre-built templates",
    description:
      "Tap into our library of pre-built templates for conversations and journeys to deploy Instagram conversations for your business instantly"

  },
  {
    id: 3,
    image: "/instagram-api/card-3.webp",
    alt: "Elevate Engagement with data-driven decisions",
    title: "Elevate Engagement with data-driven decisions",
    description:
      "Track every aspect of conversations with comprehensive funnel wise view of the journey and granular insights"
  },
];


const features = [
  {
    id: 1,
    title: "Increase marketing ROI and grow sales with conversations",
    description:
      "Engage customers from ads, posts and reels, understand their requirements, and enable purchases within Direct Messenger including payment integration",
    image: "/instagram-api/grid-img-1.webp",
    alt: "Increase marketing ROI and grow sales with conversations",
    bg: "bg-violet-50",
  },
  {
    id: 2,
    title: "Improve CSAT with instant support within Instagram",
    description:
      "Offer quick assistance, post-purchase support, order tracking, handle return requests and handover to live agents within Instagram Direct Messenger",
    image: "/instagram-api/grid-img-2.webp",
    alt: "Improve CSAT with instant support within Instagram",
    bg: "bg-violet-50",
  },

];


const TABS = [
  {
    heading: "Ice Breakers",
    description:
      "Use suggested questions and canned responses to break the ice and aid navigation",
    image: "/instagram-api/tab-1-img-1.webp",
  },
  {
    heading: "Quick Replies",
    description:
      "One-tap responses for faster,consistent customer conversations",
    image: "/instagram-api/tab-1-img-2.webp",
  },
  {
    heading: "Rich Media Support",
    description:
      "All the richness - videos, voice messages, cards, carousels and interactive content",
    image: "/instagram-api/tab-1-img-3.webp",
  },
  {
    heading: "Auto-responders",
    description:
      "Instant replies to story mentions, comments, tags, and DMs automatically",
    image: "/instagram-api/tab-1-img-4.webp",
  },
   {
    heading: "Persistent Menu",
    description:
      "Always-visible navigation for easy access to key actions",
    image: "/instagram-api/tab-1-img-5.webp",
  },
   {
    heading: "Payment Integration",
    description:
      "Seamless in-chat purchases without leaving the conversation",
    image: "/instagram-api/tab-1-img-6.webp",
  },
];



const faqData = [
  {
    question:
      "How does Business Messaging on Instagram work ?",
    answer:
      "Instagram Direct allows businesses to facilitate personalized, direct communication with customers at scale through features such as Click-to-Message Ads, Automated Responses, and Messenger API integrations driving increased sales, improved customer satisfaction, and enhanced brand awareness.",
  },
  {
    question:
      "What type of media formats are supported by Instagram for Business Messaging ?",
    answer:
      "Instagram API supports text, sticker, image (jpg, png, ico, bmp formats in less than 8MB), product and generic template carousel (up to 10), for title, subtitle, image, and buttons (up to 3).",
  },
  {
    question:
      "Can I engage with user comments and story mentions via Instagram DM automation ?",
    answer:
      "Yes, Instagram messenger API enables you to configure your Instagram agent to auto-reply to comments, story mentions, story replies and any direct messages from users via a private reply on DM.",
  },
  {
    question: "How does Instagram Messenger API work with Instagram Ads ?",
    answer:
      "You can integrate Instagram DM Agent into your Instagram ads, enabling quick responses to user questions when they are in buying mode.",
  },
];

const page = () => {
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

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/* ── RIGHT COLUMN*/}
          <div className="flex justify-center lg:justify-end items-center text-center order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/instagram-api/product-hero.webp"
                alt="Instagram illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* ── LEFT COLUMN: text content ── */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-18 pb-12 ">
         
            {/* <span className="text-sm font- tracking-widest text-violet-600 uppercase">
              WhatsApp Channel
            </span> */}

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 text-center md:text-left">
              Your&nbsp;
              {/* Gradient text: green → pink */}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4954ebff 0%, #7963f8ff 30%, #e91e8c 100%)",
                }}
              >
                Instagram, on autopilot
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-xl text-gray-900 leading-relaxed">
              Engage over 2.75 billion customers globally through
              WhatsApp&apos;s trusted platform, powered by Gupshup Conversation
              Cloud.
            </p>

            {/* CTA Button */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <Link
                href="/request-demo"
                className="group mt-3 inline-flex items-center justify-center gap-2 bg-[#5956d6] hover:bg-[#ee3458] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 cursor-pointer z-10 relative"
              >
                Talk to an expert
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


      {/* Static carousal */}
      <div className="py-10 lg:py-14 border-t border-gray-100 mt-6">
        <p className="text-center text-xl font-semibold mb-6">
          Driving meaningful customer conversations for leading global businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-9 ">
          <Image src="/instagram-api/vicco.webp" alt="" width={170} height={100} />
          <Image src="/instagram-api/de.webp" alt="" width={170} height={100} />
          <Image src="/instagram-api/contlo.webp" alt="" width={170} height={100} />
          <Image src="/instagram-api/santoor.webp" alt="" width={170} height={100} />
          <Image src="/instagram-api/fabbeu.webp" alt="" width={170} height={100} />
        </div>
      </div>


      {/* Triple Cards */}
      <section className="max-w-7xl mx-auto py-0 ">
        <div className="flex flex-col bg-[#f4f4f6] px-6 py-16 md:px-12 lg:px-15 rounded-4xl ">
          {/* Top Row: Heading + Stat Card */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl text-center md:text-left">
              Connect with customers one-on-one using one platform for WhatsApp and Instagram
            </h2>

            {/* Stat Card */}
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-9 flex flex-col items-start w-[320px] lg:w-[400px]">
              <span className="text-4xl font-semibold text-[#7c5cfc]">
                2 billion+
              </span>
              <span className="text-gray-900 text-xl mt-1">
                monthly active users
              </span>
            </div>
          </div>

          {/* Bottom Row: Three Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:pr-8 pb-8 sm:pb-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/instagram-api/icon-2.svg"
                  alt="Reach icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Engage followers and customers better
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Reduce friction by letting users contact your brand from posts, ads, story replies, direct message buttons, reels & more
              </p>
            </div>

            {/* Card 2 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:px-8 py-8 sm:py-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/instagram-api/icon-3.svg"
                  alt="Streamline icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Create personalized experiences
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Make every interaction memorable with human-like, AI powered conversational experiences
              </p>
            </div>

            {/* Card 3 */}
            <div className="sm:pl-8 pt-8 sm:pt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/instagram-api/icon-1.svg"
                  alt="Engage icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Achieve business goals
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Make product discovery, price and order queries and support interactions self-serve with instant responses
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
         Give customers everything they need-over &amp; messaging on Instagram DM
        </h2>

        <div>
          <InfinitePillCarousel
            row1={row1Items}
            row2={row2Items}
            showSecondRow={true}
          />
        </div>
      </div>


      {/* single Triple part section */}
      <div className=" flex items-center justify-center p-6">
        <div
          className="w-full max-w-7xl bg-white rounded-4xl border border-gray-200 border-t-0 shadow-xl"

        >
          <div className="flex flex-col sm:flex-row">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col sm:flex-row flex-1">
                <div className="flex flex-col items-center justify-center px-8 py-8 flex-1 text-center">
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#5B6BF8" }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-lg text-gray-900 leading-snug max-w-[340px]">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="block sm:hidden h-px bg-gray-300 mx-6" />
                )}
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px bg-gray-300 my-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities 2 Card section */}
      <section className="py-20 px-4 bg-white">
        {/* Top Badge */}
        <div className="flex justify-center mb-5">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full  bg-[#fee7e7] text-red-400 font-medium text-sm select-none hover:bg-red-100 transition-colors">
            <BsCheckCircleFill className="text-[#ff3964]" size={18} />
            <span className="text-[#ff3964] text-base font-semibold">
              Capabilities
            </span>
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-5xl mx-auto leading-tight mb-14">
          <span className="text-[#5e34f1]">Supercharge your Instagram presence</span> with two - way conversations
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

   {/* Tab Section */}
      <div>
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-950 mb-2">
            Orchestrate intuitive customer experience with
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mr-4">
              rich Direct Messaging features
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"></h2>
        </div>

        <div className="px-16 mt-18">
          <TabSection tabs={TABS} />
        </div>
      </div>

      {/* Why Ghupghup section */}
      <section className="py-20 px-4 bg-white">
        <div>
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
            Smarter Instagram engagement, automated
          </h2>
        </div>


        <div className="flex flex-col gap-6 bg-[#f8f8f8] rounded-2xl max-w-7xl mx-auto">
          {/* meta title */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-10">
            <div className="flex flex-col lg:flex-row order-2 lg:order-1 gap-6 p-8 items-center   bg-white shadow-2xl rounded-2xl">
              <div className="">
                <Image
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
                As the only company awarded Meta's Partner of the Year in both 2023 and 2024, we provide
                <span className="font-bold"> exclusive access </span>
                to newest features and innovations.
              </p>
            </div>
          </div>
        </div>



        <section className="w-full py-2 md:py-16 px-4 md:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-6 gap-12">
              {cards.map((card) => (
                <div key={card.id} className="flex flex-col gap-4">
                  {/* Image */}
                  <div className="relative w-full h-[220px] md:h-80 rounded-2xl overflow-hidden bg-gray-50">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2 px-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base  leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fc] py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="flex-1 w-full">
              <h2 className="text-[1.75rem] md:text-[2.1rem] font-bold text-[#1a1a2e] leading-tight mb-4">
                Let customers interact in their preferred
                language on their preferred channel
              </h2>

              <p className="text-sm md:text-base text-[#4a5568] leading-relaxed mb-8">
                Respond in the customer's language and extend interactions by{" "}
                re-engaging users with contextual offers{" "}
                and promotions on Instagram, WhatsApp, RCS and more
              </p>

              {/* Cards */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex-1">
                  <p className="text-sm text-[#4a5568] mb-1">Higher read rates</p>
                  <p className="text-2xl font-extrabold text-[#7c3aed] mb-1">up to 90%</p>
                  <p className="text-sm text-[#6b7280]">for messages in local languages</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex-1">
                  <p className="text-sm text-[#4a5568] mb-1">Improved reach</p>
                  <p className="text-2xl font-extrabold text-[#7c3aed] mb-1">up to 2X</p>
                  <p className="text-sm text-[#6b7280]">with multiple channels</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3]  overflow-hidden ">
                <Image
                  src="/instagram-api/wide-card-img.webp"
                  alt="Customer interacting on multiple channels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
              </div>
            </div>

          </div>
        </section>
      </section>

      {/* CTA section*/}
      <CTA
        heading="Ready to transform your customer communication?"
        subtext="Get connected to see how you can transform your customer communication on Instagram"
        linkText="Talk to an expert"
        href="/request-demo"
      />

      {/* Faq Section */}
      <FAQ items={faqData} />
    </>
  )
}

export default page