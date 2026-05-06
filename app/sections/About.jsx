"use client";
import "@/app/globals.css";
import "./About.css";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Tahun Belajar" },
  { value: "10+", label: "Project Selesai" },
  { value: "5+", label: "Sertifikat" },
];

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          transition={variants.transition}
          className="section-title"
        >
          Tentang <span className="gradient-text">Saya</span>
        </motion.h2>
        <motion.p
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          transition={variants.transition}
          className="section-subtitle"
        >
          Mengenal lebih dekat siapa saya dan apa yang saya lakukan
        </motion.p>

        {/* Photo - Centered with gold decorative corners */}
        <motion.div
          className="about-photo-wrapper"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...variants.transition, delay: 0.2 }}
        >
          <div className="about-photo-frame">
            <div className="about-photo-decor-top"></div>
            <div className="about-photo">
              {/* Ganti div ini dengan <img> atau <Image> saat foto sudah siap */}
              <div className="about-photo-placeholder">👤</div>
            </div>
            <div className="about-photo-decor-bottom"></div>
          </div>
        </motion.div>

        {/* Text - Centered below */}
        <div className="about-text-area">
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={variants.transition}
            className="about-text"
          >
            Halo! Saya adalah seorang lulusan SMK TKJ yang disiplin dan cepat belajar. 
            Memiliki minat besar untuk berkarier di bidang IT Support/QA Teaster dan siap 
            berkontribusi bagi perusahaan 
            dengan kemampuan kerja sama tim yang baik.
          </motion.p>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...variants.transition, delay: 0.1 }}
            className="about-text"
          >
            Saat ini saya sedang belajar menjadi pribadi yang detail dan 
            komunikatif dengan pemahaman mendalam tentang mekanik game. 
            Berambisi menjadi Quality Assurance (Game Tester) profesional yang 
            menjamin integritas dan kenyamanan produk sebelum sampai ke tangan 
            pengguna
          </motion.p>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...variants.transition, delay: index * 0.2 }}
                key={stat.label}
                className="about-stat"
              >
                <span className="about-stat-value gradient-text">
                  {stat.value}
                </span>
                <span className="about-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
