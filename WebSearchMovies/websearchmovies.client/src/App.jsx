import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./src/home";

function App() {
  React.useEffect(() => {}, []);
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
