"use client";
import Image from "next/image";
import {  TbArrowRight, TbCircleCheck, TbShieldCheck, TbChartBar, TbArrowsRightLeft, TbMessageDots, TbUsers } from "react-icons/tb";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { FiZap } from "react-icons/fi";

const points = [
  {
    icon: <RiRobot2Line className="w-4 h-4" />,
    iconBg: "bg-purple-100 text-purple-600 border-purple-200",
    title: "AI handles 60–80% repetitive queries",
    desc: "Free your agents for high-value conversations that actually need a human touch.",
  },
  {
    icon: <TbMessageDots className="w-4 h-4" />,
    iconBg: "bg-violet-100 text-violet-600 border-violet-200",
    title: "AI suggests replies to agents",
    desc: "Smart reply recommendations help agents respond faster and more accurately.",
  },
  {
    icon: <TbArrowsRightLeft className="w-4 h-4" />,
    iconBg: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200",
    title: "Seamless AI → Human → AI switching",
    desc: "Fluid handoffs with full context preserved — no customer ever repeats themselves.",
  },
  {
    icon: <TbShieldCheck className="w-4 h-4" />,
    iconBg: "bg-green-100 text-green-600 border-green-200",
    title: "OTP-verified conversations",
    desc: "Every sensitive interaction is identity-verified, keeping customers and data safe.",
  },
  {
    icon: <TbChartBar className="w-4 h-4" />,
    iconBg: "bg-blue-100 text-blue-600 border-blue-200",
    title: "Full audit & analytics",
    desc: "Complete visibility into every AI decision, agent action, and customer touchpoint.",
  },
];

const stats = [
  { value: "80%", label: "Queries resolved by AI", color: "text-purple-600" },
  { value: "3x", label: "Agent productivity", color: "text-violet-600" },
  { value: "99%", label: "CSAT maintained", color: "text-fuchsia-600" },
];

export default function AIHumanCollaboration() {
  return (
    <section className="relative bg-gradient-to-b from-white via-purple-100/90 to-indigo-100 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background blobs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Visual / Image */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
              {/* Main image card */}
              <div className="relative rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-100/60 overflow-hidden">
                {/* <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500" /> */}

                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-100 bg-slate-50/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs text-slate-400 font-medium">Agent Workspace</span>
                  </div>
                  <HiOutlineSparkles className="w-3.5 h-3.5 text-purple-400" />
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-violet-50">
                  <Image
                    src="/home/humanai.png"
                    alt="AI handing off to human agent"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Bottom live strip */}
                <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 bg-white">
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-xs text-slate-500 font-medium">AI active — monitoring 24/7</span>
                  </div>
                  <span className="text-[10px] text-purple-500 font-semibold bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>
              </div>

              {/* Floating chip — AI top-left */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white border border-purple-200 shadow-lg shadow-purple-100 rounded-2xl px-3 py-2.5 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-sm">
                  <RiRobot2Line className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-700 leading-tight">AI Agent</p>
                  <p className="text-[9px] text-green-500 font-semibold">Handling query</p>
                </div>
              </div>

              {/* Floating chip — human agent-right */}
              <div className="absolute top-1/2 -right-5 sm:-right-6 -translate-y-1/2 bg-white border border-green-200 shadow-lg shadow-green-50  rounded-2xl px-3 py-2.5 flex items-center gap-2 z-10">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                  <MdOutlineSupportAgent className="w-4 h-4 text-white" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-slate-700 leading-tight">Human Agent</p>
                  <p className="text-[9px] text-green-500 font-semibold">Taking over</p>
                </div>
              </div>

              {/* Floating chip — human agent bottom-right */}
              {/* <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white border border-green-200 shadow-lg shadow-green-50 rounded-2xl px-3 py-2.5 flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm">
                  <MdOutlineSupportAgent className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-700 leading-tight">Human Agent</p>
                  <p className="text-[9px] text-green-500 font-semibold">Taking over</p>
                </div>
              </div> */}

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-2xl border border-slate-100 bg-white shadow-sm px-3 py-3 text-center">
                    <p className={`text-xl font-extrabold ${s.color}`}>{s.value}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                <TbUsers className="w-5 h-5" />
                AI + Human Collaboration
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              AI That{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Augments Humans,
              </span>{" "}
              Not Replaces Them
            </h2>

            {/* Points */}
            <ul className="flex flex-col gap-3 mb-8">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-200 group"
                >
                  <div className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center ${point.iconBg} shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                    {point.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 font-semibold text-sm leading-snug">{point.title}</p>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                  <TbCircleCheck className="shrink-0 w-4 h-4 text-purple-300 mt-0.5 group-hover:text-purple-500 transition-colors duration-200" />
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                <FiZap className="w-4 h-4" />
                See how it works
              </button>
              <button className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors duration-150 group">
                Explore agent tools
                <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}