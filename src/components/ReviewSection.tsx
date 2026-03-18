import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Pavan Kalyan",
    text: "Awesome service, when it comes to food I loved chicken nuggets.",
    avatar: "PK",
  },
  {
    name: "Sucheth Kumar",
    text: "Best new place in town to chill out with friends!!",
    avatar: "SK",
  },
  {
    name: "Konda Sujatha",
    text: "Amazing food with great quality and wonderful flavors. Loved it! ❤",
    avatar: "KS",
  },
];

const ReviewSection = () => {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 px-5 md:px-10 max-w-6xl mx-auto relative"
    >
      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-widest">
          Reviews
        </span>

        <div className="flex flex-wrap items-center gap-4 mt-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Loved by everyone
          </h2>

          {/* RATING BADGE */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
            <Star size={16} className="text-primary fill-primary" />
            <span className="font-semibold">5.0</span>
            <span className="text-sm text-muted-foreground">(54 reviews)</span>
          </div>
        </div>
      </motion.div>

      {/* 🔥 FEATURED REVIEW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mb-8 p-6 rounded-3xl bg-card border border-border/40 relative overflow-hidden"
      >
        <Quote className="absolute top-4 right-4 text-primary/10" size={60} />

        <p className="text-lg font-medium text-foreground leading-relaxed max-w-2xl">
          “{reviews[0].text}”
        </p>

        <div className="flex items-center gap-3 mt-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
            {reviews[0].avatar}
          </div>
          <div>
            <p className="text-sm font-semibold">{reviews[0].name}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-primary fill-primary"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🔥 REVIEW GRID */}
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.slice(1).map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-card border border-border/40 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                {r.avatar}
              </div>

              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              “{r.text}”
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 CTA */}
      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:scale-105 transition"
        >
          View All Reviews
        </a>
      </div>
    </section>
  );
};

export default ReviewSection;