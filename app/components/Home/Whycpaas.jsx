import { FiZap, FiTrendingDown, FiMessageSquare, FiTool, FiCpu } from "react-icons/fi";
import {
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineCog,
  HiOutlineSparkles,
} from "react-icons/hi";
import {
  MdOutlineLayersClear,
  MdOutlineAutoAwesome,
  MdOutlineHub,
  MdOutlinePsychology,
} from "react-icons/md";
import { RiRobot2Line, RiFlowChart } from "react-icons/ri";
import { TbChartArrowsVertical, TbCurrencyDollarOff, TbPlugConnectedX } from "react-icons/tb";
import { BiMessageAltError } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineUserRemove } from "react-icons/hi";

import Link from "next/link";

const traditionalItems = [
  {
    icon: <MdOutlineLayersClear className="w-5 h-5" />,
    label: "Channel-first",
    desc: "Built around channels, not customer journeys",
  },
  {
    icon: <RiFlowChart className="w-5 h-5" />,
    label: "Manual workflows",
    desc: "Human-dependent, error-prone processes",
  },
  {
    icon: <RiRobot2Line className="w-5 h-5" />,
    label: "Static bots",
    desc: "Rigid scripts with no contextual intelligence",
  },
  {
    icon: <TbPlugConnectedX className="w-5 h-5" />,
    label: "Fragmented tools",
    desc: "Siloed platforms with no unified view",
  },
  {
    icon: <MdOutlinePsychology className="w-5 h-5" />,
    label: "AI as add-on",
    desc: "Bolted-on AI with no native integration",
  },
];

const impactItems = [
  {
    icon: <BiMessageAltError className="w-5 h-5" />,
    label: "Low engagement",
    desc: "Customers tune out generic, irrelevant messages",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: <TbCurrencyDollarOff className="w-5 h-5" />,
    label: "High support cost",
    desc: "More agents, more tickets, more spend",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: <TbChartArrowsVertical className="w-5 h-5" />,
    label: "Poor conversion",
    desc: "Missed opportunities at every touchpoint",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: <HiOutlineCog className="w-5 h-5" />,
    label: "Operational complexity",
    desc: "Teams overwhelmed managing disparate systems",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    icon: <HiOutlineUserRemove className="w-5 h-5" />,
    label: "Low retention",
    desc: "Inconsistent experiences drive customers away",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  }
];

export default function ComparisonSection() {
  return (
    <section className="relative bg-[#f5f3ff] overflow-hidden py-20 px-4 sm:px-6 lg:px-8 ">
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 opacity-40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-200 opacity-40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-100 opacity-30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Badge */}
       <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                <HiOutlineSparkles className="w-5 h-5" />
                The Shift Is Here
              </span>
            </div>

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            Why Traditional CPaaS Is{" "}
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              No Longer Enough
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The old playbook is holding businesses back. See how legacy CPaaS approaches
            translate into real business pain.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* LEFT — Traditional CPaaS */}
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                <MdOutlineLayersClear className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                  Legacy approach
                </p>
                <h3 className="text-slate-800 font-bold text-lg leading-tight">
                  Traditional CPaaS
                </h3>
              </div>
              <span className="ml-auto px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 text-xs font-medium">
                Outdated
              </span>
            </div>

            {/* Items */}
            <ul className="divide-y divide-slate-100">
              {traditionalItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 px-6 py-4 group hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-slate-300 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Subtle "X" indicator */}
                  <div className="ml-auto shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                    <span className="text-red-400 text-[10px] font-bold leading-none">✕</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <FiTrendingDown className="w-3.5 h-3.5 text-red-400" />
                Holding your business back from real growth
              </p>
            </div>
          </div>

          {/* RIGHT — Business Impact */}
          <div className="relative rounded-2xl border border-purple-200 bg-gradient-to-b from-purple-50 to-violet-50/50 shadow-sm overflow-hidden">
            {/* Glow top edge */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

            {/* Card header */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-purple-100">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <HiOutlineChartBar className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-purple-500 font-semibold">
                  Consequence
                </p>
                <h3 className="text-slate-800 font-bold text-lg leading-tight">
                  Business Impact
                </h3>
              </div>
              <span className="ml-auto px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-500 text-xs font-medium">
                Critical
              </span>
            </div>

            {/* Items */}
            <ul className="divide-y divide-purple-100">
              {impactItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 px-6 py-4 group hover:bg-white/60 transition-colors duration-200"
                >
                  <div
                    className={`mt-0.5 shrink-0 w-9 h-9 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold text-sm">{item.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Impact badge */}
                  <div className="ml-auto shrink-0">
                    <span className={`text-[10px] font-bold ${item.color} bg-transparent`}>
                      ↓
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div className="px-6 py-4 bg-purple-50 border-t border-purple-200">
              <p className="text-xs text-purple-500 flex items-center gap-1.5">
                <MdOutlineAutoAwesome className="w-3.5 h-3.5 text-purple-500" />
                These aren't edge cases — they're systemic failures
              </p>
            </div>
          </div>
        </div>

        {/* VS Divider (visible on lg) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border-2 border-purple-300 items-center justify-center shadow-md pointer-events-none">
          <span className="text-purple-600 font-black text-xs tracking-tight">VS</span>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 border border-purple-200 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
              <FiZap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-slate-800 font-semibold text-sm">
                Ready for the next generation CPaaS?
              </p>
              
            </div>
          </div>
          <Link
          href="#"
          className=" group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#ee3458] text-white text-base font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Start a free trial

          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white transition-all duration-200 group-hover:bg-white">
            <FiArrowRight
              size={14}
              className="text-[#7c3aed] group-hover:text-[#ee3458] transition-colors duration-200"
            />
          </span>
        </Link>
        </div>
      </div>
    </section>
  );
}