"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRobot, FaMicrophone, FaProjectDiagram, FaWhatsapp, FaInstagram, FaBell, FaFilePdf, FaFileAlt, FaChartBar } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";

export default function AIPlatformSection() {
    return (
        <section className="w-full bg-[#f5f2f8] py-16 px-4 md:px-10">
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center">
                 <div className="mb-5">
                              <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                                <HiMiniCpuChip className="w-5 h-5" />
                               Unified Ecosystem
                              </span>
                            </div>

                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#1f1e25] leading-tight">
                    One Platform.<br /> <span className="text-purple-700"> Native AI Everywhere.</span>
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Orchestrate your entire business logic through our modular AI suite.
                    Connect humans, data, and channels in one seamless conversational flow.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Supportix */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                    <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                        <FaRobot className="text-purple-600 text-2xl" />
                    </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">Supportix</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Omnichannel customer service engine that resolves 80% of queries autonomously before reaching a human agent.
                    </p>
                    <Link href="#" className="text-purple-600 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Learn more →
                    </Link>
                </div>

                {/* VoiceX */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                 <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaMicrophone className="text-teal-600 text-2xl " />
                    </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">VoiceX</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        High-fidelity voice synthesis and recognition for IVR and phone-based AI assistants with near-zero latency.
                    </p>
                    <Link href="#" className="text-teal-600 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Learn more →
                    </Link>
                </div>

                {/* Workflow */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                   <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaProjectDiagram className="text-pink-600 text-2xl" />
                   </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">Workflow</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Drag-and-drop automation builder that connects your CRM, ERP, and AI models without writing a single line of code.
                    </p>
                    <Link href="#" className="text-pink-600 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Explore flows →
                    </Link>
                </div>

                {/* WhatsApp & Instagram Bots */}
                <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center gap-6 col-span-1 sm:col-span-2">
                    <div className="flex-1">
                         <div className="flex gap-3 mb-3">
      <div className="bg-white p-3 rounded-xl shadow-md inline-block">
        <FaWhatsapp className="text-green-500 text-2xl" />
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md inline-block">
        <FaInstagram className="text-pink-500 text-2xl" />
      </div>
    </div>

                        <h3 className="font-semibold text-lg text-[#1f1e25]">WhatsApp & Instagram Bots</h3>

                        <p className="text-gray-600 text-sm mt-2">
                            Engage customers where they live. Our native integrations provide rich-media support and transactional commerce directly in chat.
                        </p>

                        <Link
                            href="#"
                            className="inline-block mt-4 bg-purple-600 text-white px-5 py-2 rounded-full text-sm"
                        >
                            Deploy Now
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="/home/chatbot.png"
                                alt="Bot Preview"
                                width={200}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Survey Builder */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaChartBar className="text-blue-600 text-2xl" />
                </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">Survey Builder</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Generate interactive, conversational surveys that adapt in real-time based on user sentiment and feedback.
                    </p>
                    <Link href="#" className="text-blue-600 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        View templates →
                    </Link>
                </div>

                {/* ReminderBox */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaBell className="text-orange-500 text-2xl" />
                </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">ReminderBox</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Intelligent alert system that predicts customer needs and sends proactive notifications at the perfect moment.
                    </p>
                    <Link href="#" className="text-orange-500 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Learn more →
                    </Link>
                </div>

                {/* DynamicPDF */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaFilePdf className="text-red-500 text-2xl " />
                </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">DynamicPDF</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Automatically generate personalized invoices, reports, and contracts directly from conversational data.
                    </p>
                    <Link href="#" className="text-red-500 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Learn more →
                    </Link>
                </div>

                {/* FileGPT */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-sm">
                <div className="bg-white p-3 rounded-xl shadow-md inline-block mb-4">
                    <FaFileAlt className="text-purple-600 text-2xl" />
                </div>
                    <h3 className="font-semibold text-lg text-[#1f1e25]">FileGPT</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Upload entire document libraries and chat with your enterprise knowledge base using RAG technology.
                    </p>
                    <Link href="#" className="text-purple-600 mt-4 inline-block text-sm font-semibold hover:scale-105 transition-transform">
                        Access library →
                    </Link>
                </div>

            </div>
        </section>
    );
}
