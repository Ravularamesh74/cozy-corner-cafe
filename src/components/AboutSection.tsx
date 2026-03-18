import { motion } from "framer-motion";
import { Coffee, Utensils, Clock, Wifi } from "lucide-react";
import cafeImg from "@/assets/cafe.png";

const features = [
  { icon: Coffee, label: "Premium Brews", desc: "Single-origin espresso & crafted beverages" },
  { icon: Utensils, label: "Curated Bites", desc: "Fresh ingredients, bold flavors" },
  { icon: Clock, label: "Open Late", desc: "Serving until 11:30 PM daily" },
  { icon: Wifi, label: "Free Wi-Fi", desc: "Stay connected while you chill" },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Menu Items" },
  { value: "4.8★", label: "Average Rating" },
];

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10 max-w-6xl mx-auto overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            About Dark Cafe
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5 leading-tight">
            Where taste meets{" "}
            <span className="text-primary">experience</span>.
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            At Dark Cafe, we blend rich flavors with a cozy ambiance to create
            an unforgettable experience. From handcrafted coffee to curated
            bites, every detail is designed to elevate your moments — whether
            you're working, relaxing, or catching up with friends.
          </p>

          {/* STATS */}
          <div className="flex gap-6 mt-6">
            {stats.map((s, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold text-primary">{s.value}</h4>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={cafeImg}
            alt="Dark Cafe"
            className="rounded-3xl object-cover w-full h-[350px] md:h-[420px] shadow-xl"
          />

          {/* Glass overlay card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20">
            <p className="text-sm text-white">
              “A place where every sip tells a story.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-3">
              <f.icon size={20} className="text-primary" strokeWidth={1.5} />
            </div>

            <h3 className="text-sm font-semibold text-foreground">
              {f.label}
            </h3>

            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;