// app/blogs/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    slug: "redefining-excellence",
    title:
      "Hefty Machines – Redefining Crushing, Screening, and Washing Excellence",
    summary:
      "In the world of construction, mining, and infrastructure development, the demand for efficiency, durability, and precision has never been higher. This is where Hefty Machines sets the benchmark.",
  },
  {
    slug: "perfect-aggregates",
    title:
      "The Science of Perfect Aggregates – How Hefty Machines Deliver Unmatched Quality",
    summary:
      "In construction, the quality of aggregates can make or break a project. Poorly shaped or contaminated aggregates can compromise strength, durability, and safety. Hefty has mastered the art and science of aggregate production.",
  },
  {
    slug: "mobility-advantage",
    title:
      "Why Mobility is the Future of Crushing Equipment – The Hefty Advantage",
    summary:
      "In the fast-paced world of infrastructure, mining, and construction, time is more than money. Traditional fixed crushing plants demand high setup costs and limited flexibility. Hefty’s mobile equipment changes the game.",
  },
  {
    slug: "safety-sustainability",
    title:
      "Safety and Sustainability – How Hefty Leads in Responsible Machinery Design",
    summary:
      "Success in today’s construction and mining industries is no longer measured by productivity alone. Hefty designs equipment that prioritizes operator safety and environmental responsibility.",
  },
  {
    slug: "quarry-to-construction",
    title:
      "From Quarry to Construction – How Hefty Powers the Entire Material Processing Cycle",
    summary:
      "Every successful construction project begins in the quarry. Hefty Machines is a complete solutions provider, offering equipment that covers every stage of the journey from quarry to construction site.",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-black py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="font-serif text-4xl font-extrabold text-center mb-16 text-[#ec6b24]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hefty Machines Blog
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                className="bg-blue-900 rounded-xl shadow-lg overflow-hidden border border-[#ec6b24] hover:border-[#ec6b24] transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#ec6b24] transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {blog.summary}
                    </p>
                    <span className="mt-auto inline-block text-[#ec6b24] group-hover:translate-x-1 transition-transform duration-300">
                      Read More →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
