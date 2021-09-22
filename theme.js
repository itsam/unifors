import { extendTheme } from "@chakra-ui/react";

const custom = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
};

const theme = extendTheme(custom);
export default theme;
