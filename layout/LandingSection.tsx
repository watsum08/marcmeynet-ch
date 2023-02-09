import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Section from "../components/UI/Section";
import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";
import Header from "../components/Header";

const LandingSection = ({
  setScrollToPage,
  colorMode,
  setColorMode,
}: {
  setScrollToPage: (pageNum: number) => void;
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
}) => {
  return (
    <Section bg={colorMode === "dark" ? "black" : "white"}>
      <Header
        setScrollToPage={setScrollToPage}
        colorMode={colorMode}
        setColorMode={setColorMode}
      />
      <Flex align="center" mt="-128px">
        <Box
          w="60%"
          zIndex={999}
          pos="relative"
          pb="160px"
          color={colorMode === "dark" ? "white" : "black"}
        >
          <Heading as="h1" fontSize="64px" fontWeight={600}>
            Marc Meynet
          </Heading>
          <Flex align="center" gap={4} mt={2}>
            <Heading as="h2" fontSize="32px" fontWeight={300} lineHeight="32px">
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

        <Box w="full" h="1000px" zIndex={0} pos="relative" mt="-32px">
          <Spline scene="https://prod.spline.design/yWFyWJZCJGd7V7fu/scene.splinecode" />
        </Box>
      </Flex>
    </Section>
  );
};

export default LandingSection;
