"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const tableData = [
    ["SERIES", "UNIT", "PSS 1550"],
    ["Top Deck Size", "mm (inch)", "4800 x 1540 (190.0 x 60.6)"],
    ["Bottom Deck Size", "mm (inch)", "4700 x 1540 (185.0 x 60.6)"],
    ["Number of decks","","2"],
    ["*Capacity", "TPH", "Up to 600"],

  ];
export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobileseries/TS1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Engineered for the Toughest Screening Challenges
          </h2>
          <p className="text-base text-gray-200 mb-6">
         The Hefty Track Mounted Scalper is built to take on the most demanding screening applications with unmatched precision and efficiency. Whether you’re working with heavy overburden, blasted rock, or construction & demolition debris, our scalper delivers maximum productivity without compromising mobility.
          </p>
           <p className="text-base text-gray-200 mb-6">
          Designed for rapid set-up, high capacity, and robust durability, it ensures your screening operations stay efficient, cost-effective, and adaptable to different terrains.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/mobileseries/TS2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
          Why TRACK MOUNTED SCALPER ?
            </h2>
             <p className="text-base text-black mb-6">
         Hefty Track Mounted Scalper PSS 1550 is a combination of extremely accurate scalp material screening of end product and high output. Its cost effectiveness is justified by its low fuel consumption, low operating and maintenance costs as well as high capacity. Propel PSS 1550 can be used in multiple applications such as mining, recycling or normal aggregate pre-screening.
          </p>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy duty track unit with dual speed (optional) configuration.</h3>  
                  
                </div>
               
                  
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Safety guards in compliance with machinerydirective sturdy walkway with handrails, kick board and access ladders.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Dual Power Mode – Flexibility to power the plant either by external electric connection or by on-board diesel generator power pack unit (optional).</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Four-point emergency stop. Detachable dog lead control system for marching.</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Radio remote control for marching (optional).Electrical-driven hydraulic system for quick set-up & marching. High screening capacity.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Conveyors well skirted and sealed to avoid material spillages.</h3>
                   
                </div>
              </div>
            </div>
          </section>
        
        <div className="p-4 mt-20 mb-20 bg-white">
          <h1 className='text-blue-900  text-4xl mb-5 text-bold'>Technical Data</h1>
      <table className="border border-gray-400 w-full text-center text-black">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex === 0 ? "font-bold bg-gray-200" : ""}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-400 p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
      
     
      <ContactSection />
      
    </>
  );
}