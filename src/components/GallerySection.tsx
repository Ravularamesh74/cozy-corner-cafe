import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import foodSpread from "@/assets/food-spread.jpg";

const images = [
  { src: interior1, alt: "Cozy seating ambiance" },
  { src: interior2, alt: "Barista brewing coffee" },
  { src: foodSpread, alt: "Delicious food spread" },
];

const GallerySection = () => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 max-w-6xl mx-auto relative">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-widest">
          The Experience
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Step Inside Dark Cafe
        </h2>

        <p className="text-muted-foreground mt-3 max-w-md">
          A glimpse into our cozy interiors, crafted drinks, and unforgettable moments.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: i * 0.1 }}
            className={`relative cursor-pointer overflow-hidden rounded-3xl group ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => setActiveImg(img.src)}
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <p className="text-white text-sm">{img.alt}</p>
            </div>

            {/* BORDER */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:scale-105 transition">
          View More on Instagram
        </button>
      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)}
          >
            <motion.img
              src={activeImg}
              className="max-h-[80vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />

            {/* CLOSE BUTTON */}
            <button className="absolute top-6 right-6 text-white">
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;