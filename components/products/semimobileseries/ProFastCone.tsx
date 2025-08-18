"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [
    { name: "PROFAST CONE PRFMQ SERIES", link: "/products/semimobileseries/prfmqseries" },
    { name: "PROFAST CONE PRFMC SERIES", link: "/products/semimobileseries/prfmcseries" },

  ];

const steps = [
  "Quarrying & Mining",
  "Aggregate Production",
  "Concrete & Asphalt Recycling",
  "Road Construction Projects",
  "Infrastructure Development"
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/semimobileseries/PC1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Profast Cone Crusher
          </h2>
          <p className="text-base text-gray-200 mb-6">
          The Profast Cone Crusher Series is engineered for rapid deployment, high production efficiency, and cost-effective crushing. Designed for both stationary and portable applications, this cone crusher offers the perfect balance between mobility, performance, and durability.
          </p>
          <p className="text-base text-gray-200 mb-6">
          Its innovative design ensures quick setup and relocation, making it ideal for projects that require frequent movement without compromising on quality. The Profast Cone excels in delivering high-quality aggregates with consistent shape and gradation — essential for concrete, asphalt, and road base production.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/semimobileseries/PC2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Why Choose Profast Cone Crusher?
            </h2>
           
             <ol className='text-base text-gray-700'>
              <li>Rapid Installation & Commissioning: Cut down on downtime and start production faster.</li>
              <li>Precision Crushing: Delivers superior cubical aggregates with consistent quality.</li>
              <li>Portable & Flexible: Suited for a variety of sites, from quarries to urban projects.</li>
              <li>Long-Term Reliability: Built to handle tough operating conditions with minimal maintenance.</li>
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
                  <h3 className="text-xl text-white font-semibold mb-2">1.Quick Setup & Mobility</h3> 
                  <ol className="text-sm text-white mb-2">
                    <li>Designed for fast transportation and installation.</li>
                    <li>Ideal for short-term contracts or multi-site operations.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">2.High Crushing Efficiency</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Optimized chamber geometry and speed for maximum throughput.</li>
                    <li>Maintains consistent product shape even with varying feed conditions.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">3.Heavy-Duty Build</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Rugged frame and components for extended service life.</li>
                    <li>Can withstand the demands of hard and abrasive materials.</li>
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">4.Energy-Efficient Operation</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Lower fuel consumption without compromising productivity.</li>
                    
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">5.User-Friendly Controls</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Intuitive interface for easy operation and monitoring.</li>
                    <li>Equipped with advanced safety interlocks for operator protection.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">6.Low Maintenance Needs</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Easy access to wear parts for quick servicing.</li>
                    <li>Reduced downtime and maintenance costs.</li>
                  </ol>
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
                    src="/semimobileseries/PC3.jpg"
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
        Types of Profast Cone
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