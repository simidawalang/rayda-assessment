import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import {
  CardsContainer,
  ProductCard,
  WhiteButton,
  LoadingState,
} from "../components";
import { getProducts } from "../redux/products/productSlice";
import { AppDispatch } from "../redux/store";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <Box
      sx={{
        padding: "1rem",
        border: "1px solid #EAECF0",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        borderRadius: "12px",
      }}
    >
      <Box sx={{ borderBottom: "1px solid #EAECF0", paddingBottom: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            Featured Items
          </Typography>
          <WhiteButton>View Auction</WhiteButton>
        </Box>
      </Box>
      {products.loading && <LoadingState />}
      {!products.loading && products?.products?.data?.length !== 0 && (
        <CardsContainer>
          {products?.products?.data?.map(
            ({ name, title, bid, image }: any, i: any) => (
              <ProductCard
                key={i}
                name={name}
                title={title}
                image={image}
                bid={bid}
              />
            )
          )}
        </CardsContainer>
      )}
    </Box>
  );
};
