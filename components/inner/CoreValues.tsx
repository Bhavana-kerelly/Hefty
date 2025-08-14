import React from "react";

export default function CoreValuesSection() {
  return (
    <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Core Values
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
                  <h3 className="text-xl text-white font-semibold mb-2">Quality First</h3>
                  <p className="text-sm text-white">
                    We never compromise on quality. Every product is rigorously tested to ensure it meets the highest standards of performance and safety.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Innovation</h3>
                   <p className="text-sm text-white">
                  We believe in pushing boundaries — introducing smarter, more efficient, and sustainable solutions that redefine industry possibilities.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Integrity</h3>
                   <p className="text-sm text-white">
                 We conduct business with honesty, transparency, and respect, building trust with clients, partners, and employees alike.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Customer-Centric Approach</h3>
                   <p className="text-sm text-white">
                 Our clients are at the heart of everything we do. We listen, adapt, and go the extra mile to ensure their satisfaction.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Sustainability</h3>
                   <p className="text-sm text-white">
                We are committed to designing eco-friendly solutions that minimize environmental impact and promote long-term resource efficiency.
                  </p>
                </div>

              </div>
            </div>
          </section>
  );
}