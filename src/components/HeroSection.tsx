import { motion } from "framer-motion";
import { Star, MapPin, Clock, ChevronDown, Navigation } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/dark-cafe-logo.png";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[650px] flex items-end overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Dark Cafe"
          className="h-full w-full object-cover"
        />

        {/* MULTI-LAYER OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* GLOW LIGHT */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px]" />
      </motion.div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-14 md:px-10 md:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="Dark Cafe Logo"
            className="h-16 w-16 md:h-20 md:w-20 rounded-2xl mb-6 bg-white/10 p-2 backdrop-blur"
          />

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            Taste the <span className="text-primary">Dark</span>.
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md">
            Premium brews, curated bites, and a cozy vibe in the heart of
            Secunderabad.
          </p>

          {/* INFO STRIP */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">

            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">5.0</span>
              <span className="text-gray-400">(54)</span>
            </div>

            <div className="flex items-center gap-1 text-gray-300">
              <Clock size={14} />
              Open till 11:30 PM
            </div>

            <div className="flex items-center gap-1 text-gray-300">
              <MapPin size={14} />
              Secunderabad
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-8">

            <button
              onClick={scrollToMenu}
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg hover:scale-105 transition"
            >
              Explore Menu
            </button>

            <a
              href="tel:07989899673"
              className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur hover:bg-white/20 text-sm"
            >
              Call Now
            </a>

            <button className="px-6 py-3 rounded-xl border border-white/20 text-white text-sm flex items-center gap-2 hover:bg-white/10">
              <Navigation size={14} />
              Directions
            </button>
          </div>
        </motion.div>

        {/* 🔥 FLOATING GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute right-5 bottom-10 md:right-10 md:bottom-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-xs hidden md:block"
        >
          <p className="text-sm text-white">
            “A place where every sip feels like home.”
          </p>
        </motion.div>

        {/* 🔽 SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={22} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;