"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';





export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-200 text-black flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/washingsystems/S1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-blue-900 hover:text-[#ec6b24] text-3xl font-bold mb-5">
           Sand Washer
          </h2>
          <p className="text-base text-black mb-6">
       Hefty’s Sand Washer is engineered to deliver superior cleaning of sand by removing impurities such as silt, clay, and dust particles. Designed for high efficiency, it ensures your sand meets the highest quality standards for construction, concrete production, and other applications. With a robust build and low maintenance design, our sand washers are a trusted choice for long-term, reliable operation.
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
                  <h3 className="text-xl text-white font-semibold mb-2">High-tech planetary gear reducer is used for better and efficient maintenance.</h3> 
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Cartridge type bucket wheel and spiral arrangement bucket speed controlled by VFD to control percentage of fines.</h3>
               
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Spiral wheels empowered with hardox liners for wear resistant and long life.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Total water trough is protected by anti-corrosive special coating.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">In the weir system, the higher the water velocity, more fines are washed away to the settling pond. Lower the water velocity, more fines are saved in the product.</h3>
                  
                </div>
                
              </div>
            </div>
          </section>
          {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/washingsystems/S2.jpg"
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
            <li>Efficient Cleaning – Effectively removes unwanted particles for cleaner, quality sand.</li>
<li>Durable Design – Built with wear-resistant materials for extended operational life.</li>
<li>Low Power Consumption – Engineered for cost-effective performance.</li>
<li>Easy Maintenance – Simple access points and minimal downtime.</li>
<li>High Capacity – Capable of handling large volumes for industrial-scale production.</li>

          </ol>
        </div>
        </div>
      </section>
      
            

      <ContactSection />
      
    </>
  );
}