"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsTeaser } from "@/components/StatsTeaser";
import { FeaturedServices } from "@/components/FeaturedServices";
import { CO2ImpactBanner } from "@/components/CO2ImpactBanner";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* 1. Split Hero Section (Left 10 Product Categories + Right Hero Banner) */}
      <HeroSection />

      {/* 2. Three Service Pillars: Services, Maintenance, EMS (Clean 3-Card Grid) */}
      <StatsTeaser />

      {/* 3. Our Featured Services (6 Image Cards with Green Accent Bar) */}
      <FeaturedServices />

      {/* 4. Dedicated CO2 Impact Section (Separated & Moved Down) */}
      <CO2ImpactBanner />

      {/* 5. Our Products Showcase (Sky/Cloudy Background Carousel with Navigation Arrows) */}
      <ProductsCarousel />

      {/* 6. Major Client / Reference Showcase */}
      <ClientLogoMarquee />
    </main>
  );
}
