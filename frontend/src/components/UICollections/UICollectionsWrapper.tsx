import React from "react";

export const UICollectionsWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </ul>
    </section>
  );
};
