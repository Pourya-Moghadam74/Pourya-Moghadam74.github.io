import React from "react";
import { Avatar, Box, Heading, HStack, VStack, Image, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPhoto from "../images/myPhoto.jpeg";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground={false}
      backgroundColor="#FFFFFF"
    >
      <HStack
        spacing={{ base: 6, md: 10 }}           // smaller spacing on mobile
        gap="20"
        align="center"
        justify="center"
        px={{ base: 4, md: 10 }}
        py={{ base: 6, md: 8 }}
        flexDirection={{ base: "column", md: "row" }} // stack vertically on mobile
        textAlign={{ base: "center", md: "justify" }}    // center text on mobile
      >

        {/* Right side: about text */}
        <Box flex="2" maxW={{ base: "90%", md: "600px" }}>
          <Heading size={{ base: "md", md: "2xl" }} mb={3}>
            About Me
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            color="gray.700"
            lineHeight="tall"
          >
            I’m a PhD researcher at the University of Toronto focusing on intelligent 
            Activity of Daily Living monitoring using multimodal sensing technologies. 
            My research integrates radar, vision, and smart meter data to design 
            privacy-preserving systems that help seniors live independently. 
            Beyond research, I love coding, coffee, and fitness.
          </Text>
        </Box>
                {/* Left side: image */}
        <Box flex="1" maxW={{ base: "200px", md: "300px" }}>
          <Image
            src={myPhoto}
            alt="Pourya Moghadam"
            borderRadius="full"
            // boxSize={{ base: "200px", md: "250px" }}
            objectFit="cover"
            shadow="lg"
            mx="auto" // centers image on small screens
            bg="transparent"
          />
        </Box>
      </HStack>
    </FullScreenSection>
);

export default LandingSection;
