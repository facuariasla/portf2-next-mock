import { extendTheme } from "@chakra-ui/react";

export const theme = {
  styles: {
    global: (props:any) => ({
      'html, body': {
        backgroundColor: props.colorMode ==='dark'? '#FFC700' : '#FFC700',        
        color: props.colorMode === 'dark' ? 'black' : 'black',
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
    }),
  },
   breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
};
