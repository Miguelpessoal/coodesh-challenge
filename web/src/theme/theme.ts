import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const defaultTheme = extendTheme({
  colors: {
    white: {
      100: "#FFFFFF",
      200: "#FAFAFA",
    },
    darkBlue: {
      100: "#1A202C",
      200: "#232934",
    },
    orange: {
      100: "#E98834",
      200: "#FBD38D",
    },
    brown: "#3E3D3C",
  },
  config,
});
