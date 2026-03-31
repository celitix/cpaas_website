"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/globals.css";


const labels = [
  "Purchase",
  "Support",
  "Retention",
  "Interest",
  "Engagement",
  "Consideration",
];

const Automatic = () => {
  const [active, setActive] = useState(false);

  const [offset, setOffset] = useState(0); // 0 to 1, continuously increasing

  useEffect(() => {
    let animFrame;
    let start = null;
    const duration = 12000; // ms for all 6 labels to cycle through

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      setOffset((elapsed % duration) / duration); // 0 → 1 looping
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const radius = 260;
  const centerX = 300;
  const centerY = 300;

  // 6 labels spaced 60° apart in a virtual 360° ring.
  // offset (0→1) drives them leftward across the arc continuously.
  // Only labels whose current angle falls in (0°, 180°) are shown — the top semicircle.
  // 0° = right end of arc, 180° = left end of arc.

  const labelNodes = labels.map((label, i) => {
    const slotAngle = (i / labels.length) * 360; // 0, 60, 120, 180, 240, 300
    let angleDeg = slotAngle - offset * 360;
    angleDeg = ((angleDeg % 360) + 360) % 360;

    const visible = angleDeg > 0 && angleDeg < 180;

    // Fade in/out near the edges
    const fadeRange = 18;
    let opacity = 1;
    if (angleDeg <= fadeRange) {
      opacity = angleDeg / fadeRange;
    } else if (angleDeg >= 180 - fadeRange) {
      opacity = (180 - angleDeg) / fadeRange;
    }

    // SVG coords: 0° = right, 90° = top, 180° = left
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY - radius * Math.sin(angleRad);

    return { label, x, y, visible, opacity };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto  bg-[#f5f5f7] py-10 space-y-8  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Orchestrate workflows */}
        <div className=" rounded-3xl overflow-hidden text-white p-8 bg-gradient-to-br from-purple-600 to-indigo-600 flex flex-col justify-between">
          <div className="relative flex-1 rounded-3xl overflow-hidden ">
            <Image src="/home/watch-demo.webp" height={500} width={600} />
          </div>
        </div>

        {/* 2. Optimize operations */}
        <div className=" rounded-3xl bg-[#e9e7f1]  flex flex-col justify-between">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Optimize operations with
              <span className="text-indigo-600"> AI + Human conversations</span>
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Delegate routine conversations to intelligent AI Agents for 24/7
              efficient resolutions while escalating complex cases.
            </p>
          </div>

          <div className="" >
            <div className="ai-section relative ">
              <div className="absolute top-10 -left-10  w-20 h-2.5 bg-purple-600"></div>
              {/* <img src="/home/line.webp" className="absolute top-0 w-20 h-5  left-20"  alt="" /> */}
              {/* Toggle */}
              <div className="toggle-box">
                <span>AI Powered Escalation</span>

                <div className={`toggle ${active ? "active" : ""}`}>
                  <div className="circle"></div>
                </div>
              </div>

              <div className="w-full h-full">
                <div className="pipemain">
                  {/* PIPE SVG */}
                  <svg
                    className="pipe"
                    xmlns="http://www.w3.org/2000/svg"
                    width="279"
                    height="217"
                    viewBox="0 0 279 217"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="pipeGradient"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#7B4DFF" />
                        <stop offset="100%" stopColor="#FF2BD6" />
                      </linearGradient>
                    </defs>

                    {/* horizontal line */}
                    <path
                      className="gridCards_line"
                      d="M0 56H169"
                      stroke={active ? "url(#pipeGradient)" : "#ddd"}
                      strokeLinecap="round"
                      strokeWidth="10"
                    />

                    {/* curved pipe */}
                    <path
                      className="gridCards_line"
                      d="M36.5 217V192.5C36.5 176.484 49.4837 163.5 65.5 163.5H195.5C211.516 163.5 224.5 150.516 224.5 134.5V108.5"
                      stroke={active ? "url(#pipeGradient)" : "#ddd"}
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* avatar circle */}
                    <rect
                      className="gridCards_box"
                      x="167"
                      y="0"
                      width="112"
                      height="112"
                      rx="56"
                      fill="#f6f4ff"
                      stroke="#fff"
                    />
                  </svg>
                </div>
              </div>

              {/* Avatar */}
              <div className={`avatar ${active ? "active" : ""}`}>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />
                <div className="badge">1</div>
              </div>

              {/* Chat Card */}
              <div className={`chat-card ${active ? "on" : "off"}`}>
                <div className="message">
                  Hi, this is John. I totally understood your issue. Give me 2
                  minutes for this.
                  <span className="time">05:41 pm</span>
                </div>

                <div className="mini-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">

        {/* Box 1 */}
        <div className="bg-[#f6f4ff] border border-[#e9e7f1] shadow-xl rounded-2xl flex flex-col h-[460px]">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">
              Personalize customer interactions
            </h3>
            <h3 className="text-xl font-semibold text-violet-600">across the full lifecycle</h3>

            <p className="text-black text-base mt-4">
              Make every customer journey unique and relevant through tailored outreach campaigns and offers based on multiple factors, including funnel stage, intent signals and preferences from chat.
            </p>
          </div>

          <div className="relative w-full h-[280px]  ">
      <section
        className="relative flex flex-col items-center justify-end overflow-hidden select-none"
        style={{ minHeight: 120, paddingBottom: 40 }}
        >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full opacity-25"
            style={{
              width: 620,
              height: 620,
            }}
          />
        </div>

        <div className="relative" style={{ width: 600, height: 220 }}>
          {/* Purple semicircle arc */}
          <svg
            className="absolute inset-0"
            width="600"
            height="320"
            viewBox="0 0 600 320"
            fill="none"
          >
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
                <stop offset="30%" stopColor="#7c3aed" stopOpacity="1" />
                <stop offset="70%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.80" />
              </linearGradient>
            </defs>
            <path
              d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
              stroke="url(#arcGrad)"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Labels — only rendered while on the top semicircle */}
          {labelNodes.map(({ label, x, y, visible, opacity }) =>
            visible ? (
              <div
                key={label}
                className="absolute pointer-events-none"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                  opacity,
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    borderRadius: 12,
                    padding: "7px 18px",
                    boxShadow:
                      "0 2px 16px 0 rgba(124,58,237,0.10), 0 1px 4px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(200,190,240,0.5)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#3b2f6e",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                  }}
                >
                  {label}
                </div>
              </div>
            ) : null
          )}

          {/* Machine image at bottom center */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 "
            style={{ width: 180, height: 160 }}
          >
            <Image
              src="/home/machine.webp"
              alt="Machine"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>
          </div>
        </div>

        {/* Box 2 (taller) */}
        <div className="bg-[#f6f4ff] border border-[#e9e7f1] shadow-xl rounded-2xl flex flex-col md:row-span-2">

          <div className="p-6 ">
            <h3 className="text-xl font-semibold text-black">
              Convert more and work less
            </h3>
            <h3 className="text-xl font-semibold text-violet-600">with automated campaigns</h3>

            <p className="text-black text-base mt-4">
              Orchestrate drip marketing campaigns that trigger based on 3rd party events or signals on messaging channels like reads, clicks and journey progression.          </p>

            <p className="text-black text-base mt-4">
              Sample templates fine-tuned to your industry’s context, processes and terminology make your job easier.
            </p>
          </div>

          <div className="relative mt-12 w-full h-[400px]">
            <Image
              src="/home/flow.webp"
              alt="flow"
              fill
              className="object-contain h-[600px] "
            />
          </div>
        </div>

        {/* Box 3 (taller) */}
        <div className="bg-[#f6f4ff] border border-[#e9e7f1] shadow-xl rounded-2xl p-6 flex flex-col md:row-span-2">

          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">
              Deliver meaningful
            </h3>
            <h3 className="text-xl font-semibold text-violet-600">conversations that keep going</h3>

            <p className="text-black text-base mt-4">
              Leverage our proprietary, fine-tuned ACE LLM model to replace generic messages with relatable, personalized and value-adding dialogues.
            </p>

            <p className="text-black text-base mt-4">
              Empower human agents and drive productivity with suggested responses, summarization and more via our integrated AI Co-Pilot.
            </p>
          </div> 

          <div className="relative mt-auto w-full h-[400px]">
            <Image
              src="/home/convo.webp"
              alt="feature"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-[#f6f4ff] border border-[#e9e7f1] shadow-xl rounded-2xl flex flex-col h-[440px]">

          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">
              Engage your audience
            </h3>
            <h3 className="text-xl font-semibold text-violet-600">where they are</h3>

            <p className="text-black text-base mt-4">
              Reach your customers on their preferred platforms - We support omnichannel conversations across over multiple channels, including WhatsApp, Instagram, SMS and RCS.          </p>
          </div>

          <div className="relative mt-auto w-full h-[400px]">
            <Image
              src="/home/social-connection.webp"
              alt="feature"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Automatic;




