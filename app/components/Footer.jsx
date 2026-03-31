"use client";

import { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "Product & Channel links", href: "/products" },
  { label: "Why Dove Soft", href: "/why-dove-soft" },
  { label: "Developers", href: "/developers" },
  { label: "Resources", href: "/resources" },
  { label: "Legal", href: "/legal" },
];

const resourceLinks = [
  { label: "ebooks", href: "/resources/ebooks" },
  { label: "Customer Stories", href: "/resources/customer-stories" },
  { label: "Blogs", href: "/blog" },
  { label: "Guides", href: "/resources/guides" },
  { label: "Developers", href: "/developers" },
  { label: "Webinars", href: "/resources/webinars" },
];

const guides = [
  {
    label: "Mastering Conversational Commerce",
    href: "/guides/conversational-commerce",
  },
  { label: "Ads that Click to WhatsApp", href: "/guides/ads-whatsapp" },
  { label: "All You Need to Know About RCS", href: "/guides/rcs" },
  { label: "Festive Season Marketing Guide", href: "/guides/festive-season" },
  {
    label: "Ace Black Friday & Cyber Monday Sale",
    href: "/guides/black-friday",
  },
  { label: "Mastering Conversational AI", href: "/guides/conversational-ai" },
  {
    label: "A guide to WhatsApp Business API",
    href: "/guides/whatsapp-business-api",
  },
  {
    label: "Win buyers' Hearts with Conversational AI",
    href: "/guides/win-buyers",
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "DLT", href: "/dlt" },
];

export default function GupshupFooter() {
  const [guidesVisible, setGuidesVisible] = useState(false);
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    if (!guidesVisible) {
      setBounce(true);
    } else {
      setBounce(false);
    }
  }, [guidesVisible]);

  return (
    <footer className="bg-[#f5f4fb] w-full font-sans">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Logo + Description + CTA */}
          <div className="flex-shrink-0 max-w-xs">
            {/* Placeholder Logo */}
            <Link href="">
              <Image
                src="/logo.jpg"
                alt="Gupshup Logo"
                width={180}
                height={180}
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              Gupshup is a leading conversational AI platform for marketing,
              commerce, and support automation. Trusted by 50,000+ customers in
              130+ countries across industries, Gupshup handles 120 Billion+
              messages annually.
            </p>
            <Link
              href="#"
              className="mt-3 group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#ee3458] text-white text-base font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get in Touch
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white transition-all duration-200 group-hover:bg-white">
                <FiArrowRight
                  size={14}
                  className="text-[#7c3aed] group-hover:text-[#ee3458] transition-colors duration-200"
                />
              </span>
            </Link>
          </div>

          {/* Company Links */}
          <div className="min-w-[140px]">
            <h3 className="text-sm font-medium text-gray-600 mb-4 pb-2 border-b border-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500  transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="min-w-[280px]">
            <h3 className="text-sm font-medium text-gray-600 mb-4 pb-2 border-b border-gray-300">
              Resources
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {resourceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="min-w-[120px]">
            <h3 className="text-base font-semibold text-right text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: <FaLinkedinIn size={20} />, href: "#" },
                { icon: <FaTwitter size={20} />, href: "#" },
                { icon: <FaFacebookF size={20} />, href: "#" },
                { icon: <FaYoutube size={20} />, href: "#" },
                { icon: <RiInstagramFill size={20} />, href: "#" },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-white  flex items-center justify-center text-indigo-600 transition-colors duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-4 text-xs text-indigo-600">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-indigo-800 transition-colors text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
            <Link href="#" className="">
              <span className="text-gray-600 text-sm">
                Partner Terms of Use
              </span>
            </Link>
          </div>
          <span className="text-xs text-gray-500">
            Dove Soft © 2026. All rights reserved.
          </span>
        </div>
      </div>

      {/* Triangle Toggle + Guides Section */}
      <div className="bg-white">
        {/* Triangle Button */}
        <div className="flex justify-center py-2">
          <button
            onClick={() => setGuidesVisible((v) => !v)}
            className="focus:outline-none"
            aria-label="Toggle guides"
          >
            <div
              className={`transition-transform duration-300 ${bounce ? "animate-bounce" : ""}`}
              style={{ lineHeight: 0 }}
            >
              {guidesVisible ? (
                // Upward triangle when guides are visible
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <polygon points="10,0 20,12 0,12" fill="#6d28d9" />
                </svg>
              ) : (
                // Downward triangle when guides are hidden
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <polygon points="0,0 20,0 10,12" fill="#6d28d9" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Guides Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ${guidesVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Guides</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
              {guides.map((guide, i) => (
                <span key={guide.label} className="flex items-center gap-3">
                  <Link
                    href={guide.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {guide.label}
                  </Link>
                  {i < guides.length - 1 && (
                    <span className="text-gray-400">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </footer>
  );
}
