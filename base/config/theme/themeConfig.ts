import { createTheme, PaletteMode } from "@mui/material";
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
  });
