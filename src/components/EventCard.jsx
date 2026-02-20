import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event, index, onClick }) => {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border border-sky-300 bg-sky-900/20 p-6 cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_15px_#3b82f6] hover:border-sky-300"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-sky-400/60 to-transparent" />
        <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-sky-400/60 to-transparent" />
      </div>

      <div className="relative z-10">
        <motion.div
          className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md bg-sky-500/10 border border-sky-400/40 group-hover:bg-sky-500/20 transition-colors"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-sky-400" />
        </motion.div>
        <h3 className="font-display text-lg font-semibold mb-2 text-sky-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all">
          {event.title}
        </h3>
        <p className="text-muted-foreground font-body text-base leading-relaxed">
          {event.description}
        </p>
        <p className="mt-3 font-body text-xs text-blue-300/70 tracking-wider uppercase">
          Click for details →
        </p>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default EventCard;