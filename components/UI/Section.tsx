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
      px={{ base: 4, sm: 8, lg: 16 }}
      pt={{ base: "16px", sm: "30px", md: "60px", xl: "120px"}}
      pb={{ base: "20px", sm: "40px", md: "80px", xl: "160px"}}
      m="auto"
      h="full"
      bg={bg ?? "black"}
      id={id ?? "auto"}
      transition="0.5s all"
      fontSize={{ base: "16px", md: "18px", xl: "20px" }}
    >
      <MainContainer>{children}</MainContainer>
    </Box>
  );
};

export default Section;
