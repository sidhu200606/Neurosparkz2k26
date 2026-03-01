// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { GraduationCap, Utensils, CreditCard, User, Mail, Phone, Home } from "lucide-react";
// import heroBg from "../assets/hero-bg.jpg";
// import gpayQr from "../assets/gpay-qr.jpeg";
// import Ticket from "./Ticket";
// import SparkParticles from "./SparkParticles";

// const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
// const foodOptions = ["Veg", "Non-Veg"];
// const events = [
//   "Project Presentation",
//   "Circuit Debugging",
//   "Wokwi",
//   "Tech Quiz",
//   "Connection",
//   "Missing Line",
//   "Chess",
//   "Two Truth One Lie",
//   "Photography",
//   "FreeFire",
// ];

// const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyuz3QFE865ky7KMNRMVy_ulUZKxU9Sf-cmgyGeYzDSbML6dkVNVIK9KhxQYE2FsmmOvg/exec";

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     college: "",
//     department: "",
//     year: "",
//     food: "",
//     events: [],
//     paymentStatus: "",
//     transactionId: "",
//   });

//   const [ticketData, setTicketData] = useState(null);

//   const handleChange = (field, value) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//   };

//   const handleEventToggle = (event) => {
//     setForm(prev => ({
//       ...prev,
//       events: prev.events.includes(event)
//         ? prev.events.filter(e => e !== event)
//         : [...prev.events, event],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

   
//     if (!form.name || !form.email || !form.phone) {
//       alert("Please fill required fields");
//       return;
//     }
//     if (form.paymentStatus === "paid" && !form.transactionId) {
//       alert("Enter Transaction ID");
//       return;
//     }

//     try {
//       const response = await fetch(GOOGLE_SHEET_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setTicketData({ ...form, id: Date.now() });
//         // Reset form
//         setForm({
//           name: "",
//           email: "",
//           phone: "",
//           college: "",
//           department: "",
//           year: "",
//           food: "",
//           events: [],
//           paymentStatus: "",
//           transactionId: "",
//         });
//       } else {
//         alert("Registration failed. Try again!");
//       }
//     } catch (err) {
//       console.error("Submit error:", err);
//       alert("Failed to submit. Check your internet connection.");
//     }
//   };

//   const inputStyle =
//     "w-full px-4 py-3 rounded-xl bg-transparent border border-sky-400/30 text-sky-100 placeholder:text-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40 backdrop-blur-md";

//   return (
//     <>
//       <section className="relative w-full min-h-screen pt-24 flex items-center justify-center overflow-hidden text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${heroBg})` }}
//         />
//         <div className="absolute inset-0 bg-black/85" />
//         <SparkParticles />

//         <div id="register" className="relative z-10 w-full px-6">
//           <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-sky-400/30 backdrop-blur-xl bg-black/40 shadow-[0_0_50px_rgba(0,200,255,0.25)]">
//             <h2 className="text-3xl font-bold text-center text-sky-200 sm:mb-6 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
//               Register Now
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-8">
              
