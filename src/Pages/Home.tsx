import { Navbar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { IconBar } from "@/components/IconBar";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <IconBar />
    </div>
  );
};
