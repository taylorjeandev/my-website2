"use client";  // Ensures this runs on the client side

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaYoutube, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-20 p-4 bg-black shadow-lg fixed w-full top-0 z-50 flex justify-between items-center px-6 border-b border-gray-800">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">Taylor<span className="font-extrabold"> Jean</span></h1>

      {/* Desktop Navigation with Smooth Scroll */}
      <div className="hidden md:flex space-x-6">
        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Who am I
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Projects
        </ScrollLink>
        <ScrollLink to="certs" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Certifications
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Skills
        </ScrollLink>
        <ScrollLink to="education" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Education
        </ScrollLink>
        {/* <ScrollLink to="blog" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
          Blog
        </ScrollLink> */}
      </div>

      {/* Download Resume Button */}
      <a href="/taylor_jean_cv.pdf" className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition" download>
        Download Resume
      </a>

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-4 ml-6">
        <a href="https://www.youtube.com/@taylorgjean" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white text-2xl hover:text-red-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/taylorgjean/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://x.com/taylorgjean" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/taylorjeandev" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-300 ml-4" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Navigation with Smooth Scroll */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center py-4 space-y-4">
          <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Who am I
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Projects
          </ScrollLink>
          <ScrollLink to="certs" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Certifications
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Skills
          </ScrollLink>
          <ScrollLink to="education" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Education
          </ScrollLink>
          <ScrollLink to="blog" smooth={true} duration={500} offset={-80} className="text-gray-300 hover:text-blue-400 cursor-pointer" onClick={() => setOpen(false)}>
            Blog
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}
