import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise?.id}`}>
      <section className="h-[200px] w-[300px] border-t-[2px] border-red-500 p-2 lg:h-[350px] lg:w-[400px]">
        <section className="flex items-center justify-center">
          <img
            className="h-[100px] w-[100px] lg:h-[250px] lg:w-[250px]"
            src={exercise?.gifUrl}
            alt={exercise?.name}
            loading="lazy"
          />
        </section>
        <section className="flex flex-col pl-[4px]">
          <section className="flex gap-2 pt-[15px]">
            <button className="rounded-xl bg-orange-400 p-2 text-[14px] font-medium capitalize text-white">
              {exercise?.bodyPart}
            </button>
            <button className="rounded-xl bg-orange-400 p-2 text-[14px] font-medium capitalize text-white">
              {exercise?.target}
            </button>
          </section>
          <p className="inline pt-[10px] text-[14px] font-medium capitalize text-[#000] lg:text-[20px]">
            {exercise?.name.slice(0, 60)}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default ExerciseCard;
