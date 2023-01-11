import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Section from "../components/UI/Section";

const LandingSection = () => {
  return (
    <Section>
      <Box mt="15%">
        <Heading as="h1" fontWeight={600} fontSize="64px">
          Marc Meynet
        </Heading>
        <Flex align="center" gap={4} mt={2}>
          <Heading as="h2" fontSize="32px" fontWeight={300}>
            Full-stack web developer from Switzerland
          </Heading>
          <Image src="img/swissflag.png" alt="Swiss flag" w="26px" h="26px" />
        </Flex>

        <Box h="1500px" w="32px" />
      </Box>
    </Section>
  );
};

export default LandingSection;
