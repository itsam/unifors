import {
  chakra,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { Cases } from "./Cases";
import { DownloadIcon } from "@chakra-ui/icons";

export const Features = () => {
  return (
    <>
      <Stack spacing={4} as={Container} maxW={"4xl"} textAlign={"center"}>
        <Heading as="h2" fontSize={"4xl"}>
          Ready to dive in?
        </Heading>
        <Center>
          <Button
            w="lg"
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            rightIcon={<DownloadIcon h={4} w={4} />}
            onClick={() =>
              window.open(
                "https://infalia.com/unifors_files/UNIFORS_ISPS_Programme.pdf",
                "_blank"
              )
            }
          >
            Download the official agenda
          </Button>
        </Center>
        <Text
          color={useColorModeValue("gray.600", "white")}
          fontSize={"xl"}
          fontWeight="bold"
          pt="20"
        >
          Familiarise yourself with the four business case studies
        </Text>
      </Stack>
      <Cases />
    </>
  );
};
