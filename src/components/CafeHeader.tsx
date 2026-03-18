import { motion } from "framer-motion";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import logo from "@/assets/dark-cafe-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const CafeHeader = () => {
  return (
    <section className="relative h-[420px] md:h-[500px] w-full overflow-hidden rounded-b-3xl">

      {/* BACKGROUND IMAGE */}
      <img
        src={heroBg}
        alt="Dark Cafe"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 px-5 md:px-10 pt-6 h-full flex flex-col justify-between">

        {/* TOP BAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Dark Cafe"
            className="h-12 w-12 rounded-xl bg-white/10 p-1 backdrop-blur"
          />

          <div>
            <h1 className="text-lg md:text-xl font-semibold text-white">
              Dark Cafe
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-white font-medium">5.0</span>
                <span className="text-xs text-gray-300">(54 reviews)</span>
              </div>

              <span className="text-gray-400 text-xs">•</span>
              <span className="text-xs text-gray-300">₹1–200</span>
            </div>
          </div>
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Brewing moments, <br /> serving happiness ☕
          </h2>

          <p className="text-sm text-gray-300 mt-3">
            Experience premium coffee, curated bites, and a cozy vibe
            in the heart of Secunderabad.
          </p>
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-5"
        >
          {/* STATUS */}
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Open Now</span>
            <span className="text-gray-300 text-xs">
              · Closes 11:30 PM
            </span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3 flex-wrap">

            <ActionButton
              icon={<MapPin size={14} />}
              text="Directions"
              primary
            />

            <ActionButton
              icon={<Phone size={14} />}
              text="Call Now"
            />

            <InfoPill text="Padmarao Nagar, Secunderabad" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ACTION BUTTON */
const ActionButton = ({
  icon,
  text,
  primary,
}: {
  icon: React.ReactNode;
  text: string;
  primary?: boolean;
}) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all
      ${primary
        ? "bg-primary text-white shadow-lg hover:scale-105"
        : "bg-white/10 text-white backdrop-blur hover:bg-white/20"
      }`}
  >
    {icon}
    {text}
  </button>
);

/* INFO PILL */
const InfoPill = ({ text }: { text: string }) => (
  <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur text-xs text-gray-300">
    {text}
  </div>
);

export default CafeHeader;