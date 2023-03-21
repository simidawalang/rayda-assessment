import { Box, Typography } from "@mui/material";
import { loadingSpinner } from "../assets";

export const LoadingState = () => {
    return (
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
    );
}