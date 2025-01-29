import React from "react";

export const Intro = () => {
  return (
    <section className="text-center">
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <div className="flex flex-col space-y-4 space-y-reverse">
        <h1 className="order-last text-lg text-gray-700">
          Free Open Source Tailwind CSS Components
        </h1>
        <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">FlexUI.</h2>
      </div>
      <div className="mx-auto mt-6 max-w-xl space-y-6">
        <p className="text-base/relaxed text-pretty text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi debitis nemo laboriosam minima omnis! Earum architecto quis quae eveniet adipisci tenetur saepe quo consectetur aspernatur est quos magnam dolorum odit laborum quod, consequatur ea culpa asperiores consequuntur libero aperiam nostrum.
        </p>
        <div>
          <ul className="flex items-center justify-center gap-6">
            <li className="inline-flex items-center gap-1">
              <span role="img" aria-hidden="true">
                ✅
              </span>
              <span className="text-sm font-medium text-gray-900">No install</span>
            </li>
            <li className="inline-flex items-center gap-1">
              <span role="img" aria-hidden="true">
                ✅
              </span>
              <span className="text-sm font-medium text-gray-900">No config</span>
            </li>
            <li className="inline-flex items-center gap-1">
              <span role="img" aria-hidden="true">
                ✅
              </span>
              <span className="text-sm font-medium text-gray-900">No setup</span>
            </li>
          </ul>
          <p className="mt-2 text-base/relaxed text-pretty text-gray-700">
            Copy and paste components to build your next project.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="not-prose mx-auto max-w-lg text-center">
          <div
            data-ea-publisher="hyperuidev"
            data-ea-type="image"
            data-ea-style="stickybox"
            className="bordered horizontal [&amp;_.ea-callout]:mb-0! [&amp;_.ea-content]:mx-0! [&amp;_.ea-content]:mt-0! [&amp;_.ea-stickybox-hide]:hidden"
          ></div>
        </div>
      </div>
    </div></section>
  );
};
