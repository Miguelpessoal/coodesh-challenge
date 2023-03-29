import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { GlobalStyle } from "./theme/global";
import { defaultTheme } from "./theme/theme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
