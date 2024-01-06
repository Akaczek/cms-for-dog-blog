export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightBrown: '#983a42',
    lightGrey: '#e6e6e6',
    grey: '#b0b0b0',
    darkGrey: '#333333',
    lightBeige: '#f7f7f4'
  },
};

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
