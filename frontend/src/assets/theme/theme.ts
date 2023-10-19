export const theme = {
  colors: {
    lightBrown: '#983a42',
    lightGrey: '#e6e6e6',
    darkGrey: '#b0b0b0',
  },
};

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
