"use client"
import Card from "../components/Card";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "🌐", level: 90 },
  { name: "CSS", icon: "🎨", level: 85 },
  { name: "JavaScript", icon: "⚡", level: 80 },
  { name: "React", icon: "⚛️", level: 75 },
  { name: "Next.js", icon: "▲", level: 70 },
  { name: "Figma", icon: "🎯", level: 65 },
];

const skillVariantsItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const skillVariantsContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    when: "beforeChildren"
  },
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="container"
        variants={skillVariantsContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}>
        <motion.h2
          variants={skillVariantsItem}
          transition={skillVariantsItem.transition}
          className="section-title">
          Keahlian <span className="gradient-text">Saya</span>
        </motion.h2>
        <motion.p
          variants={skillVariantsItem}
          transition={skillVariantsItem.transition}
          className="section-subtitle">
          Teknologi dan tools yang saya gunakan untuk membangun project
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="skill-card"
              variants={skillVariantsItem}
              header={
                <div className="skill-icon">
                  <span>{skill.icon}</span>
                </div>
              }
              content={
                <>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    ></motion.div>
                  </div>
                </>
              }
              footer={
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="skill-level"
                >
                  {skill.level}%
                </motion.span>
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
