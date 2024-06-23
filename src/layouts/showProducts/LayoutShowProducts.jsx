import React from "react";
import { Banner } from "../../components/";
import { CarouselBanner } from "../../components/";
import { TabsCategories } from "../../components/";

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
