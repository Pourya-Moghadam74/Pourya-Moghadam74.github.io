import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pourya";
const bio1 = "A Ph.D. Candidate at University of Toronto";
const bio2 = "Specialised in Computer Vision";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="#EEEEEE"
  >
    <VStack>
      <Avatar.Root
        boxSize={["80px", "100px", "140px"]}
        shadow="md"
      >
        <Avatar.Image src="./images/myPhoto.jpeg" />
      </Avatar.Root>

      <Heading size="md" marginBottom="2rem" color="#001D3D">{greeting}</Heading>
      <Heading size="4xl" color="#001D3D">{bio1}</Heading>
      <Heading size="3xl" color="#001D3D">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
