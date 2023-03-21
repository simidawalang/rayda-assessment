import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  CardsContainer,
  ProductCard,
  WhiteButton,
  LoadingState,
} from "../components";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);

  const fetchData = async () => {
    setLoadingContent(true);
    try {
      const {
        data: { data },
      } = await axios.get(
        "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
      );

      setProducts(data);
    } catch (e) {
      console.debug(e);
    }
    setLoadingContent(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
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
      {loadingContent && <LoadingState />}
      {!loadingContent && products.length !== 0 && (
        <CardsContainer>
          {products.map(({ name, title, bid, image }, i) => (
            <ProductCard
              key={i}
              name={name}
              title={title}
              image={image}
              bid={bid}
            />
          ))}
        </CardsContainer>
      )}
    </Box>
  );
};
