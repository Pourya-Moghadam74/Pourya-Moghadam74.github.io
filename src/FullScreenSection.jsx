import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor="#EEEEEE"
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1024px" minHeight="100vh" {...boxProps} bg="#EEEEEE">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
