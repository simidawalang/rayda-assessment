import { Typography, Box } from "@mui/material";
import { bellIcon } from "../../assets";

export const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 0",
        borderBottom: "1px solid #EAECF0",
        marginBottom: "2rem",
        position: "sticky",
        top: "0",
        background: "#fff",
        zIndex: "10",
      }}
    >
      <Box>
        <Typography component="h1" sx={{ fontSize: "30px", fontWeight: "600" }}>
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
  );
};
