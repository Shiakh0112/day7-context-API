import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { UserContext } from "../Context/UserContext";
import { Box, Button, Text } from "@chakra-ui/react";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);

  return (
    <Box
      bg={theme === "light" ? "white" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      p={4}
      minH="100vh"
    >
      <Text fontSize="2xl" mb={4}>
        {user ? `Welcome, ${user.name}` : "Please Log In"}
      </Text>

      {/* Toggle Theme Button */}
      <Button
        onClick={toggleTheme}
        mb={4}
        colorScheme={theme === "light" ? "teal" : "orange"}
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>

      {/* Login/Logout Button */}
      {!user ? (
        <Button onClick={() => login({ name: "Ashfaq" })} colorScheme="blue">
          Log In
        </Button>
      ) : (
        <Button onClick={logout} colorScheme="red">
          Log Out
        </Button>
      )}
    </Box>
  );
};

export default Home;
