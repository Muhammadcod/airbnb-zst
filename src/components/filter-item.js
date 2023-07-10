import { forwardRef } from "react";
import clsx from "clsx";
const FilterItem = forwardRef(
  ({ style, item, clicked, setClicked, ...props }, ref) => {
    const isActive = clicked === item?.name;
    console.log(isActive, clicked);
    return (
      <button
        ref={ref}
        className={clsx("px-3 group cursor-pointer py-2.5 box-border")}
        style={style}
        onClick={() => setClicked(item?.name)}
        {...props}
      >
        <div
          className={clsx(
            "text-center  group-hover:text-black text-xs font-semibold",
            {
              "text-black": isActive,
              "text-[#717171]": !isActive,
            },
          )}
        >
          <span className="mb-3 inline-block ">
            <i>{item?.icon}</i>
          </span>
          <p
            className={clsx(
              "after:content-[' '] text-xs after:absolute after:top-6 after:-inset-x-0.5 after:h-0.5  group-hover:after:bg-black group-hover:after:opacity-25 relative",
              {
                "after:bg-black": isActive,
              },
            )}
          >
            {item?.name}
          </p>
        </div>
      </button>
    );
  },
);

FilterItem.displayName = "FilterItem";
export default FilterItem;
