import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { TodoProvider } from "./Context/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ChakraProvider>
  </React.StrictMode>
);
