import { Typography, Box } from "@mui/material";
import { bellIcon } from "../../assets";

export const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: "0",
        padding: {xs: "0 1rem", md: "0 2rem"},
        background: "#fff",
        zIndex: "10",
        margin: "auto",
        maxWidth: "1300px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 0 1rem",
          borderBottom: "1px solid #EAECF0",
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{ fontSize: "30px", fontWeight: "600" }}
          >
            Welcome
          </Typography>
          <Typography sx={{ color: "#475467" }}>
            Your current sales auction and activity.
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img src={bellIcon} alt="notifications" />
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#F04438",
              color: "#fff",
              fontSize: "12px",
              position: "absolute",
              bottom: "-3px",
              right: "-12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
