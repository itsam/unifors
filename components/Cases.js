import React from "react";
import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import { Card } from "./Card";
import { useRouter } from "next/router";

const data = [
  {
    name: "Prayon",
    image: (
      <Image
        src="/images/prayon.svg"
        width={118}
        height={160}
        alt="Prayon logo"
      />
    ),
    description: "Enriching daily life through phosphorus chemistry",
    num: "01",
    link: "https://www.prayon.com/en",
  },
  {
    name: "Technifutur",
    image: (
      <Image
        src="/images/technifutur.png"
        width={247}
        height={160}
        alt="Technifutur logo"
      />
    ),
    description: "Competence Centre",
    num: "02",
    link: "https://technifutur.be",
  },
  {
    name: "DHL",
    image: (
      <Box pt="50px">
        <Image src="/images/dhl.png" width={500} height={69} alt="DHL logo" />
      </Box>
    ),
    description: "Easy worldwide shipping",
    num: "03",
    link: "https://www.dhlexpress.be/en/",
  },
  {
    name: (
      <Text>
        Gaming <sup>1</sup>
      </Text>
    ),
    image: (
      <Box pt="30px">
        <Image
          src="/images/gaming1.svg"
          width={320}
          height={100}
          alt="Gaming1 logo"
        />
      </Box>
    ),
    description: "Leader in the Belgian gaming market",
    num: "04",
    link: "https://www.gaming1.com/en/",
  },
];

export const Cases = () => {
  const router = useRouter();
  const textColor = useColorModeValue("blue.600", "gray.300");
  const buttonColor = useColorModeValue("stronggreen", "gray.300");
  const hover = useColorModeValue({ bg: "palegreen" }, { bg: "gray.700" });
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <SimpleGrid columns={[1, 1, 2]} spacing={[1, 10, 28]}>
          {data.map((caseStudy, idx) => (
            <Card
              key={idx}
              name={caseStudy.name}
              image={caseStudy.image}
              description={caseStudy.description}
              num={caseStudy.num}
              link={caseStudy.link}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
