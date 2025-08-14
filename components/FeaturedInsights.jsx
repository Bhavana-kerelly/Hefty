"use client";
import React from "react";
import Link from "next/link";

const articles = [
  {
    title: "Hefty Machines- Redefining Crushing, Screening, and Washing Excellence",
    image: "https://img.freepik.com/free-vector/isometric-family-budget-composition-with-people-counting-money-vector-illustration_1284-80992.jpg?semt=ais_hybrid&w=740&q=80",
    slug: "structured-loans",
  },
  {
    title: "The Science of Perfect Aggregates- How Hefty Machines Deliver Unmatched Quality",
    image: "https://www.cfoselections.com/hubfs/Images/integrity-in-finance.jpeg",
    slug: "financial-partner",
  },
  {
    title: "Why Mobile is the Future of Crushing Equipment- The Hefty Advantage",
    image: "https://images.moneycontrol.com/static-mcnews/2018/10/Loans-2-final-770x433.png?impolicy=website&width=770&height=431",
    slug: "driven-by-values",
  },
  {
    title: "Safety and Sustainability- How Hefty Leads in Responsible Machinery Design",
    image: "https://media.assettype.com/outlookmoney/2025-01-31/104ynhsa/Untitled-design-8.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.05",
    slug: "loans-for-doctors-cas",
  },
];

export default function FeaturedInsights() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16 font-sans group">
      {/* Blogs Heading */}
      <h2 className="text-blue-900 text-4xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-orange-500">
        Blogs
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Explore our comprehensive blog posts today and let Hefty guide you towards smarter manufacture crushers and screening equipment.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item.slug}`}
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
