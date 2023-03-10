import React from "react";
import { allCategorias } from "../functions";
import { useEffect, useState } from "react";

export const CarucelBanner = () => {
  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    allCategorias(setCategorias);
  }, []);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {categorias != null ? (
          categorias.map((categoria) => (
            <div
              className={
                categoria.id == "1" ? "carousel-item active" : "carousel-item"
              }
              key={categoria.id}
            >
              <img
                src={categoria.imagenes.normal}
                className="rounded d-block w-100 imgmx-1"
                alt="..."
                style={{ height: "60vh" }}
              />

              <div className="carousel-caption d-none d-md-block">
                <h5> {categoria.nombre} </h5>
              </div>
            </div>
          ))
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
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
