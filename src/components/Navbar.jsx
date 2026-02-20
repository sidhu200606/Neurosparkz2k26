// Navbar.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import collegeLogo from "../assets/college-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Events", "Technical", "Non-Technical", "Contact"];

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -64; // Navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setOpen(false); // close mobile menu
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-sky-400 bg-background/50 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <img
            src={collegeLogo}
            alt="UIT Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <span className="font-display text-[10px] sm:text-xs font-bold tracking-wider text-foreground leading-tight">
            UNNAMALAI INSTITUTE OF TECHNOLOGY
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.toLowerCase().replace(" ", "-"));
              }}
              className="text-base text-muted-foreground hover:text-sky-400 transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Register Button (Desktop Only) */}
        <motion.a
          href="#events" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("register");
          }}
          className="hidden md:block px-4 py-2 rounded-md bg-sky-300 border border-sky-400 text-black text-xs font-semibold tracking-wider hover:bg-sky-400 transition-colors duration-300"
        >
          REGISTER
        </motion.a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t border-sky-400 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.toLowerCase().replace(" ", "-"));
              }}
              className="text-muted-foreground hover:text-sky-400 transition-colors duration-300"
            >
              {item}
            </a>
          ))}

          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("register");
            }}
            className="mt-2 px-4 py-2 text-center rounded-md bg-sky-300 border border-sky-400 text-black text-sm font-semibold hover:bg-sky-400 transition-colors duration-300"
          >
            REGISTER
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;