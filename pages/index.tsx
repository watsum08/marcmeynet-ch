import Head from "next/head";
import LandingSection from "../layout/LandingSection";
import AboutMeSection from "../layout/AboutMeSection";
import ToolsSection from "../layout/ToolsSection";
import PortfolioSection from "../layout/PortfolioSection";
import ContactSection from "../layout/ContactSection";
import ReactPageScroller from "react-page-scroller";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number | undefined>(0);
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

  const handlePageChange = (num: number) => {
    setCurrentPage(num);
  };

  const [blockScroll, setBlockScroll] = useState(false);

  useEffect(() => {
    console.log("----------------");
    console.log("Developed with ❤️");
    console.log("By Marc Meynet 🤓");
    console.log("----------------");

    let browserLang = window.navigator.language;

    if (browserLang.includes("fr" || "FR")) {
      setLanguage("fr");
    } else {
      setLanguage("en");
    }
  }, []);

  const [language, setLanguage] = useState<"en" | "fr">("en");

  const siteUrl = "https://marcmeynet.ch";
  const router = useRouter();

  const cleanPath = router.asPath.split("#")[0].split("?")[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === "/" ? "" : cleanPath);

  return (
    <>
      <Head>
        <title>Marc Meynet</title>
        <meta name="description" content="Marc Meynet's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main>
        <ReactPageScroller
          animationTimer={300}
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          handleScrollUnavailable={() => console.log("scroll unavilable")}
          onBeforePageScroll={() => console.log(currentPage)}
          /* I CAN TRY FIXING THE NEGATIVE CURRENTPAGE MOUSE SCROLL ISSUE BY BLOCKING SCROLL
          WHILE THE NEXT PAGE IS NOT COMPLETELY LOADED MAYBE WITH A TIMEOUT?,
          I SUPPOSE IT HAS SOMETHING TO DO WITH THE USEINVIEW ANIMATIONS
          CHECK blockScrollDown, blockScrollUp, onBeforePageScroll*/
          blockScrollDown={blockScroll}
          blockScrollUp={blockScroll}
        >
          <LandingSection
            setScrollToPage={handlePageChange}
            colorMode={colorMode}
            setColorMode={setColorMode}
            setBlockScroll={setBlockScroll}
            setLanguage={setLanguage}
            language={language}
          />

          <AboutMeSection
            colorMode={colorMode}
            setScrollToPage={handlePageChange}
            language={language}
          />

          <ToolsSection colorMode={colorMode} language={language} />

          <PortfolioSection
            colorMode={colorMode}
            setBlockScroll={setBlockScroll}
            language={language}
          />

          <ContactSection
            colorMode={colorMode}
            setScrollToPage={handlePageChange}
            language={language}
          />
        </ReactPageScroller>
      </main>
    </>
  );
}
