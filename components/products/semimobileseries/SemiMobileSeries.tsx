"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "ProFast Jaw", link: "/products/semimobileseries/profastjaw" },
    { name: "Profast Cone", link: "/products/semimobileseries/profastcone" },
    { name: "Profast Vertical Shaft Impactor", link: "/products/semimobileseries/profastverticalshiftimpactor" },


  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobileseries/M1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           SEMI MOBILE SERIES
          </h2>
          <p className="text-base text-gray-200 mb-6">
           The HEFTY Semi Mobile Series is designed for operations that demand the flexibility of mobility without compromising the robustness of stationary crushing plants. These units are engineered to be easily transportable while offering exceptional productivity, making them ideal for short- to medium-term projects, mining sites, and aggregate production facilities.
          </p>
          <p className="text-base text-gray-200 mb-6">Built with modular structures, the Semi Mobile Series combines quick setup times with heavy-duty performance, ensuring smooth operations in diverse and challenging environments.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/mobileseries/M2.jpg" // make sure to place the image in /public folder
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
              Why Choose the HEFTY Semi Mobile Series?
            </h2>
            <ol className='text-base text-gray-700'>
              <li>Versatility in Application: Suitable for mining, quarrying, and recycling operations.</li>
              <li>Cost-Efficient Setup: Minimal civil work compared to stationary plants.</li>
              <li>Ease of Relocation: Relocate between sites with minimal downtime.</li>
              <li>HEFTY Durability: Built to withstand extreme operating conditions with premium-grade materials.</li>
              <li>Optimized Performance: Designed for high throughput and consistent product quality.</li>
            </ol>
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of the Semi Mobile Series
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
                  <h3 className="text-xl text-white font-semibold mb-2"> Modular Design – Quick Setup, Easy Relocation</h3>
                  <p className="text-sm text-white">
                    The plant is built using a modular architecture, allowing each component (crusher, screen, conveyor, etc.) to be independently installed and dismantled.
                  </p>
                  <ol className="text-sm text-white">
                    <li>Benefit: Simplifies transportation and reduces downtime between project sites.</li>
                    <li>Application: Ideal for contractors handling multiple short- to medium-term projects.</li>
                    <li>Advantage over Fixed Plants: No need for large civil foundations; reduced initial setup costs.</li>
                  </ol>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Chassis – Built for Stability and Longevity</h3>
                   <p className="text-sm text-white">
                   Constructed with high-grade steel, the chassis is designed to withstand the intense vibrations, impact loads, and material stresses of continuous crushing operations.
                  </p>
                   <ol className="text-sm text-white">
                    <li>Benefit: Enhanced durability even in challenging terrains.</li>
                    <li>Technical Note: Chassis frames are stress-relieved for better fatigue resistance.</li>
                  </ol>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Reduced Setup Time – Rapid Deployment on Site</h3>
                   <p className="text-sm text-white">
                  Compared to conventional stationary plants, semi-mobile units can be assembled and commissioned in a fraction of the time.
                  </p>
                  <ol className="text-sm text-white">
                    <li>Benefit: Minimizes idle machinery time and accelerates production start-up.</li>
                    <li>Example: Setup in days instead of weeks.</li>
                  </ol>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Custom Configurations – Tailored to Your Crushing Needs</h3>
                   <p className="text-sm text-white">
                  Available in multiple configurations to suit different aggregate processing requirements:
                  </p>
                  <ol className="text-sm text-white">
                    <li>Jaw Crushers for primary crushing.
</li>
                    <li>Cone Crushers for secondary/tertiary crushing.
</li>
                    <li>Impact Crushers for high-speed shaping and sand production.
</li>
                    <li>Screening Units for precise gradation control.
</li>
                    <li>Benefit: Flexibility to adapt plant layout to material type and desired output size.</li>
                  </ol>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Fuel-Efficient Operation – Maximum Output at Lower Costs</h3>
                   <p className="text-sm text-white">
                 Equipped with optimized drive systems and energy-efficient motors to deliver high performance with minimal fuel consumption.
                  </p>
                  <ol className="text-sm text-white">
                    <li>Benefit: Reduces overall operational expenditure.</li>
                    <li>Sustainability Angle: Lower CO₂ emissions per tonne of output.</li>
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Advanced Safety Systems – Protecting People and Equipment</h3>
                   <p className="text-sm text-white">
                 Incorporates operator-friendly control systems with built-in safety interlocks and emergency stop mechanisms.
                  </p>
                  <ol className="text-sm text-white">
                    <li>Benefit: Ensures safe operation, even under high-load conditions.</li>
                    <li>Features:
                      <ul>
                        <li>Guarding on moving parts.</li>
                        <li>Overload protection.</li>
                        <li>Remote monitoring and troubleshooting options.</li>
                      </ul>
                    </li>
                  </ol>
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
            src="/mobileseries/M3.jpg" 
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
        Types of SEMI MONILE SERIES :
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
