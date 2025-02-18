"use client";

import { HeroSection } from "./HomePageComponets/HeroSection";
import { MainFeatures } from "./HomePageComponets/MainFeatures";
import PricingSection from "./HomePageComponets/PricingSection";
import SampleUI from "./HomePageComponets/SampleUI";
import SubscribeBox from "./HomePageComponets/SubscribeBox";
import Usages from "./HomePageComponets/Usages";
import WhyChooseUs from "./HomePageComponets/WhyChooseUs";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <div>
        <SampleUI />
      </div>

      <div>
        <MainFeatures />
      </div>
      <div>
        <Usages />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div className="my-20">
        <PricingSection />
      </div>
      <div>
        <SubscribeBox />
      </div>
      {/* <div className="my-12">
        <UICollectionsWrapper
          title="UI Components"
          subtitle="Copy Components as HTML/CSS, Tailwind, TSX, JSX and Vue."
        ><div className="my-12">
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
          {DemoData.map((item, index) => (
            <UICollectionItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </UICollectionsWrapper>
      </div> */}
    </div>
  );
};
