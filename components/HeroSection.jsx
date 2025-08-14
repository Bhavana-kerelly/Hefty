"use client";

import React, { Fragment } from 'react';
import { FaBolt, FaBullseye, FaTachometerAlt } from "react-icons/fa";
import GlobeAnimation from './GlobeAnimation';

export default function HeroSection() {
  const features = [
    {
      icon: <FaBolt size={40} className="text-white" />,
      title: (
        <>
        Power
        </>
      ),
    },
    {
      icon: <FaBullseye size={40} className="text-white" />,
      title: 'Precision',
    },
    {
      icon: <FaTachometerAlt size={40} className="text-white" />,
      title: 'Performance',
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 items-center min-h-[400px]">
      {/* Text Block */}
      <div className="max-w-full text-center">
  <h1 className="text-4xl text-[#ec6b24] font-bold leading-tight mb-6">
    Hyderabad’s Leading Certified Company<br />
    For Crushing Equipment
  </h1>
</div>


<div className="max-w-lg text-left">
        <p className="text-sm mb-5 text-white">
          Crushing and screening play a crucial role in driving productivity for both mining and construction industries. In these fast-paced sectors, speed, efficiency, and precision in processing materials can make all the difference in quality and output. 
        </p>
        <p className="text-sm mb-6 text-white">
          That’s why customers across the nation trust Hefty to deliver innovative, technologically advanced, and cost-effective crushing and screening solutions tailored to their needs.
        </p>
        <p className="text-xl mb-7 text-gray-300">
          <span className="text-[#ec6b24]">Hefty</span> – Powering Productivity with Precision Crushing & Screening
        </p>
      </div>

        {/* Features Block */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 bg-black py-10 px-4 rounded-lg">
          {features.map((feature, index) => (
            <Fragment key={index}>
              <div className="flex items-center text-white max-w-sm gap-4">
                <div>{feature.icon}</div>
                <p className="text-sm">{feature.title}</p>
              </div>

              {/* Divider */}
              {index < features.length - 1 && (
                <>
                  <div className="hidden md:block h-10 border-l border-gray-700 mx-4" />
                  <div className="block md:hidden w-full border-t border-gray-700 my-4" />
                </>
              )}
            </Fragment>
          ))}
        </div>
      

      
    </section>
  );
}
