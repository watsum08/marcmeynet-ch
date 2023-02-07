import { Box } from "@chakra-ui/react";

const PortfolioTag = ({ text }: { text: string }) => {
  return (
    <Box
      bg="#2C2C2C"
      color="white"
      px={3}
      py={1}
      w="fit-content"
      fontWeight={500}
    >
      {text}
    </Box>
  );
};

export default PortfolioTag;
