import React from "react";
import { Banner } from "../../components/";
import { CarouselBanner } from "../../components/";


export const LayoutCategorias = ({ children }) => {
  return (
    <div>
      <Banner />
      <CarouselBanner />
      {children}
    </div>
  );
};
