"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "JAW CRUSHERS", link: "/products/crushers/jawcrushers" },
    { name: "CONE CRUSHERS", link: "/products/crushers/conecrushers" },
    { name: "ROLL CRUSHERS", link: "/products/crushers/rollcrushers" },
   
  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/crushers/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
            Powerful Crushing Solutions for Every Industry
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, we design and manufacture high-performance crushers that deliver maximum productivity, reliability, and durability. Whether you’re working in mining, quarrying, construction, or recycling, our range of crushers is built to handle even the toughest materials with ease.
          </p>
          <p className="text-base text-gray-200 mb-6">From reducing large rocks to precise aggregate sizes, we provide customized crushing solutions that meet your exact production requirementsAt Hefty, we design and manufacture high-performance crushers that deliver maximum productivity, reliability, and durability. Whether you’re working in mining, quarrying, construction, or recycling, our range of crushers is built to handle even the toughest materials with ease.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/crushers/C2.jpg" // make sure to place the image in /public folder
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
              What is a Crusher?
            </h2>
            <p className='text-base text-gray-700'>
              A crusher is a machine designed to reduce large rocks, ores, and minerals into smaller, manageable sizes for further processing or direct use in construction. Crushers play a vital role in the production of aggregates, mining operations, and material recycling.
            </p>
            <p className="text-base text-gray-700">At Hefty, our crushers are engineered to deliver:</p>
            <ol className='text-base text-gray-700'>
              <li>High throughput for faster operations</li>
              <li>Robust performance in demanding environments</li>
              <li>Easy maintenance for reduced downtime</li>
              <li>Energy-efficient designs for cost savings</li>
            </ol>
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Why Choose Hefty Crushers?
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
                  <h3 className="text-xl text-white font-semibold mb-2">Precision Engineering – Built for Maximum Performance and Durability</h3>
                  <p className="text-sm text-white">
                    Every Hefty crusher is the result of advanced design techniques, premium-grade materials, and rigorous quality testing. Our engineering team uses cutting-edge CAD modeling and simulation tools to ensure each unit operates with optimal crushing force, minimal wear, and consistent output. From heavy-duty frames to wear-resistant liners, every component is designed to withstand extreme working conditions without compromising efficiency.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Custom Solutions – Tailored to Your Material and Output Requirements</h3>
                   <p className="text-sm text-white">
                   We know that no two crushing applications are the same. Whether you’re processing hard granite, soft limestone, recycled concrete, or metallic ores, Hefty offers customized configurations to meet your exact requirements. We work closely with you to determine feed size, capacity targets, output size, and site constraints so we can deliver a crusher that fits your operational needs perfectly.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">After-Sales Support – Comprehensive Maintenance and Spare Parts Supply</h3>
                   <p className="text-sm text-white">
                  At Hefty, our relationship doesn’t end with the sale – it begins there. We offer complete lifecycle support, including preventive maintenance services, emergency repairs, training for your operators, and an extensive inventory of genuine spare parts. Our goal is to minimize downtime and keep your crushers running at peak performance year after year.
                  </p>
                </div>
               
              </div>
            </div>
          </section>
        

      <section className="bg-gray-200 px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold leading-tight mb-4">
                  Global Reach –<br />
                  <span className="text-blue-900 hover:text-[#ec6b24]">Trusted by Industries Worldwide</span> 
                </h2>
          <p className="text-black text-base mb-6 max-w-xl">
            With installations across mining, construction, quarrying, and recycling industries in multiple countries, Hefty has earned a reputation for reliability and excellence. Our crushers are chosen by businesses worldwide for their consistent performance, ease of maintenance, and superior return on investment. Wherever you operate, our global service network ensures you’re never without support.
          </p>
          
         
           
        </div>

        {/* Right: Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <Image
            src="/crushers/C3.jpg" 
            alt="Developer at work"
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
        CRUSHERS
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
