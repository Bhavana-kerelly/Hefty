"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  // State to hold the timeout ID so we can clear it
  const [timeoutId, setTimeoutId] = useState(null);

  // When the mouse enters, clear any pending close timeouts and open the menu
  const handleMouseEnter = (menu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setOpenMenu(menu);
  };

  // When the mouse leaves, set a small delay before closing the menu
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenMenu(null);
    }, 100); // 100ms delay to allow moving the cursor to the dropdown
    setTimeoutId(id);
  };

  // A single function to handle mobile link clicks to close the menu
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false); // Also close the submenu
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 shadow-md bg-[#ffffff] text-black relative z-50 font-serif">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-full px-6">

        {/* Logo */}
        <div className="hidden md:flex font-bold flex-shrink-0">
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo1.jpg"
          alt="Nihal Finserv"
          width={125}
          height={30}
          className="h-auto w-auto "
          priority // optional: ensures logo loads quickly
        />
      </Link>
    </div>


        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-2 items-center text-sm">
  {/* Home */}
  <a
    href="/"
    className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]"
  >
    Home
  </a>

  {/* Company Dropdown */}
  <a href="/about" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            About Us
          </a>

          

          {/* Products Dropdown - Mouse events are on this parent div */}
          <div
            className="relative group h-full flex items-center hover:text-[#e96a32]"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer px-3 py-2 rounded-lg transition-colors duration-300 ">
              Products ▾
            </span>
            {openMenu === "products" && (
              <div className="fixed top-20 left-0 right-0 bg-[#ec6b24] shadow-2xl rounded-b-lg p-8 transition-all duration-300 ease-in-out opacity-100 animate-slide-down">
                <div className="grid grid-cols-5 gap-8 max-w-[1280px] mx-auto text-white text-sm">
                  {/* Column 1: Crushes */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/crushers/crushers" className="hover:text-black transition-colors">Crushers</a>
                    </div>
                    <a href="/products/crushers/jawcrushers" className="hover:text-black transition-colors">Jaw Crushers</a>
                    <a href="/products/crushers/conecrushers" className="hover:text-black transition-colors">Cone Crushers</a>
                    <a href="/products/crushers/ccavcseries" className="hover:text-black transition-colors">Cone Crushers AVC Series</a>
                    <a href="/products/crushers/ccqmseries" className="hover:text-black transition-colors">Cone Crushers QM Series</a>
                    <a href="/products/crushers/gyratoryconecrusher" className="hover:text-black transition-colors">Gyratory Cone Crusher</a>
                    <a href="/products/crushers/rollcrushers" className="hover:text-black transition-colors">Roll Crushers</a>
                  </div>
                  {/* Column 2: Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/mobileseries/mobileseries" className="hover:text-black transition-colors">Mobile Series</a>
                    </div>
                    <a href="/products/mobileseries/trackmountedjawcrusher" className="hover:text-black transition-colors">Track Mounted Jaw Crusher</a>
                    <a href="/products/mobileseries/trackmountedconecrusher" className="hover:text-black transition-colors">Track Mounted Cone Crusher</a>
                    <a href="/products/mobileseries/trackmountedendurer" className="hover:text-black transition-colors">Track Mounted Endurer</a>
                    <a href="/products/mobileseries/trackmountedverticalshiftimpactor" className="hover:text-black transition-colors">Track Mounted Vertical Shift Impactor</a>
                    <a href="/products/mobileseries/trackmountedscreen" className="hover:text-black transition-colors">Track Mounted Screen</a>
                    <a href="/products/mobileseries/trackmountedscalper" className="hover:text-black transition-colors">Track Mounted Scalper</a>
                  </div>
                  {/* Column 3: Semi Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/semimobileseries/semimobileseries" className="hover:text-black transition-colors">Semi Mobile Series</a>
                    </div>
                    <a href="/products/semimobileseries/profastjaw" className="hover:text-black transition-colors">Pro Fast Jaw</a>
                    <a href="/products/semimobileseries/profastcone" className="hover:text-black transition-colors">Pro Fast Cone</a>
                    <a href="/products/semimobileseries/profastverticalshiftimpactor" className="hover:text-black transition-colors">Pro Fast Vertical Shift Impactor</a>
                  </div>
                  {/* Column 4: Feeders and Impactors */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/feeders/feeders" className="hover:text-black transition-colors">Feeders</a>
                    </div>
                    <a href="/products/feeders/grizzly" className="hover:text-black transition-colors">Grizzly Feeder</a>
                    <a href="/products/feeders/feederscreen" className="hover:text-black transition-colors">Feeder Screen</a>
                    <a href="/products/feeders/panfeeder" className="hover:text-black transition-colors">Pan Feeder</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/impactors/impactors" className="hover:text-black transition-colors">Impactors</a>
                    </div>
                    <a href="/products/impactors/verticalshiftimpactor" className="hover:text-black transition-colors">Vertical Shift Impactor</a>
                    <a href="/products/impactors/horizontalshiftimpactor" className="hover:text-black transition-colors">Horizontal Shift Impactor</a>
                  </div>
                  {/* Column 5: Screens, Washing, Classifier */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/screens/screens" className="hover:text-black transition-colors">Screens</a>
                    </div>
                    <a href="/products/screens/vibratingscreen" className="hover:text-black transition-colors">Vibrating Screen</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/washingsystems/washingsystems" className="hover:text-black transition-colors">Washing Systems</a>
                    </div>
                    <a href="/products/washingsystems/sandwasher" className="hover:text-black transition-colors">Sand Washer</a>
                    <a href="/products/washingsystems/dualsandwasher" className="hover:text-black transition-colors">Dual Sand Washer</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/classifier/classifier" className="hover:text-black transition-colors">Classifier</a>
                    </div>
                    <a href="/products/classifier/proairclassifier" className="hover:text-black transition-colors">Pro Air Classifier</a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/concretebatchingsolution/concretebatchingsolution" className="hover:text-black transition-colors">Concerete Batching Solution </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/mechanicalroadpaver/mechanicalroadpaver" className="hover:text-black transition-colors">Mechanical Road Paver </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/evdumpertruck/evdumpertruck" className="hover:text-black transition-colors">EV -  Dumper Truck </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/evtractortrailertruck/evtractortrailertruck" className="hover:text-black transition-colors">EV- Tractor Trailer Truck </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="/facilities" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            Facilities
          </a>
          <a href="/international" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            International
          </a>
          <a href="/services-and-parts" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            Services & Parts
          </a>
          {/* <a href="/news" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            News
          </a> */}
          <a href="/blogs" className="relative group px-3 py-2  transition-colors duration-300 hover:text-[#e96a32]">
            Blogs
          </a>
          <a href="/contact" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#e96a32]">
            Contact Us
          </a>
          <div className="mt-6 flex space-x-4">
                        <a
                          href="https://www.facebook.com/profile.php?id=61578856662236"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 transition-colors duration-300 hover:text-[#e96a32]"
                        >
                          <FaFacebookF size={15} />
                        </a>
                        <a
                          href="https://x.com/Hefty_hyd "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 transition-colors duration-300 hover:text-[#e96a32]"
                        >
                          <FaTwitter size={15} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/108119796"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 transition-colors duration-300 hover:text-[#e96a32]"
                        >
                          <FaLinkedinIn size={15} />
                        </a>
                        <a
                          href="https://www.instagram.com/hefty_hyd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-900 transition-colors duration-300 hover:text-[#e96a32]"
                        >
                          <FaInstagram size={15} />
                        </a>
                      </div>
        </nav>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0F2D54] text-white px-6 py-4 space-y-4 shadow-lg">
          <a href="/" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">
            Home
          </a>
          <a href="/about" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">
            About Us
          </a>

          {/* Mobile Products collapsible */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full text-left px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200 flex justify-between items-center"
              aria-expanded={mobileProductsOpen}
            >
              Products
              <span className="ml-2 transition-transform duration-200 transform">{mobileProductsOpen ? "▲" : "▼"}</span>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 mt-2 space-y-4 text-sm transition-all duration-300 ease-in-out overflow-hidden">
                {/* Column 1: Crushes */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/crushes" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Crushes</a>
                  </div>
                  <a href="/products/crushes/jaw" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Jaw Crushers</a>
                  <a href="/products/crushes/cone" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Cone Crushers</a>
                  <a href="/products/crushes/roll" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Roll Crushers</a>
                </div>
                {/* Column 2: Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/mobile-series" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Mobile Series</a>
                  </div>
                  <a href="/products/mobile-series/jaw-crusher" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Jaw Crusher</a>
                  <a href="/products/mobile-series/cone-crusher" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Cone Crusher</a>
                  <a href="#" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Endurer</a>
                  <a href="/products/mobile-series/impactor" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Vertical Shift Impactor</a>
                  <a href="/products/mobile-series/screen" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Screen</a>
                  <a href="/products/mobile-series/scalper" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Track Mounted Scalper</a>
                </div>
                {/* Column 3: Semi Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/semi-mobile-series" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Semi Mobile Series</a>
                  </div>
                  <a href="/products/semi-mobile-series/pro-fast-jaw" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Pro Fast Jaw</a>
                  <a href="/products/semi-mobile-series/pro-fast-cone" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Pro Fast Cone</a>
                  <a href="/products/semi-mobile-series/vsi" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Pro Fast Vertical Shift Impactor</a>
                </div>
                {/* Column 4: Feeders and Impactors */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/feeders" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Feeders</a>
                  </div>
                  <a href="/products/feeders/grizzly" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Grizzly Feeder</a>
                  <a href="/products/feeders/feeder-screen" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Feeder Screen</a>
                  <a href="/products/feeders/pan-feeder" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Pan Feeder</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/impactors" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Impactors</a>
                  </div>
                  <a href="/products/impactors/vsi" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Vertical Shift Impactor</a>
                  <a href="/products/impactors/hsi" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Horizontal Shift Impactor</a>
                </div>
                {/* Column 5: Screens, Washing, Classifier */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/screens" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Screens</a>
                  </div>
                  <a href="/products/screens/vibrating" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Vibrating Screen</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/washing-systems" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Washing Systems</a>
                  </div>
                  <a href="/products/washing-systems/sand-washer" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Dual Sand Washer</a>
                  <a href="/products/washing-systems/dual-sand-washer" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Dual Sand Washer</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/classifier" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Classifier</a>
                  </div>
                  <a href="#" onClick={handleMobileLinkClick} className="block hover:text-black transition-colors">Pro Air Classifier</a>
                </div>
              </div>
            )}
          </div>
         
          <a href="/facilities" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">Facilities</a>
          <a href="/international" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">International</a>
          <a href="/services-and-parts" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">Services & Parts</a>
           <a href="/blogs" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">Blogs</a>
          {/* <a href="/news" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">News</a> */}
          <a href="/contact" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#e96a32] transition-colors duration-200">Contact Us</a>

          {/* Hire Us Button (Mobile) */}
          {/* <div className="flex items-center space-x-2">
      <label htmlFor="language" className="text-sm font-medium text-gray-700">
        Select Language:
      </label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">-- Choose --</option>
        <option value="ar">Arabic</option>
        <option value="th">Thai</option>
        <option value="id">Indonesian</option>
        <option value="ru">Russian</option>
      </select>
    </div> */}
        </nav>
      )}
    </header>
  );
}
