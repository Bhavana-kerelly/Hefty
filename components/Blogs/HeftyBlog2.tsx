"use client";
import { motion } from "framer-motion";

export default function HeftyBlog2() {
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
          className="font-serif text-3xl md:text-4xl font-bold mb-8 text-[#ec6b24] "
        >
          The Science of Perfect Aggregates – How Hefty Machines Deliver Unmatched Quality
        </motion.h1>

        {/* Sections */}
        {[
          {
            title: "Introduction",
            text: "In construction, the quality of aggregates can make or break a project. Whether it’s for concrete, asphalt, or structural foundations, every grain matters. Poorly shaped or contaminated aggregates can compromise strength, durability, and safety. This is why industry leaders demand equipment that doesn’t just process material—it perfects it. Hefty Machines has mastered the art and science of aggregate production, delivering unmatched precision and performance with every machine. By combining engineering excellence with technological innovation, Hefty ensures that every output meets the toughest international standards."
          },
          {
            title: "Why Aggregate Quality Matters",
            text: "Aggregates are more than just crushed stones—they are the backbone of modern infrastructure. The shape, size distribution, and cleanliness of aggregates directly influence the strength of concrete, the smoothness of roads, and the longevity of structures. Poorly graded materials can lead to weak bonding, higher material usage, and structural failures. Hefty understands this critical connection and engineers its machines to deliver aggregates that meet the strictest industry standards. The company’s solutions not only enhance material quality but also improve the overall efficiency and sustainability of construction projects."
          },
          {
            title: "Precision Crushing for Consistency",
            text: "The journey to perfect aggregates starts with crushing, and Hefty’s jaw, cone, and VSI crushers are designed with precision in mind. High nip angles, rock-on-rock technology, and optimized cavity designs ensure uniform particle shapes and sizes. This consistency improves structural performance, reduces cement consumption, and minimizes waste. Hefty also designs its crushing units with versatility in mind, allowing them to process multiple material types—ranging from hard granite to softer limestone—without compromising on output quality."
          },
          {
            title: "Screening That Leaves No Room for Error",
            text: "After crushing, separation is the next crucial step. Hefty’s vibrating screens and track-mounted screening units utilize advanced vibration technology, high-capacity decks, and sealed conveyors to deliver pure, contamination-free aggregates. Adjustable slopes, multi-layer screening decks, and huck bolt fastening systems guarantee high efficiency, even under continuous heavy-duty operations. This meticulous process ensures that each batch of aggregates is precisely sorted, free from dust and fines, and perfectly suited for the intended application—be it road construction, high-strength concrete, or decorative stonework."
          },
          {
            title: "Sand Production with a Difference",
            text: "When it comes to producing fine construction-grade sand, Hefty takes no shortcuts. Its VSI crushers, hydro cyclones, and sand washers are engineered for maximum efficiency and minimal wastage. Low-water washing systems, VFD-controlled wheel speeds, spiral wheels with Hardox lining, and anti-corrosive finishes ensure the final sand output is clean, perfectly graded, and durable. This attention to detail allows construction companies to meet strict building codes, achieve better concrete finishes, and reduce the need for rework."
          },
          {
            title: "Technology that Powers Perfection",
            text: "Hefty integrates modern technology to maintain consistency batch after batch. IoT-enabled monitoring systems provide real-time data on throughput, particle size distribution, vibration patterns, and machine health. Operators can make on-the-fly adjustments, ensuring that quality remains consistent throughout the production cycle. Remote monitoring options allow managers to oversee multiple sites at once, improving efficiency and decision-making. This tech-first approach results in fewer rejects, reduced operational costs, and higher profitability."
          },
          {
            title: "Sustainability in Aggregate Processing",
            text: "Producing perfect aggregates doesn’t have to come at the cost of the environment. Hefty’s machines are designed for energy efficiency, reduced water usage, and minimal emissions. Wear parts are built for longer lifespans, reducing material waste and lowering maintenance frequency. Anti-rust coatings and eco-friendly materials extend machine life while minimizing environmental impact. By adopting Hefty’s solutions, contractors can align with global sustainability goals without sacrificing performance or profitability."
          },
          {
            title: "Conclusion",
            text: "Perfect aggregates are the foundation of perfect projects—and Hefty Machines ensures nothing less. With advanced crushing, precise screening, and eco-conscious sand washing solutions, Hefty delivers the consistency, cleanliness, and strength the industry demands. From mega infrastructure projects to local developments, Hefty’s technology empowers construction teams to work faster, build stronger, and deliver results that last for decades. For contractors who value quality as much as quantity, Hefty isn’t just a supplier—it’s the trusted partner in building a stronger, safer, and more sustainable future."
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
