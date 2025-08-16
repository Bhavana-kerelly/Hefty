"use client";
import { motion } from "framer-motion";

export default function HeftyBlog4() {
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
          Safety and Sustainability – How Hefty Leads in Responsible Machinery Design
        </motion.h1>

        {/* Sections */}
        {[
          {
            title: "Introduction",
            text: "In today’s construction and mining industries, success is no longer measured by productivity alone. Clients, governments, and communities demand operations that are both safe for workers and sustainable for the environment. Hefty Machines has taken these expectations seriously, designing equipment that not only delivers industry-leading performance but also prioritizes operator safety and environmental responsibility. The result? A product range that proves you can achieve high output without compromising people or the planet."
          },
          {
            title: "Built-In Safety from the Ground Up",
            text: "Safety isn’t an afterthought at Hefty—it’s embedded into every stage of design and manufacturing. From emergency stop systems and anti-slip walkways to handrails and protective guards, every machine is engineered with operator well-being in mind. Each unit undergoes rigorous testing to ensure compliance with global safety standards. For industries where heavy equipment operates under intense pressure, these measures mean fewer workplace accidents and improved overall productivity."
          },
          {
            title: "Operator Comfort and Ergonomics",
            text: "Long hours in demanding conditions can take a toll on machine operators. Hefty’s designs focus on ergonomics, ensuring that controls are intuitive, seating is comfortable, and visibility is maximized. Noise-reduction canopies and vibration-dampening systems make long shifts less fatiguing, reducing the risk of mistakes caused by operator fatigue. This attention to comfort is more than a perk—it’s a critical factor in maintaining safe, efficient operations over extended periods."
          },
          {
            title: "Advanced Monitoring and IoT Integration",
            text: "One of Hefty’s standout safety features is its IoT-enabled control systems. These allow for real-time monitoring of machine performance, identifying potential issues before they escalate into costly or dangerous breakdowns. Operators and managers receive instant alerts for overheating, abnormal vibrations, or unexpected downtime. By combining preventive maintenance with operational data, Hefty ensures equipment runs smoothly and safely at all times."
          },
          {
            title: "Sustainability Through Smart Engineering",
            text: "Beyond safety, Hefty is committed to reducing the environmental footprint of its machines. Energy-efficient motors, VFD-controlled components, and optimized hydraulic systems help cut power consumption. Water-saving washing units, such as hydro cyclones and sand washers, minimize waste while delivering high-quality output. These design innovations mean that clients can meet environmental regulations without sacrificing productivity."
          },
          {
            title: "Longer Lifespan, Lower Waste",
            text: "Sustainability isn’t just about using fewer resources today—it’s about creating machines that last. Hefty uses anti-corrosive finishes, abrasion-resistant materials, and Hardox-lined components to extend equipment life. By minimizing wear and tear, these features reduce the need for frequent part replacements, lowering both operational costs and waste sent to landfills."
          },
          {
            title: "Community and Environmental Responsibility",
            text: "Hefty recognizes that its equipment often operates near residential or environmentally sensitive areas. That’s why noise suppression systems, dust-control measures, and low-emission engines are standard or available on most models. By keeping noise and pollution to a minimum, Hefty ensures operations remain compliant with environmental laws and respectful to local communities."
          },
          {
            title: "Conclusion",
            text: "Hefty Machines is proving that high-performance industrial equipment can be both safe and sustainable. Through advanced safety engineering, ergonomic design, IoT integration, and eco-friendly technologies, Hefty sets a new benchmark for responsible machinery manufacturing. In an industry where safety and sustainability are no longer optional, Hefty leads the way—ensuring its machines protect workers, deliver top-tier performance, and safeguard the environment for future generations."
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
