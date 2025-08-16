"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { useEffect } from "react";

const AnimatedBackground = () => {
  // Animate background position with infinite slow movement
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      style={{
        background: "linear-gradient(270deg, #0D47A1, #1976D2, #42A5F5, #64B5F6)",
        backgroundSize: "800% 800%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
    <div className="relative min-h-screen text-black py-12 px-6 md:px-12 overflow-hidden bg-gray-100">
      {/* Animated Background */}
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10"
      >
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="font-serif text-4xl font-bold text-gray-700">Contact Hefty</h1>
          <p className=" text-gray-500 text-sm">
            Reach out today and experience Hefty’s commitment to quality, reliability, and unmatched support for Screening and Crushers Equipment
          </p>

          <div className="space-y-4 text-gray-200 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-300 w-5 h-5 mt-1" />
              <div className=" text-gray-700">
                <span className="font-medium text-gray-700">Head Office:</span><br />
                Hyderabad
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-blue-300 w-5 h-5 mt-1" />
              <div className=" text-gray-700">
                <span className="font-medium text-gray-700">Phone:</span><br />
                +91 7337500757
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-300 w-5 h-5 mt-1" />
              <div className=" text-gray-700">
                <span className="font-medium text-gray-700">Email:</span><br />
                heftyofficial2025@gmail.com
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="text-blue-300 w-5 h-5 mt-1" />
              <div className=" text-gray-700">
                <span className="font-medium  text-gray-700">Business Hours:</span><br />
                Mon–Sat, 9:00 AM – 6:00 PM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-blue-900 bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Send an Inquiry</h2>
          <form className="space-y-4">
            {["name", "email", "message"].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-200 capitalize">
                  {field === "message"
                    ? "Your Message"
                    : field === "name"
                    ? "Full Name"
                    : "Email Address"}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="mt-1 w-full border border-gray-500 bg-transparent text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "email" ? "you@example.com" : "Your Name"}
                    className="mt-1 w-full border border-gray-500 bg-transparent text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white hover:bg-[#ec6b24] text-black py-2 rounded-md transition text-sm mt-2"
              type="submit"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
}









