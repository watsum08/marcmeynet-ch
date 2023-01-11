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
      px={32}
      py="160px"
      m="auto"
      minH="1100px"
      bg={bg ?? "black"}
      id={id ?? "auto"}
    >
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Section;
