import Image from "next/image"
import Link from "next/link"
import BrandCarousel from "@/app/components/BrandCarousel";
import TabSection from "@/app/components/Tabs";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";
import InfinitePillCarousel from "@/app/components/InfinitePillCarousel";
import { FiArrowRight } from "react-icons/fi"
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";
import {BsFillQuestionCircleFill} from "react-icons/bs";


const row1Items = [
  "Book appointment",
  "Purchase tickets",
  "Check order status",
  "Delivery Concerns",
  "Make dining reservation",
  "Price and Discounts",
];

const row2Items = [
  "Renew Subscription",
  "Redeem Rewards",
  "Track Orders",
  "Product Queries",
  "Issues & Complaints",
  "Refunds & Returns"
];


const TABS = [
  {
    heading: "Know your visitor",
    description:
      "Converse to capture visitor details and re-engage later on WhatsApp, RCS , SMS and email",
    image: "/web-apps/tab-img-1.webp",
  },
  {
    heading: "Assist with purchase",
    description:
      "Help visitors arrive at a decision by answering per-purchase queries, sharing product comparisons, reviews, ratings and more",
    image: "/web-apps/tab-img-2.webp",
  },
  {
    heading: "Recommend products",
    description:
      "Influence order value by gathering customer requirement, and recommending relevant products",
    image: "/web-apps/tab-img-3.webp",
  },
  {
    heading: "Offer after sale support",
    description:
      "Ensure higher customer satisfaction with accurate and quick post purchase support",
    image: "/web-apps/tab-img-4.webp",
  },
];


const whyGupshup = [
  {
    id: 1,
    img: "/web-apps/card-img-1.webp",
    title: "Implement an omnichannel conversational strategy",
    desc: "Go beyond website and app chatbots; re-engage visitors on popular messaging channels like WhatsApp, RCS and Voice",
    // btnText: "Explore Gupshup AI Agent",
  },
  {
    id: 2,
    img: "/web-apps/card-img-2.webp",
    title: "Fast track your engagement journey",
    desc: "Leverage pre-built journey templates to go live with conversational experiences and campaigns for your business instantly",
    // btnText: "Explore Conversation Cloud",
  },
  {
    id: 3,
    img: "/web-apps/card-img-3.webp",
    title: "Converse in the language your customers speak",
    desc: "Deliver truly personalized experience by enabling customers to converse in the language they speak",
    // btnText: "Explore Analytics",
  },
];


