import Head from "next/head";
import LandingSection from "../layout/LandingSection";
import Header from "../components/Header";
import AboutMeSection from "../layout/AboutMeSection";
import SkillsSection from "../layout/SkillsSection";
import PortfolioSection from "../layout/PortfolioSection";
import ContactSection from "../layout/ContactSection";

export default function Home() {
  /*const [bodyColor, setBodyColor] = useState("hsl(0 , 0, 0%)");*/

  return (
    <>
      <Head>
        <title>Marc Meynet</title>
        <meta name="description" content="Marc Meynet's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <LandingSection />

        <AboutMeSection />

        <SkillsSection />

        <PortfolioSection />

        <ContactSection />
      </main>
    </>
  );
}
