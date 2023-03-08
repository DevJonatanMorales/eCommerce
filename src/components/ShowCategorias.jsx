import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";

export const ShowCategorias = () => {
  const [categorias, setCategorias] = useState(null);

  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div className="container  text-center">
      <h1 className="Categorias mt-3">Nuestras Categorias</h1>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {categorias != null ? (
          categorias.map((categoria) =>
            categoria.id != 4 ? (
              <div
                key={categoria.id}
                class="bg-card col card my-2 p-3 mx-auto text-center bg-body-secondary"
                style={{ width: "21rem" }}
              >
                <img
                  src={categoria.imagenes.normal}
                  class="rounded card-img-top mx-auto"
                  style={{ width: "18rem" }}
                  alt="Error al cargar"
                />
                <div class="card-body m-0">
                  <a
                    className="btn btn-dark"
                    href={`/catagoria/${categoria.id}/nombre/${categoria.nombre}`}
                  >
                    {" "}
                    {categoria.nombre}{" "}
                  </a>
                </div>
              </div>
            ) : (
              ""
            )
          )
        ) : (
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-md-4 offset-4">
                <div className="d-grid mx-auto">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
