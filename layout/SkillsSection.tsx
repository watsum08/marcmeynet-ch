import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useInView } from "react-hook-inview";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const SkillsSection = ({ colorMode }: { colorMode: "light" | "dark" }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <Section
      bg={
        colorMode === "dark"
          ? "rgba(255, 255, 255, 0.45)"
          : "rgba(255, 255, 255, 0.65)"
      }
      id="skills"
    >
      <Box
        color={colorMode === "dark" ? "white" : "black"}
        transition="0.8s all ease-out"
        opacity={inView ? 1 : 0}
      >
        <SectionHeading text="Skills" />
        <Box mt={12}>
          <Text fontSize="20px">Here are some skills I have learned</Text>
          <Flex gap={32} mt={16} ref={ref}>
            <SkillBox heading="Design" inView={inView}>
              <SkillItem
                iconSrc="icons/skills/gimp.png"
                text="GIMP"
                href="https://www.gimp.org/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/figma.png"
                text="Figma"
                href="https://www.figma.com/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/magicavoxel.png"
                text="MagicaVoxel"
                href="https://ephtracy.github.io/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/spline.png"
                text="Spline"
                href="https://spline.design/"
                color={colorMode === "dark" ? "white" : "black"}
              />
            </SkillBox>

            <SkillBox heading="Languages" inView={inView}>
              <SkillItem
                iconSrc="icons/skills/html5.png"
                text="HTML"
                href="https://html5.org/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/css3.png"
                text="CSS"
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/javascript.png"
                text="JavaScript"
                href="https://www.javascript.com/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/typescript.png"
                text="TypeScript"
                href="https://www.typescriptlang.org/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/csharp.png"
                text="C#"
                href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/mysql.png"
                text="MySQL"
                href="https://www.mysql.com/"
                color={colorMode === "dark" ? "white" : "black"}
              />
            </SkillBox>

            <SkillBox heading="Frameworks" inView={inView}>
              <SkillItem
                iconSrc="icons/skills/react.png"
                text="React"
                href="https://reactjs.org/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/nextjs.png"
                text="Next.js"
                href="https://nextjs.org/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/laravel.png"
                text="Laravel"
                href="https://laravel.com/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/svelte.png"
                text="Svelte"
                href="https://svelte.dev/"
                color={colorMode === "dark" ? "white" : "black"}
              />
              <SkillItem
                iconSrc="icons/skills/unity.png"
                text="Unity"
                href="https://unity.com/"
                color={colorMode === "dark" ? "white" : "black"}
              />
            </SkillBox>
          </Flex>
        </Box>
      </Box>
    </Section>
  );
};

const SkillItem = ({
  iconSrc,
  text,
  href,
  color,
}: {
  iconSrc: string;
  text: string;
  href: string;
  color: string;
}) => {
  return (
    <ChakraLink as={Link} href={href} isExternal _hover={{}} w="fit-content">
      <Flex
        bg={color === "black" ? "gray.300" : "gray.800"}
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
  inView,
}: {
  heading: string;
  children: JSX.Element | JSX.Element[];
  inView: boolean;
}) => {
  return (
    <Flex
      flexDir="column"
      gap={2}
      transition="0.3s ease-out"
      transformOrigin="0% 100%"
      transform={`scaleX(${inView ? 1 : 0})`}
    >
      <Box textTransform="uppercase" fontSize="16px" fontWeight={500}>
        {heading}
      </Box>
      {children}
    </Flex>
  );
};

export default SkillsSection;
