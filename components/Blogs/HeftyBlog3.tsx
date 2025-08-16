"use client";
import { motion } from "framer-motion";

export default function HeftyBlog3() {
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
          className="font-serif text-3xl md:text-4xl font-bold mb-8 text-[#ec6b24] d"
        >
          Why Mobility is the Future of Crushing Equipment – The Hefty Advantage
        </motion.h1>

        {/* Sections */}
        {[
          {
            title: "Introduction",
            text: "In the fast-paced world of infrastructure, mining, and construction, time is more than money—it’s the deciding factor between project success and costly delays. Traditional fixed crushing plants, while powerful, often demand high setup costs, extended installation times, and limited flexibility. This is where mobile and track-mounted crushing equipment from Hefty Machines changes the game. By combining mobility with the same crushing power as stationary plants, Hefty ensures that operations move faster, smarter, and with unmatched efficiency."
          },
          {
            title: "The Rising Demand for Mobile Solutions",
            text: "Global infrastructure demands are evolving. Projects are no longer confined to a single site—they often span multiple locations, each with different geological challenges. Mobile crushing solutions allow contractors to transport equipment directly to the material source, eliminating the need for costly haulage. This agility not only saves time but also reduces environmental impact by minimizing fuel usage in material transportation. Hefty’s mobile range is specifically designed to cater to this growing demand, offering reliability and performance on the move."
          },
          {
            title: "Seamless Integration into Any Project Workflow",
            text: "A common challenge in crushing operations is integrating new equipment without disrupting existing workflows. Hefty’s mobile crushers, screens, and VSI units are designed for quick setup and dismantling, enabling seamless transitions between sites. Dual-speed tracks, remote control operation, and quick-connect systems make the process effortless. This adaptability ensures that operators can begin production almost immediately after arrival on-site."
          },
          {
            title: "Performance Without Compromise",
            text: "Mobility should never mean a drop in output—and Hefty makes sure it doesn’t. Whether it’s the HTMJ-811 jaw crusher with its elevated mouth opening for eliminating feed bridging, or the HTMC-150 cone crusher with precision shaping capabilities, every mobile unit matches the power and quality of its stationary counterpart. Heavy-duty build quality, advanced hydraulic systems, and intelligent controls ensure these machines work at full capacity even in the most demanding terrains."
          },
          {
            title: "Mobility and Safety Go Hand in Hand",
            text: "One misconception is that mobile machines sacrifice safety for portability. Hefty dispels this with designs that integrate emergency stop systems, walkways, handrails, and anti-slip surfaces as standard. Optional IoT-enabled monitoring systems provide real-time operational and safety alerts, helping prevent downtime and ensuring operator protection, even in challenging on-site conditions."
          },
          {
            title: "Cost Efficiency at Every Stage",
            text: "With Hefty’s mobile solutions, cost savings are not limited to transportation alone. Reduced setup time, lower manpower requirements, and decreased material handling lead to significant savings over the project lifecycle. The versatility of these machines means they can be redeployed for multiple project phases—crushing raw rock one day and producing high-grade sand the next—maximizing ROI."
          },
          {
            title: "Future-Ready Technology for a Changing Industry",
            text: "As industries move toward automation and digital control, Hefty’s mobile range is already equipped for the future. IoT-based tracking, automated calibration, and remote diagnostics are built into many models, ensuring operators can monitor and control performance without being physically present. This not only improves productivity but also enables predictive maintenance, reducing costly breakdowns."
          },
          {
            title: "Conclusion",
            text: "Mobility isn’t just a trend—it’s the future of crushing equipment. With the perfect balance of power, adaptability, and safety, Hefty Machines delivers mobile solutions that keep pace with the industry’s changing demands. From mining operations in rugged terrains to large-scale road construction, Hefty’s track-mounted crushers, screens, and washing units ensure that projects move forward—fast, efficiently, and without compromise. In a world where every hour counts, Hefty makes sure you never stand still."
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
