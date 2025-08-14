// components/Footer.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white  text-blue-900 py-12 font-serif">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Company Info & Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <Image
                src="/Logo.jpg"
                alt="Hefty"
                width={150}
                height={40}
                className="h-auto w-auto shadow-lg"
              />
            </Link>
            <p className="text-sm text-blue-900 max-w-xs">
              Hefty is a leading provider of innovative and reliable financial solutions, dedicated to empowering your financial future.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-blue-900 transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-blue-900 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-blue-900 transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-blue-900 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-blue-900">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-blue-900 ">
              <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">Company</Link>
              <Link href="/products/crushes" className="hover:text-blue-400 transition-colors duration-300">Products</Link>
              <Link href="/services-and-parts" className="hover:text-blue-400 transition-colors duration-300">Services & Parts</Link>
              <Link href="/blogs" className="hover:text-blue-400 transition-colors duration-300">Blogs</Link>
              <Link href="/news" className="hover:text-blue-400 transition-colors duration-300">News</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-blue-900">Contact Info</h4>
            <address className="not-italic text-sm text-blue-900  space-y-2">
              <p>123 Hefty Drive, Suite 456</p>
              <p>Financial City, FL 12345</p>
              <p>Email: <a href="mailto:info@hefty.com" className="hover:text-blue-400 transition-colors duration-300">info@hefty.com</a></p>
              <p>Phone: <a href="tel:+1-800-555-0199" className="hover:text-blue-400 transition-colors duration-300">+1 (800) 555-0199</a></p>
            </address>
          </div>
          
          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 text-blue-900">Newsletter</h4>
            <p className="text-sm text-blue-900 mb-4">
              Stay up-to-date with our latest news and offers.
            </p>
            <form className="w-full max-w-sm">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-blue-900  text-black px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        
          <div className="flex items-center justify-between w-full px-4 py-2  text-blue-900 ">
  {/* Left side */}
  <p className="text-sm">&copy; {new Date().getFullYear()} Your Company</p>

  {/* Middle */}
  <p className="text-sm font-serif text-center">
    Designed &amp; Developed by SouvenirIT
  </p>

  {/* Right side */}
  <div className="flex space-x-4">
    <Link
      href="/privacy-policy"
      className="hover:text-blue-400 transition-colors duration-300"
    >
      Privacy Policy
    </Link>
    <Link
      href="/terms-of-service"
      className="hover:text-blue-400 transition-colors duration-300"
    >
      Terms of Service
    </Link>
  </div>
</div>

        </div>
    
    </footer>
  );
}