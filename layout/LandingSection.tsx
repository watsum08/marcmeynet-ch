import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Section from "../components/UI/Section";
import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";

const LandingSection = () => {
  const text = "Bringing ideas to life, with code";
  return (
    <Section bg="black">
      <Flex align="center" mt="64px">
        <Box w="full" zIndex={999} pos="relative">
          <Heading as="h1" fontSize="64px" fontWeight={600}>
            Marc Meynet
          </Heading>
          <Flex align="center" gap={4} mt={2}>
            <Heading
              as="h2"
              fontSize="32px"
              fontWeight={300}
              lineHeight="32px"
              color="gray.300"
            >
              {/*text.split("").map((e, index) => (
                <Box key={index} as="span" _hover={{ color: "#1FC742" }}>
                  {e}
                </Box>
              ))*/}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(40)
                    .typeString("Bringing ideas to reality")
                    .pauseFor(500)
                    .typeString(", with code")
                    .pauseFor(Infinity)
                    .start();
                }}
              />
            </Heading>
          </Flex>
        </Box>

        <Box w="full" h="500px" zIndex={0} pos="relative">
          <Spline scene="https://prod.spline.design/yvuHK3WTLVSfGHch/scene.splinecode" />
        </Box>
      </Flex>
    </Section>
  );
};

export default LandingSection;
