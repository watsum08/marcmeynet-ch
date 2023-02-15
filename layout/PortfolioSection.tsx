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
  language,
}: {
  colorMode: "light" | "dark";
  setBlockScroll: (toggle: boolean) => void;
  language: string;
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

        <Text>
          {language === "en"
            ? "Drag or use mouse wheel to check all of my projects"
            : "Faites glisser ou utilisez la molette pour voir tous mes projets"}
        </Text>

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
                description={
                  language === "en"
                    ? [
                        "What you're seeing right now",
                        "Custom design",
                        "Created with Next.js in TypeScript",
                      ]
                    : [
                        "Ce que vous voyez en ce moment",
                        "Design personalisé",
                        "Créé avec Next.js en TypeScript",
                      ]
                }
                codeHref="https://github.com/watsum08/marcmeynet-ch"
                demoHref="https://www.marcmeynet.ch"
                imgHref="static/img/portfolio/marcmeynet.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="My portfolio website v.1"
                tags={["HTML", "CSS", "JavaScript"]}
                description={
                  language === "en"
                    ? [
                        "My first portfolio website",
                        "Custom design",
                        "I had a lot of fun using JavaScript",
                      ]
                    : [
                        "Mon premier site de portfolio",
                        "Design personalisé",
                        "J'ai eu beaucoup de plaisir à utiliser JavaScript",
                      ]
                }
                codeHref="https://github.com/watsum08/marcmeynet-ch/tree/v1-prod"
                demoHref="https://marc-meynet-v1.web.app"
                imgHref="static/img/portfolio/marcmeynet_v1.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Démolplus Sàrl"
                tags={["Figma", "NextJS", "JavaScript"]}
                description={
                  language === "en"
                    ? [
                        "A demolition company website",
                        "Custom design",
                        "Google SEO optimization",
                      ]
                    : [
                        "Site d'une entreprise de démolition",
                        "Design personalisé",
                        "Optimisation du référencement Google",
                      ]
                }
                codeHref="https://github.com/watsum08/demolplus-ch"
                demoHref="https://demolplus.ch"
                imgHref="static/img/portfolio/demolplus.jpeg"
                httpAlert
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="The Burger Place"
                tags={["HTML", "CSS", "JavaScript"]}
                description={
                  language === "en"
                    ? [
                        "A fictional burger place.",
                        "An HTML/CSS school project",
                        "Only web version available",
                      ]
                    : [
                        "Un burger place fictif.",
                        "Un projet d'école HTML/CSS",
                        "Seule la version Web est disponible",
                      ]
                }
                codeHref="https://github.com/watsum08/the-burger-place"
                demoHref="https://www.the-burger-place.web.app/"
                imgHref="static/img/portfolio/theburgerplace.jpeg"
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Amelia's Bed and Breakfast"
                tags={["Figma", "NextJS", "JavaScript"]}
                description={
                  language === "en"
                    ? [
                        "A bed and breakfast website",
                        "Custom design",
                        "Created in Next.js with JavaScript",
                      ]
                    : [
                        "Un site de chambres d'hôtes",
                        "Design personalisé",
                        "Créé en Next.js avec JavaScript",
                      ]
                }
                codeHref="https://github.com/watsum08/ameliasbnb-ch"
                demoHref="https://ameliasbnb.ch"
                imgHref="static/img/portfolio/ameliasbnb.jpeg"
                inProgress
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>

            <SwiperSlide>
              <PortfolioItem
                name="Swiss Algo Bots"
                tags={["NextJS", "TypeScript", "Spline"]}
                description={
                  language === "en"
                    ? [
                        "An algo-trading bot web application",
                        "NodeJS back-end",
                        "Created in Next.js with TypeScript",
                      ]
                    : [
                        "Une application web de algo-trading bot",
                        "Back-end NodeJS",
                        "Créé dans Next.js avec TypeScript",
                      ]
                }
                codeHref="https://github.com/watsum08/ameliasbnb-ch"
                demoHref="https://swissalgobots.vercel.app"
                imgHref="static/img/portfolio/swissalgobots.jpeg"
                inProgress
                isPrivate
                color={colorMode === "dark" ? "black" : "white"}
                language={language}
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Box>
    </Section>
  );
};

export default PortfolioSection;
