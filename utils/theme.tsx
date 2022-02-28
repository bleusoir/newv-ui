import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '400',
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        fontWeight: '400',
      },
    },
  },
  fonts: {
    heading: `Montserrat, ${theme.fonts?.heading}`,
    body: `Work Sans, ${theme.fonts?.body}`,
    mono: `Montserrat, ${theme.fonts?.mono}`,
  },
});