import React from 'react';
import { Button, Center, Container, Heading } from '@chakra-ui/react';

function RestIndexPage() {

  return (
    <Container>
      <Center h='100px'>
        <Heading>API page now working on...</Heading>
      </Center>
      <Center>
        <Button as='a' href='/'>Back</Button>
      </Center>
    </Container>
  );
}

// noinspection JSUnusedGlobalSymbols
export default RestIndexPage;