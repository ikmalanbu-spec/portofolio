import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ikmal — Portfolio",
  description:
    "Personal portfolio website showcasing skills, projects, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
        {children}
      </body>
    </html>
  );
}
