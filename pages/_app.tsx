import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// noinspection JSUnusedGlobalSymbols
export default MyApp;