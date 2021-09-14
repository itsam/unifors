import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AboutModal } from "./AboutModal";

export const Hero = () => {
  const router = useRouter();
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            as="h1"
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("blue.100", "gray.600"),
                zIndex: -1,
              }}
            >
              Intensive Week
            </Text>
            <br />
            <Text as={"span"} color={useColorModeValue("blue.600", "gray.300")}>
              Case Studies
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.900", "gray.50")}>
            Five days (27 Sep - 01 Oct 2021) international intensive study
            programme on soft skills developement to increase collaboration
            among business and academic sector for better employment of
            university graduates through active participation in{" "}
            <strong>four real-life business case studies</strong>, in the
            context of the UNIFORS project.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <AboutModal />
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              src="/images/hero.svg"
              width={820}
              height={533}
              alt="A green city landscape"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
