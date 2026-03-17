
import Image from 'next/image'
import Hero from '@/app/components/Home/Hero'
import Automatic from '@/app/components/Home/Automatic'
import CTA from '@/app/components/Home/Cta'
import HomeBlog from '@/app/components/Home/HomeBlog'
import HorizontalCard from '@/app/components/Home/HorizontalCard'
import Carousal from '@/app/components/Home/Carousal'
import Map from '@/app/components/Home/Map'

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trusted by section */}
      <div className="py-10 lg:py-14 border-t border-gray-100 mt-6">
        <p className="text-center text-xl font-semibold mb-6">
          Trusted by over 50,000+ global brands and organizations, including
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-9 ">
          <Image src="/home/logo-netflix.png" alt="" width={100} height={100} />
          <Image src="/home/hsbc.png" alt="" width={100} height={100} />
          <Image src="/home/logo-uni.png" alt="" width={100} height={100} />
          <Image src="/home/logo-tata.png" alt="" width={100} height={100} />
          <Image src="/home/logo-flipkart.png" alt="" width={100} height={100} />
          <Image src="/home/logo-disney.png" alt="" width={80} height={100} />
        </div>
      </div>

      {/* Carousal */}
      <Carousal />


      {/* customer engagement section   */}
      <div className='flex flex-col gap-4 px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto'>
        <div>
          <h2 className=' text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-gray-900'>
            Put your customer engagement on autopilot
          </h2>
          <h2 className='text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight '>
            With Conversational AI Agents
          </h2>
          <p className='text-base md:text-xl font-thin text-gray-900 max-w-5xl mt-3'>
            Deliver seamless, real-time customer interactions with speed, relevance, and precision
          </p>
        </div>

        <div className="w-full mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center justify-center gap-4 sm:gap-6">
            <div className=" relative h-auto">
              <div className="absolute top-5 left-3 md:left-10 font-semibold text-white text-2xl ">
                Real time customer
                <br />
                Intent and Signals
              </div>

              {/* AnimatedStarBall */}
              <div className="hidden md:block relative">
                <div className="absolute left-14 top-28">
                  <div
                    className="relative mx-2  "
                    style={{ width: 82, height: 82 }}
                  >
                    {/* Circle SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 82 82"
                      fill="none"
                    >
                      <rect
                        width="82.012"
                        height="82.012"
                        rx="41.006"
                        fill="white"
                      />
                      <g filter="url(#filter0_circle)">
                        {" "}
                        <circle
                          cx="41.006"
                          cy="41.006"
                          r="32.782"
                          fill="url(#paint0_circle)"
                        />
                        <circle
                          cx="41.006"
                          cy="41.006"
                          r="32.782"
                          stroke="url(#paint1_circle)"
                          strokeWidth="0.79"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_circle"
                          x="3"
                          y="4"
                          width="100"
                          height="110"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="0.79" dy="1.58" />
                          <feGaussianBlur stdDeviation="2.37" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0.078 0 0 0 0 0.239 0 0 0 0.29 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="6.32" dy="7.11" />
                          <feGaussianBlur stdDeviation="7.54" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_circle"
                          x1="19.088"
                          y1="16.966"
                          x2="62.783"
                          y2="60.816"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FA88A4" />
                          <stop offset="0.24" stopColor="#E568EF" />
                          <stop offset="0.485" stopColor="#7374F9" />
                          <stop offset="0.69" stopColor="#5089FF" />
                          <stop offset="1" stopColor="#51CBFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_circle"
                          x1="5.414"
                          y1="3.292"
                          x2="82.384"
                          y2="86.011"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.197" stopColor="#FFA3B9" />
                          <stop offset="0.265" stopColor="#DF80E7" />
                          <stop offset="0.538" stopColor="#8F90F1" />
                          <stop offset="0.646" stopColor="#6C9CFF" />
                          <stop offset="0.834" stopColor="#6DD3FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Stars container */}
                    <span
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ pointerEvents: "none" }}
                    >
                      {/* Large star — moves LEFT to RIGHT */}
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          animation:
                            "bigStarMove 1s ease-in-out infinite alternate",
                          marginRight: 2,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.82753 0.263184C6.25703 5.39773 2.54874 6.08709 0.884766 6.20595C5.0447 6.56251 6.70868 10.1678 6.82753 12.1487C7.54066 7.3945 10.7498 6.44366 12.7703 6.20595C8.37265 5.84938 6.986 2.16487 6.82753 0.263184Z"
                            fill="white"
                          />
                        </svg>
                      </span>

                      {/* Small star — moves RIGHT to LEFT (opposite) */}
                      <span
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          animation:
                            "smallStarMove 1s ease-in-out infinite alternate",
                          marginTop: 20,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.82753 0.263184C6.25703 5.39773 2.54874 6.08709 0.884766 6.20595C5.0447 6.56251 6.70868 10.1678 6.82753 12.1487C7.54066 7.3945 10.7498 6.44366 12.7703 6.20595C8.37265 5.84938 6.986 2.16487 6.82753 0.263184Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </span>

                    {/* Keyframe styles */}
                    <style>{`
          @keyframes bigStarMove {
            0%   { transform: translate(calc(-50% - 10px), calc(-50% - 4px)); }
            100% { transform: translate(calc(-50% + 10px), calc(-50% - 4px)); }
          }
          @keyframes smallStarMove {
            0%   { transform: translate(calc(-50% + 8px), calc(-50% + 10px)); }
            100% { transform: translate(calc(-50% - 8px), calc(-50% + 10px)); }
          }
        `}</style>
                  </div>
                </div>
              </div>

              <Image
                src="/home/personalized-expert-mob-3.webp"
                alt="animate"
                width={500}
                height={100}
                className="md:hidden w-full rounded-2xl shadow-lg"
              />
              <Image
                src="/home/personalized-expert-3.png"
                alt="animate"
                width={500}
                height={100}
                className="hidden md:block w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="  relative   h-full">
              <h2 className="absolute lg:top-8 md:top-4 top-2 left-5 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                Personalized
              </h2>
              <h2 className="absolute lg:top-15 md:top-9 top-7 left-5 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                natural conversations
              </h2>
              <Image
                src="/home/personalized-expert-2.webp"
                alt=""
                width={500}
                height={100}
                className="w-full h-full  rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full mx-auto rounded-2xl h-140 sm:h-74 lg:h-100 xl:h-128">
          {/* Desktop Image */}
          <Image
            src="/home/personalized-expert-4.webp"
            alt="expert"
            fill
            className="object-cover hidden md:block rounded-2xl "
          />

          {/* Mobile Image */}
          <Image
            src="/home/personalized-expert-mob.webp"
            alt="expert"
            fill
            className="object-cover block md:hidden"
          />

          <div className="absolute z-10 top-2 lg:top-6 left-4 lg:left-10 text-2xl font-semibold ">
            <h2>
              <span className="text-[#5E34F1]">24/7 Access </span>Through
            </h2>
            <h2>Preferred Channels</h2>
          </div>
        </div>
      </div>

      {/* Gupshup Conversational Cloud */}
      <div>
        <section className="w-full bg-[#f3f4f6] py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 text-sm font-medium px-4 py-2 rounded-full ">
              <span className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Gupshup Conversation Cloud
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-tight">
              The purpose-built platform for <br className="hidden sm:block" />
              the Conversational AI era
            </h1>
          </div>
        </section>

        {/* Automatic Escalation */}
        <Automatic />
      </div>


      {/* Map Section */}
      <Map />

      {/* Teams Trust */}
      <HorizontalCard />

      {/* Resources */}
      <HomeBlog />


      {/* CTA section*/}
      <CTA
        heading="Ready to start a conversation?"
        subtext="Get connected to see how Gupshup Conversation Cloud can support you in reaching your business goals."
        linkText="Let's talk"
        href="/contact"
      />



    </>
  )
}

export default App