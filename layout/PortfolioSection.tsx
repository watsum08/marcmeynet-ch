import { Box, Flex, Text, useBreakpoint } from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

import PortfolioItem from "../components/PortfolioItem";

// import Swiper core and required modules
import { Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useInView } from "react-hook-inview";

const PortfolioSection = ({
  colorMode,
  setBlockScroll,
}: {
  colorMode: "light" | "dark";
  setBlockScroll: (toggle: boolean) => void;
}) => {
  const [ref, inView] = useInView();
  const breakpoint = useBreakpoint({ ssr: false });

  return (
    <Section
      bg={
        colorMode === "dark"
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.3)"
      }
      id="portfolio"
    >
      <Box
        color={colorMode === "dark" ? "black" : "white"}
        transition="0.8s all ease-out"
        opacity={inView ? 1 : 0}
        ref={ref}
        textAlign={{ base: "center", md: "left" }}
      >
        <SectionHeading text="Portfolio" />

        <Text>Drag or use mouse wheel to check all of my projects</Text>

        <Flex w="100vw" pos="absolute" left={0} mt={{ base: 8, lg: 16 }}>
          <Swiper
            modules={[Scrollbar, A11y, Autoplay, Mousewheel]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel
            spaceBetween={256}
            slidesPerView={
              breakpoint === "base" ||
              breakpoint === "sm" ||
              breakpoint === "md" ||
              breakpoint === "lg"
                ? 1
                : 2
            }
            centeredSlides
            loop
            loopedSlides={2}
            onTouchStart={() => setBlockScroll(true)}
            onTouchEnd={() => setBlockScroll(false)}
          >
            <SwiperSlide>
              <PortfolioItem
                name="My portfolio website"
                tags={["NextJS", "TypeScript", "Spline"]}
                description={[
                  "What you're seeing right now",
                  "Custom design",
                  "Created with Next.js in TypeScript",
                ]}
                codeHref="https://github.com/watsum08/ameliasbnb-ch"
                demoHref="https://www.ameliasbnb.ch"
                imgHref="static/img/portfolio/ameliasbnb.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="My portfolio website v.1"
                tags={["HTML", "CSS", "JavaScript"]}
                description={[
                  "My first portfolio website",
                  "Custom design",
                  "I had a lot of fun using JavaScript",
                ]}
                codeHref="https://github.com/watsum08/marcmeynet-ch"
                demoHref="https://www.marcmeynet.ch"
                imgHref="static/img/portfolio/marcmeynet_v1.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Démolplus Sàrl"
                tags={["Figma", "NextJS", "JavaScript"]}
                description={[
                  "A demolition company website",
                  "Custom design",
                  "Google SEO optimization",
                ]}
                codeHref="https://github.com/watsum08/demolplus-ch"
                demoHref="https://demolplus.ch"
                imgHref="static/img/portfolio/demolplus.jpeg"
                httpAlert
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="The Burger Place"
                tags={["HTML", "CSS", "JavaScript"]}
                description={[
                  "A fictional burger place.",
                  "An HTML/CSS school project",
                  "Only web version available",
                ]}
                codeHref="https://github.com/watsum08/the-burger-place"
                demoHref="https://www.the-burger-place.web.app/"
                imgHref="static/img/portfolio/theburgerplace.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Amelia's Bed and Breakfast"
                tags={["Figma", "NextJS", "JavaScript"]}
                description={[
                  "A bed and breakfast website",
                  "Custom design",
                  "Created in Next.js with JavaScript",
                ]}
                codeHref="https://github.com/watsum08/ameliasbnb-ch"
                demoHref="https://ameliasbnb.ch"
                imgHref="static/img/portfolio/ameliasbnb.jpeg"
                inProgress
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Swiss Algo Bots"
                tags={["NextJS", "TypeScript", "Spline"]}
                description={[
                  "An algo-trading bot web application",
                  "NodeJS back-end",
                  "Created in Next.js with TypeScript",
                ]}
                codeHref="https://github.com/watsum08/ameliasbnb-ch"
                demoHref="https://swissalgobots.vercel.app"
                imgHref="static/img/portfolio/swissalgobots.jpeg"
                inProgress
                isPrivate
                color={colorMode === "dark" ? "black" : "white"}
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Box>
    </Section>
  );
};

export default PortfolioSection;
