import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-18T09:00:00").getTime();

const CountdownTimer = () => {

  function calculateTimeLeft() {
    const diff = Math.max(TARGET_DATE - Date.now(), 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1 }}
          className="flex flex-col items-center"
        >
          <div
            className="
              relative 
              w-14 h-14        /* smaller for mobile */
              sm:w-18 sm:h-18
              md:w-24 md:h-24
              flex items-center justify-center 
              rounded-lg 
              border border-cyan-400/40 
              bg-cyan-400/10
            "
          >
            <span
              className="
                text-lg        /* smaller mobile text */
                sm:text-xl 
                md:text-3xl 
                font-bold 
                text-white
              "
            >
              {String(unit.value).padStart(2, "0")}
            </span>

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-lg pointer-events-none shadow-[0_0_18px_rgba(125,211,252,0.6)]" />
          </div>

          <span className="text-[9px] sm:text-xs text-gray-400 mt-1 uppercase tracking-wider">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;