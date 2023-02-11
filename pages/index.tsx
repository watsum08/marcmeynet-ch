import Head from "next/head";
import LandingSection from "../layout/LandingSection";
import AboutMeSection from "../layout/AboutMeSection";
import ToolsSection from "../layout/ToolsSection";
import PortfolioSection from "../layout/PortfolioSection";
import ContactSection from "../layout/ContactSection";
import ReactPageScroller from "react-page-scroller";

import { useState } from "react";

export default function Home() {
  const [scrollToPage, setScrollToPage] = useState(0);
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

  return (
    <>
      <Head>
        <title>Marc Meynet</title>
        <meta name="description" content="Marc Meynet's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <main>
        <ReactPageScroller animationTimer={500} customPageNumber={scrollToPage}>
          <LandingSection
            setScrollToPage={setScrollToPage}
            colorMode={colorMode}
            setColorMode={setColorMode}
          />

          <AboutMeSection
            colorMode={colorMode}
            setScrollToPage={setScrollToPage}
          />

          <ToolsSection colorMode={colorMode} />

          <PortfolioSection colorMode={colorMode} />

          <ContactSection
            colorMode={colorMode}
            setScrollToPage={setScrollToPage}
          />
        </ReactPageScroller>
      </main>
    </>
  );
}
