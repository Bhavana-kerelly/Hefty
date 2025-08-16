"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Example images in different folders
const allImages = [
  { id: 1, path: "/crushers/C1.jpg", label: "Photo 1" },
  { id: 2, path: "/crushers/J1.jpg", label: "Photo 2" },
  { id: 3, path: "/crushers/CO1.jpg", label: "Photo 3" },
  { id: 4, path: "/crushers/CA1.jpg", label: "Photo 4" },
  { id: 5, path: "/crushers/CQ1.jpg", label: "Photo 5" },
  { id: 6, path: "/crushers/G1.jpg", label: "Photo 6" },
  { id: 7, path: "/crushers/R1.jpg", label: "Photo 7" },
  { id: 8, path: "/mobileseries/M1.jpg", label: "Photo 8" },
  
  { id: 11, path: "/mobileseries/TC1.jpg", label: "Photo 11" },
  { id: 12, path: "/mobileseries/TA1.jpg", label: "Photo 12" },
  { id: 13, path: "/mobileseries/M3.jpg", label: "Photo 13" },
  { id: 14, path: "/mobileseries/TC3.jpg", label: "Photo 14" },
  { id: 15, path: "/semimobileseries/S1.jpg", label: "Photo 15" },

  { id: 18, path: "/semimobileseries/PFVS1.jpg", label: "Photo 18" },
  { id: 19, path: "/semimobileseries/S3.jpg", label: "Photo 19" },
  { id: 20, path: "/classifier/C1.jpg", label: "Photo 20" },
  { id: 21, path: "/classifier/P1.jpg", label: "Photo 21" },
  { id: 22, path: "/classifier/C3.jpg", label: "Photo 22" },
  { id: 23, path: "/classifier/P3.jpg", label: "Photo 23" },
  { id: 24, path: "/feeders/F1.jpg", label: "Photo 24" },
  { id: 25, path: "/feeders/F3.jpg", label: "Photo 25" },
  { id: 26, path: "/feeders/FS1.jpg", label: "Photo 26" },
  { id: 27, path: "/feeders/GF1.jpg", label: "Photo 27" },
  { id: 28, path: "/feeders/PF1.jpg", label: "Photo 28" },
  { id: 29, path: "/impactors/HI1.jpg", label: "Photo 29" },
  { id: 30, path: "/impactors/I1.jpg", label: "Photo 30" },
  
  { id: 32, path: "/impactors/HI3.jpg", label: "Photo 32" },
  { id: 33, path: "/screens/S1.jpg", label: "Photo 33" },
  { id: 34, path: "/screens/S3.jpg", label: "Photo 34" },
  { id: 35, path: "/screens/VS1.jpg", label: "Photo 35" },
  { id: 36, path: "/screens/VS3.jpg", label: "Photo 36" },
  { id: 37, path: "/washingsystems/W1.jpg", label: "Photo 37" },
  { id: 38, path: "/washingsystems/T1.jpg", label: "Photo 38" },
  { id: 39, path: "/washingsystems/S1.jpg", label: "Photo 39" },
  { id: 40, path: "/washingsystems/P1.jpg", label: "Photo 40" },
  { id: 41, path: "/washingsystems/E1.jpg", label: "Photo 41" },
  { id: 42, path: "/washingsystems/D1.jpg", label: "Photo 42" },
  { id: 43, path: "/concrete/C1.jpg", label: "Photo 43" },
  // ...add more as needed
];

export default function GridGallery() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, allImages.length));
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gray-200 py-16 px-6 flex flex-col items-center">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 hover:text-[#ec6b24] mb-12 text-center">
        Image Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl ">
        {allImages.slice(0, visibleCount).map((img) => (
          <div
            key={img.id}
            className="border-3 border-black hover:border-[#ec6b24] w-full aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={img.path}
              alt={img.label}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allImages.length && (
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-[#ec6b24] transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
}
