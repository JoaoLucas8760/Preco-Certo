declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      gray_100: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
  }
}

export default {
  COLORS: {
    gray_100: "#FFFFFF",
  },
  FONT_FAMILY: {
    REGULAR: "Roboto_400Regular",
    BOLD: "Roboto_700Bold",
  },
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
  },
};
