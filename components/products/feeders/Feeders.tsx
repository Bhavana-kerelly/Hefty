"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Grizzly Feeder", link: "/products/feeders/grizzlyfeeder" },
    { name: "Feeder Screen", link: "/products/feeders/feederscreen" },
    { name: "Pan Feeder", link: "/products/feeders/panfeeder" },


  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/feeders/F1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Reliable Material Handling for Every Operation
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, we design and manufacture feeders that deliver a steady, controlled flow of material to crushers, screens, and conveyors — ensuring maximum efficiency and consistent output. Built to handle a wide range of materials and capacities, our feeders combine strength, precision, and durability for the toughest mining, quarrying, and aggregate applications.
          </p>
          <p className="text-base text-gray-200 mb-6">Whether you need to handle fine particles, large boulders, or everything in between, Hefty Feeders are engineered to deliver unmatched performance in material processing.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/feeders/F2.jpg" // make sure to place the image in /public folder
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
              What Are Feeders?
            </h2>
            <p className="text-base text-black mb-6">A feeder is a machine that receives bulk material from a dump hopper, truck, or loader and delivers it at a regulated rate to the next stage of processing. Feeders are crucial for smooth operation, reducing downtime, and improving overall efficiency.
          </p>
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of Hefty Feeders
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
                  <h3 className="text-xl text-white font-semibold mb-2">Robust Construction</h3>
                  <p className="text-sm text-white">
                    Built with high-strength steel and reinforced components, Hefty Feeders are engineered to handle the toughest mining, quarrying, and aggregate applications. Their heavy-duty framework ensures stability and durability, even in continuous high-load operations.
                  </p>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Adjustable Feed Rates</h3>
                   <p className="text-sm text-white">
                   Equipped with precise control systems, our feeders allow you to fine-tune the material flow to match downstream processing needs. This ensures optimal efficiency, prevents overloading, and improves the overall productivity of your plant.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Wear-Resistant Liners</h3>
                   <p className="text-sm text-white">
                  Strategically fitted with premium wear-resistant liners, Hefty Feeders are designed to withstand abrasive materials, extending the service life of key components and reducing replacement costs over time.
                  </p>
                  
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> High-Efficiency Motors</h3>
                   <p className="text-sm text-white">
                  Our feeders come with energy-efficient motors that deliver consistent performance while minimizing operational costs. These motors are engineered for long life and low maintenance, ensuring reliability shift after shift.
                  </p>
                 
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Easy Maintenance Access</h3>
                   <p className="text-sm text-white">
                 The design prioritizes accessibility with strategically placed service points, making inspections, lubrication, and part replacements quick and simple. This reduces downtime and keeps your operations running smoothly.
                  </p>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Dust & Noise Control</h3>
                   <p className="text-sm text-white">
                 Optional dust covers, liners, and noise-reducing components are available to help you meet environmental and safety standards. This feature makes Hefty Feeders ideal for operations in sensitive work zones or areas with strict compliance requirements.
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
            src="/feeders/F3.jpg" 
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
        Types of Feeders 
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
