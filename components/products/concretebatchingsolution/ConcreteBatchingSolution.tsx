"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import React, { useState } from "react";

const faqs = [
  {
    question: "Advanced Mixing Technology",
    answer:
      "Our batching plants use state-of-the-art mixing systems to ensure perfect blending of cement, aggregates, water, and admixtures for superior concrete quality.",
  },
  {
    question: "Customizable Configurations",
    answer: "Available in stationary, mobile, and compact models — we tailor the plant design to match your project needs and site conditions.",
  },
  {
    question: "High Output Capacity",
    answer: "From small to large-scale production, our plants handle a wide range of capacities to keep up with tight deadlines without compromising quality.",
  },
  {
    question: "Automated Control Systems",
    answer: "Fully equipped with intelligent automation for real-time monitoring, accurate dosing, and seamless operation with minimal manual intervention.",
  },
  {
    question: "Eco-Friendly Operation",
    answer: "Designed for minimal waste generation, dust suppression, and energy efficiency to meet modern environmental standards.",
  },
];


const steps = [
  "Road & Highway Projects",
"Bridges & Flyovers",
"Commercial & Residential Buildings",
"Industrial & Infrastructure Projects",
];


export default function Crushers() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
    const toggleFAQ = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/concrete/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Concrete Batching Solutions
          </h2>
          <p className="text-base text-gray-200 mb-6">
          Our Concrete Batching Solutions are engineered to deliver consistent, high-quality concrete while optimizing efficiency and reducing operational costs. Whether you’re working on infrastructure projects, commercial buildings, or large-scale construction, our batching systems ensure precise mixing, uniform consistency, and unmatched reliability.
          </p>
         
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/concrete/C2.jpg" // make sure to place the image in /public folder
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
            Key Features
            </h2>
            <ol className="text-base text-black mb-6">
              <li>Precision aggregate weighing and feeding</li>
              <li>Robust and durable structure for long-term use</li>
              <li>Easy maintenance with minimal downtime</li>
              <li>Rapid installation and relocation (for mobile units)</li>
              
            </ol>
          </div>
        </div>
      </section>
     
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Highlights 
                </h4>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Hefty –<br />
                  <span className="text-gray-700">Powering Productivity</span> <br />
                  <span className="text-white">With Precision Crushing</span>{" "}<br/>
                  <span className="text-gray-700">& Screening</span>
                </h2>
                
                <p className='text-gray-900 text-sm'>At Hefty, we understand that a crusher isn’t just a machine – it’s the heart of your operation. That’s why our crushers are built with a commitment to engineering excellence, operational reliability, and long-term value.</p><br/>
                <button className="border border-blue-900 text-white px-6 py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5">
                  <span className="text-blue-900">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Additional scope like silo & its accessories, chilling unit, weigh bridge & diesel generators can be offered upon request.</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Technical parameters mentioned here are standard and scope of supply will be finalised upon mutual agreement.</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Attracts additional technical, cost and delivery time.</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Specific mixer make if any, can be offered upon request.</h3>
                
                </div>
                 
              </div>
            </div>
          </section>
         <section className="bg-gray-200 px-6 py-12 md:py-20 w-full">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
                          Applications
                        </h2>
                        
                        <ul className="space-y-4">
                          {steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                              <CheckCircle className="text-blue-900 mt-1" size={20} />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
            
                      <div className="w-full rounded-xl overflow-hidden shadow-md">
                        <Image
                          src="/concrete/C3.jpg"
                          alt="Documents"
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </section>
      

      <div className="flex flex-col bg-white lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
      {/* Left Side: FAQ */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-blue-900 hover:text-[#ec6b24] text-4xl font-bold mb-6 ">Why Choose Our Concrete Batching Solutions?</h2>
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
                  index === activeIndex ? "text-[#ec6b24]" : "text-blue-900"
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
          src="/concrete/C4.jpg" // Replace with your image path
          alt="Description of your image" // Provide a descriptive alt text
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    <ContactSection />
    
    </>

);
}
