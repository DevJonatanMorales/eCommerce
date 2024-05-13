import React from "react";
import { Banner } from "../../ui/banner/Banner";
import { CarouselBanner } from "../../ui/carouselBanner/CarouselBanner";


export const LayoutCategorias = ({ children }) => {
  return (
    <div>
      <Banner />
      <CarouselBanner />
      {children}
    </div>
  );
};
