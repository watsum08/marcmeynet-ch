import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import MainContainer from "../components/UI/MainContainer";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  );
}
