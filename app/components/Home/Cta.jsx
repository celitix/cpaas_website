
"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const BouncingDots = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#7c6fe0",
            display: "inline-block",
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

const CornerDecorLeft = () => (
  <img src="/home/ctaleft.webp" alt="" style={{ width: 30 }} />
);

const CornerDecorRight = () => (
  <img src="/home/ctaright.webp" alt="" style={{ width: 130 }} />
);

export default function CTASection({
  heading,
  subtext,
  linkText,
  href,
}) {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "520px",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#4f3fd4",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "1150px",
          height: "460px",
          padding: "60px 40px 50px",
          textAlign: "center",
          overflow: "visible",
        }}
      >
        {/* Top notch */}
        <div
          style={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/home/top.webp"
            alt="curved part"
            width={156}
            height={46}
            style={{ display: "block" }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <BouncingDots />
          </div>
        </div>

        {/* Bottom-left decoration */}
        <div style={{ position: "absolute", bottom: 20, left: 2 }}>
          <CornerDecorLeft />
        </div>

        {/* Bottom-right decoration */}
        <div style={{ position: "absolute", bottom: 0, right: 2 }}>
          <CornerDecorRight />
        </div>

<div className="flex flex-col items-center justify-center gap-2">
  
        {/* Heading */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginBottom: "16px",
            marginTop: "20px",
            lineHeight: 1.2,
          }}

          className="max-w-4xl text-center"
        >
          {heading}
        </h2>

        {/* Subtext */}
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            maxWidth: "480px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
          className="text-center"
        >
          {subtext}
        </p>

        {/* CTA Button */}
        <div>
          <Link
            href={href}
            className="mt-3 group inline-flex items-center justify-center gap-3 bg-white hover:bg-[#ff3964] text-[#7c3aed] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-[2px]"
          >
            {linkText}

            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#7c3aed] transition group-hover:bg-white">
              <FiArrowRight
                size={14}
                className="text-white transition group-hover:text-[#ff3964]"
              />
            </span>
          </Link>
        </div>
</div>
      </div>
    </section>
  );
}