const faqData = [
  {
    question:
      "Will I be able to create chat journeys myself ?",
    answer:
      "Yes, with Gupshup Conversation Builder, you will be able to build chat journeys and even AI Agents for your website and app chat widgets. The no-code nature of the platform makes creating chat journeys not only easy but fun.",
  },
  {
    question:
      "Will I be able to capture conversations from the chatbot ?",
    answer:
      "Yes, with Gupshup, you will not only be able to capture conversations but also create a customer profile of the visitors who converse with your on your website and app. You can later leverage these profiles to re-engage with visitors on messaging channels like WhatsApp and RCS.",
  },
  {
    question:
      "Does Gupshup support CRM integrations ?",
    answer:
      "Gupshup Conversation Cloud supports over 1000+ integration will all major tech stacks. You will be able to integrate your internal tools, including CRMs, to offer seamless customer experience.",
  },
  {
    question: "Does Gupshup offer live agent chat support along with Conversation AI ?",
    answer:
      "At Gupshup, we provide a unified Live Chat solution that lets agents manage conversations from multiple platforms in one place. This helps you redirect chats to a live agent as and when needed.",
  },
];


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

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-end  ">
          {/* ── RIGHT COLUMN*/}
          <div className="flex justify-center lg:justify-end items-center text-center order-first lg:order-last">
            <div className="relative ">
              <Image
                src="/web-apps/hero.webp"
                alt="WhatsApp illustration"
                width={720}
                height={600}
              />
            </div>
          </div>

          {/* ── LEFT COLUMN: text content ── */}
          <div className="order-last lg:order-first flex flex-col gap-5 pt-18 pb-12 ">
            {/* Eye-brow label */}
            <span className="text-sm font- tracking-widest text-violet-600 uppercase text-center md:text-left">
              AI Chatbots for Websites & Apps
            </span>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 text-center md:text-left">
              Turn visitors into
              <br className="hidden lg:block" />
              <span className="block md:inline">customers by engaging</span>
              <br className="hidden lg:block" />
              {/* Gradient text: green → pink */}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4954ebff 0%, #7963f8ff 30%, #e91e8c 100%)",
                }}
              >
                them in conversations
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-center md:text-left text-lg text-gray-900 leading-relaxed">
              Encourage website and app visitors to start a conversation; address queries, recommend products and offer quick support with AI powered chat experiences
            </p>

            {/* CTA Button */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <Link
                href="/request-demo"
                className="group mt-3 inline-flex items-center justify-center gap-2 bg-[#5956d6] hover:bg-[#ee3458] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 cursor-pointer z-10 relative"
              >
                Start a conversation
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

    {/* Brands Carousel */}

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
              Create experiences that converts traffic into business results
            </h2>

            {/* Stat Card */}
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-9 flex flex-col items-start w-[320px] lg:w-[400px]">
              <span className="text-4xl font-semibold text-[#7c5cfc]">
                53%
              </span>
              <span className="text-gray-900 text-xl mt-1">
               consumers are more likely to shop from brands they can message
              </span>
            </div>
          </div>

          {/* Bottom Row: Three Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:pr-8 pb-8 sm:pb-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/web-apps/icon-2.svg"
                  alt="Reach icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Convert web and app traffic into hot leads
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
              Turn traffic into hot leads with conversations that engage and qualify visitors on your website and app
              </p>
            </div>

            {/* Card 2 */}
            <div className="sm:border-r-2 sm:border-gray-300 sm:px-8 py-8 sm:py-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/web-apps/icon-3.svg"
                  alt="Streamline icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Boost conversion by aiding purchase decisions
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                Prevent drop‑offs with instant assistance; answer per-purchase queries and recommend products to boost conversions
              </p>
            </div>

            {/* Card 3 */}
            <div className="sm:pl-8 pt-8 sm:pt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] shadow-xl flex items-center justify-center mb-5">
                <Image
                  src="/web-apps/icon-1.svg"
                  alt="Engage icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="lg:text-2xl text-lg font-bold text-gray-900 mb-2 leading-snug">
                Influence retention and customer satisfaction
              </h3>
              <p className="text-sm md:text-base text-gray-900 leading-relaxed">
               Give visitors a reason to revisit by offering prompt, personalized support across purchase and post purchase journeys
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
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Give customers everything they need-
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-1">
            <span className="text-[#5e34f1] bg-violet-100 px-4 py-1 inline-block border-r-2 border-violet-400">
             on your website and mobile app
            </span>
          </h2>
        </div>
  
          <div>
            <InfinitePillCarousel
              row1={row1Items}
              row2={row2Items}
              showSecondRow={true}
            />
          </div>
      </div>
  
    
    {/* Capabilities */}
    <section className="max-w-7xl mx-auto space-y-10 px-6">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <div className="flex items-center justify-center gap-1 bg-[#ffebef] rounded-full px-4 py-2 ">
                  <FaCircleCheck className="text-[#ff3964]" />
                  <span className="text-lg text-[#ff3964] font-semibold ">
                    Capabilities
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[#5e34f1] text-3xl lg:text-5xl font-semibold leading-relaxed ">
                  Orchestrate chat journeys & AI agents
                </div>
                <div className=" flex gap-3 text-3xl lg:text-5xl font-semibold leading-sung">
                 that work for your business <Image src="/web-apps/chat-icon.svg" alt="chat-icon" width={50} height={50} />
                </div>
              </div>
            </div>
            <div className=" max-w-xl lg:max-w-6xl mx-auto grid grid-cols-1 md:px-3 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1 rounded-4xl bg-[#f8f8f8]">
                <div className="py-2">
                  <Image
                    src="/web-apps/section-img-1.webp"
                    alt="campaign-img-1"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="flex flex-col px-8 gap-2 pt-3 pb-8 ">
                  <h2 className="font-semibold text-2xl">
                    Bring ideas to life with easy drag and drop conversation builder
                  </h2>
                  <p className="">
                    Create chat journeys and chatbots to achieve marketing, commerce and support objectives on your website and app, with an easy no-code bot builder
                  </p>
                  <div className=" mt-2">
                    <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                      Explore Gupshup Converstaion Builder
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
                   Infuse intelligence with AI Agents trained to handle business nuances
                  </h2>
                  <p className="">
                    Deliver more than standard conversational experiences by launching AI Agents trained to your enterprise knowledge base to handle complex customer requirements
                  </p>
                  <div className="mt-2">
                    <button className="flex gap-2 px-4 py-2 rounded-full bg-[#5956d6] text-white hover:cusrsor-pointer">
                      Explore Gupshup AI Agents
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
    <div className="py-16">
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-950 mb-2">
           Converse to add value across customer life cycle
          </h2>
        
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"></h2>
        </div>

        <div className="px-16 mt-18">
          <TabSection tabs={TABS} />
        </div>
    </div>


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
              Drive seamless multi-channel engagement
            </h2>
            <h2 className="text-[#5e34f1]  text-3xl lg:text-5xl font-semibold leading-sung">
              with Comprehensive Conversation Cloud Platform
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6  bg-[#f8f8f8] rounded-2xl">
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


    {/* CTA section*/}
    <CTA
        heading="Ready to transform your customer communication?"
        subtext="Get connected to see how you can transform your customer communications on our Website and App"
        linkText="Talk to an expert"
        href="/request-demo"
      />

      {/* Faq Section */}
      <FAQ items={faqData} />
    </>
  )
}

export default page