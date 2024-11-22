import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length > 0) return <div>Loading...</div>;
  return (
    <>
      <div className="mt-[150px] p-4">
        <p className="text-center text-2xl lg:text-4xl">
          Watch{" "}
          <span className="font-medium capitalize text-red-500">{name}</span>{" "}
          exercise videos{" "}
        </p>
        <section className="grid grid-cols-1 grid-rows-1 gap-5 pt-[20px] lg:grid-cols-4 lg:grid-rows-2">
          {exerciseVideos?.slice(0, 8).map((item, index) => (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              key={index}
              target="_blank"
              rel="norefferrer"
            >
              <img
                className="h-[200px] w-[300px]"
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <section className="flex flex-col text-[16px] font-medium lg:text-[20px]">
                <p>{item.video.title}</p>
                <p className="text-[12px]">{item.video.channelName}</p>
              </section>
            </a>
          ))}
        </section>
      </div>
    </>
  );
};

export default ExerciseVideos;
