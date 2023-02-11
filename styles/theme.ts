import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        overscrollBehavior: "none",
      },
      body: {
        overscrollBehavior: "none",
        bg: "black",
        color: "white",
        cursor: 'url("cursor.png"), auto',
      },
      div: {
        cursor: 'url("cursor.png"), auto',
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "normal",
        },
      },
      _selection: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: `'Supreme', sans-serif`,
    body: `'Supreme', sans-serif`,
  },
});

export default theme;
