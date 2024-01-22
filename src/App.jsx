import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categoria } from "./pages/Categoria";

export const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/eCommerce/"
          element={<Home />}
        ></Route>
        <Route
          path="/eCommerce/catagoria/:categoria/nombre/:nombre"
          element={<Categoria />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

