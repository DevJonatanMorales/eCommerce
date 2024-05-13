import React, { useContext, useEffect, useState } from "react";
import { LayoutCategorias } from "../../layouts/categories/LayoutCategories";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { CardCategory } from "../../ui/cardCategory/CardCategory";
import { Spinners } from "../../ui/spinners/Spinners";

export const Categories = () => {
  const { allCategorias } = useContext(DataContext);
  const [categorias, setCategorias] = useState(null);
  const params = useParams();

  useEffect(() => {
    allCategorias(setCategorias);
  }, [params]);
  return (
    <LayoutCategorias>
      <div className="container p-0" tabIndex={1}>
        <h1 className="Categorias text-center mt-3">Nuestras Categorias</h1>
        <div className="row">
          {categorias != null ? (
            categorias.map((categoria, index) => (
              <CardCategory key={index} categoria={categoria} />
            ))
          ) : (
            <Spinners />
          )}
        </div>
      </div>
    </LayoutCategorias>
  );
};
