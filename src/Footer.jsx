import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#001D3D">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>© {new Date().getFullYear()} Pourya — All rights reserved</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
