import Image from "next/image";
import Navbar from "@/components/Navbar";
import MissionVision from "@/components/inner/MissionVision";
import CoreValues from "@/components/inner/CoreValues";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

// import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import SoftwareOutsourcing from "@/components/SoftwareOutsourcing";

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container font-sans text-gray-800">
      
      {/* SECTION 1: Banner Image */}
      <section className="w-full">
        <Image
          src="/BannerImage.png"
          alt="Office Team"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* SECTION 2: About + Side Image */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl font-bold text-blue-900 hover:text-[#ec6b24]">
           About Hefty
          </h2>
          <p >
            At <strong>Hefty</strong>, At Hefty, we are more than just a manufacturer — we are innovators, problem-solvers, and partners in progress. With years of expertise in designing and delivering world-class crushing, screening, and material handling equipment, we have built a reputation for strength, precision, and reliability. Our products are engineered to perform in the toughest conditions, empowering industries like mining, construction, aggregates, and recycling to achieve maximum efficiency and productivity.
          </p>
          <p className="text-base">
           From the drawing board to the final assembly, every Hefty solution reflects our passion for engineering excellence and our commitment to delivering unmatched value to our clients.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/Family.png"
            alt="Team Working"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <SoftwareOutsourcing />
      <MissionVision />
    </div>
    <CoreValues />
    <Faq />
    <ContactSection />
  
    {/* <ServiceSection /> */}
    <Footer />
    </>
    
  );
};

export default AboutUs;