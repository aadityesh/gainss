import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "/icons/right-arrow.png";
import LeftArrowIcon from "/icons/left-arrow.png";

const LeftArrow = () => {
  const visibility = useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);

  return (
    <Typography
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
      className="right-arrow"
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const visibility = useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);

  return (
    <Typography
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
      className="left-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScroll = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    className="react-horizontal-scrolling-menu--wrapper"
  >
    {data.map((item) =>
      bodyParts ? (
        <BodyPart
          itemId={item.id} // NOTE: itemitem.Id is required for track items
          title={item.id}
          key={item.id}
          item={item}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      ) : (
        <ExerciseCard
          itemId={item.id} // NOTE: itemitem.Id is required for track items
          title={item.id}
          key={item.id}
          exercise={item}
        />
      ),
    )}
  </ScrollMenu>
);

export default HorizontalScroll;
