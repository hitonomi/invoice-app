import { createTheme, PaletteMode } from "@mui/material";
import {} from "@mui/material/colors";
import {
  THEME_LIGHT_MODE,
  THEME_DARK_MODE,
} from "@/base/config/theme/utils/themeConfigConstants";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light" ? THEME_LIGHT_MODE : THEME_DARK_MODE),
    },
    typography: {
      // TODO: check some weird bugs with this font :/
      // fontFamily: "'League Spartan', sans-serif",
      body1: { fontSize: "12px", lineHeight: "15px" },
      body2: { fontSize: "11px", lineHeight: "18px" },
      h1: { size: "32px", lineHeight: "36px", fontWeight: "700" },
      h2: { size: "20px", lineHeight: "22px", fontWeight: "700" },
      h3: { size: "16px", lineHeight: "24px", fontWeight: "700" },
      h4: { size: "12px", lineHeight: "15px", fontWeight: "700" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "24px",
            boxShadow: "none",
          },
        },
      },
    },
  });
