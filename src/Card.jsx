import { Box, Heading, Text, Image, HStack, Link, Icon } from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi";

export default function Card({ title, description, imageSrc, href = "#" }) {
  return (
    <Box
      bg="white"
      rounded="xl"
      shadow="md"
      overflow="hidden"
      display="grid"
      gridTemplateRows="200px 1fr auto"   // ✅ same structure/height for all
      _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
      transition="all .2s"
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        w="full"
        h="200px"
        objectFit="cover"
      />

      {/* Body */}
      <Box p={5}>
        <Heading size="md" mb={2} color="#001D3D">
          {title}
        </Heading>
        <Text color="blackAlpha.700">
          {description}
        </Text>
      </Box>

      {/* Footer / CTA */}
      <Box px={5} pb={5}>
        <Link
          href={href}
          color="#003566"
          display="inline-flex"
          alignItems="center"
          gap={2}
          _hover={{ textDecoration: "none", color: "teal.600" }}
        >
          See more
          <Icon as={HiArrowRight} />
        </Link>
      </Box>
    </Box>
  );
}

