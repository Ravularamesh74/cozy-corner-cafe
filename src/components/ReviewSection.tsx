import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Pavan Kalyan",
    text: "Awesome service, when its comes to food I loved chicken nagets.",
    avatar: "PK",
  },
  {
    name: "Sucheth Kumar",
    text: "Best new place in town to chill out with friends!!",
    avatar: "SK",
  },
  {
    name: "Konda Sujatha",
    text: "Amazing food with great quality and wonderful flavors Loved itt!!! ❤",
    avatar: "KS",
  },
];

const ReviewSection = () => (
  <section id="reviews" className="py-16 md:py-24 px-5 md:px-10 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
        Reviews
      </span>
      <div className="flex items-center gap-3 mt-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Loved by everyone.
        </h2>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary">
          <Star size={14} className="text-primary fill-primary" />
          <span className="text-sm font-semibold text-foreground">5.0</span>
          <span className="text-xs text-muted-foreground">(54)</span>
        </div>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="p-5 rounded-2xl bg-card"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
              {r.avatar}
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground block">{r.name}</span>
              <div className="flex mt-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={10} className="text-primary fill-primary" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            "{r.text}"
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReviewSection;
