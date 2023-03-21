import { ReactNode } from "react";
import { Box } from "@mui/material";

type ContainerProps = {
  children: ReactNode;
};

export const CardsContainer = ({ children }: ContainerProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: "1rem", md: "1.5rem" },
        gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
        marginTop: "1.5rem"
      }}
    >
      {children}
    </Box>
  );
};
