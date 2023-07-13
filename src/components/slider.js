import { useEffect, useRef, useState } from "react";
import useSizeElement from "../hooks/use-size-element";
import FilterItem from "./filter-item";
import clsx from "clsx";
import { FILTERS } from "../constants";

// const list = Array.from({ length: 58 }, (_, i) => i + 1);

const Slider = () => {
  const { width, elementRef } = useSizeElement();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;

    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / width));
  }, [width]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const buttonClass =
    "bg-white border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ";

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < FILTERS.length;

  return (
    <div ref={containerRef} className="flex-1 w-96 h-full relative">
      {hasPrev && (
        <div className=" absolute z-10 top-0 bg-white h-full items-center left-0 hidden min-[744px]:flex ">
          <button
            className={clsx("hover:drop-shadow-lg", buttonClass)}
            onClick={() => handlePrev()}
          >
            &#60;
          </button>
        </div>
      )}
      <div className="flex h-full items-center overflow-x-auto min-[744px]:overflow-x-hidden ">
        {FILTERS.map((item, index) => (
          <FilterItem
            key={index}
            item={item}
            ref={elementRef}
            clicked={clicked}
            setClicked={setClicked}
            style={slideProps.style}
          />
        ))}
      </div>
      {hasNext && (
        <div className=" absolute z-10 right-0 top-0 bg-white h-full items-center hidden min-[744px]:flex ">
          <button
            className={clsx(" hover:drop-shadow-lg", buttonClass)}
            onClick={() => handleNext()}
          >
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
//
//
// <div className="border border-amber-600">
//   {hasPrev && (
//       <div className=" absolute z-10 top-0 bg-white h-12 items-center left-0 hidden lg:flex ">
//         <button
//             className={clsx("hover:drop-shadow-lg", buttonClass)}
//             onClick={() => handlePrev()}
//         >
//           &#60;
//         </button>
//       </div>
//   )}
//   <div className=" flex justify-start space-x-2">
//     {FILTERS.map((item, index) => (
//         <FilterItem key={index} ref={elementRef} style={slideProps.style} />
//     ))}
//   </div>
//   {hasNext && (
//       <div className=" absolute z-10 right-0 bg-white h-full ">
//         <button
//             className={clsx(" hover:drop-shadow-lg", buttonClass)}
//             onClick={() => handleNext()}
//         >
//           &#62;
//         </button>
//       </div>
//   )}
// </div>
