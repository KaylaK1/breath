// // create a theme using DefaultTheme which we typed in styled.d.ts
import { DefaultTheme } from "styled-components";
import sourceSansPro900 from "./fonts/source-sans-pro-v21-latin-900.woff2";
import sourceSansProRegular from "./fonts/source-sans-pro-v21-latin-regular.woff2";
import sourceSansPro300 from "./fonts/sourceSansPro300.woff2";
import { url } from "inspector";

const siteTheme: DefaultTheme = {
  colors: {
    textColor: '#313131',
    inactive: '#8A8C99',
    borderColor: '#FBEE1F',
  },
  fonts: {
    largeTitle: {
      fontFamily: 'Source Sans Pro 900',
      fontSize: '1.953rem',
    },
    mediumTitle: {
      fontFamily: 'Source Sans Pro 900',
      fontSize: '1.563rem',
    },
    mediumText: {
      fontFamily: 'Source Sans Pro',
      fontSize: '1.563rem',
    },
    smallTitle: {
      fontFamily: 'Source Sans Pro 900',
      fontSize: '1rem',
    },
    bodyText: {
      fontFamily: 'Source Sans Pro',
      fontSize: '1rem',
    },
    captionText: {
      fontFamily: 'Source Sans Pro 300',
      fontSize: '1rem',
    },
  }
};

export { siteTheme };
