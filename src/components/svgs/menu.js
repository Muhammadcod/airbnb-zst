import React from "react";

const Menu = ({
  width = 16,
  height = 16,
  stroke = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      stroke={stroke}
      style={{ display: `block`, overflow: ` visible`, strokeWidth: `3px` }}
      {...props}
    >
      <g fill="none">
        <path d="M2 16h28M2 24h28M2 8h28"></path>
      </g>
    </svg>
  );
};

export default Menu;

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 32 32"
//   style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3px; overflow: visible;"
//   aria-hidden="true"
//   role="presentation"
//   focusable="false"
// >
