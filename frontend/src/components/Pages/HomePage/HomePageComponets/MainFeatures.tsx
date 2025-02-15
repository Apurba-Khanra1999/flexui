"use client";

import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";
import { BsFeather } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";

const DemoFeaturesData = [
  {
    icon: MdOutlineElectricBolt,
    title: "Fast",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: BsFeather,
    title: "Light-Weight",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: FaRegMoon,
    title: "Light & Day Theme",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
  {
    icon: FaWandMagicSparkles,
    title: "Customizable",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur perspiciatis ad possimus ut labore laboriosam minima eligendi ipsum quisquam!",
  },
];
export const MainFeatures = () => {
  return (
    <div>
      <div>
        <Chip color="primary" size="lg">Features</Chip>
        <div className="my-8">
          <h3 className="text-5xl font-bold">Overflowing with useful features</h3>
        </div>
        <div className="max-w-4xl text-xl"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur porro doloribus veritatis. Nesciunt necessitatibus inventore mollitia. Consequuntur, ipsam voluptates?</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
        {DemoFeaturesData.map((item, index) => (
          <Card key={index} className="hover:bg-primary hover:text-white p-4 hover:translate-y-[-10px]">
            <CardBody>
              <div className="rounded-full border p-2 bg-primary-100 text-primary text-lg w-fit mb-4">
                <item.icon size={26} color="primary" />
              </div>
              <div className="my-2">
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <p className="text-sm">{item.subtitle}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
