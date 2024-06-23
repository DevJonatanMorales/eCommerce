import React, { useContext, useEffect, useState } from "react";
import { LayoutShowProducts } from "../../layouts/showProducts/LayoutShowProducts";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { Spinners } from "../../components/";
import { CardProduct } from "../../components/ShowProducts/cardProduct/CardProduct";
import { ModalProducto } from "../../components/ShowProducts/modalProducto/ModalProducto";

export const ShowProducts = () => {
  const { Categoria } = useContext(DataContext);

  const params = useParams();
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    Categoria(params.categoria, setCategoria);
  }, [params]);

  
  return (
    <LayoutShowProducts>
      <div tabIndex={2} className="container text-center p-0 pt-2">
        <div className="row">
          {categoria != null ? (
            categoria.map((producto) => (
              <CardProduct key={producto.id} product={producto}/>
            ))
          ) : (
            <Spinners />
          )}
        </div>
      </div>

      <ModalProducto />
    </LayoutShowProducts>
  );
};
