import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Spinners from "./Spinners";
import CardCategoria from "./CardCategoria";

export const ShowCategorias = () => {
  const { allCategorias } = useContext(DataContext);
  const [categorias, setCategorias] = useState(null);
  const params = useParams();

  useEffect(() => {
    allCategorias(setCategorias);
  }, [params]);

  return (
    <div className="container  text-center">
      <h1 className="Categorias mt-3">Nuestras Categorias</h1>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {categorias != null ? (
          categorias.map((categoria) =>
            <CardCategoria categoria={categoria} />
          )
        ) : (
          <Spinners />
        )}
      </div>
    </div>
  );
};
