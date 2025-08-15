"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function RollCrusher() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/crushers/R1.jpg" // make sure to place the image in /public folder
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
             ROLL CRUSHER
            </h2>
            <p className='text-base text-gray-700'>
            New generation Roll Crusher has been designed using latest engineering tools for high reliability. It has premium features like high-efficiency gear drive and hydraulic gap management. Its features and the unique design help manufacture sand at lowest possible power consumption and liner wear cost.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>High efficiency & low peripheral speed to deliver high savings in power & wear cost.</li>
              <li>Robust, reliable and safe design.</li>
              <li>Hydraulics for medium pressure grinding with high crushing forces.</li>
              <li>Large diameter and extra thick liner design allow larger feed size and high liner change interval.</li>
              <li>Hydraulics ensure operating gap is maintained to ensure desired output size & low percentage recycle.</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
