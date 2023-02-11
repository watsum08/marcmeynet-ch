import Head from "next/head";
import LandingSection from "../layout/LandingSection";
import AboutMeSection from "../layout/AboutMeSection";
import ToolsSection from "../layout/ToolsSection";
import PortfolioSection from "../layout/PortfolioSection";
import ContactSection from "../layout/ContactSection";
import ReactPageScroller from "react-page-scroller";

import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number | undefined>(0);
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

  const handlePageChange = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <>
      <Head>
        <title>Marc Meynet</title>
        <meta name="description" content="Marc Meynet's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <main>
        <ReactPageScroller
          animationTimer={300}
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          handleScrollUnavailable={() => console.log("scroll unavilable")}
          onBeforePageScroll={() => console.log(currentPage)}
          block
          /* I CAN TRY FIXING THE NEGATIVE CURRENTPAGE MOUSE SCROLL ISSUE BY BLOCKING SCROLL
          WHILE THE NEXT PAGE IS NOT COMPLETELY LOADED MAYBE WITH A TIMEOUT?,
          I SUPPOSE IT HAS SOMETHING TO DO WITH THE USEINVIEW ANIMATIONS
          CHECK blockScrollDown, blockScrollUp, onBeforePageScroll*/
        >
          <LandingSection
            setScrollToPage={handlePageChange}
            colorMode={colorMode}
            setColorMode={setColorMode}
          />

          <AboutMeSection
            colorMode={colorMode}
            setScrollToPage={handlePageChange}
          />

          <ToolsSection colorMode={colorMode} />

          <PortfolioSection colorMode={colorMode} />

          <ContactSection
            colorMode={colorMode}
            setScrollToPage={handlePageChange}
          />
        </ReactPageScroller>
      </main>
    </>
  );
}
