import { motion } from "framer-motion";
import { useState, useMemo } from "react";
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

const MenuSection = ({
  cart,
  onAdd,
  onRemove,
  orderOpen,
  setOrderOpen,
}: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  /* 🔥 GROUP ITEMS BY CATEGORY */
  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};

    menuItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });

    return groups;
  }, []);

  /* 🔥 FILTER LOGIC */
  const visibleCategories = useMemo(() => {
    if (activeCategory === "All") return Object.keys(groupedItems);

    if (activeCategory === "Bestsellers") {
      return ["Bestsellers"];
    }

    return [activeCategory];
  }, [activeCategory, groupedItems]);

  return (
    <section id="menu" className="py-20 md:py-28 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="px-5 md:px-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Our Menu
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Curated for your cravings
          </h2>
        </motion.div>
      </div>

      {/* CATEGORY NAV */}
      <CategoryNav
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* 🔥 MENU CONTENT */}
      <div className="px-5 md:px-10 py-6 space-y-10 pb-32">

        {/* EMPTY STATE */}
        {visibleCategories.length === 0 && (
          <div className="text-center py-10 text-muted-foreground">
            No items found.
          </div>
        )}

        {/* 🔥 LOOP CATEGORY SECTIONS */}
        {visibleCategories.map((category) => {
          const items =
            category === "Bestsellers"
              ? menuItems.filter((i) => i.isBestseller)
              : groupedItems[category] || [];

          if (!items.length) return null;

          return (
            <div key={category} className="space-y-4">

              {/* CATEGORY TITLE */}
              <h3 className="text-lg font-semibold text-foreground">
                {category}
              </h3>

              {/* ITEMS */}
              <div className="space-y-3">
                {items.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    cartItem={cart.find((c) => c.id === item.id)}
                    onAdd={onAdd}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔥 ORDER UI */}
      <OrderBar
        cart={cart}
        onViewOrder={() => setOrderOpen(true)}
      />

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