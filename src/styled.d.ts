// TypeScript definitions for styled-components can be extended by using declaration merging
// import original module declarations
import 'styled-components';

// Then you can extend them
// DefaultTheme is being used as an interface of props.theme out of the box.
// By default the DefaultTheme interface is empty - so thats why we need to extend it.
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      textColor: string;
      inactive: string;
      borderColor: string;
    };
  }
}
