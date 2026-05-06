"use client"
import "./Card.css";
import { motion } from "framer-motion";

export default function Card({ className = "", header, content, footer, variants }) {
  return (
    <motion.div
      variants={variants}
      transition={variants.transition}
      className={`card ${className}`.trim()}>
      {header && <div className="card-header">{header}</div>}
      {content && <div className="card-content">{content}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </motion.div>
  );
}
