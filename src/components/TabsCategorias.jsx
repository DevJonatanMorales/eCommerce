import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TabsCategorias = () => {
  const [categorias, setCategorias] = useState(null);
  const params = useParams();

  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div className="container-fluid mb-3 bg-card">
      <ul className="nav nav-pills">
        {categorias != null ? (
            categorias.map((categoria) =>
            categoria.id != 4 ? (
              <li key={categoria.id} className={categoria.nombre == params.nombre ? "nav-link activo link-dark" : "nav-link mx-auto link-dark"} >
                <a
                  className="nav-link text-light link-dark"
                  aria-current="page"
                  href={`/catagoria/${categoria.id}/nombre/${categoria.nombre}`}
                >
                  {categoria.nombre}
                </a>
              </li>
            ) : (
              ""
            )
          )
        ) : (
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-md-4 offset-4">
                <div className="d-grid mx-auto">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};
