import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Section from "../components/UI/Section";
import Spline from "@splinetool/react-spline";

const LandingSection = () => {
  const text = "Full-stack web developer from Switzerland";
  return (
    <Section bg="black">
      <Flex align="center" mt="64px">
        <Box w="full" zIndex={999} pos="relative">
          <Heading as="h1" fontWeight={600} fontSize="64px">
            Marc Meynet
          </Heading>
          <Flex align="center" gap={4} mt={2}>
            <Heading as="h2" fontSize="32px" fontWeight={300} lineHeight="32px">
              {text.split("").map((e, index) => (
                <Box
                  key={index}
                  as="span"
                  transition="0.2s all linear"
                  _hover={{ color: "#aaa" }}
                >
                  {e}
                </Box>
              ))}
            </Heading>
            <Image src="img/swissflag.png" alt="Swiss flag" w="26px" h="26px" />
          </Flex>
        </Box>

        <Box w="full" h="450px" zIndex={0} pos="relative">
          <Spline scene="https://prod.spline.design/rG4M8Lh9tjdZQe50/scene.splinecode" />
        </Box>
      </Flex>
    </Section>
  );
};

export default LandingSection;
