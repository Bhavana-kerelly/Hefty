"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Well-designed feeder body, bolted construction to withstand maximum impact loads and easy maintenance.",
"Cost-effective hardened steel with replaceable grizzly cartridge sections.",
"Impact areas are covered with high wear resistant replaceable wear liners.",
"VFD speed control system (optional).",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/feeders/FS1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Efficient Material Separation and Controlled Feeding in One Solution
          </h2>
          <p className="text-base text-gray-200 mb-6">
          The Hefty Feeder Screen is a versatile piece of equipment that combines the functions of a feeder and a screening unit, making it ideal for applications where pre-screening of fines is essential before primary crushing. Built with precision engineering and heavy-duty construction, it ensures consistent material flow while efficiently separating unwanted fines, reducing crusher wear, and improving overall plant performance.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/feeders/FS2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Why Choose Hefty Feeder Screens?
            </h2>
            <p className="text-base text-black mb-6">
          With Hefty’s commitment to durability, efficiency, and precision, our Feeder Screens deliver exceptional value by combining feeding and screening in a single, space-saving unit. They’re engineered to optimize your plant’s productivity while reducing wear, maintenance, and operational costs.
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
                  <h3 className="text-xl text-white font-semibold mb-2">Dual Functionality – Feeding & Screening</h3>
                 <p className="text-sm text-white mb-2">
                    The Feeder Screen not only delivers a steady flow of material to the crusher but also removes fine particles, ensuring that only the required size material enters the crushing chamber.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Heavy-Duty Construction</h3>
                  <p className="text-sm text-white mb-2">
                    Manufactured from high-grade steel and reinforced with wear-resistant components, the Feeder Screen is built to withstand the toughest quarrying, mining, and recycling conditions.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Adjustable Vibration Settings</h3>
                 <p className="text-sm text-white mb-2">
                    Variable speed and adjustable stroke length allow operators to control the feed rate and screening efficiency according to material characteristics.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Wear-Resistant Decks & Liners</h3>
                  <p className="text-sm text-white mb-2">
                    Fitted with abrasion-resistant screen decks and liners to maximize service life and reduce maintenance costs.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Reduced Crusher Wear & Maintenance</h3>
                  <p className="text-sm text-white mb-2">
                    By removing fines early, the Feeder Screen minimizes unnecessary load on the crusher, leading to longer crusher life and reduced downtime.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Easy Access for Maintenance</h3>
                  <p className="text-sm text-white mb-2">
                    The unit is designed with accessibility in mind, allowing quick replacement of wear parts and reduced servicing time.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Energy-Efficient Operation</h3>
                  <p className="text-sm text-white mb-2">
                    Powered by high-efficiency motors and designed for smooth operation, ensuring optimal productivity with low power consumption.
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
                    src="/feeders/FS3.jpg"
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