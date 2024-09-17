import React from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";

const MyApp = () => {
  return (
    <Box p={5}>
      {/* Heading */}
      <Heading mb={5} size="lg" textAlign="center">
        Welcome to My Chakra UI App
      </Heading>

      {/* Input Field */}
      <Box mb={4} textAlign="center">
        <Input placeholder="Enter something..." size="md" width="50%" />
      </Box>

      {/* Button */}
      <Box textAlign="center" mb={5}>
        <Button colorScheme="teal" size="md">
          Submit
        </Button>
      </Box>

      {/* Card to display information */}
      <Card maxW="sm" mx="auto" p={4} shadow="md">
        <CardBody>
          <Text fontSize="md" textAlign="center">
            This is a sample card displaying some information.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default MyApp;
