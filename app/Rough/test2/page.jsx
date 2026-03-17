
"use client"
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function PrimaryButton({ label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-white text-[15px] cursor-pointer border-none"
      style={{
        background: hovered ? "#ff3964" : "#5B4FD8",
        transition: "background 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0 text-white"
        style={{
          background: hovered ? "#fff" : "#fff",
          color: hovered ? "#ff3964" : "#4640b8",
          transition: "background 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </button>
  );
}

function SecondaryButton({ label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-[15px] bg-transparent cursor-pointer"
      style={{
        backgroundColor: hovered ? "#ff3964" : "transparent",
        border: `2px solid ${hovered ? "#ff3964" : "#5B4FD8"}`,
        color: hovered ? "#fff" : "#5B4FD8",
        transition: "border-color 0.25s ease, color 0.50s ease",
        borderRadius: "999px",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center w-7 h-7 flex-shrink-0"
        style={{
          border: `2px solid ${hovered ? "#ff3964" : "#5B4FD8"}`,
          background: hovered ? "#fff" : "#5B4FD8",
          color: hovered ? "#ff3964" : "#ffffff",
          transition:
            "border-color 0.25s ease, background 0.25s ease, color 0.50s ease",
          borderRadius: "999px",
        }}
      >
        <FiArrowRight size={15} strokeWidth={2.5} />
      </span>
    </button>
  );
}

export default function Hero() {
  return (
    <div
      className=" flex flex-col gap-6 items-center justify-center px-6 py-16"
      style={{
        /* Egradient from image: white top-left → soft lavender → medium blue-purple bottom-right */
        background:
          "linear-gradient(135deg, #ffffff 0%, #f0eeff 20%, #e8e7eeff 40%, #bcc3ef 65%, #7a8efcff 85%, #384ca3ff 100%)",
        /* Rounded bottom corners to match image */
        borderRadius: "0 0 2rem 2rem",
      }}
    >
       <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Drive Growth with
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #5e34f1 36.28%, #ff3964 99.75%)",
                }}
              >
                Gupshup’s ISV Partnership
              </span>
            </h1>
            <p className="text-xl text-gray-950">
              Build, Integrate, and scale your solutions with Gupshup's robust
              WhatsApp messaging platform
            </p>
          </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <PrimaryButton label="Get started" />
          <SecondaryButton label="Partner Login" />
        </div>
      </div>
  
  );
}