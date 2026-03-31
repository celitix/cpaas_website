"use client";
import { FiImage, FiCode, FiSend, FiCode2 } from "react-icons/fi";
import { RiShieldKeyholeLine, RiAuditLine, RiStackLine, RiBuildingLine } from "react-icons/ri";
import {RiFileSearchLine} from "react-icons/ri";
import {TbPlug} from "react-icons/tb";
import { SiSoc2, SiIsо27001 } from "react-icons/si";
import { MdVerified, MdSecurity } from "react-icons/md";
import { BsShieldCheck, BsBuilding } from "react-icons/bs";
import { TbApi, TbBraces, TbBrandPostman, TbBrandJavascript } from "react-icons/tb";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { GoLaw } from "react-icons/go";
import { PiDeviceRotateFill } from "react-icons/pi";

export default function DevEnterpriseSection() {
  return (
    <section className="bg-purple-50 py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
       <div className="mb-5">
                    <span className="inline-flex items-center gap-2 bg-purple-100  text-purple-700 text-sm font-semibold tracking-wider px-4 py-2 rounded-full">
                      <PiDeviceRotateFill className="w-5 h-5" />
                      Enterprise Dev Stack
                    </span>
                  </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Built for Developers
          <br />
          <span className="text-purple-600">&amp; Enterprises</span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">
          Empower your engineering teams with frictionless tools while satisfying the
          rigorous compliance demands of global enterprise infrastructure.
        </p>
      </div>

      {/* Two Column Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* For Developers Card */}
        <div className="bg-white/50 rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-8">
          {/* Card Header */}
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2.5 rounded-xl">
              <FiImage className="text-purple-600 text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">For Developers</h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed -mt-4">
            Ship faster with documentation that works, SDKs that inspire, and a developer
            experience that gets out of your way.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-4 shadow-lg">
              <TbApi className="text-purple-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Simple APIs</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                REST &amp; GraphQL endpoints built for 99.999% uptime and low latency.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-4 shadow-lg">
              <TbBraces className="text-purple-400 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Prebuilt JSON</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Extensive schema definitions and response mocks for rapid prototyping.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-4 shadow-lg">
              <TbPlug className="text-purple-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Postman collection</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                One-click import for all endpoints with environment variables preset.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-gray-200 rounded-2xl p-4 shadow-lg">
              <TbBrandJavascript className="text-blue-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">One-line JS widgets</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Embed complex workflows with a single script tag into any framework.
              </p>
            </div>
          </div>

          {/* Code Block */}
          <div className="bg-purple-100/80 rounded-xl p-4 mt-auto">
            <div className="flex gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <pre className="text-xs text-green-600 leading-relaxed">
              <span className="text-gray-600">npm install </span>@deventerprise/core{"\n"}
              <span className="text-blue-500">const </span>
              <span className="text-gray-600">app </span>
              <span className="text-blue-500">= new </span>
              <span className="text-yellow-500">DevEnterprise</span>
              <span className="text-gray-600">{"({ apiKey: "}</span>
              <span className="text-green-600">'sk_live_...'</span>
              <span className="text-gray-600">{" });"}</span>
            </pre>
          </div>
        </div>

        {/* For Enterprises Card */}
        <div className="bg-violet-100/60 rounded-3xl p-8 shadow-sm border border-sky-100 flex flex-col gap-8">
          {/* Card Header */}
          <div className="flex items-center gap-3">
            <div className="bg-sky-200 p-2.5 rounded-xl">
              <BsBuilding className="text-sky-600 text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">For Enterprises</h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed -mt-4">
            Consolidate your technology stack with platform-wide security, governance, and
            world-class reliability.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-lg">
              <HiOutlineShieldCheck className="text-sky-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Security &amp; encryption</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AES-256 at rest and TLS 1.3 in transit with SOC2 Type II compliance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-lg">
              <RiFileSearchLine className="text-sky-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">RBAC &amp; audit logs</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Granular permissioning and full auditability for every system action.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-lg">
              <RiStackLine className="text-sky-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Scalable architecture</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Multi-region availability with auto-scaling to handle billions of requests.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-lg">
              <MdVerified className="text-sky-500 text-2xl" />
              <h3 className="font-bold text-gray-900 text-sm">Multi-industry readiness</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Customized for FinTech, HealthTech, and e-commerce regulatory needs.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-auto">
            <p className="text-xs text-gray-400 tracking-widest uppercase font-semibold mb-3">
              Trusted Industry Standards
            </p>
            <div className="flex flex-wrap gap-2">
              {["SOC2 Type II", "ISO 27001", "HIPAA", "GDPR"].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
                >
                  <HiOutlineShieldCheck className="text-sky-500 text-sm" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}