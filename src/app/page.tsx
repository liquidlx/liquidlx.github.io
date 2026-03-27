import { CareerHighlights } from "@/components/CareerHighlights";
import CareerStats from "@/components/CareerStats";
import CareerTimeline from "@/components/CareerTimeline";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SideProjects } from "@/components/SideProjects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <SideProjects />
      <TechStack />
      <CareerStats />
      <CareerHighlights />
      <CareerTimeline />
      <SiteFooter />
    </main>
  );
}
