import React from 'react';

export default function SoftwareOutsourcing() {
  const handleClick = (productName) => {
    // This is where you would handle the redirection or any other logic.
    // For now, it will just log the product name to the console.
    console.log(`Redirecting to page for: ${productName}`);
    // Example: window.location.href = `/products/${productName.toLowerCase().replace(/ /g, '-')}`;
  };

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* CRUSHERS Section - Updated layout */}
        <div className="flex flex-col items-center text-center">
          {/* Title and Description */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-black leading-tight">
              CRUSHERS 
            </h2>
            <p className="text-black text-base leading-relaxed max-w-xl mx-auto">
              We offer secured loans backed by your assets — property, gold, or investments.
              Enjoy higher approvals, flexible terms, and expert support every step of the way.
              Secure your future, with a loan you can trust.
            </p>
          </div>
          
          {/* Services List */}
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer" 
                onClick={() => handleClick('JAW CRUSHERS')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">JAW CRUSHERS</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('CORE CRUSHERS')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">CORE CRUSHERS</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('ROLL CRUSHERS')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">ROLL CRUSHERS</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-t border-gray-300" />
        
        {/* MOBILE SERIES Section - Updated layout */}
        <div className="flex flex-col items-center text-center">
          {/* Title and Description */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-black leading-tight">
              MOBILE SERIES
            </h2>
            <p className="text-black text-base leading-relaxed max-w-xl mx-auto">
              No collateral? No problem.
              <br/>
              Get quick access to unsecured loans based on your income and credit profile.
              Ideal for personal needs, business growth, or unexpected expenses.
              Fast approvals, flexible EMIs — all with zero asset risk.
            </p>
          </div>
          
          {/* Services List */}
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('TRACK MOUNTED JAW CRUSHERS')}
              >
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-black hover:text-blue-950 transition-colors"> TRACK MOUNTED JAW CRUSHERS </span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('TRACK MOUNTED CONE CRUSHERS')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">TRACK MOUNTED CONE CRUSHERS</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('TRACK MOUNTED SCREEN')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800"> TRACK MOU TED SCREEN</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('TRACK MOUNTED SCALPER')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">TRACK MOUNTED SCALPER</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('TRACK MOUNTED VERTICAL SHAFT IMPACTOR')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">TRACK MOUNTED VERTICAL SHAFT IMPACTOR</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-t border-gray-300" />

        {/* SEMI MOBILE SERIES Section - Updated layout */}
        <div className="flex flex-col items-center text-center">
          {/* Title and Description */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-black leading-tight">
              SEMI MOBILE SERIES
            </h2>
            <p className="text-black text-base leading-relaxed max-w-xl mx-auto">
              Looking for long-term funding with structured repayments?
              <br/>
              Our term loans offer fixed tenure and predictable EMIs to suit your business or personal goals.
              Whether it’s for expansion, equipment, or working capital — we’ve got the right plan.
              Grow with confidence, backed by stable and flexible financing.
            </p>
          </div>
          
          {/* Services List */}
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('PRO FAST HAW')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800"> PRO FAST HAW</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('PROFAST CONE')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">PROFAST CONE</span>
              </div>
            </div>
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => handleClick('PROFAST VERICAL SHAFT IMPACTOR')}
              >
                <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <span className="text-lg text-gray-800">PROFAST VERICAL SHAFT IMPACTOR</span>
              </div>
            </div>
          </div>
          
          {/* Read more button */}
          <button 
            className="mt-8 px-6 py-3 font-semibold rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            onClick={() => handleClick('remiang')}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
