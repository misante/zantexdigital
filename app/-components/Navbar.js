"use client"; // Client component for interactivity
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Zantex Digital
        </Link>

        {/* Burger Button (visible on small screens) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links (hidden on small screens, shown on medium+) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-indigo-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-indigo-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/how-to" className="hover:text-indigo-300">
              How to Use
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-300">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu (visible when open) */}
        {isOpen && (
          <ul className="absolute top-14 left-0 w-full bg-gray-900 md:hidden flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/how-to"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                How to Use
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
