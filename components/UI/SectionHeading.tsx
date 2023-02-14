import { Heading } from "@chakra-ui/react";

const SectionHeading = ({
  text,
  lastSection,
}: {
  text: string;
  lastSection?: boolean;
}) => {
  return (
    <Heading
      as="h3"
      fontWeight={300}
      fontSize={{ base: "36px", md: "40px", xl: "42px" }}
      _selection={
        lastSection
          ? { bg: "black", color: "white" }
          : { bg: "white", color: "black" }
      }
      whiteSpace="nowrap"
      mb={{ base: 2, sm: 4, md: 8, lg: 12 }}
      textAlign={{ base: "center", md: "left" }}
    >
      {text}
    </Heading>
  );
};

export default SectionHeading;
