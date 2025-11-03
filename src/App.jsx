import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react"
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectSection";
import ContactMeSection from "./ContactMeSection";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";
import Footer from "./Footer";

function App() {
  return (
    <AlertProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Alert />
        <Footer />
      </main>
    </AlertProvider>
  )
}

export default App;
