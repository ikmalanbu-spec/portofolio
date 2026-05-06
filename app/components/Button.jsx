"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "./Button.css";

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function Button({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
  target,
  rel,
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  const animationProps = {
    whileHover: { scale: 1.10, y: -2 },
    whileTap: { scale: 0.90 },
    transition: { type: "easeInOut", stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <MotionLink href={href} className={classes} target={target} rel={rel} {...animationProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      className={classes} 
      onClick={onClick} 
      {...animationProps} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
