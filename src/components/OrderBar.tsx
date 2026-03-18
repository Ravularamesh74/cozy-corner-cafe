import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { CartItem } from "@/types/menu";

interface OrderBarProps {
  cart: CartItem[];
  onViewOrder: () => void;
}

const OrderBar = ({ cart, onViewOrder }: OrderBarProps) => {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  /* 🔥 TRIGGER ANIMATION ONLY WHEN CART CHANGES */
  const prevCount = useRef(totalItems);

  const bounce =
    prevCount.current !== totalItems
      ? { y: [100, -8, 0], opacity: [0, 1, 1] }
      : { y: 0 };

  useEffect(() => {
    prevCount.current = totalItems;
  }, [totalItems]);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={bounce}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-1/2 md:-translate-x-1/2 md:max-w-md"
        >
          <button
            onClick={onViewOrder}
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-primary text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-primary text-[10px] font-bold">
                  {totalItems}
                </span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
                <span className="text-xs text-white/80">
                  Ready to checkout
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <span className="text-base font-bold">
                ₹{totalPrice}
              </span>

              <div className="flex items-center gap-1 text-sm font-medium">
                Checkout
                <ArrowRight size={14} />
              </div>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderBar;