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
  <section className="px-5 py-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center gap-1">
        <Star size={16} className="text-primary fill-primary" />
        <span className="text-lg font-semibold text-foreground">5.0</span>
      </div>
      <span className="text-xs text-muted-foreground">54 reviews</span>
    </div>

    <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="shrink-0 w-64 p-4 rounded-2xl bg-secondary"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-[10px] font-semibold text-muted-foreground">
              {r.avatar}
            </div>
            <span className="text-xs font-medium text-foreground">{r.name}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            "{r.text}"
          </p>
          <div className="flex mt-2">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={9} className="text-primary fill-primary" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ReviewSection;
