"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Vertical Shaft Impactor", link: "/products/impactors/verticalshiftimpactor" },
    { name: "Horizontal Shaft Impactor", link: "/products/impactors/horizontalshiftimpactor" },
   
  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/impactors/I1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Impactors – Precision Crushing with Hefty
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, our Impactors are engineered for unmatched performance in producing high-quality aggregates and processing a wide range of materials. Designed with advanced technology and robust construction, they deliver superior reduction ratios, exceptional shaping capabilities, and consistent output for demanding applications.
          </p>
          <p className="text-base text-gray-200 mb-6">Whether it’s mining, quarrying, recycling, or infrastructure development, our impactors are built to handle it all—turning raw material into premium products efficiently and reliably.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/impactors/I2.jpg" // make sure to place the image in /public folder
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
              Why Choose Hefty Impactors?
            </h2>
            <ol className="text-base text-black mb-6">
              <li>High Reduction Ratio – Achieves finer and more uniform material output.</li>
              <li>Versatility – Suitable for soft to medium-hard materials like limestone, gravel, and recycled concrete.</li>
              <li>Superior Shaping – Produces cubical aggregates ideal for construction and road building.</li>
              <li>Heavy-Duty Build – Rugged design ensures long-lasting performance under tough operating conditions.</li>
              <li>Easy Maintenance – Simplified access for wear part replacement and servicing.</li>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Adjustable settings for different product sizes</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-duty rotor and blow bars for consistent performance</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Wear-resistant liners for extended lifespan</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Energy-efficient crushing process</h3>
                  
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Designed for high throughput and reliability</h3>
                  
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
            src="/impactors/I3.jpg" 
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
        Types of Impactors
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
