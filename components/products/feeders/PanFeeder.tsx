"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Propel Pan Feeders have been designed to operate in the hardest of applications and conditions.",
"High-capacity vibrator motors generate up to 8 mm stroke for maximum production in most materials ranging from small granular materials to large lumps produced from primary crushers.",
"High wear resistant body, high-quality vibrators ensure efficiency, stable feeding and effective long-term operation with minimum breakdowns.",
"Versatile design can be mounted on support springs or hung from cables, depending on the location and application."
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/feeders/PF1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
          Precision Feeding for Consistent Performance
          </h2>
          <p className="text-base text-gray-200 mb-6">
          At Hefty, our Pan Feeders are engineered to deliver controlled and consistent material flow for a variety of applications — from mining and aggregates to recycling and industrial processes. Designed with durability, efficiency, and ease of maintenance in mind, these feeders ensure your plant runs smoothly, day after day.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/feeders/PF2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Why Choose Hefty Pan Feeders?
            </h2>
            <p className="text-base text-black mb-6">
         Our Pan Feeders are ideal for handling bulk materials in primary, secondary, and tertiary stages of crushing and screening. With a rugged structure and optimized design, they can efficiently feed materials to crushers, screens, and conveyors without interruption.
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
                  <h3 className="text-xl text-white font-semibold mb-2"> Heavy-Duty Construction</h3>
                 <p className="text-sm text-white mb-2">
                    Built with high-grade steel and reinforced components, Hefty Pan Feeders can withstand the toughest conditions, including abrasive materials and high-impact loading.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Adjustable Feed Rates</h3>
                  <p className="text-sm text-white mb-2">
                    Precision control allows operators to fine-tune the feed rate, ensuring optimal crusher or screen performance while reducing wear and tear.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Wear-Resistant Liners</h3>
                 <p className="text-sm text-white mb-2">
                    Replaceable liners extend the lifespan of the feeder, protecting it from abrasive wear and reducing maintenance costs.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Vibration Technology for Smooth Flow</h3>
                  <p className="text-sm text-white mb-2">
                    Advanced vibration technology ensures an even and continuous flow of materials without blockages or surges.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Low Maintenance Design</h3>
                  <p className="text-sm text-white mb-2">
                    Simple access to key components makes inspection, servicing, and liner replacement fast and hassle-free.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Energy-Efficient Motors</h3>
                  <p className="text-sm text-white mb-2">
                    High-performance, low-energy motors reduce operational costs while delivering consistent feeding power.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Dust & Noise Control Options</h3>
                  <p className="text-sm text-white mb-2">
                    Optional covers, liners, and dust suppression systems help maintain compliance with environmental standards and improve workplace safety.
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
                    src="/feeders/PF3.jpg"
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