"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="hidden md:flex space-x-6">
            {["Home", "Kids", "Jewellery", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-700 hover:text-yellow-600"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="https://www.facebook.com/shalukphool"
              className="text-gray-700 hover:text-yellow-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-yellow-600"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
          {/* <div className="flex-shrink-0">
            <img className="h-10 w-auto" src="/shalook.jpg" alt="Logo" />
          </div> */}

          {/* Desktop Links */}

          {/* Icons */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-600">
              <i className="fas fa-search"></i>
            </button>
            <button className="text-gray-700 hover:text-yellow-600">
              <i className="fas fa-user"></i>
            </button>
            <button className="text-gray-700 hover:text-yellow-600">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-yellow-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {[
            "Home",
            "Sarees",
            "Blouses",
            "Men",
            "Kids",
            "Jewellery",
            "Sale",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
