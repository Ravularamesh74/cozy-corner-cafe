import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { categories, Category } from "@/types/menu";
import { Coffee, Pizza, IceCream, Sandwich } from "lucide-react";

/* OPTIONAL ICON MAP */
const categoryIcons: Record<string, any> = {
  Coffee: Coffee,
  Snacks: Sandwich,
  Desserts: IceCream,
  Pizza: Pizza,
};

interface CategoryNavProps {
  active: Category;
  onSelect: (cat: Category) => void;
}

const CategoryNav = ({ active, onSelect }: CategoryNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* 🔥 AUTO SCROLL ACTIVE INTO VIEW */
  useEffect(() => {
    const el = itemRefs.current[active];
    if (el && scrollRef.current) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40 shadow-sm">

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="relative flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide"
      >
        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {categories.map((cat) => {
          const Icon = categoryIcons[cat];

          return (
            <button
              key={cat}
              ref={(el) => (itemRefs.current[cat] = el)}
              onClick={() => onSelect(cat)}
              className="relative shrink-0"
            >
              {/* ACTIVE BACKGROUND ANIMATION */}
              {active === cat && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-xl bg-primary shadow-md"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}

              {/* CONTENT */}
              <span
                className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  active === cat
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {Icon && <Icon size={14} strokeWidth={1.8} />}
                {cat}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;