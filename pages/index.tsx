import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { ReactNode } from 'react';
import Footer from '../components/Footer';

const Links = ['Home', 'API'];

function NavLink({ children }: { children: ReactNode }) {

  return (<Link
    href={children === 'Home' ? '#' : 'rest'}
    px={2}
    py={1}
    rounded='md'
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>);
}

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Newv.dev</title>
        <meta
          name='description'
          content='Newv is the platform of new version detection and notifier for developer.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <HStack spacing={8} alignItems='center'>
            <Box>Logo</Box>
            <HStack
              as='nav'
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems='center'>
            <Stack direction='row' spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <main>
        <Container minH='98vh'>
          <Center>
            <Heading size='4xl'>
              Working on...
            </Heading>
          </Center>
        </Container>
      </main>
      <Footer />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default Home;