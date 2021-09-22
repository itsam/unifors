import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import theme from "../theme";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/caveat/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink id="skip-nav" style={{ zIndex: 3, top: 5, left: 5 }}>
        Skip to content
      </SkipNavLink>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
