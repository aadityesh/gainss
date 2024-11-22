import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
// import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <section className="grid grid-cols-2 grid-rows-2 gap-5 pt-[10px] md:grid-cols-4 md:grid-rows-3">
    {data.map((item) => (
      <Box key={item.id || item} title={item.id || item} m="0 40px">
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </section>
);

export default HorizontalScrollbar;
