"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Manufactured Sand (M-Sand) production – Removing excessive fines to meet IS and ASTM standards.",
  "Crushed Stone Sand – Producing consistent gradation for use in ready-mix concrete and asphalt.",
  "Industrial Minerals – Classifying materials like limestone, dolomite, and silica.",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/classifier/P1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Precision Air Separation for Superior Sand Quality
          </h2>
          <p className="text-base text-gray-200 mb-6">
        The Pro Air Classifier is an advanced dry classification system designed to separate particles with high precision using air as the medium. This innovative solution eliminates the need for water in the classification process, making it an ideal choice for regions facing water scarcity or operations seeking to minimize water usage.
          </p>
          <p className="text-base text-gray-200 mb-6">
        By leveraging aerodynamic principles, the Pro Air Classifier efficiently removes ultra-fines from manufactured sand, ensuring consistent particle size distribution and improved quality for concrete and asphalt applications.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/classifier/P2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Highlights
            </h2>
          <ol className="text-base text-black mb-6">
            <li>Pro Air Classifier produces high quality sand for all range of applications including concrete manufacture (M-Sand).</li>
<li>Stand – alone modular units to integrate with existing plants.</li>
<li>Product of 100 micron or smaller blind particles can be classified without screen.</li>
<li>Propel Pro Air Classifier is eco-friendly and removes fines without using a single drop of water.</li>
<li>The parts of the equipment which are exposed to sand surfaces are covered with wear liners.</li>

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
                  <h3 className="text-xl text-white font-semibold mb-2">Water-Free Operation</h3> 
                  <ol className="text-sm text-white mb-2">
                    <li>Completely eliminates water dependency in sand processing.</li>
                    <li>Reduces environmental impact and lowers operational costs associated with water treatment.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">High Precision Separation</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Achieves accurate cut points for removing unwanted fines.</li>
<li>Delivers superior sand gradation and consistent product quality.</li>
                    
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Energy Efficient</h3>
                   <ol className="text-sm text-white mb-2">
                    <li>Optimized design minimizes power consumption without compromising performance.</li>
                  </ol>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Low Maintenance</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Fewer moving parts reduce wear and tear.</li>
<li>Easy-to-access components ensure quick serviceability.</li>
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Environment-Friendly</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Dust suppression systems reduce airborne particles, ensuring a cleaner work environment.</li>
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
                    src="/screena/VS3.jpg"
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