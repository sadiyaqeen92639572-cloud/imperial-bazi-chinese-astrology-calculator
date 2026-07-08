'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Calculator, BookOpen, Heart, HelpCircle, FileText } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Calculator', href: '/bazi-calculator/', icon: Calculator },
    { name: 'Reading Guide', href: '/bazi-reading/', icon: BookOpen },
    { name: 'Day Master Hub', href: '/bazi/day-master/', icon: Sparkles },
    { name: 'Compatibility', href: '/bazi-compatibility-guide/', icon: Heart },
    { name: 'Glossary', href: '/glossary/', icon: FileText },
    { name: 'FAQ', href: '/faq/', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/bazi-calculator/" className="flex items-center space-x-2 text-amber-500 font-semibold text-xl hover:opacity-90">
              <Sparkles className="h-6 w-6" />
              <span className="font-serif tracking-wide text-xl text-slate-100">Imperial <span className="text-amber-500">BaZi</span></span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-slate-300 hover:text-amber-400 font-medium text-lg transition-colors"
              >
                <item.icon className="h-4 w-4 text-slate-400" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
              aria-label="Toggle Menu"
              id="menu-toggle-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800" id="mobile-nav-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-xl font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition-colors"
              >
                <item.icon className="h-5 w-5 text-slate-400" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
