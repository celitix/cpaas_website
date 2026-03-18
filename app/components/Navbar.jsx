"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiChevronDown,
  HiPlus,
  HiMinus,
  HiXMark,
  HiBars3,
  HiArrowRight,
  HiPlay,
  HiOutlineChatBubbleLeftRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineBolt,
  HiOutlineLink,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin,
  HiOutlinePencilSquare,
  HiOutlineWrenchScrewdriver,
  HiOutlineBookOpen,
  HiOutlineCalculator,
  HiOutlineCalendarDays,
  HiOutlineQrCode,
  HiOutlineNewspaper,
  HiOutlineFlag,
  HiOutlineUsers,
  HiOutlineEnvelope,
  HiOutlineRocketLaunch,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineContactPhone, MdOutlineCampaign } from "react-icons/md";
import { TbBrandTelegram, TbMessageCircle2 } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";


import { TiMessages } from "react-icons/ti";


/* ─────────────────────────────────────────
   SHARED REUSABLE COMPONENTS
───────────────────────────────────────── */

/** Desktop mega-menu item: icon + title + optional desc */
function MenuItem({ icon: Icon, title, desc, href = "#" }) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
    >
      <div className="w-9 h-9 flex items-center justify-center bg-gray-100 group-hover:bg-violet-100 group-hover:text-violet-700 text-gray-500 rounded-lg flex-shrink-0 transition-colors duration-150">
        <Icon size={19} />
      </div>
      <div className="min-w-0">
        <h4 className="text-[13.5px] font-semibold text-gray-900 mb-0.5 leading-snug">
          {title}
        </h4>
        {desc && (
          <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
        )}
      </div>
    </Link>
  );
}

/** Desktop simple dropdown item: icon + title only */
function SimpleMenuItem({ icon: Icon, title, href = "#" }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-violet-700 transition-colors duration-150 group"
    >
      <Icon
        size={17}
        className="text-gray-400 group-hover:text-violet-600 flex-shrink-0 transition-colors"
      />
      {title}
    </Link>
  );
}

