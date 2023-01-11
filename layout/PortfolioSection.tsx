import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

import { BiCode, BiPlay } from "react-icons/bi";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 0.7)" id="portfolio" color="black">
      <SectionHeading text="Portfolio" />
      <Box px={12} mt={24}>
        <Box bg="#000" p="16px 64px 64px 64px" w="1080px" m="auto">
          <Box>
            <Flex gap={3} align="center" px={4} py="24px">
              <Image
                src="icons/portfolio/ameliasbnb_icon.png"
                alt="Amelia's Bed and Breakfast logo"
                objectFit="contain"
              />
              <Text color="white" fontSize="24px" textTransform="uppercase">
                Amelia&apos;s Bed and Breakfast
              </Text>
            </Flex>

            <Flex w="full">
              <Box w="auto">
                <Image
                  src="img/portfolio/ameliasbnb.png"
                  alt="Amelia's Bed and Breakfast screenshot"
                  objectFit="cover"
                  h="full"
                />
              </Box>

              <Flex
                flexDir="column"
                justify="space-between"
                ml={16}
                pos="relative"
                w="40%"
              >
                <Box>
                  <Flex w="45%" h="fit-content" gap={2}>
                    <PortfolioTag text="Figma" />
                    <PortfolioTag text="NextJS" />
                    <PortfolioTag text="JavaScript" />
                  </Flex>

                  <Text
                    as="p"
                    color="white"
                    fontSize="20px"
                    mt={8}
                    lineHeight="120%"
                  >
                    A bed and breakfast website.
                    <br />
                    <br />
                    Custom design made with Figma.
                    <br />
                    <br />
                    Created with Next.js in JavaScript.
                  </Text>
                </Box>

                <Flex>
                  <ChakraLink as={Link} href="https://github.com/watsum08/ameliasbnb-ch" _hover={{}} isExternal>
                    <Button
                      rightIcon={<BiCode size="24px" />}
                      color="white"
                      bg="transparent"
                      border="2px solid #fff"
                      textTransform="uppercase"
                      rounded="2px"
                      fontSize="20px"
                      fontWeight={400}
                      transition="0.3s all"
                      _hover={{ bg: "#fff", color: "#000" }}
                      pr={2}
                    >
                      View code
                    </Button>
                  </ChakraLink>
                  <ChakraLink as={Link} href="https://www.ameliasbnb.ch" _hover={{}} isExternal>
                    <Button
                      rightIcon={<BiPlay size="24px" />}
                      color="white"
                      bg="transparent"
                      border="2px solid #fff"
                      textTransform="uppercase"
                      rounded="2px"
                      fontSize="20px"
                      fontWeight={400}
                      transition="0.3s all"
                      _hover={{ bg: "#fff", color: "#000" }}
                      ml={2}
                      pr={2}
                    >
                      View website
                    </Button>
                  </ChakraLink>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

const PortfolioTag = ({ text }: { text: string }) => {
  return (
    <Box
      bg="#2C2C2C"
      color="white"
      px={3}
      py={1}
      w="fit-content"
      fontWeight={500}
    >
      {text}
    </Box>
  );
};

export default PortfolioSection;
