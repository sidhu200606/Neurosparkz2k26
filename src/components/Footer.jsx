import {
  Zap,
  MapPin,
  Bus,
  UtensilsCrossed,
  Code2,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

import collegeLogo from "../assets/college-logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white border-t border-gray-800 pt-8 pb-14 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= LOCATE US ================= */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center tracking-widest mb-14 md:mb-16">
            LOCATE US
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-700 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.123!2d77.8695!3d9.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf85bfafab47%3A0x5c1e6f10e7a8b5b0!2sUnnamalai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="UIT Location"
              />
            </div>

            {/* Info Section */}
            <div className="space-y-8 text-sm text-gray-300">

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">ADDRESS</p>
                  <p className="mt-1">
                    Unnamalai Institute of Technology <br />
                    Suba Nagar, Kovilpatti <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bus className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">TRANSPORT</p>
                  <p className="mt-1">Available from Old Bus Stand at 9:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">REFRESHMENTS</p>
                  <p className="mt-1">Refreshments & Lunch will be provided</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= ORGANIZING TEAM ================= */}
        <div className="border-t border-gray-800 pt-10 pb-6 text-center">
          <h3 className="text-lg font-semibold tracking-wide text-cyan-400 mb-4">
            ORGANIZING TEAM
          </h3>

          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <span className="text-white font-semibold">Convenor:</span> Dr. S. Parvathi M.E.,Ph.D
            </p>
            <p>
              <span className="text-white font-semibold">Staff Coordinator:</span> J. Varsha M.E.,(Ph.D)
            </p>
            <p>
              <span className="text-white font-semibold">
  Student Coordinators:
</span>{" "}<br/>
Sidharthan.R.C,<br />
Ranjith.S,<br />
Deepika.S,<br />
Mathusri.S
            </p>
          </div>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="border-t border-gray-800 pt-10 text-center">

          {/* Logo + Title */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <img
              src={collegeLogo}
              alt="UIT Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="font-bold tracking-widest">
                NEUROSPARKZ 2K26
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            UNNAMALAI INSTITUTE OF TECHNOLOGY
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Department of Electronics & Communication Engineering
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-400">

            <a
              href="mailto:neurosparkz2k26@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Mail className="w-4 h-4" />
              neurosparkz2k26@gmail.com
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <Phone className="w-4 h-4" />
              +91 7530076406
            </a>

            <a
              href="https://www.instagram.com/neurosparkz2k26?igsh=MWZqcnl3a25uMHV0Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition"
            >
              <Instagram className="w-4 h-4" />
              @neurosparks_2k26
            </a>

          </div>

          {/* Developer */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-500 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-3 h-3" />
              Developed by
              <span className="text-white font-semibold">Sidharthan R.C</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            © 2026 NEUROSPARKZ. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;