import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectSection";
import ContactMeSection from "./ContactMeSection";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";
import Footer from "./Footer";
import Experience from "./Experiences";

function App() {
  return (
    <AlertProvider>
      <div className="min-h-screen bg-gradient-to-br from-dusk via-ink to-black text-slate-100">
        <Header />
        <main className="pt-24 space-y-0">
          <LandingSection />
          <Experience />
          <ProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
        <Alert />
      </div>
    </AlertProvider>
  )
}

export default App;
