"use client";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineSms, MdOutlineRecordVoiceOver, MdOutlineSupportAgent } from "react-icons/md";
import { TbBrain, TbCircleCheck, TbArrowRight } from "react-icons/tb";
import { FiClock, FiZap } from "react-icons/fi";

const flowSteps = [
  {
    icon: <RiWhatsappLine className="w-4 h-4" />,
    iconBg: "bg-green-100 text-green-600 border-green-200",
    connectorColor: "bg-purple-200",
    label: "WhatsApp delivered but unread",
    sublabel: "Message sent — no response",
    tag: "Step 1",
    tagColor: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: <FiClock className="w-4 h-4" />,
    iconBg: "bg-purple-100 text-purple-600 border-purple-200",
    connectorColor: "bg-purple-200",
    label: "AI waits intelligently",
    sublabel: "Smart delay — no spam",
    tag: "AI Decision",
    tagColor: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: <RiWhatsappLine className="w-4 h-4" />,
    iconBg: "bg-green-100 text-green-600 border-green-200",
    connectorColor: "bg-purple-200",
    label: "Re-push WhatsApp",
    sublabel: "Second attempt — still no action",
    tag: "Retry",
    tagColor: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: <MdOutlineSms className="w-4 h-4" />,
    iconBg: "bg-blue-100 text-blue-600 border-blue-200",
    connectorColor: "bg-purple-200",
    label: "Send SMS",
    sublabel: "Cross-channel fallback triggered",
    tag: "Fallback",
    tagColor: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: <MdOutlineRecordVoiceOver className="w-4 h-4" />,
    iconBg: "bg-violet-100 text-violet-600 border-violet-200",
    connectorColor: "bg-purple-200",
    label: "Trigger Voice AI",
    sublabel: "Automated voice call initiated",
    tag: "Voice AI",
    tagColor: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    icon: <MdOutlineSupportAgent className="w-4 h-4" />,
    iconBg: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200",
    connectorColor: null,
    label: "Escalate to best human agent",
    sublabel: "Routed by skill & availability",
    tag: "Human",
    tagColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
  },
];

export default function WorkflowIntelligence() {
  return (
    <section className="relative bg-gradient-to-b from-white via-purple-100/90 to-indigo-100 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Explanation */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                <TbBrain className="w-5 h-5" />
                Workflow Intelligence
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3x md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              The Brain Behind Every{" "}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Intelligent Conversation
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Workflow Intelligence connects AI, channels, APIs, and humans into autonomous
              customer journeys — with zero manual intervention.
            </p>

            {/* Flow steps */}
            <div className="flex flex-col gap-0 mb-8">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex items-stretch gap-4">
                  {/* Icon + connector line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center ${step.iconBg} shadow-sm`}
                    >
                      {step.icon}
                    </div>
                    {step.connectorColor && (
                      <div className="w-px flex-1 bg-purple-200 my-1 min-h-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-gray-800 font-semibold text-sm">{step.label}</span>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wide ${step.tagColor}`}
                      >
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">{step.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bold tagline */}
            <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-2xl px-5 py-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center mt-0.5">
                <FiZap className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-slate-800 font-bold text-sm sm:text-base leading-snug mt-1">
                No manual follow-ups.{" "}
                <span className="text-purple-600">No guesswork.</span>{" "}
                <span className="text-violet-600">No wastage.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                See it in action
                <TbArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors duration-150">
                <TbCircleCheck className="w-4 h-4" />
                View all workflows
              </button>
            </div>
          </div>

          {/* RIGHT — Visual / Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
            </div>

            {/* Image card */}
            <div className="relative w-full max-w-lg rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-100/60 overflow-hidden">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500" />

              {/* Header bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-slate-50/60">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs text-slate-400 font-medium">Workflow Designer</span>
                </div>
                <HiOutlineSparkles className="w-3.5 h-3.5 text-purple-400" />
              </div>

              {/* Image area */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-violet-50">
                <Image
                  src="/home/workflow.png"
                  alt="Workflow Intelligence flow diagram"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stats strip */}
              <div className="flex items-center justify-around px-5 py-4 border-t border-slate-100 bg-white">
                <div className="text-center">
                  <p className="text-xl font-extrabold text-slate-900">3x</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                    Faster resolution
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div className="text-center">
                  <p className="text-xl font-extrabold text-slate-900">60%</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                    Cost reduction
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div className="text-center">
                  <p className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                    Zero
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                    Manual steps
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 bg-white border border-purple-200 shadow-lg shadow-purple-100 rounded-2xl px-3.5 py-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center">
                <TbBrain className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-700 leading-tight">AI-Powered</p>
                <p className="text-[9px] text-slate-400">Auto-routing</p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-3 -left-3 sm:bottom-16 sm:left-4 bg-white border border-green-200 shadow-lg shadow-green-50 rounded-2xl px-3.5 py-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                <TbCircleCheck className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-700 leading-tight">50+ channels</p>
                <p className="text-[9px] text-slate-400">Always connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}