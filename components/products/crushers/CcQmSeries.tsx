"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function CcQmSeries() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/crushers/CQ1.jpg" // make sure to place the image in /public folder
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
             CONE CRUSHER (QM SERIES) :
            </h2>
            <p className='text-base text-gray-700'>
             Hefty QM series Cone Crushers combine the best power utilization per cone diameter, cavity design of higher density, optimized crusher speed and efficient throw. The higher cavity density improves the inter-particle crushing action.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>Propel QM series cone crushers provide unbeatable performance in secondary & tertiary applications.</li>
                <li>They provide high product yield with desired shape and gradation.</li>
<li>They have hydraulic setting adjustment, tramp release and design cavity clearing.</li>
<li>Hydro dynamic high alloy bronze bearing design provides better load capability in the dusty, high shock crushing environment.</li>
<li>Automatic closed side setting (CSS) (optional).</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
