import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import Fonts from "../styles/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
