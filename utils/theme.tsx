import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '400',
      },
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
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