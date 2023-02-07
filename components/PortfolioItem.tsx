import { Flex, Button, Box, Link as ChakraLink, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiCode, BiPlay } from "react-icons/bi";
import PortfolioTag from "./UI/PortfolioTag";

const PortfolioItem = ({
  name,
  tags,
  description,
  codeHref,
  demoHref,
  imgHref,
  httpAlert,
}: {
  name: string;
  tags: string[];
  description: string[];
  codeHref: string;
  demoHref: string;
  imgHref: string;
  httpAlert?: boolean;
}) => {
  return (
    <Box w="1000px" border="2px solid white" pos="relative">
      <Box bg="black" p={20} pt={0}>
        <Text
          color="white"
          fontWeight={700}
          fontSize="48px"
          lineHeight="48px"
          textTransform="uppercase"
          py={10}
        >
          {name}
        </Text>

        <Flex w="full" justify="space-between">
          <ChakraLink as={Link} href={demoHref} _hover={{}} isExternal w="55%">
            <Image
              src={imgHref}
              alt="Amelia's Bed and Breakfast screenshot"
              objectFit="cover"
              w="full"
              h="full"
              border="1px solid white"
              transition="0.2s all ease-out"
              _hover={{ transform: "scale(1.05)" }}
              onClick={
                httpAlert
                  ? () =>
                      alert(
                        "You are about to visit " +
                          name +
                          "\nThis website is hosted on the owner's server. \nConnection may not be secured (HTTPS)"
                      )
                  : () => {}
              }
            />
          </ChakraLink>

          <Flex
            flexDir="column"
            justify="space-between"
            align="flex-end"
            ml={8}
            pos="relative"
            w="45%"
          >
            <Box>
              <Flex w="45%" h="fit-content" gap={2}>
                {tags.map((e) => (
                  <PortfolioTag key={e} text={e} />
                ))}
              </Flex>

              <Box color="white" fontSize="20px" my={6}>
                {description.map((e) => (
                  <Box key={e} lineHeight="200%">
                    {e}
                  </Box>
                ))}
              </Box>

              <Flex w="full">
                <ChakraLink as={Link} href={codeHref} _hover={{}} isExternal>
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
                <ChakraLink as={Link} href={demoHref} _hover={{}} isExternal>
                  <Button
                    rightIcon={<BiPlay size="24px" />}
                    color="white"
                    bg="transparent"
                    border="2px solid white"
                    textTransform="uppercase"
                    rounded="2px"
                    fontSize="20px"
                    fontWeight={400}
                    transition="0.3s all"
                    _hover={{ bg: "#fff", color: "#000" }}
                    ml={3}
                    pr={2}
                    onClick={
                      httpAlert
                        ? () =>
                            alert(
                              "You are about to visit " +
                                name +
                                "\nThis website is hosted on the owner's server. \nConnection may not be secured (HTTPS)"
                            )
                        : () => {}
                    }
                  >
                    View demo
                  </Button>
                </ChakraLink>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default PortfolioItem;
