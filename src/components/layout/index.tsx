import { ReactNode } from "react";
import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Box
      sx={{
        margin: "auto",
        maxWidth: "1300px",
        padding: { xs: "0 1rem", md: "0 2rem" },
      }}
    >

    <Navbar />
    <Header />
      {children}
    </Box>
    </>
  );
};
