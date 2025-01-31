"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { BsFeather } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";

const DemoFeaturesData = [
  {
    icon: <MdOutlineElectricBolt />,
    title: "Fast",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: <BsFeather />,
    title: "Light-Weight",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: <FaRegMoon />,
    title: "Light & Day Theme",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: <FaWandMagicSparkles />,
    title: "Customizable",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
];
export const MainFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      {DemoFeaturesData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="gap-4">
            <div className="rounded-full border p-2 bg-primary-100 text-primary text-lg">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-base">{item.title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-sm">{item.subtitle}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
