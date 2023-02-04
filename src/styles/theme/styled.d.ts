import type { Dark } from './theme';

declare module 'styled-components' {
  type CustomTheme = typeof Dark;
  export interface DefaultTheme extends CustomTheme {}
}
