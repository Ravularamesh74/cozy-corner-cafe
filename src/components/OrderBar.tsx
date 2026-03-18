import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { CartItem } from "@/types/menu";

interface OrderBarProps {
  cart: CartItem[];
  onViewOrder: () => void;
}

const OrderBar = ({ cart, onViewOrder }: OrderBarProps) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 z-50"
        >
          <button
            onClick={onViewOrder}
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-card/80 backdrop-blur-xl animate-glow-pulse"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag size={20} className="text-primary" />
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[9px] font-bold">
                  {totalItems}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">View Order</span>
              <span className="font-mono-nums text-primary font-semibold">
                ₹{totalPrice}
              </span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderBar;
