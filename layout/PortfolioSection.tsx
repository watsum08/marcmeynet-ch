import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const PortfolioSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 0.75)" id="portfolio" color="black">
      <SectionHeading text="Portfolio" />
      <Box px={12} mt={16}>
        
      </Box>
    </Section>
  );
};

const SkillItem = ({
  iconSrc,
  text,
  href,
}: {
  iconSrc: string;
  text: string;
  href: string;
}) => {
  return (
    <ChakraLink as={Link} href={href} isExternal _hover={{}} w="fit-content">
      <Flex
        bg="#000"
        py={2}
        px={3}
        align="center"
        justify="space-between"
        gap={2}
        transition="0.3s all"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image src={iconSrc} alt={text} w="32px" h="32px" objectFit="contain" />
        <Text fontSize="20px">{text}</Text>
      </Flex>
    </ChakraLink>
  );
};

const SkillBox = ({
  heading,
  children,
}: {
  heading: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Flex flexDir="column" gap={2}>
      <Box textTransform="uppercase" fontSize="16px">
        {heading}
      </Box>
      {children}
    </Flex>
  );
};

export default PortfolioSection;
