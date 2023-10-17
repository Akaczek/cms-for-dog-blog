export const theme = {
  colors: {
    lightBrown: '#983a42'
  }
}

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}