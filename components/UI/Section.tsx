import { Box } from "@chakra-ui/react";

const Section = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Box m={0} p={16}>
      {children}
    </Box>
  );
};

export default Section;
