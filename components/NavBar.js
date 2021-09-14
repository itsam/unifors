import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Logo } from "./Logo";
import { useRouter } from "next/router";

const NavLink = (props) => {
  return (
    <NextLink passHref href={props.href}>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.300", "gray.800"),
        }}
      >
        {props.title}
      </Link>
    </NextLink>
  );
};

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const Links = [
    // { title: "Home", href: "/" },
    // { title: "About UNIFORS", href: "/projects" },
  ];

  return (
    <Box
      px={4}
      // bg={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close Menu" : "Show Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
        /> */}
        <HStack spacing={8} alignItems={"center"}>
          <Logo height="30" />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.title} href={link.href} title={link.title} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <DarkModeSwitch color={"current"} colorScheme={"blue"} />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.title} href={link.href} title={link.title} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
