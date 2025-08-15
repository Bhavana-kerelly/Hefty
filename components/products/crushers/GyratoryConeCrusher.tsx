"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function GyratoryConeCrusher() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/crushers/G1.jpg" // make sure to place the image in /public folder
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
              GYRATORY CONE CRUSHER (AVCG SERIES)
            </h2>
            <p className='text-base text-gray-700'>
             The Gyratory Cone Crusher delivers increased capacity with reduced maintenance and downtime. It guarantees trouble-free operation in varying feed conditions with a high reduction ratio. It has large and stable feed opening, steep cavity and effective strokes.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>High crushing performance and low operational costs.</li>
              <li>Two piece concave system, Increased bottom shell product discharge area.</li>
              <li>Removable top shell liner, advanced automation system for CSS adjusting.</li>
              <li>Constant feed opening crushing chamber. Large feed opening to match application and field adjustable crushing stroke.</li>
              <li>Spider bush eliminates capacity loss caused with plain bearing wear. Quiet operation.</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
