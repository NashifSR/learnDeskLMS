'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Navigation items aligned to the right
  const navbarItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Dashboard", href: "/dashboard/student" },
    { label: "Profile", href: "/profile" },
    { label: "Contact", href: "/contact" },
  ];

  const userName = "John Doe"; // Placeholder username

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 backdrop-blur-md bg-white/30 shadow-lg rounded-full flex items-center justify-between h-16 sticky top-4 z-50">
      {/* Logo / Brand */}
      <div className="text-purple-800 font-bold text-xl">MyLMS</div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {navbarItems.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-purple-600 py-2 rounded-3xl bg-white shadow-md text-center w-[120px] font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}

        {/* User Button */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="text-gray-700 hover:text-purple-600 font-medium py-2 px-4 rounded-full bg-white shadow-md transition-colors"
          >
            {userName}
          </button>

          {/* Dropdown (placeholder) */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl flex flex-col">
              <Link href="/profile" className="px-4 py-2 hover:bg-purple-100">Profile</Link>
              <Link href="/settings" className="px-4 py-2 hover:bg-purple-100">Settings</Link>
              <Link href="/logout" className="px-4 py-2 hover:bg-purple-100">Logout</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex items-center relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 rounded-md focus:outline-none z-50 text-gray-700 hover:text-purple-600 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-40 flex top-60 flex-col items-center justify-center w-full">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center space-y-6">
              {navbarItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 shadow rounded-2xl w-[200px] bg-white/90 py-2 text-center hover:text-purple-600 text-2xl font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile User Button */}
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="text-gray-800 shadow rounded-2xl w-[200px] bg-white/90 py-2 text-center hover:text-purple-600 text-2xl font-semibold transition-colors"
              >
                {userName}
              </button>
              {userMenuOpen && (
                <div className="flex flex-col w-[200px] bg-white shadow-lg rounded-xl mt-2">
                  <Link href="/profile" className="px-4 py-2 hover:bg-purple-100">Profile</Link>
                  <Link href="/settings" className="px-4 py-2 hover:bg-purple-100">Settings</Link>
                  <Link href="/logout" className="px-4 py-2 hover:bg-purple-100">Logout</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
