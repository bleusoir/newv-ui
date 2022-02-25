import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

function Home() {

  return (
    <>
      <Head>
        <title>Newv.dev</title>
        <meta
          name='description'
          content='Newv is service of new version detection and notifier for developer.'
        />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Center mt='50px'>
          <Heading size='xl'>What is Newv?</Heading>
        </Center>
        <Center mt='14px'>
          <Heading size='md' pl='10px' pr='10px'>Newv is service of new version detection and notifier for
            developer.</Heading>
        </Center>
      </Box>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Home;