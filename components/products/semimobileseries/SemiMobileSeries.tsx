"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Track Mounted Jaw", link: "/products/mobileseries/trackmountedjawcrusher" },
    { name: "Track Mounted Cone", link: "/products/mobileseries/trackmountedconecrusher" },
    { name: "Track Mounted Endurer", link: "/products/mobileseries/trackmountedendurer" },
    { name: "Track Mounted Vertical Shaft Impactor", link: "/products/mobileseries/trackmountedverticalshiftimpactor" },
    { name: "Track Mounted Screen", link: "/products/mobileseries/trackmountedscreen" },
    { name: "Track Mounted Scalper", link: "/products/mobileseries/trackmountedscalper" },

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
           Crushing Power on the Move
          </h2>
          <p className="text-base text-gray-200 mb-6">
           At Hefty, we understand that today’s projects demand flexibility, speed, and efficiency. That’s why our Mobile Series Crushers are designed to deliver full-scale crushing performance right where you need it—no matter how remote the location.
          </p>
          <p className="text-base text-gray-200 mb-6">Built for easy transport, rapid setup, and uncompromising productivity, the Hefty Mobile Series combines the power of our world-class crushers with the freedom of mobility.
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
              What is the Hefty Mobile Series?
            </h2>
            <p className='text-base text-gray-700'>
              The Mobile Series is our range of track-mounted and wheel-mounted crushing units that integrate feeding, crushing, screening, and conveying in a single mobile platform. This allows you to eliminate the need for multiple transport setups, reduce material handling costs, and keep production moving without delay.
            </p>
            
            
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of the Hefty Mobile Series
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
                  <h3 className="text-xl text-white font-semibold mb-2">High Mobility – Move with Your Project</h3>
                  <p className="text-sm text-white">
                    The Hefty Mobile Series is designed to go wherever your work takes you. Thanks to its compact, track-mounted or wheel-mounted design, it can be transported between job sites quickly and effortlessly. Minimal setup time means you spend less time relocating equipment and more time crushing materials.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Integrated Systems – Everything You Need in One Unit</h3>
                   <p className="text-sm text-white">
                   Why manage multiple machines when you can have them all in one? Each Hefty Mobile Series unit integrates a feeder, crusher, and conveyor into a single, compact platform. This all-in-one design not only reduces the need for additional equipment but also improves efficiency by streamlining the entire crushing process.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Versatile Configurations – Tailored to Your Needs</h3>
                   <p className="text-sm text-white">
                  No two projects are the same, and neither should your equipment be. The Hefty Mobile Series is available with jaw crushers for primary crushing, cone crushers for secondary and tertiary crushing, and impact crushers for recycling and fine shaping. This flexibility ensures you have the right tool for every application, all within the same mobile concept.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Fuel & Energy Efficiency – Lower Your Operating Costs</h3>
                   <p className="text-sm text-white">
                  We know operational costs can eat into your profits. That’s why our mobile crushers are engineered for maximum output with minimum energy consumption. From optimized engine performance to smart power distribution, every Hefty Mobile Series unit helps you save on fuel without compromising crushing power.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Quick Deployment – From Delivery to Production in Hours</h3>
                   <p className="text-sm text-white">
                 Time is money, and the Hefty Mobile Series is built with that in mind. Our mobile crushers can be fully operational within hours of arriving at your site. With minimal setup requirements and user-friendly controls, you can get your operations running at full capacity in record time.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Design – Ready for Any Terrain</h3>
                   <p className="text-sm text-white">
                 From rugged mountain quarries to muddy construction sites, the Hefty Mobile Series thrives in challenging conditions. Built with reinforced steel frames, wear-resistant components, and advanced stability systems, our machines are made to withstand the harshest environments while delivering consistent, reliable performance.
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
        MOBILE SERIES CRUSHERS
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
