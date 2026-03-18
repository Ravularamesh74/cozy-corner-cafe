import { useRef } from "react";
import { motion } from "framer-motion";
import { categories, Category } from "@/types/menu";

interface CategoryNavProps {
  active: Category;
  onSelect: (cat: Category) => void;
}

const CategoryNav = ({ active, onSelect }: CategoryNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div
        ref={scrollRef}
        className="flex gap-2 px-5 py-3 overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative shrink-0"
          >
            <span
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </span>
            {active === cat && (
              <motion.div
                layoutId="activeCat"
                className="absolute inset-0 bg-primary rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
