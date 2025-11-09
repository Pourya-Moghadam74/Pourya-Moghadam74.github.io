import React from "react";
import { Box, Heading, VStack, Text, Grid, GridItem, List } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPhoto from "../images/myPhoto.jpeg";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const Experience = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground={false}
      backgroundColor="#E7E7E7"
    >

        <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
        <Box
            maxW="900px"
            mx="auto"
            color="#222"
            fontFamily="sans-serif"
            display="flex"
            flexDirection="column"
            gap={12}
        >
            {/* -------- Education Section -------- */}
            <Grid
            templateColumns={{ base: "1fr", md: "200px 1fr" }}
            columnGap={8}
            alignItems="start"
            >
            <GridItem>
                <Heading as="h2" fontSize="xl" color="#001D3D">
                Education
                </Heading>
            </GridItem>

            <GridItem>
                <VStack align="start" spacing={4}>
                <Box>
                    <Text fontWeight="bold">
                    University of Toronto, Canada{" "}
                    <Text as="span" fontWeight="normal">
                        – Since 2023
                    </Text>
                    </Text>
                    <Text>Ph.D., Biomedical Engineering</Text>
                </Box>

                <Box>
                    <Text fontWeight="bold">
                    Amirkabir University of Technology, Iran{" "}
                    <Text as="span" fontWeight="normal">
                        – 2019 to 2022
                    </Text>
                    </Text>
                    <Text>M.Sc., Industrial Engineering</Text>
                </Box>

                <Box>
                    <Text fontWeight="bold">
                    Amirkabir University of Technology, Iran{" "}
                    <Text as="span" fontWeight="normal">
                        – 2014 to 2018
                    </Text>
                    </Text>
                    <Text>B.Sc., Industrial Engineering</Text>
                </Box>
                </VStack>
            </GridItem>
            </Grid>

            {/* -------- Work Experience -------- */}
            <Grid
            templateColumns={{ base: "1fr", md: "200px 1fr" }}
            columnGap={8}
            alignItems="start"
            >
            <GridItem>
                <Heading as="h2" fontSize="xl" color="#001D3D">
                Work Experience
                </Heading>
            </GridItem>

            <GridItem>
                <VStack align="start" spacing={6}>
                <Box>
                    <Text fontWeight="bold">
                    Artificial Intelligence Specialist @ Masterly Inc, Toronto{" "}
                    <Text as="span" fontWeight="normal">
                        – Since 2024
                    </Text>
                    </Text>
                    <Text mt={2} lineHeight="tall">
                    Developing large language models using Python for
                    intelligent automation, integrating AI systems into
                    production environments.
                    </Text>
                </Box>

                <Box>
                    <Text fontWeight="bold">
                    Senior Data Analyst @ Digikala Group, Tehran{" "}
                    <Text as="span" fontWeight="normal">
                        – 2018 to 2023
                    </Text>
                    </Text>
                    <Text mt={2} lineHeight="tall">
                    Designed databases, ETL processes, dashboards, and
                    forecasting models with Python and T-SQL. Generated
                    insights and reports for executive stakeholders.
                    </Text>
                </Box>
                </VStack>
            </GridItem>
            </Grid>

            {/* -------- Teaching Experience -------- */}
            <Grid
            templateColumns={{ base: "1fr", md: "200px 1fr" }}
            columnGap={8}
            alignItems="start"
            >
            <GridItem>
                <Heading as="h2" fontSize="xl" color="#001D3D">
                Teaching Experience
                </Heading>
            </GridItem>

            <GridItem>
                <VStack align="start" spacing={5}>
                <Box>
                    <Text fontWeight="bold">
                    University of Toronto, Toronto – Teaching Assistant
                    </Text>
                    <List.Root mt={2} lineHeight="tall" px={{ base: 4, md: 4 }}>
                        <List.Item>
                            CSC311  Introduction to Machine Learning (130 hrs): Lab support, tutorials, grading.  
                        </List.Item>
                        <List.Item>
                            CSC490  Capstone Design Project (70 hrs): Tutorials, grading, project guidance.  
                        </List.Item>
                        <List.Item>
                            CSC384  Introduction to Artificial Intelligence (60 hrs): Office hours, grading.  
                        </List.Item>
                        <List.Item>
                            CSC373  Algorithm Design and Analysis (60 hrs): Office hours, grading.
                        </List.Item>
                        <List.Item>
                            CSC263  Data Structures and Analysis (60 hrs): Tutorials, grading.  
                        </List.Item>
                        <List.Item>
                            CSCB20  Database and Web Applications (60 hrs): Lab support, grading.  
                        </List.Item>
                        <List.Item>
                            MIE367  Cases in Operations Research (80 hrs): Grading exams and assignments. 
                        </List.Item>
                    </List.Root>
                </Box>
                </VStack>
            </GridItem>
            </Grid>
        </Box>
        </Box>
    </FullScreenSection>
);

export default Experience;
