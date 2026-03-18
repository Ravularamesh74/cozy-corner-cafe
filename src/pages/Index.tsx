import { useState, useCallback, useMemo } from "react";
import { MenuItem, CartItem, Category } from "@/types/menu";
import { menuItems } from "@/data/menuData";
import CafeHeader from "@/components/CafeHeader";
import CategoryNav from "@/components/CategoryNav";
import MenuCard from "@/components/MenuCard";
import OrderBar from "@/components/OrderBar";
import OrderSheet from "@/components/OrderSheet";
import ReviewSection from "@/components/ReviewSection";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderOpen, setOrderOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    if (activeCategory === "Bestsellers")
      return menuItems.filter((i) => i.isBestseller);
    return menuItems.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const addToCart = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (!existing) return prev;
      if (existing.quantity === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) =>
        c.id === id ? { ...c, quantity: c.quantity - 1 } : c
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative">
      <CafeHeader />
      <ReviewSection />
      <CategoryNav active={activeCategory} onSelect={setActiveCategory} />

      <main className="px-5 py-4 space-y-3 pb-28">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            cartItem={cart.find((c) => c.id === item.id)}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
        ))}
      </main>

      <OrderBar cart={cart} onViewOrder={() => setOrderOpen(true)} />
      <OrderSheet
        cart={cart}
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default Index;
