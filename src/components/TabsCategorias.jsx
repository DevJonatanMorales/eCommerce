import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link, useParams } from "react-router-dom";
import Spinners from "./Spinners";

export const TabsCategorias = () => {
  const { allCategorias } = useContext(DataContext);
  const [categorias, setCategorias] = useState(null);
  const params = useParams();

  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div tabIndex={1} className="container-fluid mb-3 bg-card col-12">
      <ul className="nav nav-pills">
        {categorias != null ? (
          categorias.map((categoria) => (
            <li
              key={categoria.id}
              className={
                categoria.nombre === params.nombre
                  ? "nav-link mx-auto link-dark text-light activo"
                  : "nav-link mx-auto link-dark text-light"
              }
            >
              <Link
                className="nav-link mx-auto text-light link-dark"
                aria-current="page"
                to={`/eCommerce/catagoria/${categoria.id}/nombre/${categoria.nombre}`}
              >
                {categoria.nombre}
              </Link>
            </li>
          ))
        ) : (
          <Spinners />
        )}
      </ul>
    </div>
  );
};
