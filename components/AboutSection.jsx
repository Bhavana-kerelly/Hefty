export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white text-black flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img
          src="/About.jpg" // Replace with your actual image path
          alt="Office"
          className="rounded shadow object-cover w-full h-[300px] md:h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xlfont-bold mb-5">
          Hefty: Where strength meets smart engieering.
        </h2>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          At Hefty, we engineer more than just machines — we build solutions that power productivity. Specializing in advanced crushing and screening equipment, we serve the mining and construction industries with technology-driven, cost-effective, and reliable systems. Our designs focus on power, precision, and performance, ensuring that every operation achieves maximum efficiency and output.
        </p>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          With a commitment to innovation and durability, Hefty products are built to thrive in demanding environments, delivering consistent results that our customers can depend on nationwide. From mobile track-mounted crushers to integrated screening systems, we provide solutions tailored to your project’s scale and requirements.
        </p>
      </div>
    </section>
  );
}
