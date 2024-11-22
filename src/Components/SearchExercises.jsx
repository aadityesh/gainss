import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function fetchBodyParts() {
      const bodyPartsData = await fetchData(`exercises/bodyPartList`);
      setBodyParts(["all", ...bodyPartsData]);
    }
    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const responseData = await fetchData(`exercises?limit=1300`);
      const filteredData = responseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );
      // console.log(filteredData);
      setExercises(filteredData);
      setSearch("");
    }
  };
  return (
    <>
      <div className="mt-[50px] flex flex-col items-center justify-center gap-6">
        <section className="text-[20px] font-semibold leading-10 md:text-xl lg:text-[48px] lg:leading-[65px]">
          Popular Exercises <br /> You Should Know
        </section>

        <section className="flex w-[60%] gap-2 pt-[20px] text-[18px] md:text-[24px] lg:text-xl">
          <input
            className="flex-1 p-2 outline-none"
            placeholder="Search Exercise..."
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            value={search}
            type="text"
          />
          <button
            href="#exercises"
            onClick={handleSearch}
            className="rounded-sm border bg-[#FF2625] p-2 font-medium text-white shadow-md hover:bg-[#f96e6e]"
          >
            Search
          </button>
        </section>
        <section>
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </section>
      </div>
    </>
  );
};

export default SearchExercises;
