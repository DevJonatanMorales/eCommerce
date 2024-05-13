import React from "react";
import { Banner } from "../../ui/banner/Banner";
import { CarouselBanner } from "../../ui/carouselBanner/CarouselBanner";
import { TabsCategories } from "../../ui/tabsCategories/TabsCategories";

export const LayoutShowProducts = ({ children }) => {
  return (
    <div>
      <Banner />
      <CarouselBanner />
      <TabsCategories />
      {children}
    </div>
  );
};
