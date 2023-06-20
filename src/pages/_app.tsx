import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <ChakraProvider>
      <Component {...restPageProps} />
    </ChakraProvider>
  );
}
