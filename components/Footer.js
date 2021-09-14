import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Box pt={20}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo height="25" />
        </Flex>
        <Text p={6} fontSize={"sm"} textAlign={"center"}>
          Co-funded by the Erasmus+ Programme of the European Union
        </Text>
      </Box>
    </Box>
  );
};
