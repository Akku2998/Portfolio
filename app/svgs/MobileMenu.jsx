import React from "react";

export const MobileMenu = ({
  color = "#ffffff",
  height = "64px",
  width = "64px",
  ...props
}) => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
