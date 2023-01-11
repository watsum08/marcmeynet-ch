import {
  Image,
  Flex,
  List,
  ListItem,
  Link as ChakraLink,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      p={8}
      align="center"
      pos="absolute"
      top={0}
      left={0}
      ml={4}
      color="white"
    >
      <Button
        transform={`rotate(${isOpen ? 90 : 0}deg)`}
        transition="0.5s all ease-out"
        _hover={{}}
        _active={{ transform: "scale(1.2)" }}
        bg="transparent"
        p={0}
        m={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="icons/nav/nav_burger.svg"
          alt="Menu"
          w="32px"
          h="28px"
          objectFit="cover"
        />
      </Button>

      <List
        display="flex"
        gap={12}
        ml={12}
        opacity={isOpen ? 1 : 0}
        transform={`translateX(${isOpen ? 0 : -96}px)`}
        transition="0.5s all ease-out"
        pointerEvents={isOpen ? "auto" : "none"}
      >
        <NavLink href="#aboutme" text="About me" />
        <NavLink href="#skills" text="Skills" />
        <NavLink href="#portfolio" text="Portfolio" />
        <NavLink href="#contact" text="Contact" />
        <Image
          src="icons/nav/nav_sun.svg"
          alt="Light mode"
          w="20px"
          transition="0.2s all ease-out"
          _hover={{ transform: "scale(1.2)", cursor: "pointer" }}
        />
      </List>
    </Flex>
  );
};

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <ListItem
      transform="translateX(0px)"
      transition="0.2s all ease-out"
      _hover={{ transform: "scale(1.2)" }}
    >
      <ChakraLink
        as={Link}
        href={href}
        textTransform="uppercase"
        _hover={{}}
        scroll={false}
      >
        {text}
      </ChakraLink>
    </ListItem>
  );
};

export default Header;
