import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import { technicalEvents, nonTechnicalEvents, onlineEvents } from "../data/event";
import SparkParticles from "./SparkParticles";
import heroBg from "../assets/hero-bg.jpg";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section
        id="events"
        className="relative w-full py-24 text-white overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Particles */}
        <SparkParticles />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4">

          {/* Technical Events */}
          <div id="technical" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                Technical Events
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalEvents.map((event, i) => (
                <EventCard
                  key={event.title}
                  event={event}
                  index={i}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>

          {/* Non Technical Events */}
          <div id="non-technical" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                Non-Technical Events
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonTechnicalEvents.map((event, i) => (
                <EventCard
                  key={event.title}
                  event={event}
                  index={i}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>

          {/* Online Events */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                Online Events
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {onlineEvents.map((event, i) => (
                <EventCard
                  key={event.title}
                  event={event}
                  index={i}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modal (ONLY ONCE) */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default EventsSection;