import React from "react";
import { useScroll } from "../hooks/use-scroll";
import clsx from "clsx";
import Slider from "./slider";
import FilterIcon from "./svgs/filter-icon";

const Filters = () => {
  const { visible } = useScroll();

  return (
    <div
      className={clsx("sticky pt-6 z-10 top-[80px] bg-white drop-shadow-md ", {
        "drop-shadow-md pt-2": !visible,
        "lg:filter-none": visible,
      })}
    >
      <div className="md:mx-10 min-[1440px]:mx-20 flex justify-between items-center h-full">
        <div className="flex w-full h-full items-center">
          <Slider />
          <div className="min-[740px]:w-[6.8rem] min-[740px]:flex-initial hidden min-[740px]:block">
            <div className="ml-auto border w-24 flex justify-center items-center rounded-xl h-12">
              <div className="text-xs font-semibold flex items-center space-x-1">
                <FilterIcon fill="black" width="12" height="12" />
                <span>Filters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
