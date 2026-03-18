import { motion } from "framer-motion";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import logo from "@/assets/dark-cafe-logo.png";

const CafeHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative px-5 pt-6 pb-4"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt="Dark Cafe" className="h-14 w-14 rounded-xl object-contain" />
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Dark Cafe
          </h1>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex items-center gap-1">
              <Star size={12} className="text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">5.0</span>
              <span className="text-xs text-muted-foreground">(54)</span>
            </div>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground">₹1–200</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-emerald-400 font-medium">Open</span>
        <span className="text-xs text-muted-foreground">· Closes 11:30 PM</span>
      </div>

      <p className="text-xs text-muted-foreground italic leading-relaxed">
        "Something delicious is brewing… ☕✨"
      </p>

      <div className="flex gap-3 mt-3">
        <InfoPill icon={<MapPin size={11} />} text="Padmarao Nagar, Secunderabad" />
        <InfoPill icon={<Phone size={11} />} text="079898 99673" />
      </div>
    </motion.header>
  );
};

const InfoPill = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary text-muted-foreground">
    {icon}
    <span className="text-[10px] leading-none">{text}</span>
  </div>
);

export default CafeHeader;
