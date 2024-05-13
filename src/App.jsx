import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowProducts } from "./pages/showProducts/ShowProducts";
import { Categories } from "./pages/categories/Categories";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eCommerce/" element={<Categories />}></Route>
        <Route
          path="/eCommerce/catagoria/:categoria/nombre/:nombre"
          element={<ShowProducts />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
