import { motion } from "framer-motion";
import { useState, useMemo, useCallback } from "react";
import { MenuItem, CartItem, Category } from "@/types/menu";
import { menuItems } from "@/data/menuData";
import CategoryNav from "@/components/CategoryNav";
import MenuCard from "@/components/MenuCard";
import OrderBar from "@/components/OrderBar";
import OrderSheet from "@/components/OrderSheet";

interface MenuSectionProps {
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (id: string) => void;
  orderOpen: boolean;
  setOrderOpen: (open: boolean) => void;
}

const MenuSection = ({ cart, onAdd, onRemove, orderOpen, setOrderOpen }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    if (activeCategory === "Bestsellers")
      return menuItems.filter((i) => i.isBestseller);
    return menuItems.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-16 md:py-24 max-w-5xl mx-auto">
      <div className="px-5 md:px-10 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-2">
            Curated for your cravings.
          </h2>
        </motion.div>
      </div>

      <CategoryNav active={activeCategory} onSelect={setActiveCategory} />

      <div className="px-5 md:px-10 py-4 space-y-3 pb-28">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            cartItem={cart.find((c) => c.id === item.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>

      <OrderBar cart={cart} onViewOrder={() => setOrderOpen(true)} />
      <OrderSheet
        cart={cart}
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </section>
  );
};

export default MenuSection;
