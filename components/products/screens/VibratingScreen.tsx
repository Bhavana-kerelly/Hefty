"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Mining & Minerals – Efficient screening of ores and minerals.",
"Aggregates & Quarrying – Grading and separating crushed stone, gravel, and sand.",
"Recycling – Sorting materials for reuse and waste reduction.",
"Industrial Processing – Screening powders, granules, and bulk solids.",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/screens/VS1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           VIBRATING SCREEN MVS SERIES
          </h2>
          <p className="text-base text-gray-200 mb-6">
        The Hefty MVS Series Vibrating Screen is designed for precision screening, durability, and high performance in demanding material processing applications. Engineered with advanced technology and robust construction, the MVS Series delivers consistent efficiency in screening a wide range of materials across mining, quarrying, aggregates, and industrial applications.
          </p>
          <p className="text-base text-gray-200 mb-6">
        Whether you’re separating fine particles, removing impurities, or grading material, the MVS Series offers reliable operation, reduced maintenance, and enhanced productivity.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/screens/VS2.jpg"
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
            <li>High Screening Efficiency – Optimized vibration mechanism ensures precise separation of materials.</li>
<li>Robust Design – Heavy-duty construction for long service life in challenging conditions.</li>
<li>Multiple Deck Configurations – Available in single, double, or triple deck options for varied requirements.</li>
<li>Easy Maintenance – Simple access to components for quick inspection and servicing.</li>
<li>Customizable Sizes – Tailored screen dimensions to match your production needs.</li>
<li>Energy Efficient – Advanced drive mechanism reduces power consumption while maintaining performance.</li>
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
                  <h3 className="text-xl text-white font-semibold mb-2">High screening capacity and excellent performance.</h3> 
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Circular motion modular vibrators with two bearings per vibrator, interconnected by cardan shaft.</h3>
               
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Unique angle of the circular motion MVS Screens are able to achieve higher productivity.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Modular design is available either as 1, 2, 3 or 4 deck and has excellent segregation to suit the aggregate and mining industries requirements.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Stroke adjustment through counter weight. Grease lubrication system ensures easy and low maintenance.</h3>
                  
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
                  <p>The MVS Series Vibrating Screen is suitable for:</p>
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
                    src="/screens/VS3.jpg"
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