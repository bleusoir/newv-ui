import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Newv.dev</title>
        <meta name='description' content='Newv is service of new version detection and notifier for developer.' />
        <meta charSet='utf-8' />
        <meta property='og:title' content='Newv' />
        <meta property='og:url' content='https://www.newv.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://storage.googleapis.com/pub_bucket_1/og.png' />
        <meta property='og:image:width' content='250' />
        <meta property='og:image:height' content='250' />
        <meta
          property='og:description'
          content='Newv is service of new version detection and notifier for developer.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Center mt='50px'>
          <Heading size='xl'>What is Newv?</Heading>
        </Center>
        <Center mt='14px'>
          <Heading size='md' pl='30px' pr='30px'>
            Newv is service of new version detection and notifier for developer.
          </Heading>
        </Center>
      </Box>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Home;