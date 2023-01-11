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
      fontSize="42px"
      _selection={
        lastSection
          ? { bg: "black", color: "white" }
          : { bg: "white", color: "black" }
      }
    >
      {text}
    </Heading>
  );
};

export default SectionHeading;
