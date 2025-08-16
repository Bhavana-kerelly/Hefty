"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Sand & Aggregate Washing Plants",
"Mining & Mineral Processing",
"Industrial Wastewater Treatment",
"Recycled Materials Processing",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/washingsystems/T1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Thickener
          </h2>
          <p className="text-base text-gray-200 mb-6">Efficient Water Recovery for Sustainable Operations</p>
          <p className="text-base text-gray-200 mb-6">
       The AVTH Series Thickener is designed to deliver maximum efficiency in water recovery, making it an essential part of any sand washing and mineral processing setup. It works by allowing solid particles to settle at the bottom while the clear water overflows, enabling water recycling and reducing environmental impact.
          </p>
          <p className="text-base text-gray-200 mb-6">
        With its high-rate sedimentation technology, the AVTH Series ensures faster processing, smaller footprint requirements, and reduced operational costs. Its sturdy design and automated control options make it easy to operate while maintaining consistent performance in even the most demanding conditions.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/washingsystems/T2.jpg"
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
            <li>High-Rate Sedimentation – Accelerated settling for improved water clarity.</li>
<li>Sturdy Construction – Built to handle abrasive slurries and heavy-duty applications.</li>
<li>Space-Saving Design – Compact footprint with high efficiency.</li>
<li>Eco-Friendly Operation – Reduces water wastage and environmental impact.</li>
<li>Automated Controls – Optional PLC-based automation for minimal human intervention.</li>

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
                  <h3 className="text-xl text-white font-semibold mb-2">Hefty AVTH Thickener series can be used as clarifiers for removal of minerals or fines from the process water.</h3> 
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Waste water from the washing systems is delivered to the center of the thickener to allow maximum time for material settlement.</h3>
               
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Gravity-based settling supported by rake mechanism allows even settlement of the sludge in the discharge area.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Ensures quick and safe access to the integrated cone section minimizing the time required for maintenance and maximizing equipment availability.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Electrically driven agitator allows for easy maintenance as well as reduced inventory for parts.</h3>
                  
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
                    src="/washingsystems/T3.jpg"
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