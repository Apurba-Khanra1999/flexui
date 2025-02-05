import React from "react";

export const SampleSelect = () => {
  return (
    <select className="select select-bordered w-full max-w-xs bg-slate-200 dark:bg-slate-900">
      <option disabled>Who shot first?</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
};
