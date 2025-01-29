import React from "react";
import { Intro } from "./Intro";
import { UICollectionsWrapper } from "@/components/UICollections/UICollectionsWrapper";
import { DemoData } from "@/utils/data/DemoData";
import { UICollectionItem } from "@/components/UICollections/UICollectionItem";

export const HomePage = () => {
  return (
    <div>
      <Intro />
      <div>
        <UICollectionsWrapper title="UI Collections">
          {DemoData.map((item, index) => (
            <UICollectionItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </UICollectionsWrapper>
      </div>
    </div>
  );
};
