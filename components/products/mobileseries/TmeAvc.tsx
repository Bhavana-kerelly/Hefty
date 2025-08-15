"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [

    { name: "Track Mounted Cone - QM Series", link: "/products/mobileseries/tmcqm" },

  ];


export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-100 text-black flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobileseries/TEA1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5 text-blue-900 hover:text-[#ec6b24]">
         Track Mounted Endurer – AVC Series
          </h2>
          <p className="text-base text-black mb-6">
         Hefty AVC Series is designed to maximise throughput and product shape in a wide range of crushing applications. The inclusion of a plant mounted double deck vibrating screen allows for oversize material to be re circulated for re crushing and for sized end products. Its cost effectiveness is justified by its low fuel consumption, low operating and maintenance costs as well as high capacity and environmental friendly.
          </p>
          
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
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy duty track unit with dual speed (optional) configuration.</h3> 
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Safety guards in compliance with machinery directive. Sturdy walkway with handrails, kick board and access ladders.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Dual power mode – flexibility to power the plant either by external electric connection or by on-board diesel generator power pack unit (optional).</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Four-point emergency stop. Detachable dog lead control system for marching.</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Radio remote control for marching (optional). Feed level sensor for crusher (optional).</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Electrical driven hydraulic system for quick setup & marching. Low noise acoustic engine canopy with overload protection.</h3>
                  
                </div>
                
              </div>
            </div>
          </section>

      
            <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Track Mounted Endurer 
      </h2>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border border-blue-900 rounded-md py-6 px-4 flex items-center justify-center hover:bg-[#ec6b24] transition text-sm font-medium text-center"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
      </section>
     

      <ContactSection />
      
    </>
  );
}