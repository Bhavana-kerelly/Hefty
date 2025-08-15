"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Manufactured sand production.",
"Shaping of aggregates for asphalt and concrete.",
"Production of high-quality cubical particles.",
"Secondary, tertiary, and quaternary crushing.",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/impactors/VI1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           VERTICAL SHAFT IMPACTOR
          </h2>
          <p className="text-base text-gray-200 mb-6">
          At Hefty, our Vertical Shaft Impactors (VSI) are engineered for delivering precise shaping and consistent quality in aggregate production. Designed with advanced rotor technology and robust build quality, our VSI crushers excel in producing high-quality cubical aggregates, sand, and fines, making them essential for both construction and mining industries.
          </p>
          <p className="text-base text-gray-200 mb-6">
          Whether it’s shaping hard stones or producing manufactured sand, the Hefty VSI stands out for its efficiency, durability, and reduced operating costs.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/impactors/VI2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Key Features
            </h2>
            <ol className="text-base text-black mb-6">
              <li>High-Precision Rotor Design – Ensures uniform particle shape and size.</li>
<li>Versatile Application – Suitable for sand production, shaping aggregates, and reducing flaky particles.</li>
<li>Energy Efficient – Optimized for lower power consumption without compromising output.</li>
<li>Easy Maintenance – Simplified access to wear parts for reduced downtime.</li>
<li>Durable Build – Engineered with heavy-duty materials for long-lasting performance.</li>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Steel structure for smooth operation. Simple inter-changeable cartridge type rock box for ‘rock-on-rock’ applications.</h3> 
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Hydraulic feed control In-built device. Parallel flow system provides increased capacity and less micro fines content.</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Optional setup for wet application / roof lifting mechanism (optional) available for easy maintenance.</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Due to better shaping, the voids are taken care of, resulting in less consumption of cement. Propel Vertical Shaft Impactor produces shapes as per the Ministry of Road Transport & Highways (MORTH) standards.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Crusher impact combined with speed gives the unique shape resulting in production of high-quality manufactured sand confirming to C 144 standards.</h3>
                  
                </div>
                
                
                
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
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
                    src="/impactors/VI3.jpg"
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