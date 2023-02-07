import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useInView } from "react-hook-inview";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <Section bg="rgba(255, 255, 255, 0.45)" id="skills">
      <SectionHeading text="Skills" />
      <Box mt={16}>
        <Text fontSize="20px">Here are some skills I have learned</Text>
        <Flex gap={32} mt={8} ref={ref}>
          <SkillBox heading="Design" inView={inView}>
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
            <SkillItem
              iconSrc="icons/skills/spline.png"
              text="Spline"
              href="https://spline.design/"
            />
          </SkillBox>

          <SkillBox heading="Languages" inView={inView}>
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

          <SkillBox heading="Frameworks" inView={inView}>
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
      <Box textTransform="uppercase" fontSize="16px">
        {heading}
      </Box>
      {children}
    </Flex>
  );
};

export default SkillsSection;
