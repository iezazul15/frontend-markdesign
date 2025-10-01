import { DirectorQuote } from "@/components/DirectorQuote";
import FeaturedProperties from "@/components/featured/FeaturedProperties";
import HeroSection from "@/components/hero/HeroSection";

export default async function Home() {
  return (
    <section className="bg-background">
      <HeroSection />
      <FeaturedProperties />
      <DirectorQuote />
    </section>
  );
}
