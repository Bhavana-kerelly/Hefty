"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [
    { name: "TMS (3 DECK)", link: "/products/mobileseries/tms3deck" },
    { name: "TMS (4 DECK)", link: "/products/mobileseries/tms4deck" },

  ];

const steps = [
  "Quarrying & Mining Operations",
  "Sand & Gravel Screening",
  "Construction and Demolition Waste Processing",
  "Recycled Aggregates Production",
  "Topsoil & Compost Screening",

];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobileseries/S1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Precision Screening. Maximum Mobility. Unmatched Productivity.
          </h2>
          <p className="text-base text-gray-200 mb-6">
          At Hefty, we understand that high-quality screening is just as important as crushing in delivering the perfect aggregate. Our Track Mounted Screen series combines superior screening performance with the flexibility and convenience of a mobile unit, ensuring you can process material efficiently — anytime, anywhere.
          </p>
           <p className="text-base text-gray-200 mb-6">
           Built on a heavy-duty tracked chassis, these machines are engineered to move seamlessly across challenging terrains while delivering precise separation of materials. Whether you need primary, secondary, or final screening, Hefty Track Mounted Screens are your perfect on-site solution.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/mobileseries/S2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
          Why Choose Hefty Track Mounted Screen?
            </h2>
            <ol className='text-base text-gray-700'>
              <li>Mobility Without Compromise – Move effortlessly between sites while maintaining high output.</li>
              <li>Consistent Quality – Precision-engineered to produce uniform, high-quality screened material.</li>
              <li>Fuel Efficiency – Optimized for low operational costs without sacrificing performance.</li>
              <li>Low Maintenance – Designed with fewer wear parts and easy accessibility for servicing.</li>
            </ol>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Mobile Efficiency – Easily transport between job sites without dismantling.</h3>  
                  
                </div>
               
                  
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">High-Capacity Screening – Capable of handling a variety of materials, from aggregates to sand and gravel.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Multi-Deck Options – Choose from 2-deck or 3-deck configurations for flexible screening.</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Build – Rugged frame and components designed for long-term durability.</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Adjustable Screening Angles – Optimize performance for different materials and output sizes.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">User-Friendly Controls – Simple operation with quick setup and minimal downtime.</h3>
                   
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
                    src="/mobileseries/S3.jpg"
                    alt="Documents"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </section>
            <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of TMS
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