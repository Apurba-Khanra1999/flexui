import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
} from "@heroui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuLayers } from "react-icons/lu";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function PricingSection() {
  const PricingData = [
    {
      icon: MdOutlineElectricBolt,
      name: "Basic Plan",
      price: "Free",
      billing: "Billed annually.",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20 GB individual data each user",
        "Basic chat and email support",
      ],
    },
    {
      icon: LuLayers,
      name: "Business Plan",
      price: "Coming Soon.",
      billing: "Billed annually.",
      features: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support",
      ],
    },
    {
      icon: FaWandMagicSparkles,
      name: "Enterprise Plan",
      price: "Coming Soon.",
      billing: "Billed annually.",
      features: [
        "Advanced custom fields",
        "Audit log and data history",
        "Unlimited individual users",
        "Unlimited individual data",
        "Personalized + priority service",
      ],
    },
  ];

  return (
    <div className="text-center">
      <div>
        <Chip size="lg" color="primary">
          Pricing.
        </Chip>
      </div>
      <div className="mx-auto my-8 max-w-2xl">
        <h3 className="text-5xl font-bold">Simple, transparent pricing</h3>
      </div>
      <div className="max-w-4xl text-xl mx-auto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:flex-wrap md:gap-7 xl:grid-cols-3 mt-16 ">
        {PricingData.map((item, index) => (
          <Card fullWidth key={index}>
            <CardBody>
              <div className="flex flex-col items-center gap-4 mt-6">
                <div className="p-4 bg-primary text-white rounded-full">
                  <item.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <h3 className="text-5xl font-bold">{item.price}</h3>
                </div>
                <div>
                  <p>{item.billing}</p>
                </div>
              </div>
              <div>
                <ul>
                  {item.features.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-3 my-6">
                      <div>
                        <FaCheckCircle className="text-primary" size={20} />
                      </div>
                      <div>{listItem}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                fullWidth
                color="primary"
                className="text-lg font-semibold"
              >
                Get Started.
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
