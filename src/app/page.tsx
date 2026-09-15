"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsTeaser } from "@/components/StatsTeaser";
import { FeaturedServices } from "@/components/FeaturedServices";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* 1. Split Hero Section (Left 10 Product Categories + Right Connecting The Green Energy Future Banner) */}
      <HeroSection />

      {/* 2. Key Stats & Teaser (Purple 112M+ lbs CO2 Avoided + Services + Maintenance + EMS) */}
      <StatsTeaser />

      {/* 3. Our Featured Services (6 Image Cards with Green Top Accent and Learn More) */}
      <FeaturedServices />

      {/* 4. Our Products Showcase (Sky/Cloudy Background Carousel with Navigation Arrows) */}
      <ProductsCarousel />

      {/* 5. Major Client / Reference Showcase */}
      <ClientLogoMarquee />
    </main>
  );
}
