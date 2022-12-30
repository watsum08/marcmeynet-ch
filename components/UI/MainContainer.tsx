import { Container } from "@chakra-ui/react";

const MainContainer = ({ children }: { children: JSX.Element }) => {
  return <Container maxW="1600px">{children}</Container>;
};

export default MainContainer;
