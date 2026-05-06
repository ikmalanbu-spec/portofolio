"use client"
import "./Contact.css";
import { motion } from "framer-motion";
import Button from "../components/Button";

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const contactVariantsContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 }
  },
};

const contactVariantsItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div 
        variants={contactVariantsContainer}
        initial="initial"
        whileInView="animate"
        transition={contactVariantsContainer.transition}
        viewport={{ once: true, amount: 0.3 }}
        className="container">
        <motion.h2 
          variants={contactVariantsItem}
          transition={contactVariantsItem.transition}
          viewport={{ once: true }}
          className="section-title">
          Hubungi <span className="gradient-text">Saya</span>
        </motion.h2>
        <motion.p 
          variants={contactVariantsItem}
          transition={contactVariantsItem.transition}
          viewport={{ once: true }}
          className="section-subtitle">
          Mari terhubung melalui media sosial atau unduh CV saya
        </motion.p>

        <div className="contact-content">
          {/* Left: Social Media */}
          <motion.div 
            className="contact-left"
            variants={contactVariantsItem}
          >
            <p>
              Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau 
              peluang untuk menjadi bagian dari visi Anda.
            </p>
            <div className="contact-socials">
              {socials.map((social) => (
                <motion.a
                  variants={contactVariantsItem}
                  transition={contactVariantsItem.transition}
                  viewport={{ once: true }}
                  key={social.name}
                  href={social.url}
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Download CV */}
          <motion.div 
            className="contact-cv-card"
            variants={contactVariantsItem}
          >
            <p className="contact-cv-label">Curriculum Vitae</p>
            <h3 className="contact-cv-title">
              Siap untuk mulai<br />bekerja bersama?
            </h3>
            <Button 
              variant="primary" 
              href="https://drive.google.com/your-cv-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </Button>
            <p className="contact-cv-note">File format: PDF (via Google Drive)</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
