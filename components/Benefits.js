import React from "react";

import {
  chakra,
  Text,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from "@chakra-ui/react";
export const Benefits = () => {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title}
          </Text>
          <Text mt={2} color={useColorModeValue("gray.800", "gray.200")}>
            {props.children}
          </Text>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={[0, 10, 20]}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        //shadow="xl"
        rounded="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color={useColorModeValue("blue.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Enrich your soft skills
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              //   textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Get together
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              40 hrs face to face, 35 hrs preparation and individual study at
              Haute Ecole de la Province de Liège (HEPL) in Belgium. <br />
              <br />
              Get the opportunity to discover the value of diversity, as
              different cultural backgrounds could lead to different strategies
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Problem solving competition">
                For international teams of students from 5 universities from
                Portugal, Romania, Poland, Belgium and Spain
              </Feature>
              <Feature title="Multicultural learning environment">
                Students will work in a strongly multidisciplinary group in a
                international and multicultural learning environment
              </Feature>
              <Feature title="Students approaching business">
                Multilateral learning environment combining theoritical
                knowledge with practical business cases
              </Feature>
              <Feature title="Developing competencies">
                Students are expected to make use of the competencies developed
                during soft skills training
              </Feature>
              <Feature title="Work on real business cases">
                Students will develop innovative business solutions for a
                selected company based on problem solving approach
              </Feature>
              <Feature title="Adapt to different ways of thinking">
                Students will develop their listening capacity and express their
                opinion effectively, assuming different roles in the workgroups
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
