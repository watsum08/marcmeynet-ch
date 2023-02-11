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
}: {
  colorMode: "light" | "dark";
  setScrollToPage: (pageNum: number) => void;
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
        align="flex-start"
        justify="space-between"
        ref={ref}
        transition="1s all ease-out"
        opacity={inView ? 1 : 0}
      >
        <Box color={colorMode === "dark" ? "white" : "black"}>
          <SectionHeading text="Hello, World !" />
          <Box mt={16}>
            <Box
              as="p"
              w="80%"
              lineHeight="180%"
              textAlign="left"
              fontSize="20px"
            >
              My name is Marc Meynet. I&apos;m a 23 years old web developer from
              Switzerland. <br />
              <br />I love designing and creating web and mobile applications.
              <br />
              <br />
              Technology has always been my biggest passion. IT evolves very
              quickly and that&apos;s what motivates me to stay updated with the
              latest tech.
              <br />
              <br />
              For every project, my goal is to build a unique but intuitive
              design.
              <br />
              <br />
              Shall we get started ?
            </Box>
          </Box>
        </Box>

        <Flex justify="space-between" align="flex-end">
          <Flex flexDir="column" gap={2} pr={2}>
            <ChakraLink as={Link} href="https://github.com/watsum08" isExternal>
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="icons/aboutme/github.svg"
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
                src="icons/aboutme/stackoverflow.svg"
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
                src="icons/aboutme/linkedin.svg"
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
                src="icons/aboutme/mail.svg"
                alt="Message"
                w="54px"
                rounded="2px"
                border="1px solid #333"
              />
            </IconButton>
            <ChakraLink as={Link} href="MarcAnthonyMeynet_CV.pdf" isExternal>
              <Image
                filter={colorMode === "dark" ? "invert(0)" : "invert(1)"}
                src="icons/aboutme/download.svg"
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

          <Box w="450px" mr="100px">
            <Image src="img/aboutme.png" alt="Photo of me" w="full" />
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
