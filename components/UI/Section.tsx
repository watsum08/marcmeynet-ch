import { Box } from "@chakra-ui/react";

const Section = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Box m={8} p={8}>
      {children}
    </Box>
  );
};

export default Section;
