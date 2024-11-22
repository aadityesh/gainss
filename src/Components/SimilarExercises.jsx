import React, { useState } from "react";
import { Typography, Box, Stack, Pagination } from "@mui/material";

import HorizontalScroll from "./HorizontalScroll";
import Loader from "./Loader";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const [targetMusclePage, setTargetMusclePage] = useState(1);
  const [equipmentPage, setEquipmentPage] = useState(1);
  const cardsToDisplay = 3;

  const lastIndexOfTarget = cardsToDisplay * targetMusclePage;
  const firstIndexOfTarget = lastIndexOfTarget - cardsToDisplay;

  const lastIndexOfEq = cardsToDisplay * equipmentPage;
  const firstIndexOfEq = lastIndexOfEq - cardsToDisplay;

  const similarTargetMuscle = targetMuscleExercises.slice(
    firstIndexOfTarget,
    lastIndexOfTarget,
  );

  const similarEquipment = equipmentExercises.slice(
    firstIndexOfEq,
    lastIndexOfEq,
  );

  const paginateTarget = (e, value) => {
    setTargetMusclePage(value);
  };
  const paginateEquipment = (e, value) => {
    setEquipmentPage(value);
  };

  return (
    <>
      <Box sx={{ mt: { lg: "50px", xs: "10px" } }}>
        <Typography
          sx={{ fontSize: { lg: "36px", xs: "20px" }, ml: "20px" }}
          fontWeight={700}
          color="#000"
          mb="33px"
          textAlign={"center"}
        >
          Similar{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            Target Muscle
          </span>{" "}
          exercises
        </Typography>
        <Stack sx={{ p: 2 }}>
          {targetMuscleExercises.length !== 0 ? (
            <section className="flex flex-col items-center justify-center gap-6">
              <section className="grid grid-cols-1 grid-rows-1 justify-center lg:grid-cols-3 lg:grid-rows-1 lg:gap-3">
                {similarTargetMuscle.map((value) => (
                  <ExerciseCard exercise={value} />
                ))}
              </section>
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(targetMuscleExercises.length / cardsToDisplay)}
                page={targetMusclePage}
                onChange={paginateTarget}
                size="large"
                mt="30px"
              />
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
          textAlign={"center"}
        >
          Similar{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            Equipment
          </span>{" "}
          exercises
        </Typography>
        <Stack sx={{ p: 2 }}>
          {equipmentExercises.length !== 0 ? (
            <section className="flex flex-col items-center justify-center gap-6">
              <section className="grid grid-cols-1 grid-rows-1 justify-center lg:grid-cols-3 lg:grid-rows-1 lg:gap-3">
                {similarEquipment.slice(0, 3).map((value) => (
                  <ExerciseCard exercise={value} />
                ))}
              </section>
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(equipmentExercises.length / cardsToDisplay)}
                page={equipmentPage}
                onChange={paginateEquipment}
                size="large"
                mt="30px"
              />
            </section>
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
      ;
    </>
  );
};

export default SimilarExercises;
