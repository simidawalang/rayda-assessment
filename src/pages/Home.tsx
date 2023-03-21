import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { loadingSpinner } from "../assets";
import { CardsContainer, CustomButton, ProductCard } from "../components";

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
    <Box>
      <Box sx={{ padding: "1rem" }}>
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
          <Button
            sx={{
              color: "#344054",
              fontSize: "14px",
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              textTransform: "unset",
            }}
          >
            View Auction
          </Button>
        </Box>
      </Box>
      {loadingContent && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box>
            <img src={loadingSpinner} alt="Loading" />
            <Typography
              sx={{ textAlign: "center", fontWeight: "600", fontSize: "2rem" }}
            >
              Loading...
            </Typography>
          </Box>
        </Box>
      )}
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
