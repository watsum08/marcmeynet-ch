import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const SkillsSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 0.45)" id="skills">
      <SectionHeading text="Skills" />
      <Box px={12} mt={16}>
        <Text fontSize="20px">From design to wheelies, I have a few skills !</Text>
        <Flex gap={32} mt={8}>
          <SkillBox heading="Design">
            <SkillItem
              iconSrc="icons/skills/gimp.png"
              text="GIMP"
              href="https://www.gimp.org/"
            />
            <SkillItem
              iconSrc="icons/skills/figma.png"
              text="Figma"
              href="https://www.figma.com/"
            />
            <SkillItem
              iconSrc="icons/skills/magicavoxel.png"
              text="MagicaVoxel"
              href="https://ephtracy.github.io/"
            />
          </SkillBox>

          <SkillBox heading="Languages">
            <SkillItem
              iconSrc="icons/skills/html5.png"
              text="HTML"
              href="https://html5.org/"
            />
            <SkillItem
              iconSrc="icons/skills/css3.png"
              text="CSS"
              href="https://www.w3.org/Style/CSS/Overview.en.html"
            />
            <SkillItem
              iconSrc="icons/skills/javascript.png"
              text="JavaScript"
              href="https://www.javascript.com/"
            />
            <SkillItem
              iconSrc="icons/skills/typescript.png"
              text="TypeScript"
              href="https://www.typescriptlang.org/"
            />
            <SkillItem
              iconSrc="icons/skills/csharp.png"
              text="C#"
              href="https://learn.microsoft.com/en-us/dotnet/csharp/"
            />
            <SkillItem
              iconSrc="icons/skills/mysql.png"
              text="MySQL"
              href="https://www.mysql.com/"
            />
          </SkillBox>

          <SkillBox heading="Frameworks">
            <SkillItem
              iconSrc="icons/skills/react.png"
              text="React"
              href="https://reactjs.org/"
            />
            <SkillItem
              iconSrc="icons/skills/nextjs.png"
              text="Next.js"
              href="https://nextjs.org/"
            />
            <SkillItem
              iconSrc="icons/skills/laravel.png"
              text="Laravel"
              href="https://laravel.com/"
            />
            <SkillItem
              iconSrc="icons/skills/svelte.png"
              text="Svelte"
              href="https://svelte.dev/"
            />
            <SkillItem
              iconSrc="icons/skills/unity.png"
              text="Unity"
              href="https://unity.com/"
            />
          </SkillBox>
        </Flex>
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
        px={4}
        align="center"
        justify="space-between"
        gap={2}
        transition="0.3s all"
        _hover={{ transform: "scale(1.1)" }}
        cursor="pointer"
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

export default SkillsSection;
