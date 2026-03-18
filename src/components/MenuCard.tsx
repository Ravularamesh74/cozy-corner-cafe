import { motion } from "framer-motion";
import { Star, Plus, Minus } from "lucide-react";
import { MenuItem, CartItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  cartItem?: CartItem;
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

const MenuCard = ({ item, cartItem, onAdd, onRemove }: MenuCardProps) => {
  const qty = cartItem?.quantity || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-4 p-3 rounded-2xl transition-colors"
      style={{ boxShadow: "var(--card-shadow)", backgroundColor: "hsl(var(--card))" }}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-foreground/10" />
        {item.isBestseller && (
          <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-semibold bg-primary text-primary-foreground">
            ★ BEST
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-sm text-foreground tracking-tight truncate">
            {item.name}
          </h3>
          <span className="font-mono-nums text-primary font-medium text-sm shrink-0">
            ₹{item.price}
          </span>
        </div>

        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={9}
                  className="text-primary/50 fill-primary/50"
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground">
              {item.rating} ({item.reviews})
            </span>
          </div>

          {qty === 0 ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onAdd(item)}
              className="flex items-center justify-center h-7 w-7 rounded-lg bg-primary text-primary-foreground"
            >
              <Plus size={14} strokeWidth={2.5} />
            </motion.button>
          ) : (
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(item.id)}
                className="flex items-center justify-center h-7 w-7 rounded-lg bg-secondary text-foreground"
              >
                <Minus size={14} strokeWidth={2.5} />
              </motion.button>
              <span className="font-mono-nums text-sm font-medium text-foreground w-4 text-center">
                {qty}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onAdd(item)}
                className="flex items-center justify-center h-7 w-7 rounded-lg bg-primary text-primary-foreground"
              >
                <Plus size={14} strokeWidth={2.5} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
