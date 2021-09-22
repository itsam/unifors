import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Button,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

export const Card = (props) => {
  return (
    <Center py={[6, 0]}>
      <Box
        maxW={"md"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        borderColor={useColorModeValue("gray.200", "gray.800")}
        borderWidth={1}
        rounded="xl"
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={useColorModeValue("blue.50", "gray.700")}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          pt={6}
        >
          <Center>{props.image}</Center>
        </Box>
        <Stack>
          <Text
            color={useColorModeValue("blue.800", "blue.100")}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Case study: {props.num}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            noOfLines={1}
          >
            {props.name}
          </Heading>
          <Box h={"50px"}>
            <Text color={useColorModeValue("gray.600", "white")} noOfLines={2}>
              {props.description}
            </Text>
          </Box>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Text fontSize="xs">
            <a target="_blank" href={props.link} rel="noopener noreferrer">
              Visit the official site
            </a>
          </Text>

          <Spacer />
          <Box align="right">
            <Button
              aria-label={`Open case study: ${props.name}`}
              variant="outline"
              size="sm"
            >
              See case study
            </Button>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};
