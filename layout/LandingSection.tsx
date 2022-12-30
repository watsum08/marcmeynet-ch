import { Box, Heading } from "@chakra-ui/react";
import Section from "../components/UI/Section";

const LandingSection = () => {
  return (
    <Section>
      <Box>
        <Heading as="h1">Marc Meynet</Heading>
        <Heading as="h2">Full-stack web developer from Switzerland</Heading>
      </Box>
    </Section>
  );
};

export default LandingSection;
