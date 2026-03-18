import { MapPin, Phone, Clock, Instagram, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative border-t border-border/40 bg-card overflow-hidden">

    {/* 🔥 Background Glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px]" />

    <div className="relative max-w-6xl mx-auto px-5 md:px-10 py-14">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Dark Cafe
          </h3>

          <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
            Premium brews and curated bites in Secunderabad. A cozy space where
            coffee meets comfort and conversations come alive.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-5">
            <SocialButton
              href="https://www.instagram.com/dark_cafe____"
              icon={<Instagram size={16} />}
            />
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">
            Contact
          </h4>

          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary mt-0.5" />
              <span>
                Walker Town, Padmarao Nagar,<br />
                Secunderabad, Telangana 500025
              </span>
            </li>

            <li className="flex gap-3">
              <Phone size={16} className="text-primary" />
              <div className="flex flex-col text-sm">
                <a href="tel:07989899673" className="hover:text-foreground">
                  079898 99673
                </a>
                <a href="tel:08555933516" className="hover:text-foreground">
                  855 593 3516
                </a>
              </div>
            </li>
          </ul>

          {/* QUICK ACTIONS */}
          <div className="flex gap-2 mt-5 flex-wrap">
            <ActionBtn icon={<Phone size={14} />} text="Call" />
            <ActionBtn icon={<Navigation size={14} />} text="Directions" primary />
          </div>
        </div>

        {/* HOURS + STATUS */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">
            Opening Hours
          </h4>

          <div className="flex gap-3 text-sm text-muted-foreground">
            <Clock size={16} className="text-primary mt-0.5" />
            <div>
              <p>Monday – Sunday</p>
              <p className="text-foreground font-medium mt-1">
                9:00 AM – 11:30 PM
              </p>
            </div>
          </div>

          {/* STATUS CARD */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400 font-medium">
              Currently Open
            </span>
          </motion.div>
        </div>
      </div>

      {/* MAP */}
      <div className="mt-12 rounded-2xl overflow-hidden border border-border/40">
        <iframe
          title="Dark Cafe Location"
          src="https://maps.google.com/maps?q=Padmarao%20Nagar%20Secunderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[250px] border-0"
          loading="lazy"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <p>© 2026 Dark Cafe. All rights reserved.</p>
        <p>Designed for a premium café experience ☕</p>
      </div>
    </div>
  </footer>
);

/* 🔥 BUTTONS */
const ActionBtn = ({
  icon,
  text,
  primary,
}: {
  icon: React.ReactNode;
  text: string;
  primary?: boolean;
}) => (
  <button
    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all
      ${primary
        ? "bg-primary text-white hover:scale-105 shadow-md"
        : "bg-secondary text-muted-foreground hover:text-foreground"
      }`}
  >
    {icon}
    {text}
  </button>
);

const SocialButton = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all"
  >
    {icon}
  </a>
);

export default Footer;