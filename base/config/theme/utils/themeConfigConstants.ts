import { PaletteOptions } from "@mui/material";

const THEME_BASE_PALETTE: PaletteOptions = {
  primary: {
    "900": "#0C0E16",
    "800": "#141625",
    "700": "#1E2139",
    "600": "#252945",
    main: "#7C5DFA",
    "400": "#9277FF",
    "300": "#7E88C3",
    "200": "#DFE3FA",
  },
  info: {
    main: "#888EB0",
  },
  secondary: { main: "#1E2139" },
  error: { main: "#EC5757", "400": "#9277FF" },
};

export const THEME_LIGHT_MODE: PaletteOptions = {
  text: { primary: "#0C0E16", disabled: "#7E88C3" },
  background: { default: "#F8F8FB", paper: "#F8F8FB" },
  ...THEME_BASE_PALETTE,
};

export const THEME_DARK_MODE: PaletteOptions = {
  text: { primary: "#FFFFFF", disabled: "#DFE3FA" },
  background: { default: "#141625", paper: "#141625" },
  ...THEME_BASE_PALETTE,
};
