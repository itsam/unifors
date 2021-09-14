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

export const Features = () => {
  return (
    <>
      <Stack spacing={4} as={Container} maxW={"4xl"} textAlign={"center"}>
        <Heading as="h2" fontSize={"4xl"}>
          Ready to dive in?
        </Heading>
        <Text color={useColorModeValue("gray.600", "white")} fontSize={"xl"}>
          Check out the four business case studies and select the one that suits
          you better
        </Text>
      </Stack>
      <Cases />
    </>
  );
};
