import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "Farting Hill",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: photo1,
  },
  {
    title: "Gooz Tapa",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: photo2,
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: photo3,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      as="section"
      backgroundColor="#CBCBCB"
      isDarkBackground={false}
      p={8}
      alignItems="flex-start"
      spacing={8}

    >
      <Heading as="h1" id="projects-section" mb={4} size="2xl" color="#001D3D">
        Featured Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={8}
        w="full"
        // Or auto-fit style:
        // templateColumns="repeat(auto-fit, minmax(260px, 1fr))"
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            description={p.description}
            imageSrc={p.imageSrc}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
