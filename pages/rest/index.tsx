import React from 'react';
import { Heading, Center, Button } from '@chakra-ui/react';

function RestIndexPage() {
  return (
    <>
      <Center h='100px'>
        <Heading>API page now working on...</Heading>
      </Center>
      <Center>
        <Button as='a' href='/'>Back</Button>
      </Center>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default RestIndexPage;