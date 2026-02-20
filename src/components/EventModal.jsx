import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, Phone, User, BookOpen, CheckCircle } from "lucide-react";

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  const Icon = event.icon;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl border border-sky-300/40 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(125,211,252,0.25)]"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Glow Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-10 p-2 rounded-md bg-sky-300/10 text-sky-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="p-6 md:p-8">

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg 
                                bg-sky-300/10 
                                border border-sky-300/40 
                                shadow-[0_0_25px_rgba(125,211,252,0.6)]">
                  <Icon className="w-7 h-7 text-sky-300 drop-shadow-[0_0_10px_rgba(125,211,252,0.8)]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-300 drop-shadow-[0_0_10px_rgba(125,211,252,0.8)]">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-300">{event.date}</p>
                </div>
              </div>

              {/* Details */}
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {event.details}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

                <div className="flex items-start gap-3 p-3 rounded-lg 
                                bg-sky-300/5 
                                border border-sky-300/30 
                                shadow-[0_0_15px_rgba(125,211,252,0.3)]">
                  <MapPin className="w-4 h-4 text-sky-300 mt-0.5" />
                  <div>
                    <p className="text-xs text-sky-200 uppercase tracking-wider">Venue</p>
                    <p className="text-sm text-white">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg 
                                bg-sky-300/5 
                                border border-sky-300/30 
                                shadow-[0_0_15px_rgba(125,211,252,0.3)]">
                  <Clock className="w-4 h-4 text-sky-300 mt-0.5" />
                  <div>
                    <p className="text-xs text-sky-200 uppercase tracking-wider">Time</p>
                    <p className="text-sm text-white">{event.time}</p>
                  </div>
                </div>

              </div>

              {/* Coordinators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-sky-300 mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-sky-300" />
                  Event Coordinators
                </h3>
                <div className="space-y-2">
                  {event.coordinators.map((coord, i) => (
                    <div
                      key={coord.name}
                      className="flex items-center justify-between p-3 rounded-lg 
                                 bg-sky-300/5 
                                 border border-sky-300/20"
                    >
                      <span className="text-sm text-white">{coord.name}</span>
                      <span className="flex items-center gap-1.5 text-xs text-sky-200">
                        <Phone className="w-3 h-3 text-sky-300" />
                        {coord.phone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-sm font-semibold text-sky-300 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-300" />
                  Rules
                </h3>

                <ul className="space-y-2">
                  {event.rules.map((rule, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-300 mt-0.5 drop-shadow-[0_0_6px_rgba(125,211,252,0.8)]" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;