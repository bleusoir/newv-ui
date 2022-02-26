/* eslint-disable max-len */
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { ReactNode } from 'react';

const Links = ['HOME', 'API'];

function NavLink({ children }: { children: ReactNode }) {

  return (<Link
    href={children === 'HOME' ? '/' : 'rest'}
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

export default function Nav() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label='Open Menu'
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems='center'>
          <Box>
            <LinkBox>
              <LinkOverlay href='/'>
                <svg id='newv-id' data-name='newv-logo' xmlns='http://www.w3.org/2000/svg'
                  width='129' height='43' viewBox='0 0 257 85'>
                  <defs>
                    <filter id='Newv' x='80' y='0' width='177' height='85' filterUnits='userSpaceOnUse'>
                      <feOffset dy='3' />
                      <feGaussianBlur stdDeviation='3' result='blur' />
                      <feFlood floodOpacity='0.161' />
                      <feComposite operator='in' in2='blur' />
                      <feComposite in='SourceGraphic' />
                    </filter>
                  </defs>
                  <image id='newv192' width='79' height='79'
                    xlinkHref='data:image/png;base64,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' />
                  <g transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(#Newv)'>
                    <text id='Newv-text' data-name='Newv' transform='translate(89 61)' fill='red' fontSize='55'
                      fontFamily='CenturyGothic-Bold, Century Gothic' fontWeight='700' letterSpacing='0.05em'>
                      <tspan x='0' y='0'>Newv</tspan>
                    </text>
                  </g>
                </svg>
              </LinkOverlay>
            </LinkBox>
          </Box>
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

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as='nav' spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}

    </Box>
  );
}