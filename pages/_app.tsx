import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from './layout/Layout';
import theme from '../utils/theme';
import Fonts from '../components/Font';
import * as gtag from '../utils/gtag';

function Newv({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Newv;