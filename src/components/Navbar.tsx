import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/dark-cafe-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#");

  /* 🔥 SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href);
      for (let sec of sections) {
        if (sec === "#") continue;
        const el = document.querySelector(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* NAVIGATION */
  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActive(href);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 🔥 NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-10 flex items-center justify-between h-14 md:h-16">

          {/* LOGO */}
          <button
            onClick={() => handleNav("#")}
            className="flex items-center gap-2.5"
          >
            <img
              src={logo}
              alt="Dark Cafe"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-sm font-semibold">
              Dark Cafe
            </span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 relative">

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`relative text-xs font-medium transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}

                {/* 🔥 ACTIVE INDICATOR */}
                {active === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </button>
            ))}

            {/* CTA */}
            <a
              href="tel:07989899673"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold shadow-md hover:scale-105 transition"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* 🔥 MOBILE MENU (FULLSCREEN STYLE) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-lg font-medium ${
                  active === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href="tel:07989899673"
              className="mt-4 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;