import React from "react";
import { Header } from "../components/header/Header";
import { CarucelBanner } from "../components/CarucelBanner";
import { ShowCategorias } from "../components/ShowCategorias";

export const Home = () => {
  return (
    <>
      <Header />
      <CarucelBanner />
      <ShowCategorias />
    </>
  );
};
