
import Image from 'next/image'
import Hero from '@/app/components/Home/Hero'
import Automatic from '@/app/components/Home/Automatic'
import CTA from '@/app/components/Home/Cta'
import HomeBlog from '@/app/components/Home/HomeBlog'
import HorizontalCard from '@/app/components/Home/HorizontalCard'
import Carousal from '@/app/components/Home/Carousal'
import Map from '@/app/components/Home/Map'
import Whycpaas from '@/app/components/Home/Whycpaas'
import UnifiedAi from '@/app/components/Home/UnifiedAi'
import DevEnt from '@/app/components/Home/DevEnt'
import WorkflowIntelli from '@/app/components/Home/WorkflowIntelli'
import Aihuman from '@/app/components/Home/Aihuman'
import ChannelsIntelli from '@/app/components/Home/ChannelsIntelli'

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

{/* Why Traditional CPaaS Is No Longer Enough */}
<Whycpaas />

{/* Workflow Intelligence Section */}
<WorkflowIntelli />


{/* Unified AI Ecosystem Section */}
<UnifiedAi />

{/* Channels Made Intelligent Section */}
<ChannelsIntelli />


{/* AI + Human Collaboration */}
<Aihuman />


{/* Built for Developers & Enterprises */}
<DevEnt />




 <div className='flex flex-col gap-4 px-4 sm:px-8 py-12 sm:py-16 max-w-7xl mx-auto'>
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
            <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-tight">
              The purpose-built platform for <br className="hidden sm:block" />
              the Conversational AI era
            </h2>
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
        heading="The Future of CPaaS Is Intelligent."
        subtext="If you’re still sending messages, you’re already behind."
        linkText=" Book a Demo - Why Dove Soft Is Ahead"
        href="/contact"
      />



    </>
  )
}

export default App


