import { Box } from "@mui/material";
import { ReactNode } from "react";

export const NavBar = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      width: "103px",
      height: "100vh",
      borderRadius: "0px 20px 20px 0px;",
    }}
    bgcolor="primary.700"
  >
    {children}
  </Box>
);
