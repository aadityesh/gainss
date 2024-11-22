import React from "react";
import bodyPartImgSrc from "/icons/body-part.png";
import targetImgSrc from "/icons/target.png";
import equipmentImgSrc from "/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImgSrc,
      name: bodyPart,
    },
    {
      icon: targetImgSrc,
      name: target,
    },
    {
      icon: equipmentImgSrc,
      name: equipment,
    },
  ];

  return (
    <>
      <div className="mt-[20px] flex flex-col items-center justify-around gap-[40px] lg:flex-row">
        <img src={gifUrl} alt="exercise_gif" className="detail-image" />
        <section className="flex flex-col gap-2 self-center">
          <section className="text-2xl font-medium capitalize lg:text-5xl">
            {name}
          </section>
          <section className="text-[14px] lg:text-[22px]">
            <p>
              Exercises keep you strong. <br />
              {name} is one of the best exercises to target your {target}.{" "}
              <br />
              It will help improve your mobility, flexibility and overall mood.
            </p>
          </section>
          <section className="flex flex-col gap-5 pt-3">
            {extraDetail.map((item) => (
              <section className="flex items-center gap-5">
                <section className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#fff2db] lg:h-[80px] lg:w-[80px]">
                  <img src={item.icon} alt="icon" />
                </section>
                <p className="text-[18px] font-medium capitalize">
                  {item.name}
                </p>
              </section>
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default Detail;
