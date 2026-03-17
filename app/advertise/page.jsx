import Image from "next/image";
import Link from "next/link";
import CTA from "@/app/components/Home/Cta";
import FAQ from "@/app/components/FAQ";
import { FiArrowRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";

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

      {/* Static carousal */}
      <div className="py-10 lg:py-14 border-t border-gray-100 mt-6">
        <p className="text-center text-xl font-semibold mb-6">
          Driving meaningful customer conversations for leading global
          businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10 ">
          <Image src="/advertise/sharaf.svg" alt="" width={140} height={80} />
          <Image src="/advertise/oral.svg" alt="" width={140} height={80} />
          <Image src="/advertise/sleep.svg" alt="" width={140} height={80} />
          <Image src="/advertise/titans.svg" alt="" width={120} height={80} />
          <Image src="/advertise/dubai.webp" alt="" width={140} height={80} />
          <Image src="/advertise/damas.webp" alt="" width={80} height={80} />
          
        </div>
      </div>

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
};

export default page;
