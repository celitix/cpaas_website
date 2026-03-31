"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { GiChaingun } from "react-icons/gi";

const iconList = [
  { src: "/home/Whatsapp.png", alt: "Whatsapp" },
  { src: "/home/SMS.png",  alt: "Sms" },
  { src: "/home/RCS.png", alt: "Rcs" },
  { src: "/home/INSTA.png",  alt: "Instagram" },
  { src: "/home/voice.png", alt: "Voice" },
  { src: "/home/Email.png",  alt: "Email" },
];

// Repeat to fill edge-to-edge (adjust count based on screen width needs)
const repeated = [...iconList, ...iconList, ...iconList];

const ChannelsIntelli = () => {
  return (
    <>
      <div className="py-10 lg:py-14 border-t border-gray-100 mt-6 bg-gradient-to-b from-white via-purple-100/90 to-indigo-100 overflow-hidden">

  <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                <GiChaingun className="w-5 h-5" />
                Omnichannel
              </span>
            </div>

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Every Channel,{" "}
          <span className="text-purple-600">Powered by Intelligence</span>
        </h2>

        <h3 className="text-center text-2xl font-semibold text-gray-700 antialiased mt-2">
          Channels don't work in isolation. Intelligence connects them.
        </h3>

        {/* Wave icon strip */}
        <div className="mt-12 w-full">
          <style>{`
            @keyframes wave-bob {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-28px); }
            }
            .wave-icon {
              animation: wave-bob 3s ease-in-out infinite;
            }
          `}</style>

          <div className="flex items-center justify-between w-full ">
            {repeated.map((icon, i) => (
              <div
                key={i}
                className="wave-icon flex-shrink-0"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full  flex items-center justify-center  transition-shadow duration-200">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={500}
                    height={500}
                    className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10 lg:w-18 lg:h-18"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="#"
            className="group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#ee3458] text-white text-base font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Explore AI Agents
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white transition-all duration-200 group-hover:bg-white">
              <FiArrowRight
                size={14}
                className="text-[#7c3aed] group-hover:text-[#ee3458] transition-colors duration-200"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChannelsIntelli;