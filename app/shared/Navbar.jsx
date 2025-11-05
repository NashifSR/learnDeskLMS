"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    { label: "পরিচিতি", href: "#about", position: "left" },
    { label: "কার্যক্রম", href: "#offers", position: "left" },
    { label: "Home", href: "#hero", position: "center" },
    { label: "শিক্ষকগণ", href: "#ustads", position: "right" },
    { label: "যোগাযোগ", href: "#contact", position: "right" },
  ];

  const leftLinks = navbarItems.filter((item) => item.position === "left");
  const centerLink = navbarItems.find((item) => item.position === "center");
  const rightLinks = navbarItems.filter((item) => item.position === "right");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 backdrop-blur-md bg-white/30 shadow-lg rounded-full flex items-center justify-between h-16 sticky top-4 z-50">
      {/* Left links - desktop */}
      <div className="hidden md:flex space-x-6">
        {leftLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-emerald-600  py-2 rounded-3xl bg-white shadow-amber-400 text-center w-[100px] font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Center - Home Button */}
      <div>
        <Link
          href={centerLink.href}
          className="text-emerald-800 font-bold text-lg px-4 py-2 border-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-md backdrop-blur-sm bg-white/40"
        >
          {centerLink.label}
        </Link>
      </div>

      {/* Right links - desktop */}
      <div className="hidden md:flex space-x-6 ">
        {rightLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-emerald-600 font-medium transition-colors  py-2 rounded-3xl bg-white shadow-amber-400 text-center w-[100px] "
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center relative">
        {/* Burger / Close Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 rounded-md focus:outline-none z-50 text-gray-700 hover:text-emerald-600 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile full-screen menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 flex top-60 flex-col items-center justify-center w-full">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center space-y-8">
              {[...leftLinks, ...rightLinks].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 shadow-2xs rounded-4xl w-[200px] bg-white/90 py-2 text-center hover:text-emerald-600 text-2xl font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
