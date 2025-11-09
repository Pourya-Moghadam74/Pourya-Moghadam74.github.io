import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


import photo1 from "../images/EdgeFusion-ACT.jpg";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";

const projects = [
  {
    title: "EdgeFusion-ACT",
    description:
      "An intelligent multimodal system for monitoring daily activities using radar, vision, and load monitoring sensors. It fuses multiple data streams for privacy-preserving activity recognition, enabling seniors to live safely and independently.",
    imageSrc: photo1,
  },
  {
    title: "NILM Analyzer",
    description:
      "A Non-Intrusive Load Monitoring (NILM) toolkit for disaggregating appliance-level power consumption from smart meter data. It features a modular PyTorch implementation, dataset harmonization tools, and real-time load visualization.",
    imageSrc: photo2,
  },
  {
    title: "Activity Recognition Suite",
    description:
      "A deep learning framework for recognizing human activities from video data using SlowFast and I3D models. Designed for multi-view datasets like Toyota Smarthome, it supports 5-fold cross-validation and customizable preprocessing.",
    imageSrc: photo3,
  },
  {
    title: "ResearchTool.ai",
    description:
    "A Python-based web app that aggregates academic profiles from Google Scholar, Scopus, and Semantic Scholar. It automatically computes impact metrics, co-author networks, and citation analytics for streamlined research assessment.",
    imageSrc: photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      as="section"
      backgroundColor="#CBCBCB"
      isDarkBackground={false}
      p={{ base: 4, sm: 6, md: 8 }} // Responsive padding
      alignItems="center"
      spacing={{ base: 6, md: 8 }}
    >
      <Heading
        as="h1"
        id="projects-section"
        mb={{ base: 4, md: 6 }}
        size={{ base: "lg", sm: "xl", md: "2xl" }} // Responsive font size
        color="#001D3D"
        textAlign={{ base: "center", md: "left" }}
        w="full"
      >
        Featured Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }} // Adjust column count
        gap={{ base: 4, sm: 6, md: 8 }} // Responsive spacing
        w="full"
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
