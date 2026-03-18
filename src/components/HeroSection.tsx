import { motion } from "framer-motion";
import { Star, MapPin, Clock, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/dark-cafe-logo.png";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dark Cafe Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-12 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={logo}
            alt="Dark Cafe Logo"
            className="h-16 w-16 md:h-20 md:w-20 rounded-2xl mb-5 object-contain"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.05]">
            Taste the Dark.
          </h1>

          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Premium brews and curated bites in the heart of Secunderabad.
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">5.0</span>
              <span className="text-xs text-muted-foreground">(54 reviews)</span>
            </div>
            <span className="text-muted-foreground/40">|</span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock size={13} />
              <span className="text-xs">Open until 11:30 PM</span>
            </div>
            <span className="text-muted-foreground/40">|</span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin size={13} />
              <span className="text-xs">Padmarao Nagar, Secunderabad</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={scrollToMenu}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110"
              style={{ boxShadow: "var(--glow-shadow)" }}
            >
              Explore Menu
            </button>
            <a
              href="tel:07989899673"
              className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm border border-border/50 transition-colors hover:bg-muted"
            >
              Call Us
            </a>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-6"
        >
          <ChevronDown size={20} className="text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
