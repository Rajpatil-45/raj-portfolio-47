import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { Hero3DScene } from "./components/3d/Hero3DScene";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationAndCertsSection } from "./components/sections/EducationAndCertsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DashboardPage } from "./components/pages/DashboardPage";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeView, setActiveView] = useState<"home" | "excel-dashboard">("home");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll detection only on home view
    if (activeView !== "home") return;

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "contact",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeView]);

  const handleExploreClick = () => {
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectSelect = (projectId: string) => {
    if (projectId === "excel-dashboard") {
      setActiveView("excel-dashboard");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBackToProjects = () => {
    setActiveView("home");
    setTimeout(() => {
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-[#ff6b00] selection:text-white relative overflow-hidden">
      {/* 1. INITIAL LOADING -> "ENTER MY PORTFOLIO" SCREEN */}
      {!hasEntered && <Preloader onEnter={() => setHasEntered(true)} />}

      {/* Background Cyber Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-[#ff6b00]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] bg-[#00d2ff]/8 rounded-full blur-[150px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeView === "excel-dashboard" ? "projects" : activeSection}
      />

      {/* VIEW CONDITIONAL: DEDICATED DASHBOARD PAGE OR STANDARD PORTFOLIO */}
      {activeView === "excel-dashboard" ? (
        <DashboardPage onBack={handleBackToProjects} />
      ) : (
        <>
          {/* Hero Section Container (Permanent Raj Patil Photo Card - No 3D character) */}
          <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-screen items-center pt-24 lg:pt-0">
              {/* Left Side: Developer Info & CTAs */}
              <div className="lg:col-span-6 z-10 flex flex-col justify-center">
                <HeroSection onExploreClick={handleExploreClick} />
              </div>

              {/* Right Side: Raj Patil Photo with Glowing Cyber Frame */}
              <div className="lg:col-span-6 h-[560px] sm:h-[660px] lg:h-[820px] w-full relative z-20 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Hero3DScene scrollProgress={0} />
                </div>
              </div>
            </div>
          </section>

          {/* Main Portfolio Sections */}
          <main className="relative z-10">
            <AboutSection />
            <SkillsSection />
            {/* Projects Section with BRO AI, Excel Dashboard, and E-Commerce */}
            <ProjectsSection onSelectProject={handleProjectSelect} />
            <ExperienceSection />
            <EducationAndCertsSection />
            <ContactSection />
          </main>
        </>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
