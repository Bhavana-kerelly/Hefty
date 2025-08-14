"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Comprehensive Product Range",
    answer:
      "From jaw, cone, and impact crushers to track-mounted mobile units and integrated screening systems, Hefty offers solutions for every stage of your crushing and screening process. Our equipment is designed to handle diverse materials and applications, ensuring you find the perfect fit for your project.",
  },
  {
    question: "Proven Engineering Excellence",
    answer: "With years of industry expertise, our designs are backed by in-depth research, cutting-edge technology, and rigorous testing. We don’t just build machines — we craft solutions that consistently deliver high productivity, low downtime, and maximum efficiency.",
  },
  {
    question: "Nationwide Presence & Trust",
    answer: "Our machines operate successfully across varied terrains and industries nationwide. Customers in mining, construction, and infrastructure sectors trust Hefty for reliability, performance, and timely project delivery.",
  },
  {
    question: "Commitment to Quality & Safety",
    answer: "Every product is manufactured to meet the highest safety and durability standards. From robust materials to precision engineering, we ensure your operations run smoothly while prioritizing the safety of your team.",
  },
  {
    question: "Dedicated Service & Support",
    answer: "We believe in long-term partnerships. Our dedicated service network offers 24/7 assistance, spare parts availability, and on-site technical support to keep your operations running without interruption.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
      {/* Left Side: FAQ */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6 ">Why Choose Hefty</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b ${
              index === activeIndex ? "border-[#ec6b24]" : "border-gray-300"
            } py-4 cursor-pointer`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-semibold text-lg ${
                  index === activeIndex ? "text-[#ec6b24]" : "text-black"
                }`}
              >
                {faq.question}
              </p>
              <span className="text-xl">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            {index === activeIndex && (
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 lg:pl-12">
        <img
          src="/path/to/your-image.jpg" // Replace with your image path
          alt="Description of your image" // Provide a descriptive alt text
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}