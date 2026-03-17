// "use client";

// import { useState, useRef } from "react";

// export default function TabSection({ tabs = [] }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollRef = useRef(null);

//   if (!tabs.length) return null;

//   const active = tabs[activeIndex] ?? tabs[0];

//   return (
//     <section className="w-full max-w-7xl mx-auto">
//       {/* ══════════════════════════════════════
//           DESKTOP (lg+): left tabs + right image
//           ══════════════════════════════════════ */}
//       <div className="hidden lg:flex gap-8 ">
//         {/* Left panel – tab list */}
//         <div className="w-72 xl:w-80 shrink-0 flex flex-col gap-1 py-6 pr-6 bg-[#f8f8f8]">
//           {tabs.map((tab, i) => {
//             const isActive = i === activeIndex;
//             return (
//               <button
//                 key={i}
//                 onClick={() => setActiveIndex(i)}
//                 className={[
//                   "group relative text-left px-5 py-4 rounded-lg transition-all duration-200",
//                   isActive ? "bg-white shadow-sm" : "hover:bg-white/60",
//                 ].join(" ")}
//               >
//                 {/* Violet left bar */}
//                 <span
//                   className={[
//                     "absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300",
//                     isActive
//                       ? "bg-violet-600 opacity-100"
//                       : "opacity-0 group-hover:opacity-30 bg-violet-400",
//                   ].join(" ")}
//                 />

//                 {/* Heading */}
//                 <span
//                   className={[
//                     "block text-[15px] font-semibold leading-snug transition-colors duration-200",
//                     isActive
//                       ? "text-gray-900"
//                       : "text-gray-400 group-hover:text-gray-600",
//                   ].join(" ")}
//                 >
//                   {tab.heading}
//                 </span>

//                 {/* Description – slides open when active */}
//                 <div
//                   className={[
//                     "overflow-hidden transition-all duration-300 ease-in-out",
//                     isActive
//                       ? "max-h-48 opacity-100 mt-2"
//                       : "max-h-0 opacity-0",
//                   ].join(" ")}
//                 >
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     {tab.description}
//                   </p>
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         {/* Right panel – fixed height to prevent shaking */}
//         <div className="flex-1 p-6 bg-red-300" style={{ minHeight: "500px" }}>
//           <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 relative">
//             {tabs.map((tab, i) => (
//               <img
//                 key={i}
//                 src={tab.image}
//                 alt={tab.imageAlt ?? tab.heading}
//                 className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out"
//                 style={{ opacity: i === activeIndex ? 1 : 0 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════
//           MOBILE / TABLET (below lg): capsules + stack
//           ══════════════════════════════════════════ */}
//       <div className="lg:hidden flex flex-col gap-6 py-6">
//         {/* Scrollable capsule pills */}
//         <div
//           ref={scrollRef}
//           className="flex gap-2 overflow-x-auto px-4 pb-1"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {tabs.map((tab, i) => {
//             const isActive = i === activeIndex;
//             return (
//               <button
//                 key={i}
//                 onClick={() => setActiveIndex(i)}
//                 className={[
//                   "shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap",
//                   isActive
//                     ? "bg-violet-50 border-violet-500 text-violet-700 shadow-sm shadow-violet-100"
//                     : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700",
//                 ].join(" ")}
//               >
//                 {tab.heading}
//               </button>
//             );
//           })}
//         </div>

//         {/* Active tab content */}
//         <div
//           key={activeIndex}
//           className="px-4 flex flex-col gap-4 animate-tabFade"
//         >
//           {/* Text with violet left bar */}
//           <div className="flex gap-3">
//             <div className="w-[3px] rounded-full bg-violet-600 shrink-0 self-stretch" />
//             <div>
//               <h3 className="text-base font-semibold text-gray-900 mb-1">
//                 {active.heading}
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 {active.description}
//               </p>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="w-full rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
//             <img
//               src={active.image}
//               alt={active.imageAlt ?? active.heading}
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Animation + scrollbar-hide */}
//       <style>{`
//         @keyframes tabFade {
//           from { opacity: 0; transform: translateY(6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .animate-tabFade {
//           animation: tabFade 0.22s ease-out both;
//         }
//         .lg\\:hidden div::-webkit-scrollbar { display: none; }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useState, useRef } from "react";

export default function TabSection({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  if (!tabs.length) return null;

  const active = tabs[activeIndex] ?? tabs[0];

  return (
    <section className="w-full max-w-7xl mx-auto">
      {/* DESKTOP (lg+): left tabs + right image */}
      <div className="hidden lg:flex gap-8 ">
        {/* Left panel tab list */}
        <div className="w-72 xl:w-80 shrink-0 flex flex-col gap-1 rounded-xl overflow-hidden bg-[#f8f8f8]">
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={[
                  "group relative text-left px-5 py-4 rounded-lg transition-all duration-200",
                  isActive ? "bg-[#f0f0f0]" : "hover:bg-[#f0f0f0]",
                ].join(" ")}
              >
                {/* Violet left bar */}
                <span
                  className={[
                    "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                    isActive
                      ? "bg-violet-600 opacity-100"
                      : "opacity-0 group-hover:opacity-30 bg-[#5956d6]",
                  ].join(" ")}
                />

                {/* Heading */}
                <span
                  className={[
                    "block text-lg transition-colors duration-200",
                    isActive
                      ? "text-black font-semibold"
                      : "text-[#7D7D87] group-hover:text-gray-600",
                  ].join(" ")}
                >
                  {tab.heading}
                </span>

                {/* Description – slides open when active */}
                <div
                  className={[
                    "overflow-hidden text-sm transition-all duration-300 ease-in-out",
                    isActive
                      ? "max-h-48 opacity-100 mt-2"
                      : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <p className=" ">
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right panel fixed height to prevent shaking */}
        <div className="flex-1 " style={{ minHeight: "550px" }}>
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 relative">
            {tabs.map((tab, i) => (
              <img
                key={i}
                src={tab.image}
                alt={tab.imageAlt ?? tab.heading}
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET (below lg): capsules + stack */}
      <div className="lg:hidden flex flex-col gap-6 py-6">
        {/* Scrollable capsule pills */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto px-4 pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={[
                  "shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap",
                  isActive
                    ? "bg-violet-50 border-violet-500 text-violet-700 shadow-sm shadow-violet-100"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700",
                ].join(" ")}
              >
                {tab.heading}
              </button>
            );
          })}
        </div>

        {/* Active tab content */}
        <div
          key={activeIndex}
          className="px-4 flex flex-col gap-4 animate-tabFade"
        >
          {/* Text with violet left bar */}
          <div className="flex gap-3">
            <div className="w-[3px] rounded-full bg-violet-600 shrink-0 self-stretch" />
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {active.heading}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {active.description}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
            <img
              src={active.image}
              alt={active.imageAlt ?? active.heading}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Animation + scrollbar-hide */}
      <style>{`
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-tabFade {
          animation: tabFade 0.22s ease-out both;
        }
        .lg\\:hidden div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
