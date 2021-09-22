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
        <Text px="10" pb="5" fontSize="sm" textAlign="center">
          The European Commission&apos;s support for the production of this
          publication does not constitute an endorsement of the contents, which
          reflect the views only of the authors, and the Commission cannot be
          held responsible for any use which may be made of the information
          contained therein.
        </Text>
        <Text p={6} fontSize={"sm"} textAlign={"center"}>
          <strong>Project ID: 2018-1-PL01-KA203-050809</strong> co-funded by the
          Erasmus+ Programme of the European Union
        </Text>
      </Box>
    </Box>
  );
};