/** Reusable left-tab sidebar used in all mega menus */
function MegaTabs({ tabs, activeTab, onHover, onClick }) {
  return (
    <div className="w-[20%] bg-gray-50 border-r border-gray-200 py-4 flex-shrink-0 rounded-bl-2xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onMouseEnter={() => onHover(tab)}
          onClick={() => onClick(tab)}
          className={`relative w-full text-left px-5 py-3 text-sm font-medium transition-colors duration-150 ${
            activeTab === tab
              ? "text-gray-900 font-semibold bg-white"
              : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          }`}
        >
          {activeTab === tab && (
            <span className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-violet-600 rounded-r" />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   PLATFORM MEGA MENU
───────────────────────────────────────── */
function PlatformMenu() {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="flex min-h-[320px]">
      <MegaTabs
        tabs={["Products", "Capabilities", "Channels"]}
        activeTab={activeTab}
        onHover={setActiveTab}
        onClick={setActiveTab}
      />

      <div className="flex-1 p-6 overflow-y-auto">
        {/* ── Products ── */}
        {activeTab === "Products" && (
          <>
            {/* Conversation Cloud Hero */}
            <div className="flex items-center justify-between bg-gradient-to-br from-violet-100 to-purple-200 rounded-xl p-4 mb-5 gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center flex-shrink-0">
                  <HiOutlineRocketLaunch size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                    Conversation Cloud
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    AI-powered platform for seamless, omnichannel customer
                    engagement and automation
                  </p>
                  <Link
                    href="/platform/conversation-cloud"
                    className="inline-flex items-center gap-1 text-[13px] text-violet-700 font-medium mt-1.5 hover:underline"
                  >
                    Learn more <HiArrowRight size={12} />
                  </Link>
                </div>
              </div>
              <button className="flex items-center gap-3 bg-gradient-to-br from-violet-500 to-violet-700 text-white rounded-xl px-4 py-3 text-[13px] font-semibold flex-shrink-0 whitespace-nowrap leading-snug hover:from-violet-600 hover:to-violet-800 transition-all cursor-pointer">
                <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center flex-shrink-0">
                  <HiPlay size={13} />
                </div>
                <span>
                  What is
                  <br />
                  Conversation Cloud?
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-0.5">
              <MenuItem
                icon={HiOutlineChatBubbleLeftRight}
                title="Communicate"
                href="/communicate"
                desc="The smart CPaaS platform for seamless, multi-channel messaging and intelligent customer interactions"
              />
              <MenuItem
                icon={RiAdvertisementLine}
                title="Advertise"
                href="/advertise"
                desc="Drive engagement with targeted, personalized ads on WhatsApp and other messaging channels"
              />
            </div>
          </>
        )}

        {/* ── Capabilities ── */}
        {activeTab === "Capabilities" && (
          <div className="grid grid-cols-3 gap-0.5">
            <MenuItem
              icon={HiOutlineSparkles}
              title="Personalize"
              href="/platform/personalize"
              desc="Deliver tailored, AI-driven customer experiences with intelligent segmentation and contextual interactions"
            />
            <MenuItem
              icon={MdOutlineContactPhone}
              title="Agent Assist"
              href="/platform/agent-assist"
              desc="Support better and sell more with empowered human agents"
            />
            <MenuItem
              icon={HiOutlineShieldCheck}
              title="Enterprise Security"
              href="/platform/security"
              desc="Explore Gupshup's enterprise-grade security for protecting your data and customer privacy"
            />
            <MenuItem
              icon={HiOutlineCpuChip}
              title="Conversation Builder"
              href="/platform/conversation-builder"
              desc="Easily build, deploy, and manage intelligent, multichannel journeys for seamless interactions"
            />
            <MenuItem
              icon={HiOutlineBolt}
              title="AI Campaign CoPilot"
              href="/platform/ai-campaign-copilot"
              desc="Boost campaign creativity with AI CoPilot for copywriting, design and campaign optimization"
            />
            <MenuItem
              icon={HiOutlineLink}
              title="Integrations"
              href="/platform/integrations"
              desc="Go to market faster with 500+ integrations for support, payments, CRM, and commerce"
            />
            <MenuItem
              icon={MdOutlineCampaign}
              title="Campaign Manager"
              href="/platform/campaign-manager"
              desc="Automate and optimize multichannel campaigns for high engagement and conversions"
            />
          </div>
        )}

        {/* ── Channels ── */}
        {activeTab === "Channels" && (
          <div className="grid grid-cols-3 gap-0.5">
            <MenuItem
              icon={FaWhatsapp}
              title="WhatsApp"
              href="/whatsapp-api"
              desc="World's most popular messaging channel for business communication"
            />
              <MenuItem
              icon={TiMessages}
              title="RCS"
              href="/rcs-api"
              desc="Rich Communication Services for enhanced interactive messaging"
            />
              <MenuItem
              icon={HiOutlineSpeakerWave}
              title="Voice"
              href="/voice-ai"
              desc="AI-powered voice bots for intelligent phone-based customer interactions"
            />
            <MenuItem
              icon={HiOutlineDevicePhoneMobile}
              title="SMS"
              href="/sms-api"
              desc="Universal reach with instant delivery to any mobile device worldwide"
            />
               <MenuItem
              icon={FaInstagram}
              title="Instagram"
              href="/instagram-api"
              desc="Connect and engage customers through Instagram Direct Messages"
            />
               <MenuItem
              icon={TiMessages}
              title="Web Apps"
              href="/web-apps"
              desc="Embed intelligent chat widgets directly on your website"
            />
                   
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   AI OFFERINGS MEGA MENU
   — no tabs, 3 items in single row, full-width, no sidebar
───────────────────────────────────────── */
function AIOfferingsMenu() {
  return (
    <div className=" px-8 py-7 ">
      <div className="grid grid-cols-3 gap-3">
        <Link
          href="/ai-agents"
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-violet-100 group-hover:text-violet-700 text-gray-500 rounded-xl flex-shrink-0 transition-colors duration-150">
            <HiOutlineChatBubbleLeftRight size={21} />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-gray-900 mb-1 leading-snug">
              AI Agents
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Explore customizable AI agents to automate conversations, tasks, and decision-making
            </p>
          </div>
        </Link>

        <Link
          href="/ai-agent-use-cases"
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-violet-100 group-hover:text-violet-700 text-gray-500 rounded-xl flex-shrink-0 transition-colors duration-150">
            <HiOutlineUserGroup size={21} />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-gray-900 mb-1 leading-snug">
              AI Agent Use Cases
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Discover real-world AI agent applications for your industry
            </p>
          </div>
        </Link>

        <Link
          href="/ace-llm"
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 group-hover:bg-violet-100 group-hover:text-violet-700 text-gray-500 rounded-xl flex-shrink-0 transition-colors duration-150">
            <HiOutlineSparkles size={21} />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-gray-900 mb-1 leading-snug">
              ACE LLM
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Fine-tuned LLM for your industry and teams, powering AI conversations that drive results
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SOLUTIONS MEGA MENU
───────────────────────────────────────── */
function SolutionsMenu() {
  const [activeTab, setActiveTab] = useState("By Industry");

  return (
    <div className="flex min-h-[280px]">
      <MegaTabs
        tabs={["By Industry", "By Role"]}
        activeTab={activeTab}
        onHover={setActiveTab}
        onClick={setActiveTab}
      />

      <div className="flex-1 p-6">
        {activeTab === "By Industry" && (
          <div className="grid grid-cols-3 gap-0.5">
            <MenuItem icon={HiOutlineCurrencyDollar} title="Financial Services" href="/solutions/financial-services" />
            <MenuItem icon={HiOutlineShoppingCart} title="Retail & E-Commerce" href="/solutions/retail-ecommerce" />
            <MenuItem icon={HiOutlineGlobeAlt} title="Food & Beverage" href="/solutions/food-beverage" />
            <MenuItem icon={HiOutlineBuildingOffice2} title="Real Estate" href="/solutions/real-estate" />
            <MenuItem icon={HiOutlineHeart} title="Healthcare" href="/solutions/healthcare" />
            <MenuItem icon={HiOutlineMapPin} title="Travel & Hospitality" href="/solutions/travel-hospitality" />
            <MenuItem icon={HiOutlineAcademicCap} title="Education" href="/solutions/education" />
          </div>
        )}

        {activeTab === "By Role" && (
          <div className="grid grid-cols-2 gap-0.5">
            <MenuItem
              icon={MdOutlineCampaign}
              title="Marketing"
              href="/solutions/marketing"
              desc="Drive campaigns with intelligent automation and AI targeting"
            />
            <MenuItem
              icon={HiOutlinePencilSquare}
              title="Sales"
              href="/solutions/sales"
              desc="Convert leads faster with AI-assisted conversational sales"
            />
            <MenuItem
              icon={HiOutlineChatBubbleLeftRight}
              title="Customer Support"
              href="/solutions/customer-support"
              desc="Automate and scale customer service across all channels"
            />
            <MenuItem
              icon={HiOutlineWrenchScrewdriver}
              title="Product"
              href="/solutions/product"
              desc="Enhance product engagement with conversational UX patterns"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   RESOURCES DROPDOWN
   — 2-column grid, larger items, no sidebar, matching screenshot
───────────────────────────────────────── */
function ResourcesMenu() {
  return (
    <div className=" px-6 py-5 grid grid-cols-2 gap-x-4 gap-y-0 w-[480px]">
      <ResourceItem icon={HiOutlineNewspaper} title="Blog" href="/resources/blog" />
      <ResourceItem icon={HiOutlineBookOpen} title="Documentation" href="https://docs.gupshup.io" />
      <ResourceItem icon={HiOutlineChartBar} title="Guides" href="/resources/guides" />
      <ResourceItem icon={HiOutlineCalculator} title="ROI Calculator" href="/roi-calculator" />
      <ResourceItem icon={HiOutlineCalendarDays} title="Events and Webinars" href="/resources/events-webinars" />
      <ResourceItem icon={FaWhatsapp} title="WhatsApp Chat Widget Generator" href="/whatsapp-chat-button-widget" />
      <ResourceItem icon={HiOutlineBookOpen} title="E-books and Whitepapers" href="/resources/ebooks-whitepapers" />
      <ResourceItem icon={HiOutlineQrCode} title="WhatsApp QR Code Generator" href="/free-whatsapp-qr-code-generator" />
    </div>
  );
}

/** Resources grid item — larger, icon left, title only, matching screenshot style */
function ResourceItem({ icon: Icon, title, href = "#" }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3.5 py-3.5 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
    >
      <div className="w-9 h-9 flex items-center justify-center bg-gray-100 group-hover:bg-violet-100 group-hover:text-violet-700 text-gray-500 rounded-lg flex-shrink-0 transition-colors duration-150">
        <Icon size={18} />
      </div>
      <span className="text-[14px] font-medium text-gray-800 group-hover:text-violet-700 transition-colors duration-150">
        {title}
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────
   COMPANY DROPDOWN
───────────────────────────────────────── */
function CompanyMenu() {
  return (
    <div className="py-2">
      <SimpleMenuItem icon={HiOutlineFlag} title="About Us" href="/about-us" />
      <SimpleMenuItem icon={HiOutlineNewspaper} title="Newsroom" href="/resources/newsroom" />
      <SimpleMenuItem icon={HiOutlineUsers} title="Alliances" href="/partnerships-alliances" />
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE COMPONENTS
───────────────────────────────────────── */

/** Mobile accordion wrapper for each nav section */
function MobAccordion({ label, href, children }) {
  const [open, setOpen] = useState(false);

  if (!children) {
    return (
      <li className="border-b border-gray-100">
        <div className="px-5 py-4">
          <Link
            href={href || "#"}
            className="text-base font-medium text-violet-700"
          >
            {label}
          </Link>
        </div>
      </li>
    );
  }

  return (
    <li className="border-b border-gray-100">
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-base font-medium text-violet-700">{label}</span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-violet-700 p-0.5"
          aria-label={open ? "Collapse" : "Expand"}
        >
          {open ? <HiMinus size={18} /> : <HiPlus size={18} />}
        </button>
      </div>
      {open && <div className="px-5 pb-4">{children}</div>}
    </li>
  );
}

/** Mobile tabbed sub-panel */
function MobTabbedSub({ tabs, renderPanel }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className="flex border-b border-gray-200 mb-2 -mx-0">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`flex-1 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors duration-150 ${
              activeTab === t
                ? "text-violet-700 border-violet-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-1">{renderPanel(activeTab)}</div>
    </div>
  );
}

/** Mobile menu item with icon */
function MobMenuItem({ icon: Icon, title, desc, href = "#" }) {
  return (
    <Link
      href={href}
      className="flex items-start gap-2.5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 flex-shrink-0">
        <Icon size={17} />
      </div>
      <div>
        <h4 className="text-[13px] font-semibold text-gray-900 leading-snug">
          {title}
        </h4>
        {desc && (
          <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">
            {desc}
          </p>
        )}
      </div>
    </Link>
  );
}

/** Mobile simple item (no desc) */
function MobSimpleItem({ icon: Icon, title, href = "#" }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 py-2.5 text-[14px] text-gray-700 hover:text-violet-700 transition-colors"
    >
      <Icon size={16} className="text-gray-400 flex-shrink-0" />
      {title}
    </Link>
  );
}

/* ─────────────────────────────────────────
   MAIN NAVBAR EXPORT
───────────────────────────────────────── */
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const openIt = useCallback((name) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  }, []);

  const closeIt = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ═══════════════════════════════════════
          NAVBAR BAR
      ═══════════════════════════════════════ */}
      <nav
        ref={navRef}
        className="sticky top-10 lg:top-11 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[68px]"
      >
        {/*
          nav-container: max-w matches the `calc(50% - 660px)` used for
          dropdown left/right so the dropdown perfectly aligns edge-to-edge.
        */}
        <div className="flex items-center justify-between h-full max-w-[1320px] mx-auto px-7">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Gupshup"
              className=""
              width={140}
              height={32}
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className=" hidden lg:flex items-center gap-1 list-none m-0 p-0">

            {/* ── Platform ── */}
            <li
              className="relative"
              onMouseEnter={() => openIt("platform")}
              onMouseLeave={closeIt}
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "platform" ? null : "platform")
                }
                className={`flex items-center gap-1 px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${
                  openMenu === "platform"
                    ? "text-violet-700"
                    : "text-gray-800 hover:text-violet-700"
                }`}
              >
                Platform
                <HiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openMenu === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "platform" && (
                <div
                  className="fixed top-[112px] left-[max(0px,calc(50%-660px))] right-[max(0px,calc(50%-660px))] bg-white border border-gray-200 border-t-0 shadow-2xl rounded-b-2xl z-40"
                  style={{ animation: "fadeSlide 0.18s ease forwards" }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeIt}
                >
                  <PlatformMenu />
                </div>
              )}
            </li>

            {/* ── AI Offerings ── */}
            <li
              className="relative"
              onMouseEnter={() => openIt("ai")}
              onMouseLeave={closeIt}
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "ai" ? null : "ai")
                }
                className={`flex items-center gap-1 px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${
                  openMenu === "ai"
                    ? "text-violet-700"
                    : "text-gray-800 hover:text-violet-700"
                }`}
              >
                AI Offerings
                <HiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openMenu === "ai" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "ai" && (
                <div
                  className="fixed top-[112px] left-[max(0px,calc(50%-660px))] right-[max(0px,calc(50%-660px))] bg-white border border-gray-200 border-t-0 shadow-2xl rounded-b-2xl z-40"
                  style={{ animation: "fadeSlide 0.18s ease forwards" }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeIt}
                >
                  <AIOfferingsMenu />
                </div>
              )}
            </li>

            {/* ── Solutions ── */}
            <li
              className="relative"
              onMouseEnter={() => openIt("solutions")}
              onMouseLeave={closeIt}
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "solutions" ? null : "solutions")
                }
                className={`flex items-center gap-1 px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${
                  openMenu === "solutions"
                    ? "text-violet-700"
                    : "text-gray-800 hover:text-violet-700"
                }`}
              >
                Solutions
                <HiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openMenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "solutions" && (
                <div
                  className="fixed top-[112px] left-[max(0px,calc(50%-660px))] right-[max(0px,calc(50%-660px))] bg-white border border-gray-200 border-t-0 shadow-2xl rounded-b-2xl z-40"
                  style={{ animation: "fadeSlide 0.18s ease forwards" }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeIt}
                >
                  <SolutionsMenu />
                </div>
              )}
            </li>

            {/* ── Customer Stories ── */}
            <li>
              <Link
                href="/resources/case-studies"
                className="px-3 py-2 text-[14.5px] font-medium text-gray-800 hover:text-violet-700 rounded-md transition-colors duration-150"
              >
                Customer Stories
              </Link>
            </li>

            {/* ── Partners ── */}
            <li>
              <Link
                href="/partners"
                className="px-3 py-2 text-[14.5px] font-medium text-gray-800 hover:text-violet-700 rounded-md transition-colors duration-150"
              >
                Partners
              </Link>
            </li>

            {/* ── Resources ── */}
            <li
              className="relative "
              onMouseEnter={() => openIt("resources")}
              onMouseLeave={closeIt}
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "resources" ? null : "resources")
                }
                className={`flex items-center gap-1 px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${
                  openMenu === "resources"
                    ? "text-violet-700"
                    : "text-gray-800 hover:text-violet-700"
                }`}
              >
                Resources
                <HiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openMenu === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "resources" && (
                <div
                  className="absolute top-[calc(100%+14px)] right-0 bg-white border border-gray-200 shadow-2xl rounded-xl z-40"
                  style={{ animation: "fadeSlide 0.18s ease forwards" }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeIt}
                >
                  <ResourcesMenu />
                </div>
              )}
            </li>

            {/* ── Company ── */}
            <li
              className="relative"
              onMouseEnter={() => openIt("company")}
              onMouseLeave={closeIt}
            >
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "company" ? null : "company")
                }
                className={`flex items-center gap-1 px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors duration-150 cursor-pointer ${
                  openMenu === "company"
                    ? "text-violet-700"
                    : "text-gray-800 hover:text-violet-700"
                }`}
              >
                Company
                <HiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    openMenu === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "company" && (
                <div
                  className="absolute top-[calc(100%+14px)] right-0 w-52 bg-white border border-gray-200 shadow-2xl rounded-xl z-40"
                  style={{ animation: "fadeSlide 0.18s ease forwards" }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeIt}
                >
                  <CompanyMenu />
                </div>
              )}
            </li>
          </ul>

          {/* ── Right: CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/request-demo"
              className="hidden lg:flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-200 flex-shrink-0"
            >
              Request a demo
              <span className="w-5 h-5 bg-white/25 rounded-full flex items-center justify-center">
                <HiArrowRight size={11} />
              </span>
            </Link>

            <button
              className="lg:hidden flex items-center justify-center text-gray-800 p-1 cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HiBars3 size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          MOBILE OVERLAY
      ═══════════════════════════════════════ */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[1998] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ═══════════════════════════════════════
          MOBILE DRAWER — slides from right, full screen width
      ═══════════════════════════════════════ */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-screen bg-white z-[1999] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-2 py-4 border-b border-gray-200 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
             src="/logo.jpg"
              alt="Gupshup"
              width={120}
              height={28}
              className=""
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-800 p-1 cursor-pointer"
            aria-label="Close menu"
          >
            <HiXMark size={24} />
          </button>
        </div>

        {/* Nav Accordion Items */}
        <ul className="list-none m-0 p-0 flex-1">

          {/* Platform */}
          <MobAccordion label="Platform">
            <MobTabbedSub
              tabs={["Products", "Capabilities", "Channels"]}
              renderPanel={(tab) => {
                if (tab === "Products")
                  return (
                    <div>
                      <Link
                        href="/platform/conversation-cloud"
                        className="flex flex-col gap-1 bg-violet-50 rounded-lg p-3 mb-3"
                      >
                        <strong className="text-[13px] text-gray-900">
                          Conversation Cloud
                        </strong>
                        <span className="text-[12px] text-gray-500">
                          AI-powered platform for seamless, omnichannel customer
                          engagement
                        </span>
                      </Link>
                      <MobMenuItem
                        icon={HiOutlineChatBubbleLeftRight}
                        href="/platform/communicate"
                        title="Communicate"
                        desc="The smart CPaaS platform for seamless, multi-channel messaging"
                      />
                      <MobMenuItem
                        icon={RiAdvertisementLine}
                        href="/platform/advertise"
                        title="Advertise"
                        desc="Drive engagement with targeted, personalized ads on WhatsApp"
                      />
                    </div>
                  );

                if (tab === "Capabilities")
                  return (
                    <div>
                      <MobMenuItem
                        icon={HiOutlineSparkles}
                        title="Personalize"
                        desc="Deliver tailored, AI-driven customer experiences"
                      />
                      <MobMenuItem
                        icon={MdOutlineContactPhone}
                        title="Agent Assist"
                        desc="Support better and sell more with empowered human agents"
                      />
                      <MobMenuItem
                        icon={HiOutlineShieldCheck}
                        title="Enterprise Security"
                        desc="Enterprise-grade security for your data"
                      />
                      <MobMenuItem
                        icon={HiOutlineCpuChip}
                        title="Conversation Builder"
                        desc="Build and deploy intelligent multichannel journeys"
                      />
                      <MobMenuItem
                        icon={HiOutlineBolt}
                        title="AI Campaign CoPilot"
                        desc="Boost campaign creativity with AI CoPilot"
                      />
                      <MobMenuItem
                        icon={HiOutlineLink}
                        title="Integrations"
                        desc="500+ integrations for support, payments, CRM"
                      />
                      <MobMenuItem
                        icon={MdOutlineCampaign}
                        title="Campaign Manager"
                        desc="Automate and optimize multichannel campaigns"
                      />
                    </div>
                  );

                if (tab === "Channels")
                  return (
                    <div>
                      <MobMenuItem icon={FaWhatsapp} href="/whatsapp-api" title="WhatsApp" desc="World's most popular messaging channel" />
                      <MobMenuItem icon={TiMessages} href="/rcs-api" title="RCS" desc="Rich Communication Services" />
                      <MobMenuItem icon={HiOutlineSpeakerWave} title="Voice" desc="AI-powered voice bots" />
                      <MobMenuItem icon={HiOutlineDevicePhoneMobile} href="/sms-api" title="SMS" desc="Universal reach to any mobile device" />
                      <MobMenuItem icon={FaInstagram} href="/instagram-api" title="Instagram" desc="Instagram Direct Messages" />
                      <MobMenuItem icon={TiMessages} title="Web Apps" desc="Intelligent website chat widgets" />
                    </div>
                  );
              }}
            />
          </MobAccordion>

          {/* AI Offerings */}
          <MobAccordion label="AI Offerings">
            <div>
              <MobMenuItem icon={HiOutlineChatBubbleLeftRight} href="/ai-agents" title="AI Agents" desc="Explore customizable AI agents to automate conversations, tasks, and decision-making" />
              <MobMenuItem icon={HiOutlineUserGroup} href="/ai-agent-use-cases" title="AI Agent Use Cases" desc="Discover real-world AI agent applications for your industry" />
              <MobMenuItem icon={HiOutlineSparkles} href="/ace-llm" title="ACE LLM" desc="Fine-tuned LLM for your industry and teams, powering AI conversations that drive results" />
            </div>
          </MobAccordion>

          {/* Solutions */}
          <MobAccordion label="Solutions">
            <MobTabbedSub
              tabs={["By Industry", "By Role"]}
              renderPanel={(tab) => {
                if (tab === "By Industry")
                  return (
                    <div>
                      <MobSimpleItem icon={HiOutlineCurrencyDollar} href="/solutions/financial-services" title="Financial Services" />
                      <MobSimpleItem icon={HiOutlineShoppingCart} href="/solutions/retail-ecommerce" title="Retail & E-Commerce" />
                      <MobSimpleItem icon={HiOutlineGlobeAlt} href="/solutions/food-beverage" title="Food & Beverage" />
                      <MobSimpleItem icon={HiOutlineBuildingOffice2} href="/solutions/real-estate" title="Real Estate" />
                      <MobSimpleItem icon={HiOutlineHeart} href="/solutions/healthcare" title="Healthcare" />
                      <MobSimpleItem icon={HiOutlineMapPin} href="/solutions/travel-hospitality" title="Travel & Hospitality" />
                      <MobSimpleItem icon={HiOutlineAcademicCap} href="/solutions/education" title="Education" />
                    </div>
                  );

                if (tab === "By Role")
                  return (
                    <div>
                      <MobMenuItem icon={MdOutlineCampaign} title="Marketing" desc="Drive campaigns with intelligent automation" />
                      <MobMenuItem icon={HiOutlinePencilSquare} title="Sales" desc="Convert leads faster with AI-assisted sales" />
                      <MobMenuItem icon={HiOutlineChatBubbleLeftRight} title="Customer Support" desc="Automate and scale customer service" />
                      <MobMenuItem icon={HiOutlineWrenchScrewdriver} title="Product" desc="Enhance product engagement with conversational UX" />
                    </div>
                  );
              }}
            />
          </MobAccordion>

          {/* No-dropdown links */}
          <MobAccordion label="Customer Stories" href="/resources/case-studies" />
          <MobAccordion label="Partners" href="/partners" />

          {/* Resources */}
          <MobAccordion label="Resources">
            <div className="flex flex-col">
              <MobSimpleItem icon={HiOutlineNewspaper} title="Blog" href="/resources/blog" />
              <MobSimpleItem icon={HiOutlineBookOpen} title="Documentation" href="https://docs.gupshup.io" />
              <MobSimpleItem icon={HiOutlineBookOpen} title="Guides" href="/resources/guides" />
              <MobSimpleItem icon={HiOutlineCalculator} title="ROI Calculator" href="/roi-calculator" />
              <MobSimpleItem icon={HiOutlineCalendarDays} title="Events and Webinars" href="/resources/events-webinars" />
              <MobSimpleItem icon={FaWhatsapp} title="WhatsApp Chat Widget Generator" href="/whatsapp-chat-button-widget" />
              <MobSimpleItem icon={HiOutlineBookOpen} title="E-books and Whitepapers" href="/resources/ebooks-whitepapers" />
              <MobSimpleItem icon={HiOutlineQrCode} title="WhatsApp QR Code Generator" href="/free-whatsapp-qr-code-generator" />
            </div>
          </MobAccordion>

          {/* Company */}
          <MobAccordion label="Company">
            <div className="flex flex-col">
              <MobSimpleItem icon={HiOutlineFlag} title="About Us" href="/about-us" />
              <MobSimpleItem icon={HiOutlineNewspaper} title="Newsroom" href="/newsroom" />
              <MobSimpleItem icon={HiOutlineUsers} title="Alliances" href="/partnerships-alliances" />
            </div>
          </MobAccordion>
        </ul>

        {/* Mobile CTA */}
        <div className="px-5 py-5 border-t border-gray-200 flex-shrink-0">
          <Link
            href="/request-demo"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2.5 bg-violet-700 hover:bg-violet-800 text-white rounded-xl py-3.5 text-[15px] font-semibold w-full transition-colors"
          >
            Request a demo
            <HiArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Dropdown slide-in animation */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}