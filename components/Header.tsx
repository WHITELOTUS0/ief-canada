"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cream-50 sticky top-0 z-50 border-b border-cream-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-burgundy-800 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">IEF</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-burgundy-800 text-lg leading-tight">
                IEF Canada
              </p>
              <p className="text-xs text-charcoal-500">
                Ecumenical Fellowship
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-charcoal-700 hover:text-burgundy-800 font-medium transition-colors rounded-lg hover:bg-cream-100"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-4 px-5 py-2.5 bg-burgundy-800 text-white font-medium rounded-lg hover:bg-burgundy-700 transition-colors"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-charcoal-700 hover:text-burgundy-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-200">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-charcoal-700 hover:text-burgundy-800 hover:bg-cream-100 font-medium rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/donate"
                className="mt-2 mx-4 px-5 py-3 bg-burgundy-800 text-white font-medium rounded-lg hover:bg-burgundy-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
