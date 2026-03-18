import { motion } from "framer-motion";
import { Coffee, Utensils, Clock, Wifi } from "lucide-react";

const features = [
  { icon: Coffee, label: "Premium Brews", desc: "Single-origin espresso & crafted beverages" },
  { icon: Utensils, label: "Curated Bites", desc: "Fresh ingredients, bold flavors" },
  { icon: Clock, label: "Open Late", desc: "Serving until 11:30 PM daily" },
  { icon: Wifi, label: "Free Wi-Fi", desc: "Stay connected while you chill" },
];

const AboutSection = () => (
  <section className="py-16 md:py-24 px-5 md:px-10 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
        About Us
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-2 mb-4">
        Where taste meets your expectations.
      </h2>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        Our food cafe offers a blend of taste and comfort. Using fresh, quality
        ingredients, we prepare a variety of meals, snacks, and beverages. With a
        cozy setting and friendly service, Dark Cafe is the perfect place to
        relax, meet friends, or grab a quick bite in the heart of Secunderabad.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="p-4 md:p-5 rounded-2xl bg-card"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <f.icon size={22} className="text-primary mb-3" strokeWidth={1.5} />
          <h3 className="text-sm font-semibold text-foreground">{f.label}</h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AboutSection;
