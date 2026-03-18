import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { CartItem, MenuItem } from "@/types/menu";

interface OrderSheetProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
}

const OrderSheet = ({ cart, isOpen, onClose, onAdd, onRemove }: OrderSheetProps) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] rounded-t-3xl bg-card overflow-hidden"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-border/50">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-primary" />
                <h2 className="text-lg font-semibold text-foreground tracking-tight">
                  Your Order
                </h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[50vh] px-5 py-3 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="font-mono-nums text-xs text-primary">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg bg-secondary text-foreground"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-mono-nums text-sm w-4 text-center text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onAdd(item)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-border/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-mono-nums text-xl font-semibold text-primary">
                  ₹{totalPrice}
                </span>
              </div>
              <button className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm animate-glow-pulse">
                Place Order
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderSheet;
