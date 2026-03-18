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

const OrderSheet = ({
  cart,
  isOpen,
  onClose,
  onAdd,
  onRemove,
}: OrderSheetProps) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 300 ? 0 : 30;
  const total = subtotal + delivery;

  /* 🔥 WHATSAPP ORDER */
  const handleOrder = () => {
    const message = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");

    const url = `https://wa.me/917989899673?text=Order:%0A${message}%0ATotal: ₹${total}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* SHEET */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] bg-card rounded-t-3xl flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-primary" />
                <h2 className="text-lg font-semibold">
                  Your Order
                </h2>
              </div>

              <button onClick={onClose}>
                <X size={18} />
              </button>
            </div>

            {/* 🔥 EMPTY STATE */}
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <ShoppingBag size={40} />
                <p className="mt-4 text-sm">Your cart is empty</p>
              </div>
            ) : (
              <>
                {/* ITEMS */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ₹{item.price} × {item.quantity}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">
                          ₹{item.price * item.quantity}
                        </span>

                        <div className="flex items-center gap-2 bg-secondary px-2 py-1 rounded-lg">
                          <button onClick={() => onRemove(item.id)}>
                            <Minus size={12} />
                          </button>

                          <span>{item.quantity}</span>

                          <button onClick={() => onAdd(item)}>
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* 🔥 BILL DETAILS */}
                  <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery</span>
                      <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
                    </div>

                    <div className="flex justify-between font-semibold text-foreground pt-2">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>

                {/* 🔥 STICKY FOOTER */}
                <div className="px-5 py-4 border-t bg-card">
                  <button
                    onClick={handleOrder}
                    className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg hover:scale-[1.02] transition"
                  >
                    Place Order • ₹{total}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderSheet;