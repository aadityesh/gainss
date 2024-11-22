import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScroll from "./HorizontalScroll";
import Loader from "./Loader";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "50px", xs: "10px" } }}>
    <Typography
      sx={{ fontSize: { lg: "36px", xs: "20px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2 }}>
      {targetMuscleExercises.length !== 0 ? (
        <section className="grid grid-cols-1 grid-rows-1 justify-center lg:grid-cols-3 lg:grid-rows-1 lg:gap-3">
          {targetMuscleExercises.slice(0, 3).map((value) => (
            <ExerciseCard exercise={value} />
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "36px", xs: "25px" },
        ml: "20px",
        mt: { lg: "50px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2 }}>
      {equipmentExercises.length !== 0 ? (
        <section className="grid grid-cols-1 grid-rows-1 justify-center lg:grid-cols-3 lg:grid-rows-1 lg:gap-3">
          {equipmentExercises.slice(0, 3).map((value) => (
            <ExerciseCard exercise={value} />
          ))}
        </section>
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
