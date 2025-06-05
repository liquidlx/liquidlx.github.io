import { CareerHighlights } from "@/components/CareerHighlights";
import CareerStats from "@/components/CareerStats";
import CareerTimeline from "@/components/CareerTimeline";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <CareerStats />
      <CareerHighlights />
      <CareerTimeline />
    </main>
  );
}
