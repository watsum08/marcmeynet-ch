import Head from "next/head";
import LandingSection from "../layout/LandingSection";
import Header from "../components/Header";

export default function Home() {
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
      </main>
    </>
  );
}
