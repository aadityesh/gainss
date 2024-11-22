import React, { useState } from "react";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div className="p-2">
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