//               <div>
//                 <label htmlFor="name" className="flex items-center gap-2 text-sky-300 mb-2">
//                   <User size={16} /> Full Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   className={inputStyle}
//                   value={form.name}
//                   onChange={e => handleChange("name", e.target.value)}
//                 />
//               </div>

             
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="email" className="flex items-center gap-2 text-sky-300 mb-2">
//                     <Mail size={16} /> Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     className={inputStyle}
//                     value={form.email}
//                     onChange={e => handleChange("email", e.target.value)}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="flex items-center gap-2 text-sky-300 mb-2">
//                     <Phone size={16} /> Phone
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     placeholder="+91 9876543210"
//                     className={inputStyle}
//                     value={form.phone}
//                     onChange={e => handleChange("phone", e.target.value)}
//                   />
//                 </div>
//               </div>

              
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="college" className="flex items-center gap-2 text-sky-300 mb-2">
//                     <Home size={16} /> College
//                   </label>
//                   <input
//                     id="college"
//                     type="text"
//                     placeholder="Your college name"
//                     className={inputStyle}
//                     value={form.college}
//                     onChange={e => handleChange("college", e.target.value)}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="department" className="flex items-center gap-2 text-sky-300 mb-2">
//                     <GraduationCap size={16} /> Department
//                   </label>
//                   <input
//                     id="department"
//                     type="text"
//                     placeholder="e.g. ECE, CSE, EEE"
//                     className={inputStyle}
//                     value={form.department}
//                     onChange={e => handleChange("department", e.target.value)}
//                   />
//                 </div>
//               </div>

              
//               <div>
//                 <p className="text-sky-300 mb-3 flex gap-2">
//                   <GraduationCap size={16} /> Year
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {years.map(y => (
//                     <button
//                       type="button"
//                       key={y}
//                       onClick={() => handleChange("year", y)}
//                       className={`px-5 py-2 rounded-full border transition ${
//                         form.year === y
//                           ? "bg-sky-300 text-black"
//                           : "border-sky-400/40 text-sky-300 hover:bg-sky-500/20"
//                       }`}
//                     >
//                       {y}
//                     </button>
//                   ))}
//                 </div>
//               </div>

              
//               <div>
//                 <p className="text-sky-300 mb-4 block">Select Events</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {events.map(event => (
//                     <button
//                       type="button"
//                       key={event}
//                       onClick={() => handleEventToggle(event)}
//                       className={`px-4 py-3 rounded-xl border text-left transition-all ${
//                         form.events.includes(event)
//                           ? "bg-cyan-500/20 border-sky-400 text-cyan-400 shadow-md"
//                           : "border-sky-300/30 text-sky-300 hover:bg-sky-500/10"
//                       }`}
//                     >
//                       {event}
//                     </button>
//                   ))}
//                 </div>
//               </div>

              
//               <div>
//                 <p className="text-sky-300 mb-3 flex gap-2">
//                   <Utensils size={16} /> Food Preference
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {foodOptions.map(f => (
//                     <button
//                       type="button"
//                       key={f}
//                       onClick={() => handleChange("food", f)}
//                       className={`px-5 py-2 rounded-full border transition ${
//                         form.food === f
//                           ? "bg-sky-300 text-black"
//                           : "border-sky-400/40 text-sky-300 hover:bg-sky-500/20"
//                       }`}
//                     >
//                       {f}
//                     </button>
//                   ))}
//                 </div>
//               </div>

              
//               <div className="p-4 sm:p-6 rounded-xl border border-sky-400/30 bg-black/40">
//                 <div className="flex items-center justify-center gap-2 mb-4 text-sky-300 font-bold text-lg tracking-wide">
//                   <CreditCard className="w-5 h-5 text-sky-400" />
//                   Registration Fee ₹200
//                 </div>

//                 <img src={gpayQr} alt="QR" className="w-40 sm:w-48 mx-auto rounded-lg mb-6" />

//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
//                   <button
//                     type="button"
//                     onClick={() => handleChange("paymentStatus", "paid")}
//                     className={`flex-1 py-3 rounded-xl ${
//                       form.paymentStatus === "paid"
//                         ? "bg-green-600 text-white"
//                         : "border border-sky-400/40 text-sky-300"
//                     }`}
//                   >
//                     ₹ I Have Paid
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => handleChange("paymentStatus", "venue")}
//                     className={`flex-1 py-3 rounded-xl ${
//                       form.paymentStatus === "venue"
//                         ? "bg-yellow-500 text-black"
//                         : "border border-sky-400/40 text-sky-300"
//                     }`}
//                   >
//                     Pay at Venue
//                   </button>
//                 </div>

//                 {form.paymentStatus === "paid" && (
//                   <>
//                     <label htmlFor="transactionId" className="text-sky-300 mb-2 block">
//                       Transaction ID / UTR
//                     </label>
//                     <input
//                       id="transactionId"
//                       type="text"
//                       placeholder="Enter Transaction ID / UTR"
//                       className={inputStyle}
//                       value={form.transactionId}
//                       onChange={e => handleChange("transactionId", e.target.value)}
//                     />
//                   </>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-300 to-cyan-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(0,200,255,0.6)] hover:scale-105 transition"
//               >
//                 REGISTER & GET TICKET
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {ticketData && <Ticket data={ticketData} onClose={() => setTicketData(null)} />}
//       </AnimatePresence>
//     </>
//   );
// }



import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GraduationCap, Utensils, CreditCard, User, Mail, Phone, Home } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import gpayQr from "../assets/gpay-qr.jpeg";
import Ticket from "./Ticket";
import SparkParticles from "./SparkParticles";

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const foodOptions = ["Veg", "Non-Veg"];
const events = [
  "Project Presentation",
  "Bug Blast",
  "CodeCircuit(WOKWI)",
  "Techno Quest",
  "Connection",
  "Echo the Line",
  "Chess",
  "Truth vs Trick",
  "Photography",
  "Codes without Coding",
  "FreeFire",
];

// 🔥 Your deployed Google Apps Script URL
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyQhaKC-wno7NXyShPkf7sP3nqtWSd1tUUTYrbpotWNY56rhS-1y22VaJ4ubWiRukb6Hw/exec";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    food: "",
    events: [],
    paymentStatus: "",
    transactionId: "",
  });

  const [ticketData, setTicketData] = useState(null);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleEventToggle = (event) => {
    setForm(prev => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill required fields");
      return;
    }
    if (form.paymentStatus === "paid" && !form.transactionId) {
      alert("Enter Transaction ID");
      return;
    }

    try {
      // ⚠️ Use no-cors to bypass CORS restrictions
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        mode: "no-cors",
      });

      // Assume success since fetch didn't throw
      setTicketData({ ...form, id: Date.now() });

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        college: "",
        department: "",
        year: "",
        food: "",
        events: [],
        paymentStatus: "",
        transactionId: "",
      });

    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to submit. Check your internet connection.");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-xl bg-transparent border border-sky-400/30 text-sky-100 placeholder:text-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40 backdrop-blur-md";

  return (
    <>
      <section className="relative w-full min-h-screen pt-24 flex items-center justify-center overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <SparkParticles />

        <div id="register" className="relative z-10 w-full px-6">
          <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-sky-400/30 backdrop-blur-xl bg-black/40 shadow-[0_0_50px_rgba(0,200,255,0.25)]">
            <h2 className="text-3xl font-bold text-center text-sky-200 sm:mb-6 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
              Register Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sky-300 mb-2">
                  <User size={16} /> Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={inputStyle}
                  value={form.name}
                  onChange={e => handleChange("name", e.target.value)}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sky-300 mb-2">
                    <Mail size={16} /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputStyle}
                    value={form.email}
                    onChange={e => handleChange("email", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sky-300 mb-2">
                    <Phone size={16} /> Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    className={inputStyle}
                    value={form.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              {/* College + Department */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="college" className="flex items-center gap-2 text-sky-300 mb-2">
                    <Home size={16} /> College
                  </label>
                  <input
                    id="college"
                    type="text"
                    placeholder="Your college name"
                    className={inputStyle}
                    value={form.college}
                    onChange={e => handleChange("college", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="department" className="flex items-center gap-2 text-sky-300 mb-2">
                    <GraduationCap size={16} /> Department
                  </label>
                  <input
                    id="department"
                    type="text"
                    placeholder="e.g. ECE, CSE, EEE"
                    className={inputStyle}
                    value={form.department}
                    onChange={e => handleChange("department", e.target.value)}
                  />
                </div>
              </div>

              {/* Year */}
              <div>
                <p className="text-sky-300 mb-3 flex gap-2">
                  <GraduationCap size={16} /> Year
                </p>
                <div className="flex flex-wrap gap-3">
                  {years.map(y => (
                    <button
                      type="button"
                      key={y}
                      onClick={() => handleChange("year", y)}
                      className={`px-5 py-2 rounded-full border transition ${
                        form.year === y
                          ? "bg-sky-300 text-black"
                          : "border-sky-400/40 text-sky-300 hover:bg-sky-500/20"
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events */}
              <div>
                <p className="text-sky-300 mb-4 block">Select Events</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {events.map(event => (
                    <button
                      type="button"
                      key={event}
                      onClick={() => handleEventToggle(event)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all ${
                        form.events.includes(event)
                          ? "bg-cyan-500/20 border-sky-400 text-cyan-400 shadow-md"
                          : "border-sky-300/30 text-sky-300 hover:bg-sky-500/10"
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
              </div>

              {/* Food */}
              <div>
                <p className="text-sky-300 mb-3 flex gap-2">
                  <Utensils size={16} /> Food Preference
                </p>
                <div className="flex flex-wrap gap-3">
                  {foodOptions.map(f => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => handleChange("food", f)}
                      className={`px-5 py-2 rounded-full border transition ${
                        form.food === f
                          ? "bg-sky-300 text-black"
                          : "border-sky-400/40 text-sky-300 hover:bg-sky-500/20"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className="p-4 sm:p-6 rounded-xl border border-sky-400/30 bg-black/40">
                <div className="flex items-center justify-center gap-2 mb-4 text-sky-300 font-bold text-lg tracking-wide">
                  <CreditCard className="w-5 h-5 text-sky-400" />
                  Registration Fee ₹200 : +91 8825666279
                </div>

                <img src={gpayQr} alt="QR" className="w-40 sm:w-48 mx-auto rounded-lg mb-6" />

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => handleChange("paymentStatus", "paid")}
                    className={`flex-1 py-3 rounded-xl ${
                      form.paymentStatus === "paid"
                        ? "bg-green-600 text-white"
                        : "border border-sky-400/40 text-sky-300"
                    }`}
                  >
                    ₹ I Have Paid
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChange("paymentStatus", "venue")}
                    className={`flex-1 py-3 rounded-xl ${
                      form.paymentStatus === "venue"
                        ? "bg-yellow-500 text-black"
                        : "border border-sky-400/40 text-sky-300"
                    }`}
                  >
                    Pay at Venue
                  </button>
                </div>

                {form.paymentStatus === "paid" && (
                  <>
                    <label htmlFor="transactionId" className="text-sky-300 mb-2 block">
                      Transaction ID / UTR
                    </label>
                    <input
                      id="transactionId"
                      type="text"
                      placeholder="Enter Transaction ID / UTR"
                      className={inputStyle}
                      value={form.transactionId}
                      onChange={e => handleChange("transactionId", e.target.value)}
                    />
                  </>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-300 to-cyan-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(0,200,255,0.6)] hover:scale-105 transition"
              >
                REGISTER & GET TICKET
              </button>
            </form>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {ticketData && <Ticket data={ticketData} onClose={() => setTicketData(null)} />}
      </AnimatePresence>
    </>
  );
}