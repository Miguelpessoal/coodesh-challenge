import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalStyle } from "./theme/global";
import { defaultTheme } from "./theme/theme";
import { Router } from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
