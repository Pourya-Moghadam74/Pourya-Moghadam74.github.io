import { useEffect, useState } from "react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import ExperienceSection from "./ExperienceSection";
import CapabilitiesSection from "./CapabilitiesSection";
import ResearchSection from "./ResearchSection";
import ThesisProjectPage from "./ThesisProjectPage";

const useHashRoute = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
};

function App() {
  const hash = useHashRoute();

  useEffect(() => {
    if (hash === "#/phd-research") window.scrollTo(0, 0);
  }, [hash]);

  if (hash === "#/phd-research") return <ThesisProjectPage />;

  return (
      <div className="min-h-screen bg-page text-primary">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="space-y-0">
          <LandingSection />
          <ProjectsSection />
          <CapabilitiesSection />
          <ExperienceSection />
          <ResearchSection />
          <ContactMeSection />
        </main>
        <Footer />
      </div>
  )
}

export default App;
