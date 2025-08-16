"use client";
import { motion } from "framer-motion";

export default function HeftyBlog5() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden text-black">
      {/* Premium metallic texture overlay */}
      <div className="absolute inset-0 bg-[url('/metal-texture.jpg')] bg-cover opacity-10 animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl font-extrabold mb-8 text-[#ec6b24] "
        >
          From Quarry to Construction – How Hefty Powers the Entire Material Processing Cycle
        </motion.h1>

        {/* Sections */}
        {[
          {
            title: "Introduction",
            text: "Every successful construction project begins long before the first brick is laid or the first beam is erected—it starts in the quarry. From raw rock extraction to delivering perfectly graded aggregates and sand, each step in the material processing cycle plays a crucial role in ensuring project quality, efficiency, and profitability. Hefty Machines has built its reputation on being a complete solutions provider, offering equipment that covers every stage of the journey from quarry to construction site."
          },
          {
            title: "Efficient Primary Crushing",
            text: "The first stage of any material processing cycle is breaking down large rocks into manageable sizes. Hefty’s jaw crushers and track-mounted primary units are engineered for maximum feed opening, high nip angles, and powerful throughput. Whether it’s hard granite, basalt, or limestone, Hefty’s crushers deliver uniform output that sets the stage for efficient downstream processing. Built tough for rugged conditions, they ensure minimal downtime and long-term reliability in demanding quarry environments."
          },
          {
            title: "Precision Secondary and Tertiary Crushing",
            text: "Once the primary stage is complete, the focus shifts to refining particle size and shape. Hefty’s cone crushers and VSI (Vertical Shaft Impactor) machines specialize in producing high-quality, well-shaped aggregates. The cone crushers provide controlled reduction with minimal fines, while the VSI units use rock-on-rock technology to create sharp-edged, durable materials—perfect for concrete, asphalt, and high-strength construction projects."
          },
          {
            title: "Advanced Screening for Accuracy",
            text: "After crushing, separation is essential to ensure materials meet project specifications. Hefty’s vibrating screens and track-mounted screening systems employ multi-layer decks, adjustable slopes, and sealed conveyors to deliver contamination-free aggregates. By eliminating oversize or undersize particles, these systems guarantee the consistency required for precision construction work, from road base layers to structural concrete."
          },
          {
            title: "Sand Washing and Fines Recovery",
            text: "Clean, well-graded sand is vital for concrete strength and finish. Hefty’s hydro cyclones and sand washers ensure that the final product is free from impurities such as silt, clay, and dust. With VFD wheel control, spiral wheels lined with Hardox, and anti-corrosive trough designs, these machines not only produce premium-grade sand but also conserve water and reduce operational costs."
          },
          {
            title: "Material Handling and Feeding Solutions",
            text: "Smooth material flow between stages is key to maintaining high productivity. Hefty’s pan feeders and grizzly feeders regulate feed rates, prevent blockages, and ensure even distribution to crushers and screens. Built for heavy-duty performance, they can handle everything from abrasive rock to wet, sticky material without losing efficiency."
          },
          {
            title: "Mobility for On-Site Efficiency",
            text: "One of Hefty’s greatest advantages is its range of track-mounted and mobile units, allowing operators to move equipment directly to the material source. This mobility reduces the need for costly hauling, speeds up project timelines, and enables flexible deployment across multiple sites. From quarry face to road construction, Hefty machines are designed to keep up with the pace of modern projects."
          },
          {
            title: "Conclusion",
            text: "Hefty Machines is more than an equipment manufacturer—it’s a partner in the entire material processing journey. From powerful primary crushers to precision screening systems, advanced sand washers, and mobile solutions, Hefty covers every stage between quarry and construction site. The result is a streamlined, efficient, and high-quality supply chain that ensures construction projects start strong and finish stronger. With Hefty, you don’t just process materials—you power progress."
          }
        ].map((sec, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#ec6b24]">{sec.title}</h2>
            <p className="leading-relaxed text-base text-black">{sec.text}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
