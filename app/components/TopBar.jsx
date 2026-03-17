"use client";
import { useState } from "react";
import { FiGlobe, FiChevronDown, FiLogIn } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("Global - English");

  const languages = [
    "Global - English",
    "Brazil - Portuguese",
    "Mexico - Español",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center lg:justify-end text-sm">

        {/* Right Side Content */}
        <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-6 relative">

          {/* Phone */}

          <div className="flex items-center gap-2">
            <span className="font-medium">Book a demo:</span>
            <img src="https://gs-upload.gupshup.io/revamp/ai-website/navbar/ind.svg" alt="indian flag" />
          
            <a href="tel:+919355000192" className="font-semibold hover:opacity-80 transition">
              +91-9355000192
            </a>
          </div>

<div className="flex flex-row gap-6">
          {/* Login */}
          <div className="flex items-center gap-1 hover:opacity-80 transition">
            <FiLogIn size={16} />
            <span className="">Login</span>
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <FiGlobe size={16} />
              <span className="">{language}</span>
              <FiChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setOpen(false);
                    }}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
</div>
        </div>
      </div>
    </div>
  );
}