import { ReactNode } from "react";
import { Box } from "@mui/material";

import { NavBar } from "@/modules/layout/components/navBar/navBar";
import { NavBarLogo } from "@/modules/layout/components/navBar/components/navBarLogo";

export const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    }}
  >
    <NavBar>
      <NavBarLogo />
    </NavBar>

    {children}
  </Box>
);
