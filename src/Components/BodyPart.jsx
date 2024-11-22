import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: {
              md: "100px",
              lg: "200px",
            },
            height: {
              md: "100px",
              lg: "200px",
            },
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: {
              md: "100px",
              lg: "200px",
            },
            height: {
              md: "100px",
              lg: "200px",
            },
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "80px", height: "80px" }} />
    <Typography
      sx={{
        fontSize: {
          md: "12px",
          lg: "24px",
        },
      }}
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
