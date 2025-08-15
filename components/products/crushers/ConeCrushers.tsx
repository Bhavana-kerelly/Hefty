"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Cone Crushers (AVC Series)", link: "/products/crushers/ccavcseries" },
    { name: "Cone Crusher (QM Series)", link: "/products/crushers/ccqmseries" },
    { name: "GYRATORY CONE CRUSHER", link: "/products/crushers/gyratoryconecrusher" },
  ];


export default function ConeCrusher() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/Crushers/CO1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
            Precision Crushing for Superior Output
          </h2>
           <p className="text-base text-gray-200 mb-6">
           At Hefty, our Cone Crushers are engineered for secondary and tertiary crushing where precision, performance, and reliability matter most. Built with advanced technology and robust materials, Hefty Cone Crushers deliver excellent shape output, high reduction ratios, and consistent performance in demanding applications.
          </p>
         
        </div>
      </section>

      <section className="w-full px-6 py-12 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/crushers/CO2.jpg"
                      alt="Chatbot Financing Scope"
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="text-gray-700 text-lg space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
                  What is a Cone Crusher & How they Work ?
                  </h2>
                  <p className='text-base text-gray-700'>
                   A Cone Crusher is a compression-type machine that reduces material by squeezing it between a rotating mantle and a stationary concave. Designed for handling medium-hard to very hard materials, cone crushers are ideal for producing well-shaped aggregates and fine materials for construction, mining, and industrial applications.
                  </p>
                  
                  <ol className='text-base text-gray-700'>
                    <li> Feeding: Material enters the top of the cone crusher.</li>
                    <li>Compression: The rotating mantle moves in a circular motion, compressing the material against the concave wall.</li>
                    <li>Discharge: Crushed material exits through the bottom once it reaches the desired size.</li>
                  </ol>
                </div>
              </div>
            </section>
      
      <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of Hefty Cone Crushers
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
                  <h3 className="text-xl text-white font-semibold mb-2">High Crushing Efficiency</h3>
                  <p className="text-sm text-white">
                    Optimized chamber design for maximum throughput
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Consistent Output</h3>
                   <p className="text-sm text-white">
                  Produces uniform particle sizes with excellent shape
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Hydraulic Adjustment & Overload Protection</h3>
                   <p className="text-sm text-white">
                  Safe, quick setting changes and damage prevention
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Low Maintenance</h3>
                   <p className="text-sm text-white">
                   Durable components and easy service access
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Multiple Configurations</h3>
                   <p className="text-sm text-white">
                 Stationary, skid-mounted, and mobile options available
                  </p>
                </div>
               
              </div>
            </div>
          </section>
        
       <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Cone Crushers
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