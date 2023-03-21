import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { loadingSpinner } from "../assets";
import { CardsContainer, CustomButton } from "../components";

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
    //setLoadingContent(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      Home
      {loadingContent && (
        <Box>
          <img src={loadingSpinner} alt="Loading" />
          <Typography>Loading...</Typography>
        </Box>
      )}
      <CardsContainer>
        {products.map(({ name, title, bid, image }, i) => (
          <Box
            key={i}
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
              sx={{ padding: "0.5rem 0", borderBottom: "1px solid #EAECF0" }}
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
                    {name[0]}
                  </Box>
                  <span className="name">{name}</span>{" "}
                  <span className="highest-bidder">
                    &#40;Higest Bidder&#41;
                  </span>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "1rem",
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
            
              </Typography>
            </Box>

            <CustomButton sx={{ width: "100%", marginTop: "1rem" }}>
              Add to wishlist
            </CustomButton>
          </Box>
        ))}
      </CardsContainer>
    </Box>
  );
};
