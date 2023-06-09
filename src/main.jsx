import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Context } from "./context/Context";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);
