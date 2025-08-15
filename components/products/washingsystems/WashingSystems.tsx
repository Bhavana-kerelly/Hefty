"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Sand Washer", link: "/products/washingsystems/sandwasher" },
    { name: "Dual Sand Washer", link: "/products/washingsystems/dualsandwasher" },
    { name: "Eco Washer", link: "/products/washingsystems/ecowasher" },
    { name: "Pro Wash", link: "/products/washingsystems/prowash" },
    { name: "Thickener", link: "/products/washingsystems/thickener" },
  ];
const steps = [
  "Sand and gravel processing",
"Manufactured sand production",
"Quarry & mining operations",
"Recycling & construction waste cleaning",
"Industrial mineral preparation",
];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/washingsystems/W1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Washing Systems – Clean Aggregates, Superior Results
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, we understand that high-quality end products start with clean, well-processed materials. Our Washing Systems are engineered to remove impurities such as clay, silt, and unwanted dust from aggregates, ensuring they meet the highest standards for construction and industrial use.
          </p>
          <p className="text-base text-gray-200 mb-6">Our Whether you are working with sand, gravel, crushed stone, or recycled materials, our washing solutions deliver consistent performance, reduce water consumption, and maximize output – all while ensuring environmental compliance.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/washingsystems/W2.jpg" // make sure to place the image in /public folder
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
             Why Choose Hefty Washing Systems?
            </h2>
            <ol className="text-base text-black mb-6">
              <li>Advanced Cleaning Technology – Effectively removes unwanted fines and contaminants.</li>
              <li>Durable & Low-Maintenance Design – Built for long service life in the toughest conditions.</li>
              <li>Water-Efficient Operation – Optimized to reduce water wastage and improve recycling.</li>
              <li>Customizable Solutions – Configured to suit your specific material type and production needs.</li>
              
            </ol>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 px-6 py-12 md:py-20 w-full">
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
      
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Benefits at a Glance
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
                  <h3 className="text-xl text-white font-semibold mb-2">Cleaner, more consistent aggregates</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Improved quality for concrete and asphalt production</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Reduced operating costs and downtime</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Environmentally responsible solutions.</h3>
                
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
            src="/washingsystems/W3.jpg" 
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
       Types of Washing Systems :
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
