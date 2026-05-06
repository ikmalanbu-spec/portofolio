"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./Navbar.css";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Saya", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Portofolio", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

// Reusable navigation links component
const NavLinks = ({ className, onLinkClick }) => (
  <ul className={className}>
    {navLinks.map((link) => (
      <li key={link.href}>
        <MotionLink 
          href={link.href} 
          onClick={onLinkClick}
          whileHover={{ y: -2, color: "var(--accent)" }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </MotionLink>
      </li>
    ))}
  </ul>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <Link href="#home" className="navbar-logo">
            <span className="gradient-text">IKMAL.</span>
          </Link>

          {/* Desktop Menu */}
          <NavLinks className="navbar-links-desktop" />

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="navbar-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  className="navbar-links-mobile-wrapper"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <NavLinks
                    className="navbar-links-mobile"
                    onLinkClick={() => setIsOpen(false)}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <button
            className={`navbar-toggle ${isOpen ? "navbar-toggle-open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
        </div>
      </nav>
    </>
  );
}
