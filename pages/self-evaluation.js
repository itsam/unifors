import Head from "next/head";
import { useRouter } from "next/router";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Container, Stack, Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { SurveyPage } from "../components/SurveyPage";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>UNIFORS Self Evaluation Survey</title>
      </Head>
      <NavBar />
      <SkipNavContent id="skip-nav"></SkipNavContent>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 18 }}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            leftIcon={<ArrowLeftIcon h={4} w={4} />}
            onClick={() => router.push("/")}
          >
            Back to case studies
          </Button>
        </Stack>
        <SurveyPage type="selfEvaluation" />
      </Container>
      <Footer />
    </>
  );
}
