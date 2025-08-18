"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SoftwareOutsourcing() {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url); // Navigate to the original URL
  };

  const sections = [
    {
      title: "CRUSHERS",
      description:
        "At Hefty, we engineer crushers that stand up to the toughest demands — across mining, quarrying, construction, and recycling. Built for performance, powered by reliability, and tailored to your production goals.",
      items: [
        { name: "Jaw Crushers", url: "/products/crushers/jawcrushers" },
        { name: "Cone Crushers", url: "/products/crushers/conecrushers" },
        { name: "Roll Crushers", url: "/products/crushers/rollcrushers" },
      ],
    },
    {
      title: "MOBILE SERIES",
      description:
        "Hefty’s Mobile Series delivers high-performance crushing wherever the job takes you — fast, flexible, and field-ready. Engineered for mobility, built for productivity, trusted to perform anywhere.",
      items: [
        { name: "Track Mounted Jaw Crushers", url: "/products/mobileseries/trackmountedjawcrusher" },
        { name: "Track Mounted Cone Crushers", url: "/products/mobileseries/trackmountedconecrusher" },
        { name: "Track Mounted Screen", url: "/products/mobileseries/trackmountedscreen" },
        { name: "Track Mounted Scalper", url: "/products/mobileseries/trackmountedscalper" },
        { name: "Track Mounted Vertical Shift Impactor", url: "/products/mobileseries/trackmountedverticalshiftimpactor" },
      ],
    },
    {
      title: "SEMI MOBILE SERIES",
      description:
        "The HEFTY Semi Mobile Series delivers the strength of stationary crushers with the flexibility to move when you need it. Ideal for short- to mid-term operations, it’s built for rapid setup, reliable output, and rugged performance anywhere.",
      items: [
        { name: "Pro Fast Jaw", url: "/products/semimobileseries/profastjaw" },
        { name: "Pro Fast Cone", url: "/products/semimobileseries/profastcone" },
        { name: "Pro Fast Vertical Shift Impactor", url: "/products/semimobileseries/profastverticalshiftimpactor" },
      ],
      hasButton: true,
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Section Title & Description */}
            <div className="space-y-6">
              <h2 className="text-5xl text-blue-900 hover:text-[#ec6b24] transition-colors font-bold">
                {section.title}
              </h2>
              <p className="text-black text-base leading-relaxed max-w-xl mx-auto">
                {section.description}
              </p>
            </div>

            {/* Section Items */}
            <div className="flex flex-wrap justify-center gap-12 mt-8">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => handleClick(item.url)}
                >
                  <svg
                    className="w-5 h-5 text-gray-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                  <span className="text-lg text-blue-900 hover:text-[#ec6b24] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional Read More Button */}
            {section.hasButton && (
              <button
                className="mt-8 px-6 py-3 font-semibold rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                onClick={() => handleClick("/products/crushers/crushers")}
              >
                Read More
              </button>
            )}

            {/* Divider */}
            {idx < sections.length - 1 && (
              <hr className="my-12 border-t border-gray-300 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
