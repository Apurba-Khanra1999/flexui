import { Chip } from "@heroui/react";
import React from "react";

export const UICollectionsWrapper = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="space-y-6">
      <div >
        <Chip size="lg" color="primary" className="my-10">
          {title}
        </Chip>
        {subtitle && <p className="text-5xl max-w-2xl font-bold">{subtitle}</p>}
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </ul>
    </section>
  );
};
