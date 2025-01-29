"use client"

import { Card, CardBody } from "@heroui/react";

export const UICollectionItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <li>
      <Card radius="sm" className="hover:animate-bounce">
        <CardBody>
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <span
                aria-hidden="true"
                role="img"
                className="text-lg sm:text-xl"
              >
                {icon}
              </span>
            </div>
            <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-700">{subtitle}</p>
          </div>
        </CardBody>
      </Card>
    </li>
  );
};
