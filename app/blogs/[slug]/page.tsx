// app/blogs/[slug]/page.tsx
"use client";

import {use} from "react";
import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HeftyBlog1 from "@/components/Blogs/HeftyBlog1";
import HeftyBlog2 from "@/components/Blogs/HeftyBlog2";
import HeftyBlog3 from "@/components/Blogs/HeftyBlog3";
import HeftyBlog4 from "@/components/Blogs/HeftyBlog4";
import HeftyBlog5 from "@/components/Blogs/HeftyBlog5";

const blogComponents: Record<string, React.ReactElement> = {
  "redefining-excellence": <HeftyBlog1 />,
  "perfect-aggregates": <HeftyBlog2 />,
  "mobility-advantage": <HeftyBlog3 />,
  "safety-sustainability": <HeftyBlog4 />,
  "quarry-to-construction": <HeftyBlog5 />,
};

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = use(params);
  const blogContent = blogComponents[slug];

  if (!blogContent) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-200 text-white py-16">
        <div className="container mx-auto px-4">
          {blogContent}
        </div>
      </div>
      <Footer />
    </>
  );
}

  