import { Center, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Home() {

  return (
    <>
      <Head>
        <title>Newv.dev</title>
        <meta
          name='description'
          content='Newv is the platform of new version detection and notifier for developer.'
        />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Container>
        <Center h='100px'>
          <Heading>Working on...</Heading>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Home;