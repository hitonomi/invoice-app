import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { getTheme } from "@/base/config/theme/themeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
