import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";
import Home from "./componenets/Home";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <UserProvider>
          <Home />
        </UserProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
