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
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl' : '1800px',
  },
});

export default theme;
