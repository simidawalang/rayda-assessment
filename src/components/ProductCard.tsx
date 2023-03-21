import { Box, Typography } from "@mui/material";
import { BlueButton } from "./CustomButtons";

type ProductCardProps = {
  id?: string;
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
    const nameInitials = name?.split(" ");
  return (
    <Box
      key={id}
      sx={{
        border: "1px solid #D0D5DD",
        borderRadius: "12px",
        padding: "1rem",
        "& img": {
          width: "100%",
          height: "132px",
          borderRadius: "12px",
        },
      }}
    >
      <img src={image} alt={name} />
      <Box
        sx={{
          padding: "0.5rem 0",
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <Box sx={{ marginBottom: "1rem" }}>
          <Box
            sx={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              "& .name": { fontWeight: "600", marginLeft: "0.5rem" },
              "& .highest-bidder": {
                fontWeight: "400",
                color: "#a5adbe",
                marginLeft: "0.25rem",
              },
            }}
          >
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#F2F4F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "500",
                color: "#475467",
              }}
            >
              {nameInitials && `${nameInitials[0][0]}${nameInitials[1][0]}`}
            </Box>
            <span className="name">{name}</span>{" "}
            <span className="highest-bidder">&#40;Higest Bidder&#41;</span>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "0.75rem",height: "40px"
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            "& span": { color: "#344054" },
          }}
        >
          <span>Current Bid: </span>
          {bid}
        </Typography>
      </Box>

      <BlueButton sx={{ marginTop: "1rem", width: "100%" }}>
        Add to wishlist
      </BlueButton>
    </Box>
  );
};
