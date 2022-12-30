import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "white",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "normal",
        },
      },
    },
  },
});

export default theme;