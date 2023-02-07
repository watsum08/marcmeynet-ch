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

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PortfolioSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 0.7)" id="portfolio" color="black">
      <SectionHeading text="Portfolio" />

      <Text fontSize="20px" mt={16}>
        Drag or use mouse wheel to check all of my projects
      </Text>

      <Flex w="calc(100vw - 10px)" pos="absolute" left={0} mt={8}>
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, Mousewheel]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides
          loop
          loopedSlides={2}
        >
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast 1"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast 2"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast 3"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast 4"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast 5"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
            />
          </SwiperSlide>
          ...
        </Swiper>
      </Flex>
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

const PortfolioItem = ({
  name,
  tags,
  description,
  codeHref,
  demoHref,
}: {
  name: string;
  tags: string[];
  description: string[];
  codeHref: string;
  demoHref: string;
}) => {
  return (
    <Box
      w="fit-content"
      minW="fit-content"
      border="2px solid white"
      pos="relative"
    >
      <Box bg="#000" p={20} pt={0}>
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

        <Box>
          <Flex w="full">
            <Box w="auto">
              <ChakraLink
                as={Link}
                href="https://ameliasbnb.ch/"
                _hover={{}}
                isExternal
              >
                <Image
                  src="img/portfolio/ameliasbnb.png"
                  alt="Amelia's Bed and Breakfast screenshot"
                  objectFit="cover"
                  h="full"
                  border="1px solid white"
                  transition="0.2s all ease-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </ChakraLink>
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
                  {tags.map((e) => (
                    <PortfolioTag key={e} text={e} />
                  ))}
                </Flex>

                <Box color="white" fontSize="20px" mt={6}>
                  {description.map((e) => (
                    <Box key={e} lineHeight="200%">
                      {e}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Flex>
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
  );
};

export default PortfolioSection;
