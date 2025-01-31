import React from "react";

export const SampleBadge = () => {
  return (
    <div className="badge badge-success gap-2 animate-float hover:animate-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      success
    </div>
  );
};
