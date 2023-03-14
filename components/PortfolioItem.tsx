import {
  Flex,
  Button,
  Box,
  Link as ChakraLink,
  Image,
  Text,
} from "@chakra-ui/react";
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
  inProgress,
  isPrivate,
  color,
  language,
}: {
  name: string;
  tags: string[];
  description: string[];
  codeHref: string;
  demoHref: string;
  imgHref: string;
  httpAlert?: boolean;
  inProgress?: boolean;
  isPrivate?: boolean;
  color: string;
  language: string;
}) => {
  return (
    <Box
      w={{
        base: "320px",
        sm: "420px",
        md: "640px",
        lg: "780px",
        "2xl": "900px",
        "3xl": "1000px",
      }}
      border={color === "black" ? "2px solid white" : "2px solid black"}
      pos="relative"
      m="auto"
      textAlign={{ base: "center", lg: "left" }}
      userSelect="none"
    >
      <Box
        bg={color === "black" ? "black" : "white"}
        p={{ base: 4, sm: 6, md: 8, xl: 12, "2xl": 16, "3xl": 20 }}
        pt={{ base: 0, lg: 0, xl: 0, "2xl": 0, "3xl": 0 }}
      >
        {inProgress ? (
          <Text
            color="yellow.400"
            pos="absolute"
            mt={{ base: "4px", sm: "6px", lg: "10px" }}
            textTransform="uppercase"
            fontSize={{ base: "12px", sm: "14px", lg: "18px" }}
            fontWeight={500}
          >
            {language === "en" ? "Work in progress" : "Travaux en cours"}
          </Text>
        ) : (
          ""
        )}
        <Text
          color={color === "black" ? "white" : "black"}
          fontWeight={700}
          fontSize={{
            base: "28px",
            sm: "32px",
            md: "36px",
            xl: "42px",
            "2xl": "48px",
          }}
          lineHeight={{
            base: "28px",
            sm: "32px",
            md: "36px",
            xl: "42px",
            "2xl": "48px",
          }}
          textTransform="uppercase"
          py={{ base: 6, sm: 8, lg: 10 }}
        >
          {name}
        </Text>

        <Flex
          w="full"
          justify="space-between"
          gap={{ base: 4, lg: 6, "2xl": 0 }}
          align="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <ChakraLink
            as={Link}
            href={demoHref}
            _hover={{}}
            isExternal
            w={{ base: "90%", lg: "55%" }}
          >
            <Image
              src={imgHref}
              alt={name + " screenshot"}
              objectFit="cover"
              w="full"
              h="full"
              border={color === "black" ? "2px solid white" : "2px solid black"}
              transition="0.2s all ease-out"
              _hover={{ transform: "scale(1.05)" }}
              onClick={
                httpAlert
                  ? () =>
                      language === "en"
                        ? alert(
                            "You are about to visit " +
                              name +
                              "\nThis website is hosted on the owner's server. \nConnection may not be secured (HTTP)"
                          )
                        : alert(
                            "Vous allez visiter " +
                              name +
                              "\nCe site est hébergé sur le serveur du propriétaire. \nLa connexion ne peut être sécurisée (HTTP)"
                          )
                  : () => {}
              }
            />
          </ChakraLink>

          <Flex
            flexDir="column"
            justify="space-between"
            align={{ base: "center", lg: "flex-end" }}
            ml={{ base: 0, lg: 8 }}
            pos="relative"
            w="45%"
            color={color === "black" ? "white" : "black"}
          >
            <Box>
              <Flex
                w={{ base: "full", lg: "45%" }}
                h="fit-content"
                gap={2}
                justify={{ base: "center", lg: "flex-start" }}
              >
                {tags.map((e) => (
                  <PortfolioTag key={e} text={e} />
                ))}
              </Flex>

              <Box
                fontSize={{ base: "16px", sm: "18px", lg: "20px" }}
                my={{ base: 4, lg: 6 }}
              >
                {description.map((e) => (
                  <Box
                    key={e}
                    lineHeight={{
                      base: "140%",
                      md: "160%",
                      lg: "200%",
                    }}
                  >
                    {e}
                  </Box>
                ))}
              </Box>

              <Flex
                w="full"
                flexDir={{ base: "column", sm: "row" }}
                gap={{ base: 2, sm: 4 }}
              >
                <ChakraLink as={Link} href={codeHref} _hover={{}} isExternal>
                  <Button
                    rightIcon={<BiCode size="24px" />}
                    bg="transparent"
                    border={
                      color === "black" ? "2px solid white" : "2px solid black"
                    }
                    textTransform="uppercase"
                    rounded="2px"
                    fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                    fontWeight={400}
                    transition="0.3s all"
                    _hover={{ bg: "#fff", color: "#000" }}
                    pr={2}
                    onClick={
                      isPrivate
                        ? () =>
                            language === "en"
                              ? alert(
                                  "To protect the owner's data, this GitHub repo has been set to private."
                                )
                              : alert(
                                  "Pour protéger les données du propriétaire, ce repo GitHub a été défini privé."
                                )
                        : () => {}
                    }
                  >
                    {language === "en" ? "View code" : "Voir code"}
                  </Button>
                </ChakraLink>
                <ChakraLink as={Link} href={demoHref} _hover={{}} isExternal>
                  <Button
                    rightIcon={<BiPlay size="24px" />}
                    bg="transparent"
                    border={
                      color === "black" ? "2px solid white" : "2px solid black"
                    }
                    textTransform="uppercase"
                    rounded="2px"
                    fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                    fontWeight={400}
                    transition="0.3s all"
                    _hover={{ bg: "#fff", color: "#000" }}
                    pr={2}
                    onClick={
                      httpAlert
                        ? () =>
                            language === "en"
                              ? alert(
                                  "You are about to visit " +
                                    name +
                                    "\nThis website is hosted on the owner's server. \nConnection may not be secured (HTTP)"
                                )
                              : alert(
                                  "Vous allez visiter " +
                                    name +
                                    "\nCe site est hébergé sur le serveur du propriétaire. \nLa connexion ne peut être sécurisée (HTTP)"
                                )
                        : () => {}
                    }
                  >
                    {language === "en" ? "View demo" : "Voir demo"}
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
