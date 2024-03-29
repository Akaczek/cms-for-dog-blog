export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightBrown: '#983a42',
    lightGrey: '#e6e6e6',
    grey: '#b0b0b0',
    darkGrey: '#333333',
    lightBeige: '#f7f7f4',
    red: '#ff0000',
    darkerRed: '#e60000',
    orange: '#fe9315',
    darkerOrange: '#e67e00',
    blue: '#4f7df5',
    transparentBlack: 'rgba(0, 0, 0, 0.5)',
  },
};

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
