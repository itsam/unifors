import React from "react";
import {
  Box,
  Image,
  Center,
  Container,
  Button,
  Stack,
  Text,
  Flex,
  Avatar,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
// import Image from "next/image";
import { DownloadIcon } from "@chakra-ui/icons";

import { Card } from "./Card";
import { useRouter } from "next/router";

const data = [
  {
    name: "Afelio",
    image: (
      <Image
        src="/images/afelio_logo.png"
        // width={118}
        // height={160}
        alt="Afelio logo"
      />
    ),
    description: "Together, let's build your digital experiences",
    num: "01",
    link: "https://afelio.be/",
    brief: (
      <>
        <Text pt="10">
          Since 2013, Afelio, a subsidiary of the NRB group, has been recognized
          as a visionary player who maximizes technological opportunities in
          order to design solutions that improve the quality of life of users.
          In order to support our customers in a constantly changing
          environment, we build digital, tailor-made, innovative experiences
          that meet the needs of their users. For this, in an agile and creative
          dynamic, our passionate team positions itself with pride as a trusted
          partner, guarantor of quality.
        </Text>
        <Center>
          <Button
            colorScheme="green"
            rounded={"full"}
            fontWeight={"normal"}
            px={6}
            mt={10}
            rightIcon={<DownloadIcon h={4} w={4} />}
            onClick={() => window.open("/files/afelio_case_study.pptx")}
          >
            Download case study presentation (pptx)
          </Button>
        </Center>
      </>
    ),
    contact: (
      <Box pt="10">
        <Flex gap="2" alignContent="center">
          <Avatar
            size="lg"
            name="Julien Houbrechts"
            src="/images/afelio_repr.jpg"
          />
          <Text pl="4" mt="2">
            <b>Contact person:</b> Julien Houbrechts
            <br />
            <b>e-mail:</b> j.houbrechts@afelio.be
          </Text>
        </Flex>
      </Box>
    ),
  },
  {
    name: "Brunswick",
    image: (
      <Image
        src="/images/brunswick_logo.png"
        // width={247}
        // height={160}
        alt="Brunswick logo"
      />
    ),
    description: "Next never rests",
    num: "02",
    link: "https://www.brunswick.com",
    brief: (
      <>
        <Text pt="10">
          Brunswick is the global leader in marine recreation, delivering
          innovation that transforms experiences on the water and beyond. Our
          unique, technology-driven solutions are informed and inspired by deep
          consumer insights and powered by our belief that “Next Never Rests™”.
          Brunswick is home to more than 60 industry-leading brands. In the
          category of Marine Propulsion, these brands include, Mercury Marine,
          Mercury Racing and MerCruiser. Brunswick’s comprehensive collection of
          parts, accessories, distribution, and technology brands includes
          Mercury Parts & Accessories, Land ‘N’ Sea, Lowrance, Simrad, B&G,
          Mastervolt, RELiON, Attwood and Whale.
        </Text>
        <Center>
          <Button
            colorScheme="green"
            rounded={"full"}
            fontWeight={"normal"}
            px={6}
            mt={10}
            rightIcon={<DownloadIcon h={4} w={4} />}
            onClick={() => window.open("/files/brunswick_case_study.pdf")}
          >
            Download case study presentation (pdf)
          </Button>
        </Center>
      </>
    ),
    contact: (
      <Box pt="10">
        <Flex gap="2" alignContent="center">
          <Avatar
            size="lg"
            name="Emrah Yumusak"
            src="/images/brunswick_repr.jpg"
          />
          <Text pl="4" mt="2">
            <b>Contact person:</b> Emrah Yumusak
            <br />
            <b>e-mail:</b> Emrah.yumusak@brunswick.com
          </Text>
        </Flex>
      </Box>
    ),
  },
  {
    name: "EVS",
    image: <Image src="/images/evs_logo.png" alt="EVS logo" />,
    description: "We create return on emotion",
    num: "03",
    link: "https://evs.com",
    brief: (
      <>
        <Text pt="10">
          Globally recognized as the leader in live video technology for
          broadcast and new media productions, our passion and purpose are to
          help our customers craft compelling stories that trigger the highest
          return on emotion. Our comprehensive range of solutions enables media
          companies and content creators to deliver the most gripping live
          sports images, buzzing entertainment shows and breaking news content
          to billions of viewers every day – and in real-time.
        </Text>
        <Center>
          <Button
            colorScheme="green"
            rounded={"full"}
            fontWeight={"normal"}
            px={6}
            mt={10}
            rightIcon={<DownloadIcon h={4} w={4} />}
            onClick={() => window.open("/files/evs_case_study.pptx")}
          >
            Download case study presentation (pptx)
          </Button>
        </Center>
      </>
    ),
    contact: (
      <Box pt="10">
        <Flex gap="2" alignContent="center">
          <Avatar size="lg" name="Dounia Czorniak" src="/images/evs_repr.png" />
          <Text pl="4" mt="2">
            <b>Contact person:</b> Dounia Czorniak
            <br />
            <b>e-mail:</b> D.czorniak@evs.com
          </Text>
        </Flex>
      </Box>
    ),
  },
  {
    name: "VentureLab",
    image: (
      <Box>
        <Image
          src="/images/venturelab_logo.png"
          // width={320}
          // height={100}
          alt="VentureLab logo"
        />
      </Box>
    ),
    description: "Youth Entrepreneurship for Change",
    num: "04",
    link: "https://www.venturelab.be",
    brief: (
      <>
        <Text pt="10">
          VentureLab is the first incubator in French Speaking Belgium for
          student entrepreneurs and young graduates. Our mission is to encourage
          the creation of companies by students and young graduates of the
          Liège-Luxembourg academic hub, while respecting their life path. At
          VentureLab we dream of building a more serene world to pass on to
          future generations.
        </Text>
        <Center>
          <Button
            colorScheme="green"
            rounded={"full"}
            fontWeight={"normal"}
            px={6}
            mt={10}
            rightIcon={<DownloadIcon h={4} w={4} />}
            onClick={() => window.open("/files/ventureLab_case_study.pdf")}
          >
            Download case study presentation (pdf)
          </Button>
        </Center>
      </>
    ),
    contact: (
      <Box pt="10">
        <Flex gap="2" alignContent="center">
          <Avatar
            size="lg"
            name="Marine Ledoyen"
            src="/images/venturelab_repr.png"
          />
          <Text pl="4" mt="2">
            <b>Contact person:</b> Marine Ledoyen
            <br />
            <b>e-mail:</b> marine.ledoyen@venturelab.be
          </Text>
        </Flex>
      </Box>
    ),
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
              brief={caseStudy.brief}
              contact={caseStudy.contact}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
