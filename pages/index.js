import Head from "next/head";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIP in Liège</title>
      </Head>
      <NavBar />
      <SkipNavContent id="skip-nav"></SkipNavContent>
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </>
  );
}
