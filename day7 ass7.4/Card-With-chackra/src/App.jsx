import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChakraProvider, Box, Spinner, SimpleGrid } from "@chakra-ui/react";
import Card from "./Components/Card";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = response.data;

        // For demonstration, we're using placeholder images
        const cards = data.slice(0, 5).map((item) => ({
          title: item.title,
          imageSrc: "https://via.placeholder.com/150", // Replace with a relevant image URL if available
          description: item.body,
        }));

        setCardData(cards);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Box style={{ padding: "20px" }}>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {cardData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                imageSrc={data.imageSrc}
                description={data.description}
              />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;
