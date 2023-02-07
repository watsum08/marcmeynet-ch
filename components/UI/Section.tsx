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
      px={16}
      py="160px"
      m="auto"
      minH="1000px"
      bg={bg ?? "black"}
      id={id ?? "auto"}
      borderTop="2px dashed black"
    >
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Section;
