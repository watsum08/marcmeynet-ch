import { Box, Button, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const AboutMeSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 0.15)" id="aboutme">
      <Flex align="flex-start" justify="space-between">
        <Box pt={4}>
          <SectionHeading text="Who am I ?" />
          <Box mt={16} ml={24}>
            <Box as="p" color="#fff" w="70%" lineHeight="180%" textAlign="justify">
              Hi, my name is Marc Meynet and I&apos;m a full stack web
              developer. <br />
              <br />I love creating web and mobile applications offering a
              modern and intuitive design. I&apos;m highly interested in all
              kinds of projects and do my best for every single one.
              <br />
              <br />
              IT being a fast evolving industry, I always look forward to stay
              up to date with modern technologies. I also enjoy working on
              different projects such as developing games or programming
              Raspberry Pi.
            </Box>

            <Button
              mt={8}
              p={2}
              pl={0}
              bg="transparent"
              fontSize="20px"
              h="auto"
              color="gray"
              _hover={{ color: "white", fontWeight: 600 }}
              _active={{}}
              borderRadius="1px"
              transition="0.3s all"
              cursor="pointer"
              w="fit-content"
            >
              Read more
            </Button>
          </Box>
        </Box>

        <Flex justify="space-between" align="flex-end">
          <Flex flexDir="column" gap={2} pr={2}>
            <ChakraLink as={Link} href="https://github.com/watsum08" isExternal>
              <Image
                src="icons/aboutme/github.svg"
                opacity={0.8}
                alt="Github"
                w="42px"
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
                src="icons/aboutme/stackoverflow.svg"
                opacity={0.8}
                alt="Stack Overflow"
                w="42px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
            <ChakraLink as={Link} href="#" isExternal>
              <Image
                src="icons/aboutme/linkedin.svg"
                opacity={0.8}
                alt="Linked In"
                w="42px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
            <ChakraLink as={Link} href="MarcAnthonyMeynet_CV.pdf" isExternal>
              <Image
                src="icons/aboutme/download.svg"
                opacity={0.8}
                alt="Download CV"
                w="42px"
                _hover={{ opacity: 1, transform: "scale(1.1)" }}
                transition="0.3s all"
                rounded="2px"
                border="1px solid #333"
              />
            </ChakraLink>
          </Flex>

          <Box w="400px" mr="100px">
            <Image src="img/aboutme.png" alt="Photo of me" w="full" />
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
