import React from "react";
import Placeholder from "./placeholder";

const Placeholders = () => {
  return (
    <section className="px-8 md:px-12 xl:px-0 xl:container mx-auto pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-4 gap-6 ">
        <>
          {[...new Array(12)].map((item, index) => (
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
      </div>
    </section>
  );
};

export default Placeholders;
