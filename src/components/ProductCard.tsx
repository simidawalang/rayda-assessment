import { Box } from "@mui/material";

type ProductCardProps = {
  id?: number | string;
  name?: string;
  title?: string;
  bid?: string;
  image?: string;
};

export const ProductCard = ({
  id,
  name,
  title,
  bid,
  image,
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
    </Box>
  );
};
