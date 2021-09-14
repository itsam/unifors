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
  // colors: {
  //   pale5: "#E7EDEC",
  //   feature1color: "#F0FFF4",
  //   feature2color: "#E3F4F2",
  //   feature3color: "#E9F1EE",
  //   feature4color: "#DCEDE9",
  //   activeLight: "#dddfe2",
  //   hoverLight: "#ebedf0",
  //   stronggreen: "#2A5637",
  //   herogreen: "#558A5F",
  //   activeDark: "#292f3d",
  //   hoverDark: "#2f3544",
  // },
};

const theme = extendTheme(custom);
export default theme;
