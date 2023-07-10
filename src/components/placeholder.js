import { forwardRef } from "react";
import clsx from "clsx";
const Placeholder = forwardRef(
  ({ height, width, style, classNames, ...props }, ref) => {
    const heightVariants = {
      small: "h-3",
      large: "h-[17.938rem]",
      full: "h-full",
    };
    const widthVariants = {
      large: "w-full",
      medium: "min-w-[96px]",
      small: "w-2.5",
    };
    return (
      <div
        ref={ref}
        className={clsx(`border border-gray-200`, classNames)}
        style={style}
        {...props}
      />
    );
  },
);

Placeholder.displayName = "Placeholder";
export default Placeholder;
