import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { BsBoxes } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { HiMiniArrowLongRight } from "react-icons/hi2";

import { IoDiamondOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
const features = [
  {
    icon: IoDiamondOutline,
    img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Optimize Your Workflow with Intelligent Task Solutions",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    items: [
      {
        icon: "icon1",
        text: "Leverage automation to move fast",
      },
      {
        icon: "icon2",
        text: "Always give customers a human to chat to",
      },
      {
        icon: "icon3",
        text: "Automate customer support and close leads faster",
      },
    ],
  },
  {
    icon: BsBoxes,
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gain Insights with Advanced Analytics",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    items: [
      {
        text: "Keep your customers in the loop with live chat",
      },
      {
        text: "Embed help articles right on your website",
      },
      {
        text: "Customers never have to leave the page to find an answer",
      },
    ],
  },
];
export default function Usages() {
  return (
    <div>
      <div>
        <Chip size="lg" color="primary">
          Planing
        </Chip>
      </div>
      <div className="my-8 max-w-2xl">
        <h3 className="text-5xl font-bold">
          A set of beautifully-designed, accessible, and customizable
        </h3>
      </div>
      {features.map((feature, index) => (
        <Usage
          key={index}
          index={index}
          icon={feature.icon}
          img={feature.img}
          title={feature.title}
          description={feature.description}
          items={feature.items}
        />
      ))}
    </div>
  );
}

function Usage({
  index,
  icon: Icon,
  img,
  title,
  description,
  items,
}: {
  index: number;
  icon: IconType;
  img: string;
  title: string;
  description: string;
  items: { text: string }[];
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${index / 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-16 md:gap-8 xl:gap-16 my-14`}
    >
      <div className="relative w-full md:w-[600px] xl:w-full h-full rounded-xl overflow-hidden">
        <Image src={img} alt="img" width={800} height={600} className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 bg-primary w-fit text-white rounded-full">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-4xl font-bold">{title} </h3>
        </div>
        <div>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <ul>
            {items.map((i, j) => (
              <li key={j} className="flex items-center gap-3 my-6">
                <div>
                  <FaCheckCircle className="text-primary" size={24} />
                </div>
                <div>
                  <p>{i.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <Button
              color="primary"
              size="lg"
              endContent={<HiMiniArrowLongRight size={22}/>}
              className="font-bold"
            >
              Learn More.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
