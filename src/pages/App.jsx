import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowCategorias } from "../components/ShowCategorias";
import { ShowProducts } from "../components/ShowProducts";
import { Header } from "../components/header/Header";
import { CarucelBanner } from "../components/CarucelBanner";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <CarucelBanner />
      <Routes>
        <Route
          path="/eCommerce/"
          element={<ShowCategorias></ShowCategorias>}
        ></Route>
        <Route
          path="/eCommerce/catagoria/:categoria/nombre/:nombre"
          element={<ShowProducts></ShowProducts>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

