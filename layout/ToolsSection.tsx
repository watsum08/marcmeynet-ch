import {
  Box,
  Flex,
  Image,
  Text,
  Link as ChakraLink,
  Button,
  useBreakpoint,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-hook-inview";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const ToolsSection = ({ colorMode }: { colorMode: "light" | "dark" }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [activeBox, setActiveBox] = useState(0);
  const breakpoint = useBreakpoint({ ssr: false });

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
        textAlign={{ base: "center", md: "left" }}
      >
        <SectionHeading text="Tools" />
        <Box ref={ref}>
          <Text>Here are some tools I use</Text>
          {breakpoint === "base" ||
          breakpoint === "sm" ||
          breakpoint === "md" ? (
            <Flex gap={{ base: 2, md: 4, lg: 8 }} mt={8} justify="space-evenly">
              <Flex mt={8} gap={3} flexDir="column" maxW="200px">
                <ToolNavBtn
                  id={0}
                  name="Design"
                  color={colorMode === "dark" ? "white" : "black"}
                  activeBox={activeBox}
                  setActiveBox={setActiveBox}
                />
                <ToolNavBtn
                  id={1}
                  name="Languages"
                  color={colorMode === "dark" ? "white" : "black"}
                  activeBox={activeBox}
                  setActiveBox={setActiveBox}
                />
                <ToolNavBtn
                  id={2}
                  name="Frameworks"
                  color={colorMode === "dark" ? "white" : "black"}
                  activeBox={activeBox}
                  setActiveBox={setActiveBox}
                />
              </Flex>

              {activeBox === 0 ? (
                <ToolBox heading="Design" inView={inView}>
                  <ToolItem
                    iconSrc="icons/skills/gimp.png"
                    text="GIMP"
                    href="https://www.gimp.org/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/figma.png"
                    text="Figma"
                    href="https://www.figma.com/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/magicavoxel.png"
                    text="MagicaVoxel"
                    href="https://ephtracy.github.io/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/spline.png"
                    text="Spline"
                    href="https://spline.design/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </ToolBox>
              ) : activeBox === 1 ? (
                <ToolBox heading="Languages" inView={inView}>
                  <ToolItem
                    iconSrc="icons/skills/html5.png"
                    text="HTML"
                    href="https://html5.org/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/css3.png"
                    text="CSS"
                    href="https://www.w3.org/Style/CSS/Overview.en.html"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/javascript.png"
                    text="JavaScript"
                    href="https://www.javascript.com/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/typescript.png"
                    text="TypeScript"
                    href="https://www.typescriptlang.org/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/csharp.png"
                    text="C#"
                    href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/mysql.png"
                    text="MySQL"
                    href="https://www.mysql.com/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </ToolBox>
              ) : (
                <ToolBox heading="Frameworks" inView={inView}>
                  <ToolItem
                    iconSrc="icons/skills/react.png"
                    text="React"
                    href="https://reactjs.org/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/nextjs.png"
                    text="Next.js"
                    href="https://nextjs.org/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/laravel.png"
                    text="Laravel"
                    href="https://laravel.com/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/svelte.png"
                    text="Svelte"
                    href="https://svelte.dev/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                  <ToolItem
                    iconSrc="icons/skills/unity.png"
                    text="Unity"
                    href="https://unity.com/"
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </ToolBox>
              )}
            </Flex>
          ) : (
            <Flex
              gap={{ base: 24, md: 28, lg: 32 }}
              justify={{ base: "center", md: "flex-start" }}
              mt={16}
            >
              <ToolBox heading="Design" inView={inView}>
                <ToolItem
                  iconSrc="icons/skills/gimp.png"
                  text="GIMP"
                  href="https://www.gimp.org/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/figma.png"
                  text="Figma"
                  href="https://www.figma.com/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/magicavoxel.png"
                  text="MagicaVoxel"
                  href="https://ephtracy.github.io/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/spline.png"
                  text="Spline"
                  href="https://spline.design/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
              </ToolBox>

              <ToolBox heading="Languages" inView={inView}>
                <ToolItem
                  iconSrc="icons/skills/html5.png"
                  text="HTML"
                  href="https://html5.org/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/css3.png"
                  text="CSS"
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/javascript.png"
                  text="JavaScript"
                  href="https://www.javascript.com/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/typescript.png"
                  text="TypeScript"
                  href="https://www.typescriptlang.org/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/csharp.png"
                  text="C#"
                  href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/mysql.png"
                  text="MySQL"
                  href="https://www.mysql.com/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
              </ToolBox>

              <ToolBox heading="Frameworks" inView={inView}>
                <ToolItem
                  iconSrc="icons/skills/react.png"
                  text="React"
                  href="https://reactjs.org/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/nextjs.png"
                  text="Next.js"
                  href="https://nextjs.org/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/laravel.png"
                  text="Laravel"
                  href="https://laravel.com/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/svelte.png"
                  text="Svelte"
                  href="https://svelte.dev/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
                <ToolItem
                  iconSrc="icons/skills/unity.png"
                  text="Unity"
                  href="https://unity.com/"
                  color={colorMode === "dark" ? "white" : "black"}
                />
              </ToolBox>
            </Flex>
          )}
        </Box>
      </Box>
    </Section>
  );
};

const ToolItem = ({
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
        <Image
          src={iconSrc}
          alt={text}
          w={{ base: "24px", md: "32px" }}
          h={{ base: "24px", md: "32px" }}
          objectFit="contain"
        />
        <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }}>{text}</Text>
      </Flex>
    </ChakraLink>
  );
};

const ToolBox = ({
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
      textAlign="left"
      minW="fit-content"
    >
      <Box textTransform="uppercase" fontSize="16px" fontWeight={500}>
        {heading}
      </Box>
      {children}
    </Flex>
  );
};

const ToolNavBtn = ({
  id,
  name,
  color,
  activeBox,
  setActiveBox,
}: {
  id: number;
  name: string;
  color: string;
  activeBox: number;
  setActiveBox: (id: number) => void;
}) => {
  return (
    <Button
      textTransform="uppercase"
      bg={id === activeBox ? "gray.800" : "none"}
      _active={{ bg: "gray.800" }}
      border="2px solid white"
      _hover={color === "black" ? { bg: "gray.200" } : { bg: "gray.700" }}
      onClick={() => setActiveBox(id)}
      fontSize={{ base: "16px", md: "18px" }}
    >
      {name}
    </Button>
  );
};

export default ToolsSection;
