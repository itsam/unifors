import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  createIcon,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { CheckIcon } from "@chakra-ui/icons";
import { AboutModal } from "./AboutModal";
import ReactPlayer from "react-player";

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="#9B2C2C"
    />
  ),
});

export const Hero = () => {
  const router = useRouter();
  const buttonText = useBreakpointValue({
    base: "Take the survey",
    sm: "Take the self evaluation survey first",
  });
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={2} spacing={{ base: 5, md: 10 }}>
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
                Blended Intensive Program
              </Text>
              <br />
              <Text
                as={"span"}
                color={useColorModeValue("blue.600", "gray.300")}
              >
                in Liège
              </Text>
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.50")}>
              Seven days (21 May - 27 May 2023) international intensive study
              programme on soft skills developement to increase collaboration
              among business and academic sector for better employment of
              university graduates through active participation in{" "}
              <strong>four real-life business case studies</strong>.
            </Text>
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url="/files/WEGIMONT_EDIT__EN_V2.mp4"
            />

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={["start", "center"]}
                position={"relative"}
                pt="5"
              >
                <Button
                  rounded={"full"}
                  colorScheme="red"
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  leftIcon={<CheckIcon h={4} w={4} />}
                  onClick={() => router.push("/self-evaluation")}
                >
                  {buttonText}
                </Button>
                <Box>
                  <Icon
                    as={Arrow}
                    color={useColorModeValue("gray.800", "gray.300")}
                    w={71}
                    position={"absolute"}
                    right={-71}
                    top={"50px"}
                  />
                  <Text
                    fontSize={"xl"}
                    fontFamily={"Caveat"}
                    color="red.700"
                    position={"absolute"}
                    right={"-115px"}
                    top={"25px"}
                    transform={"rotate(16deg)"}
                  >
                    for students
                  </Text>
                </Box>
              </Stack>
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
                alt="Two students studying"
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};
