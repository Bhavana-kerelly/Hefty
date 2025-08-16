"use client";
import { motion } from "framer-motion";

export default function HeftyBlog1() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden text-black">
      <div className="absolute inset-0 bg-[url('/premium-texture.png')] opacity-10 animate-pulse"></div>
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">

        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl font-extrabold mb-6 text-[#ec6b24]">
          Hefty Machines – Redefining Crushing, Screening, and Washing Excellence
        </motion.h1>

        {[
          { title: "Introduction", text: "In the world of construction, mining, and infrastructure development, the demand for efficiency, durability, and precision has never been higher. Every project, whether it’s building a skyscraper, developing a metro network, or laying down a national highway, depends on the quality of aggregates and the reliability of machinery. This is where Hefty Machines sets the benchmark..." },
          { title: "Engineering That Delivers", text: "Hefty’s product range is a testament to its relentless commitment to innovation..." },
          { title: "Mobility Without Compromise", text: "Construction sites are constantly evolving, and mobility has become a necessity rather than an option..." },
          { title: "Precision in Every Aggregate", text: "The quality of aggregates directly influences the lifespan and safety of construction projects..." },
          { title: "Safety as a Standard Feature", text: "In the heavy equipment industry, safety cannot be an afterthought—it has to be built in from the start..." },
          { title: "Sustainable by Design", text: "Sustainability is not just a buzzword for Hefty—it’s an engineering goal..." },
          { title: "Beyond Sales: A Trusted Partner", text: "When you invest in Hefty, you’re investing in more than just a machine..." },
          { title: "Conclusion", text: "Hefty Machines isn’t just manufacturing crushers, screens, and washers—it’s building the foundation for the world’s next big achievements..." }
        ].map((sec, idx) => (
          <motion.section key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.6 }} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[#ec6b24]">{sec.title}</h2>
            <p className="leading-relaxed">{sec.text}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
