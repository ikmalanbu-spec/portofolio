"use client";
import Button from "../components/Button";
import { motion } from "framer-motion";
import "./Hero.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = (delay, opacity) => {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: opacity,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-bg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={itemVariants(0.5, 1).transition}
      >
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-glow hero-glow-1"></motion.div>
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-glow hero-glow-2"></motion.div>
        <motion.div variants={itemVariants(0.2, 0.5)} className="hero-grid"></motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-container"
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={itemVariants(0.5, 1)}
          >
            Bermain dengan ketelitian,
            <br />
            <span className="gradient-text">bekerja dengan dedikasi</span>
          </motion.h1>
          <motion.p 
            className="hero-description"
            variants={itemVariants(0.7, 1)}
          >
            Seorang Lulusan SMK yang berfokus pada penjagaan kualitas, fungsionalitas, 
            dan user experience dalam pengambangan game.
          </motion.p>
          <motion.div 
            className="hero-actions"
            variants={itemVariants(0.9, 1)}
          >
            <Button variant="primary" href="#contact">
              Hubungi Saya
            </Button>
            <Button variant="outline" href="#projects">
              Lihat Portofolio
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
