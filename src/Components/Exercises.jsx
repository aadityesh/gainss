import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";
import { fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("exercises");
      } else {
        exercisesData = await fetchData(`exercises/bodyPart/${bodyPart}`);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  return (
    <>
      <div
        id="exercises"
        className="flex min-w-[75%] flex-col items-center justify-center p-[20px] lg:mt-[110px]"
      >
        {currentExercises.length > 0 && (
          <p className="mb-[46px] text-3xl font-semibold">Showing results</p>
        )}
        <section className="grid grid-cols-1 grid-rows-1 flex-wrap justify-center gap-5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
          {currentExercises?.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </section>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            mt="30px"
          />
        )}
      </div>
    </>
  );
};

export default Exercises;
