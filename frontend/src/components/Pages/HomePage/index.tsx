"use client"

import { UICollectionItem } from "@/components/UICollections/UICollectionItem";
import { UICollectionsWrapper } from "@/components/UICollections/UICollectionsWrapper";
import { DemoData } from "@/utils/data/DemoData";
import { HeroSection } from "./HomePageComponets/HeroSection";
import { MainFeatures } from "./HomePageComponets/MainFeatures";
import WhyChooseUs from "./HomePageComponets/WhyChooseUs";
import PricingSection from "./HomePageComponets/PricingSection";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <div>
        <MainFeatures />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div className="my-20">
        <PricingSection />
      </div>
      <div className="my-12">
        <UICollectionsWrapper
          title="UI Components"
          subtitle="Copy Components as HTML/CSS, Tailwind, TSX, JSX and Vue."
        >
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
