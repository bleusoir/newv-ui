import React from 'react';
import { Button, Center, Container, Heading } from '@chakra-ui/react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

function RestIndexPage() {

  return (
    <>
      <Nav />
      <Container>
        <Center h='100px'>
          <Heading>API page now working on...</Heading>
        </Center>
        <Center>
          <Button as='a' href='/'>Back</Button>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default RestIndexPage;