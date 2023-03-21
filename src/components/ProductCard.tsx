import { MouseEventHandler } from "react";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomButton";

type ProductCardProps = {
  name?: string;
  title?: string;
  bid?: string;
  image?: string;
  onClick?: MouseEventHandler;
};

export const ProductCard = ({
  name,
  title,
  bid,
  image,
  onClick,
}: ProductCardProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #D0D5DD",
        borderRadius: "12px",
        padding: "1rem",
        "& img": {
          width: "100%",
          height: "132px",
        },
      }}
    >
      <img src={image} alt={title} />
      <CustomButton onClick={onClick}>Add to wishlist</CustomButton>
    </Box>
  );
};
