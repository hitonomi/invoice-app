import { ReactNode } from "react";
import { Box } from "@mui/material";

import { NavBar } from "@/modules/layout/components/navBar/navBar";

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    }}
  >
    <NavBar>asd</NavBar>

    {children}
  </Box>
);
