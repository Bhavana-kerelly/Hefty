"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "High manganese steel replaceable tapered grizzly bars with cartridge type arrangement for effective scalp and bypass material to relieve the crusher.",
"Counter unbalanced electric motor drive.",
"Hardened steel replaceable grizzly cartridge sections.",
"Modular vibrator with cardan shaft design comes with easy maintenance, excellent durability and adjustable stroke.",
"Impact areas are covered with high wear resistant replaceable liners.",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/feeders/GF1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Built for Unmatched Durability & Precision Feeding
          </h2>
          <p className="text-base text-gray-200 mb-6">
          When it comes to handling the toughest materials in mining, quarrying, and recycling operations, Hefty Grizzly Feeders stand as the industry benchmark. Engineered for high-capacity feeding, effective scalping, and exceptional wear resistance, these feeders ensure your downstream crushers and screens receive a steady, controlled flow of material — maximizing productivity and minimizing downtime.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/feeders/GF2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Why Choose Hefty Grizzly Feeders?
            </h2>
            <p className="text-base text-black mb-6">
          Our feeders are designed not just to move material, but to optimize your entire processing line. From robust build quality to precision-engineered components, every Hefty Grizzly Feeder is built to thrive in the harshest operating environments.
          </p>
          
             
        </div>
        </div>
      </section>

       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features
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
                  <h3 className="text-xl text-white font-semibold mb-2">Robust Construction</h3> 
                  <p className="text-sm text-white mb-2">
                    Manufactured from high-tensile steel with reinforced side plates, our feeders are built to withstand constant impact from heavy rocks, abrasive minerals, and bulk aggregates — making them ideal for demanding mining and quarrying applications.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Adjustable Feed Rates</h3>
                 <p className="text-sm text-white mb-2">
                    Equipped with variable speed drives and adjustable grizzly bars, you can fine-tune material flow to match your plant’s requirements, preventing crusher overloading and optimizing throughput efficiency.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Wear-Resistant Liners</h3>
                  <p className="text-sm text-white mb-2">
                    The feed surface and impact zones are protected with replaceable wear liners, made from abrasion-resistant materials, which significantly extend equipment life and reduce long-term maintenance costs.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">High-Efficiency Motors</h3>
                 <p className="text-sm text-white mb-2">
                    Fitted with energy-efficient, heavy-duty electric motors, our feeders deliver consistent performance with reduced power consumption — lowering operational costs while maintaining reliability.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Easy Maintenance Access</h3>
                  <p className="text-sm text-white mb-2">
                    Smart design features, such as bolted wear parts, accessible inspection doors, and modular components, allow quick servicing and minimal downtime, keeping your operations running smoothly.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Dust & Noise Control</h3>
                  <p className="text-sm text-white mb-2">
                    Optional dust covers, rubber liners, and low-noise vibration mechanisms help your plant meet strict environmental and workplace safety standards without compromising efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
                    Highlights 
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
                    src="/feeders/GF3.jpg"
                    alt="Documents"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </section>

            

      <ContactSection />
      
    </>
  );
}