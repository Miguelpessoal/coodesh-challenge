import { extendTheme } from "@chakra-ui/theme-utils";

const theme = {
  styles: {
    global: {
      ":focus": {
        outline: 0,
      },
      body: {
        background: "#1A202C",
        "-webkit-font-smoothing": "antialiased",
      },
      div: {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-direction": "column",
      },
      h1: {
        display: "block",
        "font-size": "2em",
        "margin-top": "1.675rem",
        "margin-bottom": "1.675rem",
        "font-weight": "bold",
      },
      button: {
        "margin-top": "8rem",
      },
      td: {
        color: "#FFFFFf",
        "font-weight": "bold",
      },
      Thead: {
        Tr: {
          Th: {
            "justifiy-content": "center",
            "flex-direction": "column",
          },
        },
      },
    },
  },
};

export default extendTheme(theme);
