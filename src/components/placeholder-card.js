import React from "react";
import Placeholder from "./placeholder";

const PlaceholderCard = ({ dataLimit = 12 }) => {
  return (
    <>
      {[...new Array(dataLimit)].map((item, index) => (
        <div key={index}>
          <Placeholder classNames="flex justify-center items-center h-[17.938rem] mb-1 rounded-xl" />
          <div className="flex justify-between mt-1">
            <Placeholder classNames="w-44 h-4 rounded" />
            <Placeholder classNames="w-14 h-4 rounded" />
          </div>
          <Placeholder classNames="w-40 h-4 mt-1 rounded" />
          <Placeholder classNames="w-36 h-4 mt-1 rounded" />
          <Placeholder classNames="w-32 h-4 mt-1 rounded" />
        </div>
      ))}
    </>
  );
};

export default PlaceholderCard;
