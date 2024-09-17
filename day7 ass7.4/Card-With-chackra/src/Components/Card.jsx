import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

const Card = ({ title, imageSrc, description }) => {
  const cardWidth = useBreakpointValue({ base: "100%", md: "300px" });

  return (
    <Box
      width={cardWidth}
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      bg="white"
      p={4}
      textAlign="center"
      mb={4} // Adds margin-bottom to space out cards
    >
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Image
        src={imageSrc}
        alt={title}
        boxSize="150px"
        objectFit="cover"
        borderRadius="full"
        mb={4}
        mx="auto"
      />
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

export default Card;
