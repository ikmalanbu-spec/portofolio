"use client"
import Card from "../components/Card";
import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Luxury",
    category: "Branding & Web Development",
  },
  {
    title: "Corporate Identity",
    category: "Design & Strategy",
  },
  {
    title: "Portfolio Landing",
    category: "Minimalist Interaction",
  },
];

const projectVariantsItem = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const projectVariantsContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 }
  },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.div 
        variants={projectVariantsContainer} 
        initial="initial" 
        whileInView="animate" 
        transition={projectVariantsContainer.transition} 
        viewport={{ once: true, amount: 0.2 }} 
        className="container">
        <motion.h2 
          variants={projectVariantsItem}
          transition={projectVariantsItem.transition}
          viewport={{ once: true }}
          className="section-title">
          Portofolio <span className="gradient-text">Terpilih</span>
        </motion.h2>
        <motion.p 
          variants={projectVariantsItem}
          transition={projectVariantsItem.transition}
          viewport={{ once: true }}
          className="section-subtitle">
          Beberapa project yang sudah saya kerjakan
        </motion.p>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="project-card"
              variants={projectVariantsItem}
              header={
                <div className="project-image"></div>
              }
              content={
                <>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <a href="#" className="project-link">Pelajari Selengkapnya →</a>
                </>
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
