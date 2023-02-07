import { Flex, Text } from "@chakra-ui/react";
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
          spaceBetween={256}
          slidesPerView={2}
          centeredSlides
          loop
          loopedSlides={2}
        >
          <SwiperSlide>
            <PortfolioItem
              name="Amelia's Bed and Breakfast"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A bed and breakfast website.",
                "Custom design made with Figma.",
                "Created with Next.js in JavaScript.",
              ]}
              codeHref="https://github.com/watsum08/ameliasbnb-ch"
              demoHref="https://www.ameliasbnb.ch"
              imgHref="img/portfolio/ameliasbnb.jpeg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioItem
              name="Démolplus Sàrl"
              tags={["Figma", "NextJS", "JavaScript"]}
              description={[
                "A demolition company website",
                "Custom design made with Figma.",
                "Google SEO optimization",
              ]}
              codeHref="https://github.com/watsum08/demolplus-ch"
              demoHref="https://www.demolplus.ch"
              imgHref="img/portfolio/demolplus.jpeg"
              httpAlert
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
              imgHref="img/portfolio/ameliasbnb.jpeg"
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
              imgHref="img/portfolio/ameliasbnb.jpeg"
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
              imgHref="img/portfolio/ameliasbnb.jpeg"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Section>
  );
};

export default PortfolioSection;
