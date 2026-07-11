import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";
import Footer from "./Footer";
import ExperienceSection from "./ExperienceSection";
import CapabilitiesSection from "./CapabilitiesSection";
import ResearchSection from "./ResearchSection";

function App() {
  return (
    <AlertProvider>
      <div className="min-h-screen bg-page text-primary">
        <Header />
        <main className="space-y-0">
          <LandingSection />
          <ExperienceSection />
          <ResearchSection />
          <ProjectsSection />
          <CapabilitiesSection />
          <ContactMeSection />
        </main>
        <Footer />
        <Alert />
      </div>
    </AlertProvider>
  )
}

export default App;
