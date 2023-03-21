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
        gap: "1rem",
        gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
      }}
    >
      {children}
    </Box>
  );
};
