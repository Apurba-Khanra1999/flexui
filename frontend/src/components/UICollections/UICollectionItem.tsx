"use client";

import { Card, CardBody, CardFooter } from "@heroui/react";

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
      <Card
        isPressable
        fullWidth
        radius="sm"
        className="hover:scale-105 border-md"
      >
        <CardBody className="p-0 overflow-hidden">
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-center">
              <span
                aria-hidden="true"
                role="img"
                className="text-lg sm:text-xl"
              >
                {icon}
              </span>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex-col items-start">
          <h2 className="font-medium text-gray-900 sm:text-lg">{title}</h2>
          <p className="text-sm text-gray-700">{subtitle}</p>
        </CardFooter>
      </Card>
    </li>
  );
};
