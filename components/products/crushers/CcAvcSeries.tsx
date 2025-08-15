"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function CcAvcSeries() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/crushers/CA1.jpg" // make sure to place the image in /public folder
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
              CONE CRUSHER : (AVC SERIES)
            </h2>
            <p className='text-base text-gray-700'>
             The AVC Series of Hefty Cone Crusher offers the higher crushing efficiency and end product quality with lower cost per ton production. These crushers feature a unique combination of crusher speed, throw and cavity design.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>Availability of specially defined chambers to crush coarse/fine feed materials and also to cover open / closed circuit.</li>
              <li>Dual-dust seal system.</li>
              <li>Bigger mantle diameter combined with effective speed to enhance productivity.</li>
              <li>User-friendly SMS system.</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
