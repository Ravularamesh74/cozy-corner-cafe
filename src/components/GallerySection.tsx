import { motion } from "framer-motion";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import foodSpread from "@/assets/food-spread.jpg";

const images = [
  { src: interior1, alt: "Dark Cafe cozy seating" },
  { src: interior2, alt: "Barista brewing coffee" },
  { src: foodSpread, alt: "Food spread at Dark Cafe" },
];

const GallerySection = () => (
  <section className="py-16 md:py-24 px-5 md:px-10 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
        The Vibe
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-2">
        Step Inside
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`relative overflow-hidden rounded-2xl ${
            i === 0 ? "col-span-2 md:col-span-1 aspect-[4/3]" : "aspect-square"
          }`}
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default GallerySection;
