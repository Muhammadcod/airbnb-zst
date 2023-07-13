import { forwardRef } from "react";
import clsx from "clsx";
const Placeholder = forwardRef(
  ({ height, width, style, classNames, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          `animate-pulse bg-slate-500 border border-gray-200`,
          classNames,
        )}
        style={style}
        {...props}
      />
    );
  },
);

Placeholder.displayName = "Placeholder";
export default Placeholder;
