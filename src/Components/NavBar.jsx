import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex min-w-[100%] items-center gap-x-[120px] pl-[40px] pt-[25px]">
        <section>
          <Link to={"/"}>
            <img
              className="h-[60px] w-[60px] rounded-md shadow-md"
              src="/gains_gym_logo.jpeg"
              alt=""
            />
          </Link>
        </section>
        <section className="flex justify-around gap-10 text-[18px]">
          <Link to={"/"}>
            <p
              style={{
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "3px solid #FF2625",
              }}
            >
              Home
            </p>
          </Link>
          <a href="#exercises">
            <p>Exercises</p>
          </a>
        </section>
      </div>
    </>
  );
};

export default NavBar;
