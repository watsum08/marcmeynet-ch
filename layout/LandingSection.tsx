import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Section from "../components/UI/Section";
import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LandingSection = ({
  setScrollToPage,
  colorMode,
  setColorMode,
  setBlockScroll,
  setLanguage,
  language,
}: {
  setScrollToPage: (pageNum: number) => void;
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
  setBlockScroll: (toggle: boolean) => void;
  setLanguage: (lang: "en" | "fr") => void;
  language: string;
}) => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  return (
    <>
      {splineLoaded ? (
        ""
      ) : (
        <Flex pos="fixed" zIndex={1111} w="100vw" h="100vh" bg="black">
          <Box m="auto" w="fit-content">
            <Image
              as={motion.img}
              src="favicon.png"
              alt="Loading icon"
              w="64px"
              h="auto"
              m="auto"
              animate={{
                scale: [0.5, 1.5],
              }}
              transition="1s ease-in-out"
            />
            <Box mt={8}>
              <Text
                fontSize="24px"
                fontWeight={600}
                as={motion.span}
                animate={{
                  opacity: [0, 1],
                }}
                transition="1s ease-in-out"
              >
                Page is loading
              </Text>
            </Box>
          </Box>
        </Flex>
      )}

      <Section bg={colorMode === "dark" ? "black" : "white"}>
        <Header
          setScrollToPage={setScrollToPage}
          colorMode={colorMode}
          setColorMode={setColorMode}
          setLanguage={setLanguage}
          language={language}
        />
        <Flex
          align="center"
          mt={{ base: 16, md: 24, lg: "-128px" }}
          flexDir={{ base: "column", lg: "row" }}
          textAlign={{ base: "center", lg: "left" }}
          justify="center"
        >
          <Box
            w="fit-content"
            zIndex={999}
            pos="relative"
            pb={{ base: 0, lg: "160px" }}
            color={colorMode === "dark" ? "white" : "black"}
            whiteSpace="nowrap"
            mx="auto"
          >
            <Heading
              as="h1"
              fontSize={{ base: "36px", sm: "44px", md: "54px", xl: "64px" }}
              fontWeight={600}
            >
              Marc Meynet
            </Heading>
            <Flex align="center" mt={2}>
              <Heading
                as="h2"
                fontSize={{ base: "18px", sm: "24px", md: "28px", xl: "32px" }}
                fontWeight={300}
                lineHeight={{ base: "24px", md: "32px" }}
              >
                {language === "en" ? (
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
                ) : (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(40)
                        .typeString("Transformer des idées en réalité")
                        .pauseFor(500)
                        .typeString(", avec du code")
                        .pauseFor(Infinity)
                        .start();
                    }}
                  />
                )}
              </Heading>
            </Flex>
          </Box>

          <Flex
            w="50%"
            transform={{
              base: "scale(0.45)",
              sm: "scale(0.6)",
              md: "scale(0.7)",
              xl: "scale(1)",
            }}
            zIndex={0}
            pos="relative"
            mt={{ base: "-250px", sm: "-220px", md: "-172px", lg: "-32px" }}
            mx="auto"
            align="flex-start"
            justify="center"
          >
            <Spline
              scene="https://prod.spline.design/yWFyWJZCJGd7V7fu/scene.splinecode"
              onLoad={() => {
                setSplineLoaded(true);
                console.log("spline loaded");
              }}
              onTouchStart={() => setBlockScroll(true)}
              onTouchEnd={() => setBlockScroll(false)}
            />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};

export default LandingSection;