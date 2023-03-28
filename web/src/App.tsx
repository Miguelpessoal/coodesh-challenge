import { ThemeProvider } from "styled-components";
import { Login } from "./Login";
import { GlobalStyle } from "./theme/global";
import { defaultTheme } from "./theme/theme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}
