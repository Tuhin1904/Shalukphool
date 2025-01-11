"use client";
import "./Navbar.css";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Desktop Navigation Links */}
            <div className="md:hidden absolute left-0 w-full h-10 flex items-center justify-center">
              <div className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full animate-marquee">
                Get Biplab&apos;s Best with great discount!
              </div>
            </div>

            <div className="hidden md:flex space-x-6">
              {["Home", "Kids", "Jewellery", "Sale"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-900 hover:text-gray-500 transition-colors duration-400"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex space-x-6">
              <a
                href="https://www.facebook.com/shalukphool"
                className="text-gray-800 hover:text-gray-500 transition-colors duration-400"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-500 transition-colors duration-400"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-500 transition-colors duration-400"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@ShalukPhool"
                className="text-gray-800 hover:text-gray-500 transition-colors duration-400"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Hamburger Icon for Small Screens */}
          </div>
        </div>

        {/* Sidebar for Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-50 transform transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Shaluk Phool</h2>
                <button
                  className="text-gray-700 hover:text-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>
              </div>
              <ul className="mt-4 space-y-4 px-4">
                {["Home", "Kids", "Jewellery", "Sale"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-gray-500 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      <nav className="bg-gray-100 shadow-sm sticky top-10 z-40 h-24 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-full">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none md:block hidden"
            >
              <FaSearch size={20} />
            </button>
            <button
              className="md:hidden text-gray-700 hover:text-yellow-600 flex-1 md:flex-none text-left"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                size="lg"
              />
            </button>

            {/* Logo */}
            <div className="text-lg font-bold flex-1 md:flex-none">
              <Image
                src="/shalook.jpg"
                alt="Description of the image"
                width={80}
                height={80}
                style={{ borderRadius: "50%" }}
              />
            </div>

            {/* Profile Icon */}
            <div className="flex gap-5 sm:flex-1 md:flex-none justify-end">
              <button
                onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none md:hidden block"
              >
                <FaSearch size={20} />
              </button>
              <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                <FaUser size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Search Bar */}

        <div
          className={`search-bar-container ${isSearchBarOpen ? "open" : ""}`}
        >
          <div className="relative w-full max-w-lg sm:max-w-xs md:max-w-xl px-4 sm:px-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button onClick={() => setIsSearchBarOpen(false)}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
