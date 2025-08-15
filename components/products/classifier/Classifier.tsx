"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Pro Air Classifier", link: "/products/classifier/proairclassifier" },
  ];

const steps = [
  "Sand Production – To control grading and eliminate impurities for construction-grade sand.",
"Mineral Processing – For separating valuable minerals from gangue materials.",
"Industrial Minerals – For precision classification of silica, limestone, and other materials.",
"Recycling Operations – To reclaim reusable materials with accurate particle grading.",
];
export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/classifier/C1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
          Precision Material Separation for Superior End Products
          </h2>
          <p className="text-base text-gray-200 mb-6">
           In modern aggregate and mineral processing, precision is everything. The Classifier is engineered to deliver accurate separation of fine particles, ensuring your final product meets exact specifications while maximizing efficiency and profitability. Designed with advanced technology, it efficiently removes impurities, controls grading, and enhances overall material quality — making it an essential component in sand, aggregate, and mineral processing plants.
          </p>
          
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/classifier/C2.jpg" // make sure to place the image in /public folder
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
             How It Works
            </h2>
             <p className="text-base text-black mb-6">
           The classifier operates on the principle of sedimentation, where fine particles are separated from coarser ones using water or air as the medium. Depending on the application, it can be used in both wet and dry classification processes. Its innovative design ensures uniform particle size distribution, reduces wastage, and increases yield, even in high-tonnage operations.
          </p>
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
                  <h3 className="text-xl text-white font-semibold mb-2">High Precision Separation – Achieves accurate particle size classification for consistent product quality.</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Versatile Applications – Suitable for sand, aggregates, minerals, and industrial materials.</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Efficient Dewatering – Removes excess water in wet classification, reducing downstream drying costs.</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Low Maintenance – Built with durable wear-resistant materials to minimize downtime.</h3>
    
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Energy Efficient – Optimized design ensures reduced power consumption while maintaining high output.</h3>
             
                </div>
                 
                 
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
           
    
     <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Classifier
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
