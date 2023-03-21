import { Box, Typography } from "@mui/material";
import { avatarImg, thumbsUpIcon } from "../../assets";
import { WhiteButton } from "../CustomButtons";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        border: "1px solid #EAECF0",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1.5rem 0",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #981ee3, #ad44f6, 60%,  #f9a773, #fee77e)",
          height: "190px",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "stretch",
          padding: "0 1rem",
          position: "relative",
          "& .avatar-img": {
            position: "absolute",
            top: "-50px",
          },
        }}
      >
        <img className="avatar-img" src={avatarImg} alt="avatar" width={144} />
        <Box
          sx={{
            display: { sm: "flex" },
            justifyContent: "space-between",
            width: "100%",
            marginLeft: { sm: "150px" },
            padding: "1rem 0",
          }}
        >
          <Box
            sx={{
              marginTop: { xs: "4.5rem", sm: "0" },
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>
              Starts in: 3 days : 2 hours : 24 minutes
            </Typography>
            <Typography sx={{ color: "#475467", fontSize: "1rem" }}>
              Layers Auction
            </Typography>
          </Box>

          <WhiteButton
            sx={{
              height: "fit-content",
              marginTop: { xs: "1rem", sm: "0" },
              display: "flex",
              gap: "0.4rem",
            }}
          >
            <img src={thumbsUpIcon} alt="accept invite" />
            Accept Invite
          </WhiteButton>
        </Box>
      </Box>
    </Box>
  );
};
