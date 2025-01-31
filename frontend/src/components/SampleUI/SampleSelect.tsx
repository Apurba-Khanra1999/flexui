import React from "react";

export const SampleSelect = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled>Who shot first?</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
};
