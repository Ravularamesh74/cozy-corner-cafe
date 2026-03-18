import { useState, useCallback } from "react";
import { MenuItem, CartItem } from "@/types/menu";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import MenuSection from "@/components/MenuSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderOpen, setOrderOpen] = useState(false);

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <VideoSection />
      <div id="gallery">
        <GallerySection />
      </div>
      <MenuSection
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        orderOpen={orderOpen}
        setOrderOpen={setOrderOpen}
      />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Index;
