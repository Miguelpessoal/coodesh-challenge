import "styled-components";
import { defaultTheme } from "../theme/theme";

export type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
