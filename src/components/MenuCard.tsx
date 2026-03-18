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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      className="group relative flex gap-4 p-3 rounded-2xl bg-card border border-border/40 hover:shadow-lg transition-all"
    >
      {/* 🔥 IMAGE */}
      <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* RATING BADGE */}
        <div className="absolute top-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
          <Star size={10} className="fill-yellow-400 text-yellow-400" />
          {item.rating}
        </div>

        {/* BESTSELLER */}
        {item.isBestseller && (
          <div className="absolute bottom-1 left-1 text-[9px] px-1.5 py-0.5 bg-primary text-white rounded">
            Bestseller
          </div>
        )}

        {/* ADD BUTTON ON IMAGE */}
        {qty === 0 && (
          <button
            onClick={() => onAdd(item)}
            className="absolute bottom-1 right-1 bg-white text-black text-xs px-2 py-1 rounded shadow-md hover:scale-105"
          >
            ADD
          </button>
        )}
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-semibold text-foreground truncate">
            {item.name}
          </h3>

          <div className="text-right">
            <span className="text-sm font-semibold text-primary">
              ₹{item.price}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {item.description}
        </p>

        {/* TAGS */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {item.isBestseller && (
            <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded">
              Popular
            </span>
          )}
          {item.isCustomizable && (
            <span className="text-[10px] px-2 py-0.5 bg-secondary text-muted-foreground rounded">
              Customizable
            </span>
          )}
        </div>

        {/* 🔥 ACTIONS */}
        <div className="flex justify-between items-center mt-3">

          {/* REVIEWS */}
          <span className="text-[11px] text-muted-foreground">
            {item.reviews} reviews
          </span>

          {/* QUANTITY CONTROL */}
          {qty > 0 && (
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-secondary">

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => onRemove(item.id)}
              >
                <Minus size={14} />
              </motion.button>

              <span className="text-sm font-medium w-4 text-center">
                {qty}
              </span>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => onAdd(item)}
              >
                <Plus size={14} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;