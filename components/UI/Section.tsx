import { Box } from "@chakra-ui/react";
import MainContainer from "./MainContainer";

const Section = ({
  children,
  bg,
  id,
  color,
}: {
  children: JSX.Element | JSX.Element[];
  bg: string;
  id?: string;
  color?: string;
}) => {
  return (
    <Box
      color={color ?? "white"}
      px={{ base: 0, lg: 16 }}
      pt="120px"
      pb="160px"
      m="auto"
      h="full"
      bg={bg ?? "black"}
      id={id ?? "auto"}
      transition="0.5s all"
    >
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Section;
