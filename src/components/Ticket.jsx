import React, { useRef } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import {
  Download,
  MapPin,
  Calendar,
  Clock,
  Utensils,
  Bus,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import neurosparksLogo from "../assets/neurospark-logo.jpeg";

const Ticket = ({ data, onClose }) => {
  const ticketRef = useRef(null);

  const handleDownload = async () => {
    if (!ticketRef.current) return;

    try {
      const dataUrl = await toPng(ticketRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#0a0e1a",
      });

      const link = document.createElement("a");
      link.download = `NEUROSPARKS-2K26-${data.ticketId}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download ticket");
    }
  };

  const isPaid = data.paymentStatus === "paid";

  /* 🔥 REGISTERED DATE + TIME */
  const regDate = data.registeredAt
    ? new Date(data.registeredAt)
    : new Date();

  const days = [
    "Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday"
  ];

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const regDay = days[regDate.getDay()];
  const regDateStr = `${regDate.getDate()} ${
    months[regDate.getMonth()]
  } ${regDate.getFullYear()}`;

  const regTime = regDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const qrData = JSON.stringify({
    ticketId: data.ticketId,
    name: data.name,
    email: data.email,
    phone: data.phone,
    college: data.college,
    department: data.department,
    year: data.year,
    events: data.events,
    food: data.food,
    payment: data.paymentStatus,
    txnId: data.transactionId || "N/A",
    registeredAt: regDate.toISOString(),
  });

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div
          ref={ticketRef}
          className="rounded-xl overflow-hidden"
          style={{ backgroundColor: "#0a0e1a" }}
        >
          {/* HEADER */}
          <div className="p-6 text-center border-b border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-blue-500/10">
            <div className="flex flex-col items-center gap-3 mb-2">
              <img
                src={neurosparksLogo}
                alt="NeuroSparkZ Logo"
                className="w-16 h-16 rounded-full border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
              />
              <span className="font-bold text-xl tracking-widest text-sky-100">
                NEUROSPARKS 2K26
              </span>
            </div>
            <p className="text-sm text-gray-400">
              National Level Technical Symposium
            </p>
            <p className="text-xs text-sky-400 mt-1">
              UNNAMALAI INSTITUTE OF TECHNOLOGY
            </p>
          </div>

          {/* PAYMENT STATUS */}
          <div
            className={`flex items-center justify-center gap-2 py-2 border-b ${
              isPaid
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
            }`}
          >
            {isPaid ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span className="text-xs font-bold tracking-widest">
              PAYMENT: {isPaid ? "PAID ✓" : "PENDING — PAY AT VENUE"}
            </span>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-4 text-sm text-gray-300">

            {/* ENTRY PASS + REGISTERED TIME */}
            <div className="text-center">
              <p className="text-sky-400 font-bold tracking-widest">
                ENTRY PASS
              </p>
              <p className="text-xs mt-1 text-gray-500">
                #{data.ticketId}
              </p>

              <div className="mt-3 text-[11px] text-gray-400 space-y-1">
                <p>
                  Registered On:
                  <span className="text-sky-400 ml-1 font-semibold">
                    {regDay}
                  </span>
                </p>
                <p>
                  {regDateStr} • {regTime}
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-700 my-4" />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500 uppercase">Name</p>
                <p className="font-semibold text-white">{data.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">College</p>
                <p className="font-semibold text-white">{data.college}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Department</p>
                <p className="font-semibold text-white">{data.department}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Year</p>
                <p className="font-semibold text-white">{data.year}</p>
              </div>
            </div>

            <div className="border-t border-gray-700 my-4" />

            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">
                Registered Events
              </p>
              <div className="flex flex-wrap gap-2">
                {data.events.map((event) => (
                  <span
                    key={event}
                    className="px-2 py-1 text-xs border border-sky-400/40 rounded bg-sky-400/10 text-sky-400"
                  >
                    {event}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-400" />
              <span>
                Food: <span className="text-white">{data.food}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span className="text-white">March 18, 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-white">ECE Dept</span>
            </div>

            <div className="flex items-center gap-2">
              <Bus className="w-4 h-4 text-purple-400" />
              <span>
                Transport:
                <span className="text-white">
                  {" "}Available from Old Bus Stand at 9:00 AM
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>
                Refreshment & Lunch
                <span className="text-white"> will be provided</span>
              </span>
            </div>

            <div className="border-t border-dashed border-gray-700 my-4" />

            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Scan for Registration Details
              </p>
              <div className="p-2 bg-white rounded-lg">
                <QRCodeSVG
                  value={qrData}
                  size={120}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#0a0e1a"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-500 text-black font-bold text-sm"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD TICKET
          </motion.button>

          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg border border-gray-600 text-white text-sm"
          >
            CLOSE
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ticket;