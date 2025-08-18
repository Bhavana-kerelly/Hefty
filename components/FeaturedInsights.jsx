"use client";
import React from "react";
import Link from "next/link";

const articles = [
  {
    title: "Hefty Machines- Redefining Crushing, Screening, and Washing Excellence",
    image: "/blogs/blog1.jpg",
    slug: "redefining-excellence",
  },
  {
    title: "The Science of Perfect Aggregates- How Hefty Machines Deliver Unmatched Quality",
    image: "/blogs/blog2.jpg",
    slug: "perfect-aggregates",
  },
  {
    title: "Why Mobile is the Future of Crushing Equipment- The Hefty Advantage",
    image: "/blogs/blog3.jpg",
    slug: "mobility-advantage",
  },
  {
    title: "Safety and Sustainability- How Hefty Leads in Responsible Machinery Design",
    image: "/blogs/blog4.jpg",
    slug: "safety-sustainability",
  },
];

export default function FeaturedInsights() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16 font-sans group">
      {/* Blogs Heading */}
      <h2 className="font-serif text-blue-900 text-4xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-orange-500">
        Blogs
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Explore our comprehensive blog posts today and let Hefty guide you towards smarter manufacture crushers and screening equipment.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((item, index) => (
          <Link
            key={index}
            href={`/blogs/${item.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:border-orange-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[300px] h-[150px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-900 font-semibold text-lg transition-colors duration-300 hover:text-orange-500">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
