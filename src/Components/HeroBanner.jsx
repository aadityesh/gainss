import React from "react";

const HeroBanner = () => {
  const handleClick = () => {
    document.getElementById("exercises").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="xs:ml-[50px] xs:mt-[70px] relative lg:mt-[212px]">
        <section className="pl-[50px]">
          {" "}
          <p className="text-[30px] font-semibold text-[#FF2625]">
            Personal Fitness Club
          </p>
          <p className="xs:text-[40px] lg:text-[44px]">
            Sweat, Smile & <br />
            Exercise
          </p>
          <p className="text-[22px] leading-[32px]">
            Check out the most effective exercises
          </p>
        </section>
        <section className="pl-[50px] pt-[20px]">
          <button
            onClick={handleClick}
            className="rounded-sm bg-[#FF2625] p-2 font-medium text-white shadow-md hover:bg-[#f96e6e]"
          >
            Explore Exercises
          </button>
        </section>
        <p className="hidden pl-[100px] text-[200px] font-semibold text-[#ff2625] opacity-[0.1] lg:block">
          Exercises
        </p>
        <img
          className="absolute right-[10px] top-0 mt-[-330px] hidden h-[900px] w-[700px] lg:block"
          src="images/banner.png"
          alt="hero_banner"
        />
      </div>
    </>
  );
};

export default HeroBanner;
