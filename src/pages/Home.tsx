import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardsContainer, CustomButton } from "../components";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const {
      data: { data },
    } = await axios.get(
      "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
    );

    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      Home
      <CardsContainer>
        {products.map(({ name, bid, image }, i) => (
          <Box
            key={i}
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
            <img src={image} alt={name}/>
            <CustomButton sx={{ width: "100%" }}>Add to whishlist</CustomButton>
          </Box>
        ))}
      </CardsContainer>
    </Box>
  );
};
