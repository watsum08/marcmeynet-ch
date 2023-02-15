import {
  Box,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useInView } from "react-hook-inview";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const AboutMeSection = ({
  colorMode,
  setScrollToPage,
  language,
}: {
  colorMode: "light" | "dark";
  setScrollToPage: (pageNum: number) => void;
  language: string;
}) => {
  const [ref, inView] = useInView();

  return (
    <Section
      bg={
        colorMode === "dark"
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(255, 255, 255, 0.85)"
      }
      id="aboutme"
    >
      <Flex
        align={{ base: "center", md: "flex-start" }}
        justify="space-between"
        ref={ref}
        transition="1s all ease-out"
        opacity={inView ? 1 : 0}
        flexDir={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box color={colorMode === "dark" ? "white" : "black"}>
          <SectionHeading text={language === "en" ? "Hello, World !" : "Qui suis-je ?"} />
          <Box>
            {language === "en" ? (
              <Box
                as="p"
                w={{ base: "95%", lg: "90%", xl: "80%" }}
                lineHeight={{ base: "100%", md: "160%", lg: "180%" }}
              >
                My name is Marc Meynet. I&apos;m a 23 years old web developer
                from Switzerland. <br />
                <br />I love designing and creating web and mobile applications.
                <br />
                <br />
                Technology has always been my biggest passion. IT evolves very
                quickly and that&apos;s what motivates me to stay updated with
                the latest tech.
                <br />
                <br />
                For every project, my goal is to build a unique but intuitive
                design.
                <br />
                <br />
                Shall we get started ?
              </Box>
            ) : (
              <Box
                as="p"
                w={{ base: "95%", lg: "90%", xl: "80%" }}
                lineHeight={{ base: "100%", md: "160%", lg: "180%" }}
              >
                Je m&apos;appelle Marc Meynet. Je suis un développeur web suisse
                de 23 ans.
                <br />
                <br />
                I love designing and creating web and mobile applications.
                <br />
                <br />
                La technologie a toujours été ma plus grande passion.
                L&apos;informatique évolue très rapidement et c&apos;est ce qui
                me motive à rester à jour avec les dernières technologies.
                <br />
                <br />
                Pour chaque projet, mon objectif est de construire un design
                unique mais intuitif.
                <br />
                <br />
                Allons-nous commencer?
              </Box>
            )}
          </Box>
        </Box>

        <Flex
          justify="space-between"
          align="flex-end"
          mr={{ base: 0, xl: 16 }}
          transform={{
            base: "scale(0.5)",
            sm: "scale(0.6)",
            md: "scale(0.85)",
            xl: "scale(1)",
          }}
        >
          <Flex
            flexDir="column"
            gap={2}
            pr={{ base: 6, sm: 4, md: 2 }}
            transform={{
              base: "scale(1.5)",
              sm: "scale(1.25)",
              md: "scale(1)",
            }}
            mb={{ base: "72px", sm: "36px", md: 0 }}
          >
            <ChakraLink as={Link} href="https://github.com/watsum08" isExternal>
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="static/icons/aboutme/github.svg"
                opacity={0.8}
                alt="Github"
                w="54px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="https://stackoverflow.com/users/17717745/watsum08"
              isExternal
            >
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="static/icons/aboutme/stackoverflow.svg"
                opacity={0.8}
                alt="Stack Overflow"
                w="54px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
            <ChakraLink as={Link} href="#" isExternal>
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="static/icons/aboutme/linkedin.svg"
                opacity={0.8}
                alt="Linked In"
                w="54px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
            <IconButton
              aria-label="Send message"
              onClick={() => setScrollToPage(4)}
              bg="none"
              transition="0.3s all"
              opacity={0.8}
              _hover={{ opacity: 1, transform: "scale(1.1)" }}
              _active={{}}
              p={0}
              mx={0}
              my="6px"
            >
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="static/icons/aboutme/mail.svg"
                alt="Message"
                w="54px"
                rounded="2px"
                border="1px solid #333"
              />
            </IconButton>
            <ChakraLink as={Link} href="MarcAnthonyMeynet_CV.pdf" isExternal>
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="static/icons/aboutme/download.svg"
                opacity={0.8}
                alt="Download CV"
                w="54px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
          </Flex>

          <Box w="450px" mt={{ base: -44, sm: -32, md: 0 }}>
            <Image src="static/img/aboutme.png" alt="Photo of me" w="full" />
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
