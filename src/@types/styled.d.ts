import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    dark: boolean;
    spacing?: {
      tiny: number;
      small: number;
      base: number;
      large: number;
      extraLarge: number;
    };
    colors: {
      primary: string;
      secondary: string;
      secondaryLight: string;
      text: string;
      background: string;
      secondaryBackground: string;
      border: string;
    };
    typography: {
      fontFamily: {
        light: string;
        medium: string;
        regular: string;
        semiBold: string;
        bold: string;
        extraBold: string;
      };
      sizes: {
        h1: {
          size: number;
          lineHeight: number;
        };
        h2: {
          size: number;
          lineHeight: number;
        };
        h3: {
          size: number;
          lineHeight: number;
        };
        large: {
          size: number;
          lineHeight: number;
        };
        regular: {
          size: number;
          lineHeight: number;
        };
        small: {
          size: number;
          lineHeight: number;
        };
      };
    };
  }
}
