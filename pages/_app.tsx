import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout/Layout';
import theme from '../utils/theme';

function Newv({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Newv;