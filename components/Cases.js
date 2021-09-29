import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { DownloadIcon } from "@chakra-ui/icons";

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
    brief: (
      <>
        <Text pt="10">
          Supporting Prayon&apos;s staff in the digital transformation by
          drawing up an inventory of individual digital skills and by organizing
          training adapted to each one to reach the expected level. This
          involves changing the culture and raising staff awareness of the
          challenges of this essential change. Prayon wants to implement a
          policy to avoid, as much as possible, the digital split.
        </Text>

        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={10}
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/prayon/Prayon_description.xlsx"
            )
          }
        >
          Download full description
        </Button>
      </>
    ),
    contact: (
      <Text fontWeight="bold" mt="5">
        Contact person: Philippe Bertin, PBertin@prayon.com
      </Text>
    ),
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
    brief: (
      <>
        <Text pt="10">
          Untill August 2020, Technifutur&apos;s HR department was specially
          dedicated to the payroll and administrative stuff with very limited
          activities in soft HR. Our HR Director wants to develop the missing
          soft domains such as recruitment &amp; selection, on-boarding,
          learning &amp; development, social relationships, employee value
          proposition etc., based on DiSC model®
        </Text>

        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={10}
          w="xs"
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/technifutur/Technifutur_case_study_description.docx"
            )
          }
        >
          Download full description
        </Button>
        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={2}
          w="xs"
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/technifutur/Technifutur_presentation.pdf",
              "_blank"
            )
          }
        >
          Download Technifutur presentation
        </Button>
      </>
    ),
    contact: (
      <Text fontWeight="bold" mt="5">
        Contact person: Carole Demoulin, carole.demoulin@technifutur.be
      </Text>
    ),
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
    brief: (
      <>
        <Text pt="10">
          DHL wants to improve employee experience in a hybrid working set up,
          working both onsite and at home. We have the experience of working
          fully onsite and fully remotely but we also need to understand which
          challenges the hybrid model might bring along and which solutions we
          can put in place to mitigate possible issues.
        </Text>
        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={10}
          w="xs"
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/dhl/DHL_case_study_description.docx"
            )
          }
        >
          Download full description
        </Button>
        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={2}
          w="xs"
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/dhl/DHL_presentation.pptx"
            )
          }
        >
          Download DHL presentation
        </Button>
      </>
    ),
    contact: (
      <Text fontWeight="bold" mt="5">
        Contact person: Cindy Muyters, Cindy.Muyters@dhl.com
      </Text>
    ),
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
    brief: (
      <>
        <Text pt="10">
          Gaming1 allows up to 50% remote working and have several tools to
          allow its employess to stay connected. Often,we organize as many
          social events as possible (BBQ - Teambuilding - Afterwork) so we can
          get together, but how can we strenghen the sense of belonging to the
          company among 450 employees in a hybrid workstyle?
        </Text>
        <Button
          rounded={"full"}
          fontWeight={"normal"}
          px={6}
          mt={10}
          w="xs"
          rightIcon={<DownloadIcon h={4} w={4} />}
          onClick={() =>
            window.open(
              "https://infalia.com/unifors_files/case-studies/gaming1/Gaming1_presentation.pptx"
            )
          }
        >
          Download presentation (~70MB)
        </Button>
      </>
    ),
    contact: (
      <Text fontWeight="bold" mt="5">
        Contact person: Adrien Ludovico, adrien.ludovico@gaming1.com
      </Text>
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
