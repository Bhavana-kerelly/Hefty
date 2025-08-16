"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const steps = [
  "Excellent process flexibility. Minimum operating cost (OPEX).",
"Stabilization during operation. Transportation between sites is faster and easy with the help of fine adjustment hydraulic jacks. Conveyors are built-in with the chassis.",
"Safety guards in compliance with machinery directives. Sturdy walkway with handrails, kick board and access ladders.",
"VFD for Grizzly Feeder (optional). Scalp conveyor (optional).",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/semimobileseries/PJ1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           PROFAST JAW
          </h2>
          <p className="text-base text-gray-200 mb-6">
           The Profast Jaw Crusher is engineered for rapid deployment, high mobility, and unmatched efficiency. Built for both primary and secondary crushing applications, it combines speed, strength, and smart engineering to deliver superior performance in even the most demanding environments.
          </p>
         
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/semimobileseries/PJ2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             What is Profast Jaw?
            </h2>
            <p className='text-base text-gray-700'>
              The Profast Jaw is part of Hailstone’s Profast Series—a line of portable, skid-mounted, and quick-to-install crushing solutions. Designed to minimize setup time and maximize productivity, it is the ideal choice for contractors, mining operators, and aggregate producers who need fast returns on investment without compromising on quality
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
                  <h3 className="text-xl text-white font-semibold mb-2">1.Modular Skid-Mounted Design</h3> 
                  <ol className="text-xl text-white font-semibold mb-2">
                    <li>Enables quick setup and relocation.</li>
                    <li>No need for elaborate civil foundations.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">2.High-Capacity Crushing Chamber</h3>
                  <ol className="text-xl text-white font-semibold mb-2">
                    <li>Optimized feed opening for maximum material intake.</li>
                    <li>Produces uniform, high-quality aggregates.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Jaw Construction</h3>
                  <ol className="text-xl text-white font-semibold mb-2">
                    <li>Made from wear-resistant, high-strength steel for longer service life.</li>
                    
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">4.Fuel-Efficient Operation</h3>
                  <ol className="text-xl text-white font-semibold mb-2">
                    <li>Optimized drive system reduces operating costs.</li>
                    
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">5.Advanced Safety Features</h3>
                  <ol className="text-xl text-white font-semibold mb-2">
                    <li>User-friendly controls and built-in safety interlocks.</li>
                    
                  </ol>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
                    Highlights :
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
                    src="/semimobileseries/PJ3.jpg"
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