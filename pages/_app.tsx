import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

import { getTheme } from "@/base/config/theme/themeConfig";
import { Layout } from "@/modules/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={getTheme("light")}>
        <CssBaseline />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
