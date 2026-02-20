import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SparkParticles from "./SparkParticles";
import CountdownTimer from "./Countdown";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-20 md:pt-24 lg:pt-28 flex items-center justify-center overflow-hidden bg-black text-white font-[Montserrat]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <SparkParticles />

      {/* Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">

        {/* ================= TITLE ================= */}
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="
    font-[Orbitron]
    text-2xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
    2xl:text-[90px]
    font-extrabold
    tracking-wide
    leading-tight
    mb-3
    text-center
    whitespace-nowrap
  "
>
  <span className="bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.7)]">
    NEURO
  </span>{" "}
  <span className="text-gray-200">
    SPARKZ
  </span>
</motion.h1>

        {/* ================= 2K26 ================= */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-sky-400
            tracking-[0.3em]
            mt-3
            mb-6
          "
        >
          2K26
        </motion.p>

        {/* ================= SUBTITLE ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-300
            max-w-md
            sm:max-w-2xl
            mx-auto
            leading-relaxed
            font-medium
            px-2
            mb-8
          "
        >
          A National Level Technical Symposium —
          <span className="block sm:inline">
            {" "}Igniting Innovation in Electronics & Communication Engineering
          </span>
        </motion.p>

        {/* ================= DATE & LOCATION ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-400" />
            <span className="text-sm sm:text-base font-semibold">
              March 18, 2026
            </span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-sky-400/50" />

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-400" />
            <span className="text-sm sm:text-base font-semibold">
              ECE Department
            </span>
          </div>
        </motion.div>

        {/* ================= COUNTDOWN ================= */}
        <div className="mb-12 scale-100 sm:scale-110 md:scale-125">
          <CountdownTimer />
        </div>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >

          {/* REGISTER */}
          <motion.a
  href="#register"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 35px rgba(56,189,248,0.8)"
  }}
  whileTap={{ scale: 0.95 }}
  onClick={(e) => {
    e.preventDefault();       // Prevent default jump
    const section = document.getElementById("register");
    if (section) {
      const yOffset = -64;    // height of fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }}
  className="
    w-full sm:w-auto
    px-8 py-3
    rounded-md
    border border-sky-400
    bg-sky-400
    text-black
    text-sm font-bold tracking-wider
    transition-all duration-300
    hover:bg-sky-300
  "
>
  REGISTER NOW
</motion.a>
          {/* EXPLORE EVENTS */}
          <motion.a
            href="#events"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59,130,246,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full sm:w-auto
              px-8 py-3
              rounded-md
              border border-sky-400
              text-sky-400
              text-sm font-bold tracking-wider
              transition-all duration-300
              hover:border-blue-400
              hover:text-blue-300
            "
          >
            EXPLORE EVENTS
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;